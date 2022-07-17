import React from "react";
import { Formik, FormikHelpers } from "formik";

type Props = {
  initialValues: Object;
  onSubmit: ((
    values: any,
    formikHelpers: FormikHelpers<Object>
  ) => void | Promise<any>) &
    Function;
  validationSchema?: Object;
  children?: React.ReactNode;
};
export const AppForm = ({
  initialValues,
  onSubmit,
  validationSchema,
  children,
}: Props) => {
  return (
    <Formik
      initialValues={initialValues}
      onSubmit={onSubmit}
      validationSchema={validationSchema}
    >
      {() => <>{children}</>}
    </Formik>
  );
};
