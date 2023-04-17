import React from "react";
import { Box, Text, VStack, Grid, Heading } from "@chakra-ui/react";
import { Logo } from "../Logo";
import { Counter } from "../donations/Counter";
import { useQuery } from "urql";

const TotalDonationsQuery = `
  query Query {
    totalDonations
  }
`;

export default function Header() {
  const [{ data, fetching, error }] = useQuery({ query: TotalDonationsQuery });

  if (fetching) return <div>Fetching...</div>;
  if (error) return <div>Error: {error.message}</div>;

  return (
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
          <Heading as="h2" size="4xl">
            <Counter from={0} to={data.totalDonations} />
          </Heading>
        </VStack>
      </Grid>
    </Box>
  );
}
