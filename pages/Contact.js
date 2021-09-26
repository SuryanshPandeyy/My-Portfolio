import Links from "./Links";
import { useState, useRef } from "react";
import Heads from "./Head";
import { useRouter } from "next/router";
import { RouterTwoTone } from "@material-ui/icons";

const Contact = () => {
  const router = useRouter();
  const { id, packageId, set } = router;

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [message, setMessage] = useState("");
  const [alert, setAlert] = useState("");
  const [bg, setBg] = useState({});
  const [selectedVal, setSelectedVal] = useState();
  const [selectedKey, setSelectedKey] = useState();

  const selectValue = ["Query", "Hire", "Feedback"];
  const messageText = ["Ask Me","Hire Me", "Feedback"];

  const handleVal = (e) => {
    const selVal = e.target.value;
    const index = e.target.selectedIndex;
    const el = e.target.childNodes[index];
    const keySel = el.getAttribute("id");
    setSelectedVal(selVal);
    setSelectedKey(keySel);
  };

  const backgroundColors = (msg, bgcolor) => {
    setAlert(msg);
    setBg({
      backgroundColor: bgcolor,
    });
  };

  const submitForm = async (e) => {
    e.preventDefault();
    backgroundColors("Sending", "red");

    const formData = {
      name,
      email,
      phone,
      message,
    };
    setName("");
    setEmail("");
    setPhone("");
    setMessage("");

    await fetch("/api/users", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(formData),
    }).then((res) => {
      backgroundColors("Received", "blue");
      if (res.status === 200) {
        backgroundColors("Success", "green");
        setTimeout(backgroundColors, 2000);
      }
    });
  };
  return (
    <>
      <Heads title="Suryansh Pandey - HireSupa: Contact" />
      <div className="suryansh_portfolio" id="body">
        <div id="contact">
          <h2 className="card-container-heading">Contact Us</h2>
          <p className="success" style={bg}>
            {alert}
          </p>
          <div className="form">
            <form id="data" onSubmit={submitForm}>
              <label forHtml="name">Name: </label>
              <input
                type="text"
                name="name"
                id="name"
                className="form-control"
                placeholder="Your full Name"
                onChange={(e) => setName(e.target.value)}
                value={name}
                required
              />

              <label Html="email">Email: </label>
              <input
                type="text"
                name="email"
                id="email"
                className="form-control"
                placeholder="Your Email"
                onChange={(e) => setEmail(e.target.value)}
                value={email}
                required
              />

              <label forHtml="phone">Phone: </label>
              <input
                type="text"
                name="phone"
                id="phone"
                className="form-control"
                placeholder="Phone No."
                onChange={(e) => setPhone(e.target.value)}
                value={phone}
                required
              />

              <label forHtml="select">Select:</label>
              <select onChange={(e) => handleVal(e)} val={selectedVal}>
                {!router.query.id & !router.query.packageId?(
                  selectValue.map((val, key) => {
                    return (
                      <option
                        key={key}
                        value={val}
                        id={key}
                      >
                        {val}
                      </option>
                    );
                  })
                ) : (
                  <option value="buy">Buy a template</option>
                )}
              </select>

              <label forHtml="message">
                {messageText[selectedKey] ? messageText[selectedKey] : "Ask Me"}
              </label>
              <textarea
                rows="4"
                name="message"
                id="message"
                type="text"
                spellCheck="true"
                className="form-control"
                placeholder="Write Something..."
                onChange={(e) => setMessage(e.target.value)}
                value={message}
                required
              ></textarea>

              <button
                type="submit"
                id="form_submit"
                name="submit"
                className="form-control"
                value="Submit"
              >
                {messageText[selectedKey] ? messageText[selectedKey] : "Ask Me"}
              </button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default Contact;
