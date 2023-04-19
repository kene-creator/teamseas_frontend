import React, { useState } from "react";
import { Box, VStack, Button } from "@chakra-ui/react";
import CountSelection from "./CountSelection";
import DonationDetials from "./DonationDetials";
import { useMutation } from "urql";

const CreateDonation = `
mutation CreateDonation($createDonationInput: CreateDonationInput!) {
  createDonation(createDonationInput: $createDonationInput) {
    count
    createdAt
    displayName
    id
    email
    message
    mobile
    team
  }
}
`;

type Props = {};

const DonationWizard = (props: Props) => {
  const [step, setStep] = useState(0);
  const [donationDetials, setDonationDetials] = useState({ count: 20 });
  const [showConfirmation, setShowConfirmation] = useState(false);

  const [donationResult, createDonation] = useMutation(CreateDonation);

  const nextStep = (values: any = {}) => {
    const mergedDetials = { ...donationDetials, ...values };
    if (step === pages.length - 1) {
      submitDonation(mergedDetials);
    } else {
      setStep(step + 1);
      setDonationDetials(mergedDetials);
    }
  };

  const prevStep = () => {
    setStep(step - 1);
  };

  const submitDonation = async (values: any) => {
    await createDonation({ createDonationInput: values });
    setShowConfirmation(true);
  };

  const pages = [
    <CountSelection nextStep={nextStep} initialCount={donationDetials.count} />,
    <DonationDetials nextStep={nextStep} previousStep={prevStep} />,
  ];

  return (
    <Box boxShadow="xl" p={8} bg="white" borderRadius="xl" minW="sm">
      {showConfirmation ? (
        <div>
          Thank you for your donation of $
          {donationResult?.data.createDonation?.count}!!
        </div>
      ) : (
        pages[step]
      )}
    </Box>
  );
};

export default DonationWizard;
