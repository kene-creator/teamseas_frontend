import * as React from "react";
import "@fontsource/montserrat/700.css";
import "@fontsource/montserrat/400.css";
import "@fontsource/montserrat/300.css";
import {
  ChakraProvider,
  Box,
  Text,
  VStack,
  Grid,
  extendTheme,
  Heading,
} from "@chakra-ui/react";
import { Logo } from "./Logo";
import bg from "./assets/bg-home.jpg";

const theme = extendTheme({
  fonts: {
    heading: "Montserrat",
    body: "Montserrat",
  },
});

export const App = () => (
  <ChakraProvider theme={theme}>
    <Box textAlign="center" fontSize="xl">
      <Grid minH="100vh" p={3} bg="gray.50">
        <VStack spacing={8}>
          <Logo h="20vmin" pointerEvents="none" />
          <Heading as="h1" size="xl">
            JOIN THE MOVEMENT
          </Heading>
          <Text>
            The team is growing everyday and scoring wins for the seas
            <br /> Remove trash with us and track your progress
          </Text>
        </VStack>
      </Grid>
    </Box>
  </ChakraProvider>
);
