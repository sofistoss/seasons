import React from "react";
import "./SeasonDisp.css";

const seasonConfig = {
  summer: { text: "Let's hit the beach, Bro", iconName: "sun" },
  winter: { text: "Brrr, it's so chilly", iconName: "snowflake" },
};

const getSeason = (latitude, month) => {
  if (month > 2 && month < 9) {
    return latitude > 0 ? "summer" : "winter";
  } else {
    return latitude > 0 ? "winter" : "summer";
  }
};
const SeasonDisp = (props) => {
  const season = getSeason(props.lat, new Date().getMonth());
  const { text, iconName } = seasonConfig[season];

  return (
    <div className={`season-disp ${season}`}>
      <i className={`icon-left massive ${iconName} icon`} />
      <h1>{text}</h1>
      <i className={`icon-right massive ${iconName} icon`} />
    </div>
  );
};

export default SeasonDisp;
