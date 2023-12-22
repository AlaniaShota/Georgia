import { useState } from "react";
import img from "../../../assets/hotel/gelati-monastery-gnta.webp";
import "react-day-picker/dist/style.css";
import { format } from "date-fns";
import { DayPicker } from "react-day-picker";

const today = new Date();
const pastMonth = new Date();

export const Calendar = ({ data }) => {
  const defaultSelected = {
    from: today,
    to: null,
  };

  const [range, setRange] = useState(defaultSelected);

  //   let footer = <p>Please pick the first day.</p>;

  //   if (range?.from) {
  //     if (!range.to) {
  //       footer = <p>{format(range.from, 'PPP')}</p>;
  //     } else if (range.to) {
  //       footer = (
  //         <p>
  //           {format(range.from, 'PPP')}–{format(range.to, 'PPP')}
  //         </p>
  //       );
  //     }
  //   }
  const formatDate = (date) =>
    date instanceof Date ? format(date, "PPP") : "";

  const selectedDate = range.from;
  let selectedBooking = null;

  if (data) {
    selectedBooking = data.find((booking) => {
      if (booking.date instanceof Date) {
        return booking.date.getTime() === selectedDate.getTime();
      }
      return false;
    });
  }

  return (
    <div className="relative">
      <img src={img} alt="Gelati" className="object-cover rounded-md" />
      <div className="absolute top-0 left-0 bg-black bg-opacity-50 rounded-md w-full h-full flex justify-center items-center">
        <DayPicker
          id="test"
          mode="range"
          defaultMonth={new Date()}
          selected={range}
          onSelect={setRange}
          fromMonth={new Date()}
          className="flex justify-center items-center z-20 text-white h-full"
        />
      </div>
      {selectedBooking && (
        <div className="absolute top-2/4 left-2/4 transform -translate-x-2/4 -translate-y-2/4 bg-white p-4 rounded-md shadow-md">
          <h2 className="text-lg font-semibold">{selectedBooking.name}</h2>
          <p>{selectedBooking.firstDescription}</p>
        </div>
      )}
    </div>
  );
};
