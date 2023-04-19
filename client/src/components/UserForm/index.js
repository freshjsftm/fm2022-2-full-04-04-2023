import React from "react";
import { Field, Form, Formik } from "formik";
import { useDispatch, useSelector } from "react-redux";
import { createUser } from "./../../store/usersSlice";
const initialValues = {
  firstName: "",
  lastName: "",
  email: "",
  password: "",
  birthday: "",
  isMale: true,
};
const UserForm = () => {
  //useSelector()
  const dispatch = useDispatch();
  const onSubmit = (values, formikBag) => {
    //console.log(values);
    dispatch(createUser(values));
    //formikBag.resetForm();
  };
  return (
    <Formik initialValues={initialValues} onSubmit={onSubmit}>
      <Form
        style={{
          display: "flex",
          flexDirection: "column",
          width: "400px",
          margin: "auto",
        }}
      >
        <Field type="text" name="firstName" placeholder="firstName" />
        <Field type="text" name="lastName" placeholder="lastName" />
        <Field type="email" name="email" placeholder="email" />
        <Field type="password" name="password" placeholder="password" />
        <Field type="date" name="birthday" placeholder="birthday" />
        <label>
          Are you male? <Field type="checkbox" name="isMale" />
        </label>
        <button type="submit">add new user</button>
      </Form>
    </Formik>
  );
};

export default UserForm;
