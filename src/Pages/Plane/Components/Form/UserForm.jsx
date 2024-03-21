import { ErrorMessage, Field } from "formik";

export const UserForm = () => {
  return (
    <>
      <div className=" flex flex-row w-2/3">
        <div className="flex flex-col mr-6">
          <Field
            name="firstName"
            placeholder="First Name"
            className="border rounded-md py-2 px-6 min-2xl:py-4 min-2xl:px-10 min-2xl:text-xl"
          />
          <ErrorMessage name="firstName">
            {(msg) => (
              <div className="px-2 min-2xl:text-xl text-red-700 font-medium mt-1">
                {msg}
              </div>
            )}
          </ErrorMessage>
        </div>
        <div className="flex flex-col ">
          <Field
            name="lastName"
            placeholder="Last Name"
            className="border rounded-md py-2 px-6 min-2xl:py-4 min-2xl:px-10 min-2xl:text-xl"
          />
          <ErrorMessage name="lastName">
            {(msg) => (
              <div className="px-2 min-2xl:text-xl text-red-700 font-medium mt-1">
                {msg}
              </div>
            )}
          </ErrorMessage>
        </div>
      </div>
      <div className="flex flex-col mt-3 ">
        <Field
          name="email"
          type="email"
          placeholder="Email"
          className="border rounded-md py-2 px-6 min-2xl:py-4 min-2xl:px-10 min-2xl:text-xl"
        />
        <ErrorMessage name="email">
          {(msg) => (
            <div className="px-2 min-2xl:text-xl text-red-700 font-medium mt-1">
              {msg}
            </div>
          )}
        </ErrorMessage>

        <Field
          name="number"
          type="number"
          placeholder="Phone Number"
          className="border rounded-md py-2 px-6 mt-3 w-1/2 min-2xl:py-4 min-2xl:px-10  min-2xl:text-xl"
        />
        <ErrorMessage name="number">
          {(msg) => (
            <div className="px-2 min-2xl:text-xl text-red-700 font-medium mt-1">
              {msg}
            </div>
          )}
        </ErrorMessage>
      </div>
    </>
  );
};
