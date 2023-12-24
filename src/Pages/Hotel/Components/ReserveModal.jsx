import { Formik, Form, Field } from "formik";
import { Button, Modal } from "../../../Components";
import { motion } from "framer-motion";
import * as Yup from "yup";

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
  phone: Yup.number().required("Required"),
});

export const ReserveModal = ({ isOpen, closeModal }) => {
  //   const handleClose = () => {
  //     closeModal();
  //   };
  return (
    <>
      {isOpen && (
        <motion.div
          className="flex justify-center items-center px-10 z-50 bg-black fixed inset-0  bg-opacity-50 backdrop-blur-xl overflow-hidden"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{
            duration: 0.5,
            delay: 0.5,
          }}
        >
          <div className="flex py-10 px-20 bg-white  rounded-md">
            <Formik
              initialValues={{
                firstName: "",
                lastName: "",
                email: "",
                phone: "",
              }}
              validationSchema={schema}
              onSubmit={(values) => {
                console.log(values);
                closeModal();
              }}
            >
              {({ errors, touched }) => (
                <Form className="flex flex-col m-auto">
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
                    name="phone"
                    type="tel"
                    placeholder="Phone Number"
                    className="border rounded-md px-2 w-370 h-9 mt-3"
                  />
                  {errors.phone && touched.phone ? (
                    <div className="px-2 text-red-700 font-medium">
                      {errors.phone}
                    </div>
                  ) : null}
                  <div className="pt-5 ">
                    <Button border margin="4" type="submit">
                      <span className="text-darkBlueText text-lg font-medium">
                        Send
                      </span>
                    </Button>
                    <Button border onClick={closeModal}>
                      <span className="text-darkBlueText text-lg font-medium">
                        Close
                      </span>
                    </Button>
                  </div>
                </Form>
              )}
            </Formik>
          </div>
        </motion.div>
      )}
    </>
  );
};
