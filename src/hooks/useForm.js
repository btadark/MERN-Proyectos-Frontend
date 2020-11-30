import { useState } from "react";

export const useForm = (initialState = {}) => {
  const [formValues, setFormValues] = useState(initialState);

  const inputOnChange = (e) => {
    setFormValues({
      ...formValues,
      [e.target.name]: e.target.value,
    });
  };

  const reset = () => {
    setFormValues(initialState);
  };

  return [formValues, inputOnChange, reset, setFormValues];
};
