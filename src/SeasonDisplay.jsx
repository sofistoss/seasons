import React from "react";
import "./SeasonDisplay.css";

const seasonConfig = {
  winter: { text: "Burrr. It's so chilly", iconName: "snowflake" },
  summer: { text: "Let's hit the Beach", iconName: "sun" },
};

const getSeason = (latitude, month) => {
  if (month > 2 && month < 9) {
    return latitude > 0 ? "summer" : "winter";
  } else {
    return latitude > 0 ? "winter" : "summer";
  }
};
// console.log(getSeason(props.lat, new Date().getMonth));

const SeasonDisplay = (props) => {
  const season = getSeason(props.lat, new Date().getMonth());
  const { text, iconName } = seasonConfig[season];

  return (
    <div className={`season-display ${season}`}>
      <i className={`icon-left massive ${iconName} icon`} />
      <h1>{text}</h1>
      <i className={`icon-right massive ${iconName} icon`} />
    </div>
  );
};

export default SeasonDisplay;
