/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */

import { differenceInDays } from "date-fns";
import { useState } from "react";
import Button from "../Button/Button";
import Calender from "./Calender";

// eslint-disable-next-line no-unused-vars
const RoomReservation = ({ room }) => {
  // calculate total days and price

  const totalDays = differenceInDays(new Date(room.to), new Date(room.from));

  // console.log(totalDays,)

  // Total Price

  const totalPrice = totalDays * room?.price;

  //  total selected dates

  const [value, setValue] = useState({
    startDate: new Date(room?.from),
    endDate: new Date(room?.to),
    key: "selection",
  });

  return (
    <div className="rounded-xl border-[1px] border-neutral-200 overflow-hidden bg-white">
      <div className="flex justify-start items-center gap-1 p-4">
        <div className="text-2xl font-semibold">${room?.price}</div>
        <div className="font-light text-neutral-600">night</div>
      </div>
      <div className="flex justify-center">
        <Calender room={room} value={value} />
      </div>

      <hr />
      <div className="p-4">
        <Button label={"Reserve"} />
      </div>
      <hr />

      <div className="p-4 flex items-center justify-between font-semibold text-2xl">
        <div>Total</div>
        <div>${totalPrice}</div>
      </div>
    </div>
  );
};

export default RoomReservation;
