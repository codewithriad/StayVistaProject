/* eslint-disable react/prop-types */
import { useState } from "react";
import { DateRange } from "react-date-range";

const Calender = () => {
  const [state, setState] = useState([
    {
      startDate: new Date(),
      endDate: new Date(),
      key: "selection",
    },
  ]);

  return <DateRange
  editableDateInputs={true}
  onChange={(item) => setState([item.selection])}
  moveRangeOnFirstSelection={false}
  retainEndDateOnFirstSelection={false}
  onRangeFocusChange={(focus) => console.log("Focused range:", focus)}
  rangeColors={["#3f51b5"]}
  ranges={state}
/>
};

export default Calender;
