import Links from "./Links";
import { useRef } from "react";

const Contact = () => {
  const nameRef = useRef();
  const emailRef = useRef();
  const phoneRef = useRef();
  const messageRef = useRef();

  const submitForm = async (e) => {
    e.preventDefault();

    const enteredName = nameRef.current.value;
    const enteredEmail = emailRef.current.value;
    const enteredPhone = phoneRef.current.value;
    const enteredMessage = messageRef.current.value;

    const formData = {
      name: enteredName,
      email: enteredEmail,
      phone: enteredPhone,
      message: enteredMessage,
    };

    await fetch("/pages/api/users", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(formData),
    })
      .then((response) => response.json())
      .then((data) => console.log(data))
      .catch((error) => {
        console.error(error);
      });
  };
  return (
    <>
      <div className="suryansh_portfolio" id="body">
        <div id="contact">
          <div className="inside circles">
            <Links />
          </div>
          <h2 className="card-container-heading">Contact Us</h2>
          <p id="success"></p>
          <div className="form">
            <form id="data" onSubmit={submitForm}>
              <label forHtml="name">Name: </label>
              <input
                type="text"
                name="name"
                id="name"
                className="form-control"
                placeholder="Your full Name"
                ref={nameRef}
              />

              <label Html="email">Email: </label>
              <input
                type="text"
                name="email"
                id="email"
                className="form-control"
                placeholder="Your Email"
                ref={emailRef}
              />

              <label forHtml="phone">Phone: </label>
              <input
                type="text"
                name="phone"
                id="phone"
                className="form-control"
                placeholder="Phone No."
                ref={phoneRef}
              />

              <label forHtml="message">Message: </label>
              <textarea
                rows="4"
                name="message"
                id="message"
                type="text"
                spellCheck="true"
                className="form-control"
                placeholder="Write Something..."
                ref={messageRef}
              ></textarea>

              <button
                type="submit"
                id="form_submit"
                name="submit"
                className="form-control"
                value="Submit"
              >
                Submit
              </button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default Contact;
