/* eslint-disable no-unused-vars */

import { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import Loader from "../Loader/Loader";
import Container from "../Shared/Container";
import Heading from "../Shared/Heading";
import Card from "./Card";

const Rooms = () => {
  const [rooms, setRooms] = useState([]);
  const [params, setParams] = useSearchParams();
  const category = params.get("category");
  const [loader, setLoader] = useState(false);

  useEffect(() => {
    fetch("/rooms.json")
      .then((res) => res.json())
      .then((data) => {
        if (category) {
          setLoader(true);
          const filtered = data.filter((room) => room.category === category);
          setRooms(filtered);
        } else {
          setRooms(data);
        }
        setLoader(false);
      });
    }, [category]);

    if (loader) return <Loader />;

  return (
    <Container className="flex justify-center items-center min-h-[calc(100vh-300px)]">
      {rooms && rooms.length > 0 ? (
        <div>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 2xl:grid-cols-6 gap-8">
            {rooms.map((room) => (
              <Card key={room._id} room={room} />
            ))}
          </div>
        </div>
      ) : (
        <Heading
          center={true}
          title={"No Rooms Available In This Category!"}
          subtitle={"Please Select Another Category."}
        />
      )}
    </Container>
  );
};

export default Rooms;
