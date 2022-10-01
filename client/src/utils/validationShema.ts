import * as yup from "yup";

const SCHEMA = yup.object({
  word: yup
    .string()
    .required("Please enter word")
    .min(2, "Word is too short")
    .max(30, "Word name is too long"),
  translation: yup
    .string()
    .required("Please enter translation")
    .min(2, "Translation is too short")
    .max(60, "Translation is too long"),
});

export default SCHEMA;
