import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { formStage, thirdPage } from "../../store/rootSlice";
// import "./styles.scss";
import "./FormUserSignup.css";

function ThirdPage({ pageTitle, submitButtonText, previousButton }) {
  // redux
  const dispatch = useDispatch();

  // get Redux store values for formUserSignup
  const currentStage = useSelector((state) => state.FormStage);
  const formstageRole = useSelector((state) => state.ThirdPage.role);
  const formstageQualification = useSelector(
    (state) => state.ThirdPage.qualification
  );
  const formstageSkill = useSelector((state) => state.ThirdPage.skill);

  const [formData, setFormData] = useState({
    qualification: formstageQualification || "",
    skill: formstageSkill || "",
    role: formstageRole || "",
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
    if (!formData.qualification) {
      formErrors.qualification = "Qualification required";
    }

    return formErrors;

    if (!formData.skill) {
      formErrors.skill = "Enter Skill required";
    }

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
        formStage(4) // update formStage
      );
      dispatch(
        thirdPage({
          // update formSignup
          qualification: formData.qualification,
          skill: formData.skill,
          role: formData.role,
        })
      );
    }
  }, [formData, isSubmitted, dispatch, errors]);
  // console.log(errors, formData)

  return (
    <div className="container">
      <h2 className="signup_heading">{pageTitle || "Education"}</h2>
      <hr />

      <form
        name="form-signup"
        id="form-signup"
        onSubmit={(e) => handleSubmit(e)}
      >
        <p>
          <label className="text_signup" htmlFor="highest_education">
            Highest Degree<span className="required-asterix">*</span>
          </label>
          <input
            className="input name_signup_input"
            type="text"
            id="highest_education"
            name="qualification"
            autoComplete="highest_education"
            aria-label="Highest education"
            aria-required="true"
            placeholder="Highest Education"
            value={formData.highest_eduction}
            onChange={handleChange}
          />
        </p>
        {errors.qualification && (
          <span className="error-message">{errors.qualification}</span>
        )}
        <p>
          <label className="text_signup" htmlFor="role">
            Role
          </label>
          <input
            className="input"
            type="text"
            id="role"
            name="role"
            autoComplete="role"
            aria-label="role"
            aria-required="false"
            placeholder="eg. software developer"
            value={formData.role}
            onChange={handleChange}
          />
        </p>

        <p>
          <label className="text_signup" htmlFor="role">
            Skill
          </label>
          <input
            className="input"
            type="text"
            id="skill"
            name="skill"
            autoComplete="skill"
            aria-label="Skill"
            aria-required="true"
            placeholder="Skill"
            value={formData.skill}
            onChange={handleChange}
          />
        </p>

        {errors.skill && <span className="error-skill">{errors.skill}</span>}

        <p className="disclaimer-text">
          <span className="required-asterix">*</span> required fields
        </p>

        <div className="btn">
          {previousButton && (
            <p>
              <input
                type="submit"
                value={`Back`}
                onClick={() => dispatch(formStage(currentStage - 1))}
                className="btn-array"
              />
            </p>
          )}
          <div className="button">
            <button className="btn-array">
              {submitButtonText || "Submit"}{" "}
            </button>
          </div>
        </div>
      </form>
    </div>
  );
}

export default ThirdPage;
