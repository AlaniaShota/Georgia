import { useState } from "react";
import img from "../../../assets/hotel/gelati-monastery-gnta.webp";
import "react-day-picker/dist/style.css";
import { format } from "date-fns";
import { DayPicker } from "react-day-picker";
import { Card } from "../../../Components/Card/index";

const today = new Date();
const pastMonth = new Date();

export const Calendar = ({ data }) => {
  const defaultSelected = {
    from: today,
    to: null,
  };

  const [range, setRange] = useState(defaultSelected);
  const [selectedBookings, setSelectedBookings] = useState([]);

  let dataText = <p>Please pick the first day.</p>;

  if (range?.from) {
    if (!range.to) {
      dataText = <p>{format(range.from, "PPP")}</p>;
    } else if (range.to) {
      dataText = (
        <p>
          {format(range.from, "PPP")}–{format(range.to, "PPP")}
        </p>
      );
    }
  }

  const handleDateSelect = (selectedRange) => {
    setRange(selectedRange);

    if (data) {
      const filteredBookings = data.filter((booking) => {
        const bookingDate = new Date(booking.date);
        return (
          bookingDate >= selectedRange.from &&
          (selectedRange.to || bookingDate >= selectedRange.to)
        );
      });

      setSelectedBookings(filteredBookings);
    }
  };

  return (
    <>
      <div className="relative">
        <img src={img} alt="Gelati" className="object-cover rounded-md" />
        <div className="absolute top-0 left-0 bg-black bg-opacity-50 rounded-md w-full h-full flex justify-center items-center">
          <DayPicker
            id="test"
            mode="range"
            footer={dataText}
            defaultMonth={pastMonth}
            selected={range}
            onSelect={handleDateSelect}
            fromMonth={new Date()}
            className="flex justify-center items-center z-20  bg-white bg-opacity-50 rounded-md  p-10"
          />
        </div>
      </div>
      {selectedBookings.length > 0 && (
        <Card description={dataText} data={selectedBookings} />
      )}
    </>
  );
};
