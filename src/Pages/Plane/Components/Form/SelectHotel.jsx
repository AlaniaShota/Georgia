import { useEffect } from "react";
import { useHotelStore } from "../../../../Store/store";
import { ErrorMessage, Field } from "formik";

export const SelectHotel = () => {
  const { hotels = [] } = useHotelStore((state) => state.hotels);
  const fetchHotels = useHotelStore((state) => state.fetchHotels);

  useEffect(() => {
    fetchHotels();
  }, [fetchHotels]);

  return (
    <div className="mt-7 w-2/3">
      <label htmlFor="selectedHotel" />
      <Field
        as="select"
        name="selectedHotel"
        className="border rounded-md py-2 px-3 w-full"
      >
        <option value="" disabled>
          Select a Hotel
        </option>
        {hotels.map((guide) => (
          <option key={guide.id} value={guide.name}>
            {guide.name}
          </option>
        ))}
      </Field>

      <ErrorMessage name="selectedHotel">
        {(msg) => (
          <div className="px-2 text-red-700 font-medium mt-1">{msg}</div>
        )}
      </ErrorMessage>
    </div>
  );
};
