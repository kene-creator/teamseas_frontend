import { VStack, Button } from "@chakra-ui/react";
import React from "react";

type Props = {
  nextStep: (values: any) => void;
  previousStep: () => void;
};

const DonationDetials = ({ nextStep, previousStep }: Props) => {
  return (
    <div>
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
    </div>
  );
};

export default DonationDetials;
