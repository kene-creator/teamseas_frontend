import React, { useState } from "react";
import { Box, VStack, Button } from "@chakra-ui/react";
import CountSelection from "./CountSelection";

type Props = {};

const DonationWizard = (props: Props) => {
  const [step, setStep] = useState(0);
  const [donationDetials, setDonationDetials] = useState({ count: 20 });

  const nextStep = (values: any = {}) => {
    setStep(step + 1);
  };

  const prevStep = () => {
    setStep(step - 1);
  };

  const pages = [
    <CountSelection nextStep={nextStep} initialCount={donationDetials.count} />,
    <div>Page 2 </div>,
  ];

  return (
    <Box boxShadow="xl" p={8} bg="white" borderRadius="xl" minW="sm">
      {pages[step]}
      <VStack spacing={2} mt={8}>
        {/* <Button
          width="100%"
          size="lg"
          borderRadius="full"
          variant="ghost"
          fontSize="sm"
          color="gray.700"
          onClick={prevStep}
        >
          Prev
        </Button> */}
      </VStack>
    </Box>
  );
};

export default DonationWizard;
