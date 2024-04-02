import { useParams } from "react-router-dom";

import Container from "../Shared/Container";
import { useEffect, useState } from "react";
import Loader from "../Loader/Loader";

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

  return <Container>{room.title}</Container>;
};

export default RoomDetails;
