// import React from "react";
import { GoBell, GoAlert, GoDownload, GoDatabase } from "react-icons/go";
import Button from "../components/Button";
const ButtonPage = () => {
  return (
    <div className="buttons flex flex-wrap justify-around">
      <div>
        <Button primary>
          {" "}
          <GoBell />
          Button
        </Button>
      </div>
      <div>
        <Button rounded> Button </Button>
      </div>
      <div>
        <Button secondary>Button </Button>
      </div>
      <div>
        <Button secondary rounded>
          Button{" "}
        </Button>
      </div>
      <div>
        <Button outline>
          <GoDatabase />
          Button
        </Button>
      </div>
      <div>
        <Button warning>Button </Button>
      </div>
      <div>
        <Button warning outline rounded style={{ color: "#fff" }}>
          Button{" "}
        </Button>
      </div>
      <div>
        <Button danger>
          <GoAlert />
          Button
        </Button>
      </div>

      <div>
        <Button>
          <GoDownload />
          Button
        </Button>
      </div>
    </div>
  );
};

export default ButtonPage;
