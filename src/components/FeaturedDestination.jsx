import { roomsDummyData } from "../assets/assets";
import HotelCard from "./HotelCard";

const FeaturedDestination = () => {
  return (
    <div>
      <div className="grid grid-cols-1 md:grid-cols-4">
        {roomsDummyData.map((room) => (
          <HotelCard room={room} />
        ))}
      </div>
    </div>
  );
};

export default FeaturedDestination;
