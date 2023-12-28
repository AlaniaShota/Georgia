import { Formik, Form, Field } from "formik";
import * as Yup from "yup";
import {
  useGuideStore,
  useHotelStore,
  useLocationStore,
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
  guideRecommendation: Yup.string().required(
    "Please select guide recommendation",
  ),
});

export const FormReserve = () => {
  const updateUser = useReverseStore((state) => state.updateUser);
  const { guides = [] } = useGuideStore((state) => state.guides);
  const fetchGuide = useGuideStore((state) => state.fetchGuide);
  const { hotels = [] } = useHotelStore((state) => state.hotels);
  const fetchHotels = useHotelStore((state) => state.fetchHotels);
  const { locations = [] } = useLocationStore((state) => state.locations);
  const fetchLocations = useLocationStore((state) => state.fetchLocations);

  useEffect(() => {
    fetchGuide();
    fetchHotels();
    fetchLocations();
  }, [fetchGuide, fetchHotels, fetchLocations]);

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
            selectedGuide: "",
            selectedHotel: "",
            guideRecommendation: "",
            selectedLocation: "",
          }}
          validationSchema={schema}
          onSubmit={(values, { resetForm }) => {
            updateUser(values);
            console.log(values);
            resetForm();
          }}
        >
          {({ values, errors, touched }) => (
            <Form className="flex justify-between">
              <div className="flex flex-col">
                <div className="flex flex-col">
                  <Field
                    name="email"
                    type="email"
                    placeholder="Email"
                    className="border rounded-md py-2 px-6"
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
                    className="border rounded-md py-2 px-6 mt-3 mr-64"
                  />
                  {errors.phone && touched.phone ? (
                    <div className="px-2 text-red-700 font-medium">
                      {errors.phone}
                    </div>
                  ) : null}
                </div>
                <div className="flex flex-row mt-4">
                  <Field
                    name="firstName"
                    placeholder="First Name"
                    className="border rounded-md py-2 px-6 mr-4"
                  />
                  {errors.firstName && touched.firstName ? (
                    <div className="py-2 px-1 text-red-700 font-medium">
                      {errors.firstName}
                    </div>
                  ) : null}
                  <Field
                    name="lastName"
                    placeholder="Last Name"
                    className="border rounded-md py-2 px-6 "
                  />
                  <div>
                    {errors.lastName && touched.lastName ? (
                      <div className="py-2 px-1 text-red-700 font-medium">
                        {errors.lastName}
                      </div>
                    ) : null}
                  </div>
                </div>
              </div>
              <div className="flex flex-col">
                <div className="flex flex-wrap items-center w-full">
                  <label htmlFor="selectedGuide" />
                  <Field
                    as="select"
                    name="selectedGuide"
                    className="border rounded-md py-2 px-3 w-full"
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
                </div>
                {errors.selectedGuide && touched.selectedGuide ? (
                  <div className="px-2 text-red-700 font-medium">
                    {errors.selectedGuide}
                  </div>
                ) : null}

                <div className="flex items-center mt-3">
                  <span className="mr-2">Recommendations</span>
                  <label>
                    <Field
                      type="radio"
                      name="guideRecommendation"
                      value="recommended"
                    />
                    Yes
                  </label>
                  <label className="ml-4">
                    <Field
                      type="radio"
                      name="guideRecommendation"
                      value="notRecommended"
                    />
                    No
                  </label>
                </div>

                {values.guideRecommendation === "recommended" && (
                  <div className="flex flex-wrap">
                    <Field
                      as="select"
                      name="selectedLocation"
                      className="border rounded-md py-2 px-3  w-full"
                    >
                      <option value="" disabled>
                        Select Your Desired Location
                      </option>
                      {choiceGuide.map((guide) => {
                        if (guide.name === values.selectedGuide) {
                          return (
                            <optgroup key={guide.id} label={"Recommendation"}>
                              {guide.recommended.map((place) => (
                                <option key={place.id} value={place.name}>
                                  {place.name}
                                </option>
                              ))}
                            </optgroup>
                          );
                        }
                        return null;
                      })}
                    </Field>
                  </div>
                )}
                {values.guideRecommendation === "notRecommended" && (
                  <div className="flex flex-wrap">
                    <Field
                      as="select"
                      name="selectedLocation"
                      className="border rounded-md py-2 px-3 w-full"
                    >
                      <option value="" disabled>
                        Select Your Desired Location
                      </option>
                      {locations.map((guide) => (
                        <option key={guide.id} value={guide.name}>
                          {guide.title}
                        </option>
                      ))}
                    </Field>
                  </div>
                )}
                <div className="pt-5 flex justify-center">
                  <Button border margin="4" type="submit">
                    <span className="text-darkBlueText text-lg font-medium">
                      Send
                    </span>
                  </Button>
                </div>
              </div>
            </Form>
          )}
        </Formik>
      </div>
    </>
  );
};
