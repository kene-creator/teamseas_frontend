import { VStack, Button } from "@chakra-ui/react";
import { Formik, Form } from "formik";
import React from "react";
import { InputField } from "../form/InputField";
import { TextAreaField } from "../form/TextAreaField";

type Props = {
  nextStep: (values: any) => void;
  previousStep: () => void;
};

const DonationDetials = ({ nextStep, previousStep }: Props) => {
  const submit = (values: any) => {
    nextStep(values);
  };

  return (
    <Formik
      initialValues={{
        displayName: "",
        email: "",
        mobile: "",
        team: "",
        message: "",
      }}
      onSubmit={submit}
    >
      {(formik) => (
        <Form>
          <VStack spacing={4} align="stretch">
            <InputField
              label="Display Name"
              name="displayName"
              placeholder="Display Name"
            />
            <InputField
              label="Email Address"
              name="email"
              placeholder="Email"
            />
            <InputField
              label="Mobile Number"
              name="mobile"
              placeholder="Mobile Number"
            />
            <InputField label="Team" name="team" placeholder="Team Name" />
            <TextAreaField
              label="Message"
              name="message"
              placeholder="My #TeamSeas message is..."
            />
            <hr />
          </VStack>

          <VStack spacing={2} mt={8}>
            <Button
              width="100%"
              colorScheme="orange"
              size="lg"
              borderRadius="full"
              type="submit"
            >
              Submit
            </Button>
            <Button
              width="100%"
              size="lg"
              borderRadius="full"
              variant="ghost"
              fontSize="sm"
              color="gray.700"
              onClick={previousStep}
            >
              Prev
            </Button>
          </VStack>
        </Form>
      )}
    </Formik>
  );
};

export default DonationDetials;
