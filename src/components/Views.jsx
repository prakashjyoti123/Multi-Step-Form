import React from "react";
import { useSelector } from "react-redux";
import LazyLoad from "react-lazyload"; // use lazyload for components and image
import FormUserSignup from "./FormUserSignup";
// load component
import SecondPage from "./SecondPage";
import ThirdPage from "./ThirdPage";

import FormUserCompleted from "./FormComplite";
// load component
// import FormUserCompleted from "../../components/form-completed";
// load component

const Signup = () => {
  const pageStage = useSelector((state) => state.FormStage);
  //const stateAll = useSelector(state => state)
  //console.log(`output: ${JSON.stringify(stateAll, null, 2)}`) // output results to console.log

  return (
    <main>
      <div className="form-wrapper">
        {/* <h1 data-testid="Signup-Title" className="text-center">
          Signup Form
        </h1> */}

        <section>
          {/* When adding/removing components, update the progress bar below */}
          <LazyLoad once>
            <div className="progressbar">
              <div
                className={
                  pageStage === 1
                    ? "progress-step progress-step-active"
                    : "progress-step"
                }
                data-title="User"
              ></div>
              <div
                className={
                  pageStage === 2
                    ? "progress-step progress-step-active"
                    : "progress-step"
                }
                data-title="Privacy"
              ></div>
              <div
                className={
                  pageStage === 3
                    ? "progress-step progress-step-active"
                    : "progress-step"
                }
                data-title="Done"
              ></div>
            </div>
          </LazyLoad>

          <div className="page-wrapper">
            {pageStage === 1 && (
              // Signup Page
              <LazyLoad once>
                <div className="wrap">
                  <FormUserSignup
                    pageTitle={"User Form:"} // form page stage title
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
