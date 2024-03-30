import { useEffect, useState } from "react";
import Card from "../Card/Card";
import { useSearchParams } from "react-router-dom";
import Container from "../Shared/Container";
import Heading from "../Shared/Heading";

const Rooms = () => {
  const [rooms, setRooms] = useState([]);
  const [params, setParams] = useSearchParams();
  const category = params.get("category");

  useEffect(() => {
    fetch("./rooms.json")
      .then((res) => res.json())
      .then((data) => {
        if (category) {
          const filtered = data.filter((room) => room.category === category);
          setRooms(filtered);
        } else {
          setRooms(data);
        }
      });
  }, [category]);

  return (
    // <Container>
    //   {rooms && rooms.length > 0 ? (
    //     <div>
    //       <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 2xl:grid-cols-6 gap-8">
    //         {rooms.map((room) => (
    //           <Card key={room._id} id={room._id} room={room} />
    //         ))}
    //       </div>
    //     </div>
    //   ) : (
    //     <Heading
    //       center={true}
    //       title={"No Rooms Available In This Category!"}
    //       subtitle={"Plese Select Other Categories."}
    //     />
    //   )}
    // </Container>
    <div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 2xl:grid-cols-6 gap-8">
        {rooms.map((room) => (
          <Card key={room._id} id={room._id} room={room} />
        ))}
      </div>
    </div>
  );
};

export default Rooms;
