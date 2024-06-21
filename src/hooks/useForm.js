import { useState } from "react";

const useForm = (initialValues) => {
  const [formData, setFormData] = useState(initialValues);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }));
  };

  const handleSubmit = (callback) => (e) => {
    e.preventDefault();
    callback(formData);
  };

  return {
    formData,
    handleChange,
    handleSubmit,
  };
};

export default useForm;
