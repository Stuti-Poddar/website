import React, { useEffect, useState } from "react";
import WarningIcon from "@mui/icons-material/Warning";
import "./alert1.css";

function Alert1() {
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const interval = setInterval(() => {
      setVisible((prev) => !prev);
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className={`alert1 ${visible ? "visible" : "hidden"}`}>
      <div className="alert1-icon-div">
        <WarningIcon className="alert1-icon" fontSize="large" />{" "}
      </div>
      <div className="alert1-text">Red Alert!</div>
    </div>
  );
}

export default Alert1;
