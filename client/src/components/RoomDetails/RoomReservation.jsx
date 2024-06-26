/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */

import { useState } from "react";
import Button from "../Button/Button";
import Calender from "./Calender";
import { formatDistance } from "date-fns";

// eslint-disable-next-line no-unused-vars
const RoomReservation = ({ room }) => {
  // const [value, setValue] = useState({
  //   startDate: new Date(room?.from),
  //   endDate: new Date(room?.to),
  //   key: "selection",
  // });

  // const handleSelect = (ranges) => {
  //   setValue({ ...value });
  // };

  // Total Days Calculation

  // const totalDays = parseInt(
  //   formatDistance(new Date(room?.to), new Date(room?.from)).split(" ")[0]
  // );

  // Total Price

  // const totalPrice = totalDays * room?.price;

  return (
    <div className="rounded-xl border-[1px] border-neutral-200 overflow-hidden bg-white">
      <div className="flex justify-start gap-1 p-4">
        <div className="text-2xl font-semibold">$ {room?.price}</div>
        <div className="font-light text-neutral-600">night</div>
      </div>
      <div className="flex justify-center">
        <Calender />
      </div>

      <hr />
      <div className="p-4">
        <Button label={"Reserve"} />
      </div>
      <hr />

      <div className="p-4 flex items-center justify-between font-semibold text-2xl">
        <div>Total</div>
        {/* <div>$ {totalPrice}</div> */}
      </div>
    </div>
  );
};

export default RoomReservation;
