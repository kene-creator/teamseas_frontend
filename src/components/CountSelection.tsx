import React, { useState } from "react";
import RadioCard from "./RadioCard";
import {
  NumberInput,
  NumberInputField,
  SimpleGrid,
  useRadioGroup,
  VStack,
} from "@chakra-ui/react";

interface Props {}

const options = [5, 20, 50, 100];

const CountSelection = (props: Props) => {
  const [pounds, setPounds] = useState(20);
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
    </VStack>
  );
};

export default CountSelection;
