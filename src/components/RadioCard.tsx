import { useRadio, Box, UseRadioProps } from "@chakra-ui/react";
import { ReactNode } from "react";

interface Props extends UseRadioProps {
  children: ReactNode;
}

function RadioCard(props: Props) {
  const { getInputProps, getRadioProps } = useRadio(props);

  const input = getInputProps();
  const checkbox = getRadioProps();

  return (
    <Box as="label">
      <input {...input} />
      <Box
        {...checkbox}
        cursor="pointer"
        borderWidth="1px"
        borderRadius="md"
        boxShadow="md"
        fontSize="lg"
        bg="white "
        _checked={{
          bg: "blue.600",
          color: "white",
          borderColor: "teal.600",
        }}
        _focus={{
          boxShadow: "outline",
        }}
        px={2}
        py={2}
      >
        {props.children}
      </Box>
    </Box>
  );
}

export default RadioCard;
