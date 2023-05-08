import React from "react";
import {
  Box,
  Text,
  VStack,
  Grid,
  Heading,
  Spinner,
  Flex,
} from "@chakra-ui/react";
import { Logo } from "../Logo";
import { Counter } from "../donations/Counter";
import { useQuery, useSubscription } from "urql";
import Leaderboard from "./Leaderboard";
import DonationWizard from "./DonationWizard";
import bg from "../assets/bg-home.jpg";

const TotalDonationsQuery = `
  query Query {
    totalDonations
  }
`;

const TotalUpdatedQuery = `
  subscription Subscription {
    totalUpdated {
        total
    }
  }`;

const handleSubscription = (previous: any, newTotal: any) =>
  newTotal?.totalUpdated?.total;

export default function Header() {
  const [res] = useSubscription(
    { query: TotalUpdatedQuery },
    handleSubscription
  );
  const [{ data, fetching, error }] = useQuery({ query: TotalDonationsQuery });

  // if (fetching)
  //   return (
  //     <Flex
  //       height="100vh"
  //       width="100%"
  //       justifyContent="center"
  //       alignItems="center"
  //     >
  //       <Spinner size="xl" />
  //     </Flex>
  //   );
  if (error) return <div>Error: {error.message}</div>;

  return (
    <Box
      textAlign="center"
      fontSize="xl"
      bgImage={bg}
      bgPosition="center"
      bgRepeat="no-repeat"
      bgSize="cover"
      maxW="100%"
    >
      <Grid minH="100vh" p={3}>
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
            {fetching ? (
              <Spinner size="xl" />
            ) : (
              <Counter from={0} to={res.data || data.totalDonations} />
            )}
          </Heading>

          <DonationWizard />
          <Leaderboard />
        </VStack>
      </Grid>
    </Box>
  );
}
