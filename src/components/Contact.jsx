import Title from "./Title";

const Contact = () => {
  return (
    <section className="contact" id="contact">
      <Title name="connect" />
      <section className="form-container">
        <form className="form" action="#">
          <div className="center-container form__center">
            <div className="form__row">
              <input
                type="text"
                name=""
                id="first-name"
                className="form__input"
                required
              />
              <label className="form__label" htmlFor="first-name">
                first name
              </label>
              <div className="form__underline"></div>
            </div>
            <div className="form__row">
              <input
                type="text"
                name=""
                id="last-name"
                className="form__input"
                required
              />
              <label className="form__label" htmlFor="last-name">
                last name
              </label>
              <div className="form__underline"></div>
            </div>
            <div className="form__row">
              <input
                type="text"
                name=""
                id="email"
                className="form__input"
                required
              />
              <label className="form__label" htmlFor="email">
                email
              </label>
              <div className="form__underline"></div>
            </div>
            <div className="form__row">
              <input
                type="text"
                name=""
                id="company"
                className="form__input"
                required
              />
              <label className="form__label" htmlFor="company">
                company
              </label>
              <div className="form__underline"></div>
            </div>
            <div className="form__row form__textarea">
              <textarea className="textarea" required id="message" />
              <label className="form__label" htmlFor="message">
                write your message
              </label>
              <div className="form__underline"></div>
            </div>
            <div className="btn-container">
              <button className="btn btn--secondary">submit</button>
            </div>
          </div>
        </form>
      </section>
    </section>
  );
};

export default Contact;
