import React from "react";
import { ErrorMessage, useField } from "formik";
import { CardTextField } from "./style";

const InputHandler = (props) => {
  const [field, meta,helpers] = useField(props);
  console.log("field->",field);
  console.log("meta->",meta);
  console.log("helpers->",helpers);

  const {value} = meta;
  const{setValue} = helpers;
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
