import Title from "./Title";
import { useAppContext } from "../context/AppProvider";

const Contact = () => {
  const { isDarkMode } = useAppContext();
  return (
    <section
      className={isDarkMode ? "contact bg--dark" : "contact"}
      id="contact"
    >
      <Title name="connect" />
      <section className="form-container">
        <form className="form" action="#">
          <div className="center-container form__center">
            <div className="form__row">
              <input
                type="text"
                name=""
                id="first-name"
                className={
                  isDarkMode ? "form__input form__input--dark" : "form__input"
                }
                required
              />
              <label
                className={
                  isDarkMode ? "form__label form__label--dark" : "form__label"
                }
                htmlFor="first-name"
              >
                first name
              </label>
              <div
                className={
                  isDarkMode
                    ? "form__underline form__underline--dark"
                    : "form__underline"
                }
              ></div>
            </div>
            <div className="form__row">
              <input
                type="text"
                name=""
                id="last-name"
                className={
                  isDarkMode ? "form__input form__input--dark" : "form__input"
                }
                required
              />
              <label
                className={
                  isDarkMode ? "form__label form__label--dark" : "form__label"
                }
                htmlFor="last-name"
              >
                last name
              </label>
              <div
                className={
                  isDarkMode
                    ? "form__underline form__underline--dark"
                    : "form__underline"
                }
              ></div>
            </div>
            <div className="form__row">
              <input
                type="text"
                name=""
                id="email"
                className={
                  isDarkMode ? "form__input form__input--dark" : "form__input"
                }
                required
              />
              <label
                className={
                  isDarkMode ? "form__label form__label--dark" : "form__label"
                }
                htmlFor="email"
              >
                email
              </label>
              <div
                className={
                  isDarkMode
                    ? "form__underline form__underline--dark"
                    : "form__underline"
                }
              ></div>
            </div>
            <div className="form__row">
              <input
                type="text"
                name=""
                id="company"
                className={
                  isDarkMode ? "form__input form__input--dark" : "form__input"
                }
                required
              />
              <label
                className={
                  isDarkMode ? "form__label form__label--dark" : "form__label"
                }
                htmlFor="company"
              >
                company
              </label>
              <div
                className={
                  isDarkMode
                    ? "form__underline form__underline--dark"
                    : "form__underline"
                }
              ></div>
            </div>
            <div className="form__row form__textarea">
              <textarea
                className={isDarkMode ? "textarea textarea--dark" : "textarea"}
                required
                id="message"
              />
              <label
                className={
                  isDarkMode ? "form__label form__label--dark" : "form__label"
                }
                htmlFor="message"
              >
                write your message
              </label>
              <div
                className={
                  isDarkMode
                    ? "form__underline form__underline--dark"
                    : "form__underline"
                }
              ></div>
            </div>
            <div className="btn-container">
              <button
                className={
                  isDarkMode
                    ? "btn btn--secondary btn--dark"
                    : "btn btn--secondary"
                }
              >
                submit
              </button>
            </div>
          </div>
        </form>
      </section>
    </section>
  );
};

export default Contact;
