import { useParams } from "react-router-dom";

import Container from "../Shared/Container";
import { useEffect, useState } from "react";
import Loader from "../Loader/Loader";
import { Helmet } from "react-helmet-async";

const RoomDetails = () => {
  const { id } = useParams();
  const [room, setRoom] = useState({});
  const [loader, setLoader] = useState(false);

  useEffect(() => {
    setLoader(true);
    fetch("/rooms.json")
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
      <h1 className="font-bold text-xl">{room?.title}</h1>
      <img className="rounded-md" src={room?.image} alt="room_image" />
    </Container>
  );
};

export default RoomDetails;
