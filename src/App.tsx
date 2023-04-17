import * as React from "react";
import "@fontsource/montserrat/700.css";
import "@fontsource/montserrat/400.css";
import "@fontsource/montserrat/300.css";
import { ChakraProvider, extendTheme } from "@chakra-ui/react";
import Header from "./components/Header";

const theme = extendTheme({
  fonts: {
    heading: "Montserrat",
    body: "Montserrat",
  },
});

export const App = () => {
  return (
    <ChakraProvider theme={theme}>
      <Header />
    </ChakraProvider>
  );
};
