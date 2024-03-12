import React from "react";
import { Form, Field, ErrorMessage, Formik } from "formik";
import * as Yup from "yup";
import { useDispatch } from "react-redux";
import { getUser } from "../features/user";
import TextError from "./TextError";

function FormikForm({ setFormUser }) {
  const dispatch = useDispatch();

  const initialState = {
    name: "",
    email: "",
  };

  const validationSchema = Yup.object({
    name: Yup.string().required("Required ! "),
    email: Yup.string().email("Invalid Email Input").required("Required ! "),
  });

  const onSubmit = (values) => {
    console.log("form data", values);
    dispatch(getUser(values));
    setFormUser(true);
  };

  return (
    <main className=" w-full child:flexCol space-y-3 text-white flexCol h-full items-center justify-center">
      <h1 className="font-primary uppercase tracking-wide text-2xl font-semibold">
        Sign-in to GAMEBASE
      </h1>
      <Formik
        validationSchema={validationSchema}
        initialValues={initialState}
        onSubmit={onSubmit}
      >
        {(formik) => {
          return (
            <section className="h-auto child:flexCol w-full flex items-center md:w-2/5">
              <Form>
                <div className="my-2">
                  <Field
                    placeholder="enter your username"
                    className="form-style w-full"
                    type="name"
                    name="name"
                    id="name"
                  />
                  <ErrorMessage component={TextError} name="name" />
                </div>
                <div className="my-2">
                  <Field
                    placeholder="enter your email"
                    className="form-style w-full"
                    type="email"
                    name="email"
                    id="email"
                  />
                  <ErrorMessage component={TextError} name="email" />
                </div>

                <button className="primary-button mt-5" type="submit">
                  create an account
                </button>
              </Form>
            </section>
          );
        }}
      </Formik>
      <h3 className="text-blue-500 font-secondary capitalize font-light hover:underline-offset-2 hover:underline cursor-pointer">
        About GAMEBASE account
      </h3>
      <h3 className="text-blue-500 font-secondary capitalize font-light hover:underline-offset-2 hover:underline cursor-pointer">
        Trouble Signing In?
      </h3>
    </main>
  );
}

export default FormikForm;
