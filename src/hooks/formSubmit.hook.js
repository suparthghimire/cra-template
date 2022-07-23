import { useState } from "react";
import {
  EMAIL_REGEX,
  TEXT_REGEX,
  SPECIAL_CHAR_REGEX,
  formatMbToBytes,
  FILE_UPLOAD_LIMIT,
} from "../utils/constants";
function handleSubmit(values, setErrors) {
  let errorStatus = false;
  setErrors({
    name: [],
    email: [],
    phone: [],
    password: [],
    confirmPassword: [],
    gender: [],
    class: [],
    image: [],
    termPrivacy: [],
  });
  if (values.name.trim().length <= 0) {
    errorStatus = true;
    setErrors((prev) => ({
      ...prev,
      name: ["Name is required"],
    }));
  }
  // check for email format
  if (!EMAIL_REGEX.test(values.email.trim())) {
    errorStatus = true;
    setErrors((prev) => ({
      ...prev,
      email: ["Email Format is Invalid"],
    }));
  }

  // check for phone
  if (values.phone.trim().length !== 10) {
    errorStatus = true;
    const phoneErrors = ["Mobile Numbers must be 10 Characters Long"];
    if (TEXT_REGEX.test(values.phone.trim())) {
      phoneErrors.push("Phone Numbers must only Contain Numbers");
    }
    setErrors((prev) => ({
      ...prev,
      phone: phoneErrors,
    }));
  }

  // check for password
  if (values.password.trim().length < 8) {
    errorStatus = true;
    const pwdErrors = ["Password must be at least 6 Characters Long"];
    if (!SPECIAL_CHAR_REGEX.test(values.password.trim())) {
      pwdErrors.push("Password must contain at least one special character");
    }
    setErrors((prev) => ({
      ...prev,
      password: pwdErrors,
    }));
  }

  if (values.password !== values.confirmPassword) {
    errorStatus = true;
    setErrors((prev) => ({
      ...prev,
      confirmPassword: ["Passwords do not match"],
    }));
  }

  if (values.gender.trim() <= 0) {
    errorStatus = true;
    const genderErrors = ["Gender is Required"];
    if (!["m", "f", "o"].includes(values.gender.trim())) {
      genderErrors.push(["Gender Value must be One of these: m, f or o"]);
    }
    setErrors((prev) => ({
      ...prev,
      gender: genderErrors,
    }));
  }

  if (values.class.trim().length <= 0) {
    errorStatus = true;
    const classErrors = ["Class is required"];
    if (TEXT_REGEX.test(values.class.trim())) {
      if (Number(values.class.trim()) < 0 || Number(values.class.trim()) > 10) {
        classErrors.push("Class must be between 0 and 10");
      }
    } else {
      classErrors.push("Class must only contain Numbers");
    }

    setErrors((prev) => ({
      ...prev,
      class: classErrors,
    }));
  }

  if (values.image.name.trim().length <= 0) {
    errorStatus = true;
    setErrors((prev) => ({
      ...prev,
      image: ["Image is Required"],
    }));
  } else {
    const imageErrors = [];
    if (values.image.size > formatMbToBytes(FILE_UPLOAD_LIMIT)) {
      errorStatus = true;
      imageErrors.push(`Image must be less than ${FILE_UPLOAD_LIMIT} MB`);
    }
    if (
      values.image.type !== "image/jpeg" &&
      values.image.type !== "image/png"
    ) {
      errorStatus = true;
      imageErrors.push([`Image type must be jpeg or png`]);
    }
    setErrors((prev) => ({
      ...prev,
      image: imageErrors,
    }));
  }

  if (values.termPrivacy === false) {
    errorStatus = true;
    setErrors((prev) => ({
      ...prev,
      termPrivacy: ["You must agree to the Terms and Privacy Policy"],
    }));
  }
  return errorStatus;
}

export default function useHandleSubmit(values) {
  const [errors, setErrors] = useState({
    name: [],
    email: [],
    phone: [],
    password: [],
    confirmPassword: [],
    gender: [],
    class: [],
    image: [],
    termPrivacy: [],
  });

  return [handleSubmit, errors, setErrors];
}
