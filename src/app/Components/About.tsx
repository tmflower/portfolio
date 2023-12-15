import { FunctionComponent } from "react";

import Button from "./Button";

const About: FunctionComponent<{ goHome: () => void }> = ({ goHome }) => {
  return (
    <div>
      ABOUT
      <Button onClick={goHome} className="">
        ← Back
      </Button>
    </div>
  );
};

export default About;
