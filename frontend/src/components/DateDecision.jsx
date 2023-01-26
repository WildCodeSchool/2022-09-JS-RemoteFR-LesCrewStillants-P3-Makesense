import React, { useContext } from "react";
import { DateContext } from "../Context/DateContext";
import "./FormDecision.css";
import "./DateDecision.css";

// eslint-disable-next-line react/prop-types
function DateStep({ id, title, dateValue }) {
  // permet de récupérer la date courante et de ne pas sélectionner une date antérieur
  const currentDate = new Date().toISOString().split("T")[0];

  if (!dateValue) {
    // eslint-disable-next-line no-param-reassign
    dateValue = currentDate;
  }
  const { handleDateChange } = useContext(DateContext);
  // eslint-disable-next-line react/prop-types
  const [day, month, year] = dateValue.split("/");

  return (
    <div className="ContainerDate">
      <h2 className="deadline">{title}</h2>
      <input
        className="date"
        type="date"
        name={title}
        id={id}
        min={currentDate}
        value={`${year}-${month}-${day}`}
        onChange={handleDateChange}
      />
      <hr className="ligne" />
    </div>
  );
}

export default DateStep;
