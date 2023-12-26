import { Formik, Form, Field } from "formik";
import * as Yup from "yup";
import {
  useGuideStore,
  useHotelStore,
  useReverseStore,
} from "../../../Store/store";
import { useEffect } from "react";
import { Button } from "../../../Components";

const schema = Yup.object().shape({
  firstName: Yup.string()
    .min(1, "Too Short!")
    .max(50, "Too Long")
    .required("Required"),
  lastName: Yup.string()
    .min(1, "Too Short!")
    .max(50, "Too Long")
    .required("Required"),
  email: Yup.string().email("Invalid email").required("Required"),
  number: Yup.number().required("Required"),
});

export const FormReserve = () => {
  const updateUser = useReverseStore((state) => state.updateUser);
  const { guides = [] } = useGuideStore((state) => state.guides);
  const fetchGuide = useGuideStore((state) => state.fetchGuide);
  const { hotels = [] } = useHotelStore((state) => state.hotels);
  const fetchHotels = useHotelStore((state) => state.fetchHotels);

  useEffect(() => {
    fetchGuide();
    fetchHotels();
  }, [fetchGuide, fetchHotels]);

  const choiceGuide = guides.filter((item) => item.status || null);

  return (
    <>
      <div className="my-20">
        <Formik
          initialValues={{
            firstName: "",
            lastName: "",
            email: "",
            number: "",
            selectedGuide: "", // Добавляем поле для выбора гида
            selectedHotel: "",
          }}
          validationSchema={schema}
          onSubmit={(values) => {
            console.log("Submitting form with values:", values);
            updateUser(values);
            console.log(values);
            console.log(updateUser(values));
          }}
        >
          {({ errors, touched }) => (
            <Form className="grid grid-cols-2 gap-7">
              <div className="col-span-1">
                <Field
                  name="firstName"
                  placeholder="First Name"
                  className="border rounded-md px-2 w-370 h-9"
                />
                {errors.firstName && touched.firstName ? (
                  <div className="px-2 text-red-700 font-medium">
                    {errors.firstName}
                  </div>
                ) : null}
                <Field
                  name="lastName"
                  placeholder="Last Name"
                  className="border rounded-md px-2 w-370 h-9 mt-3"
                />
                {errors.lastName && touched.lastName ? (
                  <div className="px-2 text-red-700 font-medium">
                    {errors.lastName}
                  </div>
                ) : null}
                <Field
                  name="email"
                  type="email"
                  placeholder="Email"
                  className="border rounded-md px-2 w-370 h-9 mt-3"
                />
                {errors.email && touched.email ? (
                  <div className="px-2 text-red-700 font-medium">
                    {errors.email}
                  </div>
                ) : null}
                <Field
                  name="number"
                  type="number"
                  placeholder="Phone Number"
                  className="border rounded-md px-2 w-370 h-9 mt-3"
                />
                {errors.phone && touched.phone ? (
                  <div className="px-2 text-red-700 font-medium">
                    {errors.phone}
                  </div>
                ) : null}
              </div>
              <div className="col-span-1">
                <label htmlFor="selectedGuide">Select a guide:</label>
                <Field
                  as="select"
                  name="selectedGuide"
                  className="border rounded-md px-2 w-370 h-9"
                >
                  <option value="" disabled>
                    Select a guide
                  </option>
                  {choiceGuide.map((guide) => (
                    <option key={guide.id} value={guide.name}>
                      {guide.name}
                    </option>
                  ))}
                </Field>
                {errors.selectedGuide && touched.selectedGuide ? (
                  <div className="px-2 text-red-700 font-medium">
                    {errors.selectedGuide}
                  </div>
                ) : null}

                <label htmlFor="selectedHotel">Select a hotel:</label>
                <Field
                  as="select"
                  name="selectedHotel"
                  className="border rounded-md px-2 w-370 h-9"
                >
                  <option value="" disabled>
                    Select a hotel
                  </option>
                  {hotels.map((hotel) => (
                    <option
                      key={hotel.id}
                      value={`${hotel.name} - ${hotel.price}`}
                    >
                      {`${hotel.name} - ${hotel.price} Gel`}
                    </option>
                  ))}
                </Field>
                {errors.selectedHotel && touched.selectedHotel ? (
                  <div className="px-2 text-red-700 font-medium">
                    {errors.selectedHotel}
                  </div>
                ) : null}
              </div>
              <div className="pt-5 flex justify-center">
                <Button border margin="4" type="submit">
                  <span className="text-darkBlueText text-lg font-medium">
                    Send
                  </span>
                </Button>
              </div>
            </Form>
          )}
        </Formik>
      </div>
    </>
  );
};
