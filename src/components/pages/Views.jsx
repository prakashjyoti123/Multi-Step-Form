import React from "react";
import { useSelector } from "react-redux";
import LazyLoad from "react-lazyload"; // use lazyload for components and image
import FormUserSignup from "./FormUserSignup";
// load component
import SecondPage from "./SecondPage";
import ThirdPage from "./ThirdPage";
import "./Views.css";

import FormUserCompleted from "./FormComplite";
// load component

const Signup = () => {
  const pageStage = useSelector((state) => state.FormStage);

  return (
    <main>
      <div className="form-wrapper">
        <section>
          <div className="page-wrapper">
            <div className="progressbar">
              <div
                style={{
                  width:
                    pageStage === 1
                      ? "25%"
                      : pageStage == 2
                      ? "50%"
                      : pageStage == 3
                      ? "75%"
                      : "100%",
                }}
              ></div>
            </div>
            {pageStage === 1 && (
              // Signup Page
              <LazyLoad once>
                <div>
                  <FormUserSignup
                    pageTitle={"User Form"} // form page stage title
                    submitButtonText={"Next"} // submit next button display text
                    previousButton={false} // show/hide previous button
                  />
                </div>
              </LazyLoad>
            )}
            {pageStage === 2 && (
              // Privacy Page
              <LazyLoad once>
                <div className="wrap">
                  <SecondPage
                    pageTitle={"Some more information"} // form page stage title
                    submitButtonText={"Next"} // submit next button display text
                    previousButton={true} // show/hide previous button
                  />
                </div>
              </LazyLoad>
            )}
            {pageStage === 3 && (
              // Signup Page
              <LazyLoad once>
                <div className="wrap">
                  <ThirdPage
                    pageTitle={"Education details"} // form page stage title
                    submitButtonText={"Submit"} // submit next button display text
                    previousButton={true} // show/hide previous button
                  />
                </div>
              </LazyLoad>
            )}
            {pageStage === 4 && (
              // Completion Page
              <LazyLoad once>
                <div className="wrap">
                  <FormUserCompleted
                    pageTitle={"Success!"} // form page stage title
                    successMessage={
                      "You have successfully entered all required field, Thanks !"
                    } // page success message
                  />
                </div>
              </LazyLoad>
            )}
          </div>
        </section>
      </div>
    </main>
  );
};

export default Signup;
