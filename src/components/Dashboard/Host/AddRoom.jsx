import { useState } from "react";
import AddRoomForm from "../../Form/AddRoomForm";

const AddRoom = () => {
  const [dates, setDates] = useState({
    startDate: new Date(),
    endDate: null,
    key: "selection",
  });

  const handleDates = (item) => {
    console.log(item);
    setDates(item.selection);
  };
  return (
    <div>
      <AddRoomForm dates={dates} handleDates={handleDates}></AddRoomForm>
    </div>
  );
};

export default AddRoom;
