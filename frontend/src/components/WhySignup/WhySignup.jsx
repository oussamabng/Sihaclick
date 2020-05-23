import React from "react";
import { Label } from "semantic-ui-react";

//? import css
import "./WhySignup.css";

export default function WhySignup() {
  return (
    <div className="why_signup">
      <div className="steps">
        <Label circular>1</Label>
        <Label circular>2</Label>
        <Label circular>3</Label>
      </div>
      <div className="contents">
        <div className="hav_text">
          <div className="text">
            <h1>Pour-quoi SIHACLIK</h1>
            <p>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and
            </p>
          </div>
        </div>
        <div className="hav_text inverted">
          <div className="text">
            <h1>Pour-quoi SIHACLIK</h1>
            <p>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and
            </p>
          </div>
        </div>
        <div className="hav_text">
          <div className="text">
            <h1>Pour-quoi SIHACLIK</h1>
            <p>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
