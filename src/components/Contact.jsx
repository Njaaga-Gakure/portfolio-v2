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
                id=""
                className="form__input"
                required
              />
              <label className="form__label" htmlFor="">
                first name
              </label>
              <div className="form__underline"></div>
            </div>
            <div className="form__row">
              <input
                type="text"
                name=""
                id=""
                className="form__input"
                required
              />
              <label className="form__label" htmlFor="">
                last name
              </label>
              <div className="form__underline"></div>
            </div>
            <div className="form__row">
              <input
                type="text"
                name=""
                id=""
                className="form__input"
                required
              />
              <label className="form__label" htmlFor="">
                email
              </label>
              <div className="form__underline"></div>
            </div>
            <div className="form__row">
              <input
                type="text"
                name=""
                id=""
                className="form__input"
                required
              />
              <label className="form__label" htmlFor="">
                company
              </label>
              <div className="form__underline"></div>
            </div>
            <div className="form__row form__textarea">
              <textarea className="textarea" required />
              <label className="form__label" htmlFor="">
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
