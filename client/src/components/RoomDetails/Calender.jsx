/* eslint-disable react/prop-types */

import { DateRange } from "react-date-range";

const Calender = ({value}) => {
console.log(value, "is from calender date range.")



  // const [state, setState] = useState([
  //   {
  //     startDate: initialStartDate,
  //     endDate: initialEndDate,
  //     key: "selection",
  //   },
  // ])
  // const handleSelect = (ranges) => {
  //   onChange(ranges[0].selection);
  //   setState([ranges[0].selection]);
  // };
 
  return (
    <DateRange
      // editableDateInputs={true}
      // moveRangeOnFirstSelection={false}
      // retainEndDateOnFirstSelection={false}
      // rangeColors={["#3f51b5"]}
      // ranges={state}
      // onChange={handleSelect}
    />
  );
};

export default Calender;
