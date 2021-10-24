import { useState } from "react";
import Heads from "./Head";
import Image from "next/image";
import { useRouter } from "next/router";
import Business from "/public/json/Templates/Business";
import Portfolio from "/public/json/Templates/Portfolio";
import Blogs from "/public/json/Templates/Blogs";
import Landing from "/public/json/Templates/Landing";
import { SiUpwork, SiFreelancer, SiFiverr } from "react-icons/si";

const myLoader = ({ src }) => {
  return `${src}`;
};

const Contact = () => {
  const router = useRouter();
  const { ids, packageId, type } = router.query;

  const tempCart = [Business[ids], Blogs[ids], Landing[ids], Portfolio[ids]];

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [message, setMessage] = useState("");
  const [select, setSelected] = useState(false);

  const [alert, setAlert] = useState("");
  const [bg, setBg] = useState({});
  const [selectedVal, setSelectedVal] = useState();
  const [selectedKey, setSelectedKey] = useState();

  const selectValue = ["Query", "Hire", "Feedback"];
  const messageText = ["Ask Me", "Hire Me", "Feedback"];

  const handleVal = (e) => {
    const selVal = e.target.value;
    const index = e.target.selectedIndex;
    const el = e.target.childNodes[index];
    const keySel = el.getAttribute("id");
    setSelectedVal(selVal);
    setSelectedKey(keySel);
    setSelected(selVal);
  };

  const backgroundColors = (msg, bgcolor) => {
    setAlert(msg);
    setBg({
      backgroundColor: bgcolor,
    });
  };

  const submitForm = async (e) => {
    e.preventDefault();
    if (
      name === "" ||
      email === "" ||
      phone === "" ||
      message === "" ||
      select === false
    ) {
      backgroundColors("Please fill the form", "yellow");
      setTimeout(backgroundColors, 2000);
    } else {
      if (ids || packageId) {
        var title = tempCart[type].title;
        var price = tempCart[type].price[packageId];
      } else {
        var title = false;
        var price = false;
      }

      backgroundColors("Please Wait! Sending...", "red");

      const formData = {
        name,
        email,
        phone,
        message,
        select,
        title,
        price,
      };
      setName("");
      setEmail("");
      setPhone("");
      setMessage("");
      setSelected("");

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
    }
  };
  return (
    <>
      <Heads title={alert ? alert : "Suryansh Pandey - HireSupa: Contact"} />
      <div className="suryansh_portfolio" id="body">
        <div id="contact">
          <h2 className="card-container-heading">Contact Us</h2>
          {alert ? (
            <div className="successBox">
              <div className="blockerContact"></div>
              <div className="success" style={bg}>
                {alert}
              </div>
            </div>
          ) : (
            ""
          )}
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
              <select
                className="select"
                onChange={(e) => handleVal(e)}
                val={selectedVal}
                required
              >
                <option value="false" selected disabled>
                  Select
                </option>
                {!ids & !packageId ? (
                  selectValue.map((val, key) => {
                    return (
                      <option key={key} value={val} id={key}>
                        {val}
                      </option>
                    );
                  })
                ) : (
                  <>
                    <option value="false" selected disabled>
                      Select
                    </option>
                    <option value="buy">Buy a template</option>
                  </>
                )}
              </select>

              <label forHtml="message">
                {!ids & !packageId
                  ? messageText[selectedKey]
                    ? messageText[selectedKey]
                    : "Ask Me"
                  : ""}
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
                {!ids & !packageId
                  ? messageText[selectedKey]
                    ? messageText[selectedKey]
                    : "Ask Me"
                  : "Hire Me"}
              </button>
            </form>
          </div>
        </div>

        {ids || packageId ? (
          <div className="templateCart">
            <div className="cartWidth">
              <div className="templateCartDetails">
                <div className="imageCart">
                  <Image
                    loader={myLoader}
                    width={130}
                    height={130}
                    src={tempCart[type].image[0]}
                    alt={type}
                    objectFit="contain"
                    placeholder="Loading image..."
                  />
                </div>

                <div className="cartDetails">
                  <div className="titleCart">{tempCart[type].title}</div>
                  <div className="priceCart">
                    {tempCart[type].price[packageId]}
                  </div>
                </div>
              </div>

              <div className="optionCart">
                <div className="deleteBtn">
                  <button
                    className="delete"
                    onClick={() => router.replace("/Contact")}
                  >
                    Delete
                  </button>
                </div>
              </div>
            </div>
          </div>
        ) : (
          ""
        )}
        <hr />
        <div className="hireLinks">
          <h3>Hire me on</h3>
          <ul>
            <li>
              <a
                href="https://www.upwork.com/freelancers/~018c7cd1a1aee5936b/"
                target="blank"
              >
                <SiUpwork className="hireLinksIcon" />
              </a>
            </li>
            <li>
              <a
                href="https://www.freelancer.in/u/pandeysuryansh"
                target="blank"
              >
                <SiFreelancer className="hireLinksIcon" />
              </a>
            </li>
            <li>
              <a href="https://www.fiverr.com/palsuryom" target="blank">
                <SiFiverr className="hireLinksIcon" />
              </a>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default Contact;
