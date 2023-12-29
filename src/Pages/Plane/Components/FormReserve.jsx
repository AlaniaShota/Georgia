import { Formik, Form } from "formik";
import * as Yup from "yup";
import { useReverseStore } from "../../../Store/store";
import { Button } from "../../../Components";
import { UserForm, SelectGuide, SelectHotel } from "./Form/index";

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
  selectedHotel: Yup.string().required("Please select hotel"),
});

export const FormReserve = () => {
  const updateUser = useReverseStore((state) => state.updateUser);

  return (
    <div className=" flex justify-center items-center my-20 drop-shadow-md">
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
        {({ values }) => (
          <Form className="flex flex-col">
            <UserForm />
            <SelectGuide values={values} />
            <SelectHotel />
            <div className="flex justify-center mt-5 ">
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
  );
};
