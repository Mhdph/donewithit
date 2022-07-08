import React from "react";
import { Formik, FormikHelpers } from "formik";

interface AppFormInterface<Values> {
  initialValues: Values;
  children: React.ReactNode;
  validationSchema?: any | (() => any);
  onSubmit(
    values: Values,
    formikHelpers: FormikHelpers<Values>
  ): void | Promise<any>;
}

const AppForm = function <Values>(
  props: AppFormInterface<Values>
): React.ReactElement {
  const { initialValues, onSubmit, validationSchema, children, ...rest } =
    props;

  return (
    <Formik
      {...rest}
      validationSchema={validationSchema}
      initialValues={initialValues}
      onSubmit={onSubmit}
      validateOnMount={true}
    >
      {() => children}
    </Formik>
  );
};

export default AppForm;
