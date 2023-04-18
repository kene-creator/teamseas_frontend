import React, { useState } from "react";
import RadioCard from "./RadioCard";
import {
  NumberInput,
  NumberInputField,
  SimpleGrid,
  useRadioGroup,
  VStack,
  Button,
} from "@chakra-ui/react";

interface Props {
  initialCount: number;
  nextStep: (values: any) => void;
}

const options = [5, 20, 50, 100];

const CountSelection = ({ initialCount, nextStep }: Props) => {
  const [pounds, setPounds] = useState(initialCount);
  const [customAmount, setCustomAmount] = useState(
    "" + (options.includes(pounds) ? "" : pounds)
  );

  const { getRootProps, getRadioProps } = useRadioGroup({
    name: "pounds",
    value: pounds.toString(),
    onChange: (nextValue) => {
      setCustomAmount("");
      setPounds(parseInt(nextValue));
    },
  });

  const group = getRootProps();

  const next = () => {
    nextStep({ count: pounds });
  };

  return (
    <VStack spacing={4} align="stretch">
      <SimpleGrid {...group} columns={2} spacing={2}>
        {options.map((val) => {
          const radio = getRadioProps({ value: val.toString() });
          return (
            <RadioCard key={val} {...radio}>
              {val} pounds
            </RadioCard>
          );
        })}
      </SimpleGrid>

      <NumberInput
        onFocus={() => setPounds(0)}
        onChange={(value) => {
          setPounds(parseInt(value));
          setCustomAmount(value);
        }}
        value={customAmount}
      >
        <NumberInputField placeholder="other amount" />
      </NumberInput>
      <hr />
      <Button
        width="100%"
        colorScheme="orange"
        size="lg"
        borderRadius="full"
        onClick={next}
      >
        Next
      </Button>
    </VStack>
  );
};

export default CountSelection;
