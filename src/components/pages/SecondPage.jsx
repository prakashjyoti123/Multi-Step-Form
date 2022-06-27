import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { formStage, secondPage } from "../../store/rootSlice";
// import "./styles.scss";
import "./FormUserSignup.css";

function SecondPage({ pageTitle, submitButtonText, previousButton }) {
  // redux
  const dispatch = useDispatch();

  const currentStage = useSelector((state) => state.FormStage);
  const formstagePhone = useSelector((state) => state.SecondPage.phone);
  const formstageCity = useSelector((state) => state.SecondPage.city);
  const formstageMarital = useSelector(
    (state) => state.SecondPage.maritalstatus
  );

  const [formData, setFormData] = useState({
    phone: formstagePhone || "",
    city: formstageCity || "",
    maritalstatus: formstageMarital || "",
  });

  // form values onchange
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  // form validation checks
  const [errors, setErrors] = useState({});
  const validate = (formData) => {
    let formErrors = {}; // set form errors to none at start

    // name
    if (!formData.phone) {
      formErrors.phone = "Mobile Number required";
    }

    // email

    if (!formData.maritalstatus) {
      formErrors.maritalstatus = "Marital Status is required";
    }

    // password
    const passwordRegex = new RegExp(
      "(?=.*[a-z])+(?=.*[A-Z])+(?=.*[0-9])+(?=.{10,})"
    );

    return formErrors;
  };

  const [isSubmitted, setIsSubmitted] = useState(false); // state for sent status
  // onsubmit
  const handleSubmit = (e) => {
    e.preventDefault(); // stop form submission
    setErrors(validate(formData)); // check errors
    setIsSubmitted(true); // update submit status
  };

  useEffect(() => {
    if (Object.keys(errors).length === 0 && isSubmitted) {
      // check if any form errors

      // update Redux Slice
      dispatch(
        formStage(3) // update formStage
      );
      dispatch(
        secondPage({
          // update formSignup
          phone: formData.phone,
          city: formData.city,
          maritalstatus: formData.maritalstatus,
        })
      );
    }
  }, [formData, isSubmitted, dispatch, errors]);
  // console.log(errors, formData)

  return (
    <div className="container">
      <h2 className="signup_heading">{pageTitle || "Some more information"}</h2>
      <hr />

      <form
        name="form-signup"
        id="form-signup"
        onSubmit={(e) => handleSubmit(e)}
      >
        <p>
          <label className="text_signup" htmlFor="name">
            Mobile Number<span className="required-asterix">*</span>
          </label>
          <input
            className="input name_signup_input"
            type="number"
            id="name"
            name="phone"
            autoComplete="phone"
            aria-label="phone"
            aria-required="true"
            placeholder="Mobile Number"
            value={formData.phone}
            onChange={handleChange}
          />
        </p>
        {errors.phone && <span className="error-message">{errors.phone}</span>}

        <p>
          <label className="text_signup " htmlFor="role">
            City
          </label>
          <input
            className="input"
            type="text"
            id="city"
            name="city"
            autoComplete="city"
            aria-label="city"
            aria-required="false"
            placeholder="Enter your city"
            value={formData.city}
            onChange={handleChange}
          />
        </p>

        <p>
          <label className="text_signup " htmlFor="email">
            Marital Status<span className="required-asterix">*</span>
          </label>
          <input
            className="input"
            type="text"
            id="maritalstatus"
            name="maritalstatus"
            autoComplete="maritalstatus"
            aria-label="maritalstatus"
            aria-required="true"
            placeholder="Married or Single"
            value={formData.maritalstatus}
            onChange={handleChange}
          />
        </p>
        {errors.maritalstatus && (
          <span className="error-message">{errors.maritalstatus}</span>
        )}

        <p className="disclaimer-text">
          <span className="required-asterix">*</span> required fields
        </p>

        <div className="btn">
          {previousButton && (
            <p>
              <input
                className="btn-array"
                type="submit"
                value={`Back`}
                onClick={() => dispatch(formStage(currentStage - 1))}
              />
            </p>
          )}
          <p>
            <input
              type="submit"
              className="btn-array"
              value={submitButtonText || "Submit"}
            />
          </p>
        </div>
      </form>
    </div>
  );
}

export default SecondPage;
