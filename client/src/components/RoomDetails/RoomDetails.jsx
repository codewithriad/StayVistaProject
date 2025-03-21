import { useParams } from "react-router-dom";

import { useEffect, useState } from "react";
import { Helmet } from "react-helmet-async";
import Loader from "../Loader/Loader";
import Container from "../Shared/Container";
import Header from "./Header";
import RoomInfo from "./RoomInfo";
import RoomReservation from "./RoomReservation";

const RoomDetails = () => {
  const { id } = useParams();
  const [room, setRoom] = useState({});
  const [loader, setLoader] = useState(false);

  useEffect(() => {
    setLoader(true);
    fetch("https://raw.githubusercontent.com/codewithriad/StayVistaProject/refs/heads/main/client/public/rooms.json")
      .then((res) => res.json())
      .then((data) => {
        const singleRoom = data.find((room) => room._id === id);
        setRoom(singleRoom);
        setLoader(false);
      });
  }, [id]);
  if (loader) return <Loader />;

  return (
    <Container>
      <Helmet>
        <title>{room?.title}</title>
      </Helmet>
      <div className="max-w-screen-xl mx-auto">
        <div className="flex flex-col gap-6">
          {/* Header */}
          <Header room={room} />
        </div>
        <div className="grid grid-cols-1 md:grid-cols-7 md:gap-10 mt-6">
          <RoomInfo room={room} />
          <div className="col-span-3 order-first md:order-last">
            <RoomReservation room={room} />
          </div>
        </div>
      </div>
    </Container>
  );
};

export default RoomDetails;
