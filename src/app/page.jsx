import Heading from "@/src/components/Heading";
import RoomCard from "@/src/components/RoomCard";
import rooms from "@/data/rooms.json";
import { getLoggedInUser } from "./actions/getLoggedInUser";
import { redirect } from "next/navigation";
import getAllRooms from "./actions/getAllRooms";

export default async function Home() {
  const rooms = await getAllRooms();
  // const user = await getLoggedInUser();
  // if (!user) redirect("/signup");

  // redirect("/account");
  return (
    <>
      <Heading title={"Available Rooms"} />
      {rooms.length > 0 ? (
        rooms.map((room) => <RoomCard key={room.$id} room={room} />)
      ) : (
        <p>No Rooms</p>
      )}
    </>
  );
}
