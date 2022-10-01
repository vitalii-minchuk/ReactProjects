import {
  Box,
  Button,
  Center,
  Flex,
  FormControl,
  FormErrorMessage,
  FormHelperText,
  FormLabel,
  Input,
  Radio,
  RadioGroup,
  Stack,
  Text,
} from "@chakra-ui/react";
import { Field, FieldConfig, FieldProps, Form, Formik } from "formik";
import CustomInput from "../components/common/CustomInput";
import SCHEMA from "../utils/validationShema";
// import SCHEMA from "./FormValidationSchema";

// interface ICreateNewUser {
//   handleRequest: Dispatch<SetStateAction<DisplayRequestResult>>;
// }

function AddNewWord() {
  // const handleSubmit = async (newUser: User) => {
  //   handleRequest((prev) => ({ ...prev, time: true }));
  //   await mutateAsync({
  //     name: newUser.name,
  //     email: newUser.email,
  //     phone: normalizePhone(newUser.phone),
  //     position_id: getPositionId(newUser.position),
  //     photo: newUser.photo,
  //     position: newUser.position,
  //   });
  // };

  return (
    <Box>
      <Text
        maxW="328px"
        as="h1"
        m="0 auto"
        textAlign="center"
        color="rgba(0, 0, 0, 0.87)"
        lineHeight="40px"
        fontSize="40px"
      >
        Add New Word
      </Text>
      <Formik
        initialValues={{
          word: "",
          translation: "",
        }}
        validationSchema={SCHEMA}
        onSubmit={(values) => {
          handleSubmit(values);
        }}
      >
        {(props) => (
          <Form autoComplete="off">
            <Flex
              pt="50px"
              pb="26px"
              direction="column"
              alignItems="center"
              gap="50px"
            >
              <Field name="word">
                {({ field, form }: FieldProps<any, FieldConfig>) => (
                  <FormControl
                    width="324px"
                    variant="floating"
                    sx={{ position: "relative" }}
                    isInvalid={(form.errors.name && form.touched.name) || false}
                  >
                    <Input
                      {...field}
                      id="word"
                      name="word"
                      height="54px"
                      bg="transparent"
                      placeholder=" "
                      errorBorderColor="#CB3D40"
                    />
                    <FormLabel>Word</FormLabel>
                    {form.errors.word && form.touched.word && (
                      <FormErrorMessage
                        pl={4}
                        mb="-22px"
                        fontSize="12px"
                        lineHeight="14px"
                        color="#CB3D40"
                      >
                        {form.errors.word}
                      </FormErrorMessage>
                    )}
                  </FormControl>
                )}
              </Field>
            </Flex>

            <Center pb="100px" pt="50px">
              <Button
                style={{ height: "34px" }}
                disabled={!props.isValid}
                variant="normal"
                type="submit"
              >
                Sign up
              </Button>
            </Center>
          </Form>
        )}
      </Formik>
    </Box>
  );
}

export default AddNewWord;
