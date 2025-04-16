import React from "react";
import "./Contact.css";
import { Button } from "@material-ui/core";

const Contact = () => {
  return (
    <div className="contactContainer">
      <a className="mailBtn" href="mailto:shani2100Chauhan@gmail.com">
        <Button>Contact: Shivam29122003@gmail.com</Button>
      </a>
    </div>
  );
};

export default Contact;
