import React, { useState } from "react";
import { Box, VStack, Button } from "@chakra-ui/react";
import CountSelection from "./CountSelection";
import DonationDetials from "./DonationDetials";

type Props = {};

const DonationWizard = (props: Props) => {
  const [step, setStep] = useState(0);
  const [donationDetials, setDonationDetials] = useState({ count: 20 });

  const nextStep = (values: any = {}) => {
    const mergedDetials = { ...donationDetials, ...values };
    setStep(step + 1);
    setDonationDetials(mergedDetials);
  };

  const prevStep = () => {
    setStep(step - 1);
  };

  const pages = [
    <CountSelection nextStep={nextStep} initialCount={donationDetials.count} />,
    <DonationDetials nextStep={nextStep} previousStep={prevStep} />,
  ];

  return (
    <Box boxShadow="xl" p={8} bg="white" borderRadius="xl" minW="sm">
      {pages[step]}
    </Box>
  );
};

export default DonationWizard;
