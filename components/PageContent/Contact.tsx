import React from "react";

interface ContactProps {}

const Contact: React.FC<ContactProps> = ({}) => {
  return (
    <div id="contact" className="full-view">
      <div className="section-label">Contact Me</div>

      <div className="max-container">
        <div className="form-container">
          <form name="contact" method="POST" data-netlify="true">
            <p>
              <label>
                Your Name: <input type="text" name="name" />
              </label>
            </p>
            <p>
              <label>
                Your Email: <input type="email" name="email" />
              </label>
            </p>
            <p>
              <label>
                Message: <textarea name="message"></textarea>
              </label>
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
