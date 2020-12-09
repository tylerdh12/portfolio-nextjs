import React from "react";

interface ContactProps {}

const Contact: React.FC<ContactProps> = ({}) => {
  return (
    <div id="contact" className="full-view">
      <div className="section-label">Contact Me</div>

      <div className="max-container">
        <div className="form-container">
          <form
            name="contact"
            action="/success"
            method="POST"
            data-netlify="true"
          >
            <input type="hidden" name="form-name" value="contact" />
            <p>
              <label htmlFor="yourname">Your Name: </label>
              <br />
              <input type="text" name="name" id="yourname" />
            </p>
            <p>
              <label htmlFor="youremail">Your Email:</label>
              <br />
              <input type="email" name="email" id="youremail" />
            </p>
            <p>
              <label htmlFor="yourmessage">Message:</label>
              <textarea name="message" id="yourmessage"></textarea>
            </p>
            <p>
              <button type="submit">Send</button>
            </p>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
