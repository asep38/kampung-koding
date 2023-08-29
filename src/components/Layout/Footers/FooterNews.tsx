import React from "react";
import { InputGroup, Form, Button } from "react-bootstrap";

const FooterNews = () => {
  return (
    <div className="footer_top row my-4">
      <div className="col-md-6">
        <h1>Subscribe To Newsletter</h1>
      </div>
      <div className="col-md-6">
        <InputGroup className="mb-3">
          <Form.Control
            placeholder="Your Email"
            aria-label="Your Email"
            aria-describedby="basic-addon2"
          />
          <Button variant="outline-secondary" id="button-addon2">
            Subscribe
          </Button>
        </InputGroup>
      </div>
    </div>
  );
};

export default FooterNews;
