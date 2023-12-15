import { FunctionComponent } from "react";

import Button from "./Button";

const Contact: FunctionComponent<{ goHome: () => void }> = ({ goHome }) => {
  return (
    <div>
      CONTACT
      <Button onClick={goHome} className="">
        ← Back
      </Button>
    </div>
  );
};

export default Contact;
