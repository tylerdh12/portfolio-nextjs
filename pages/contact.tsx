import React from "react";
import Layout from "../components/Layout";

interface ContactProps {}

const Contact: React.FC<ContactProps> = ({}) => {
  return (
    <Layout title="Contact">
      <div id="contact" className="full-view">
        <div className="max-container">
          <div className="form-container">
          <h2>Contact</h2>
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
    </Layout>
  );
};

export default Contact;
