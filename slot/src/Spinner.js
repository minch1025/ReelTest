import React, { useState, useEffect } from "react";

const Spinner = (prop) => {
  const { initTime } = prop;
  var iconHeight = 188;
  var multiplier = Math.floor(Math.random() * (4 - 1) + 1);
  var speed = iconHeight * multiplier;

  const [background, moveBackground] = useState({
    position: 0,
    timeRemaining: initTime,
  });

  useEffect(() => {
    const interval = setInterval(() => {
      if (background.timeRemaining <= 0) {
        clearInterval(interval);
      } else {
        moveBackground((prop) => {
          return {
            ...prop,
            position: prop.position + speed,
            timeRemaining: prop.timeRemaining - 100,
          };
        });
      }
    }, 100);
    return () => clearInterval(interval);
  }, [background.timeRemaining]);

  return (
    <div
      style={{ backgroundPosition: "0px " + `${background.position}` + "px" }}
      className={`icons`}
    />
  );
};

export default Spinner;
