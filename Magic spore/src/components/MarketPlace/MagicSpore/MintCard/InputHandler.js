import React from "react";
import { ErrorMessage, useField } from "formik";
import { CardTextField } from "./style";

const InputHandler = (props) => {
  const [field, meta] = useField(props);
  console.log(field);
  return (
    <div>
      <CardTextField
        error={meta.touched && meta.error ? true : false}
        fullWidth={true}
        autoComplete="off"
        helperText={<ErrorMessage name={field.name} />}
        {...field}
        {...props}
      />
    </div>
  );
};
export default InputHandler;
