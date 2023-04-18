import React, { useState } from "react";
import { Box, Heading, VStack } from "@chakra-ui/layout";
import LeaderboardItem from "./LeaderboardItem";
import { Donation } from "../typings/type";
import { useQuery } from "urql";
import { Radio, RadioGroup, Stack } from "@chakra-ui/react";

const DonationsQuery = `
query Query($orderBy: OrderByParams) {
    donations(orderBy: $orderBy) {
      count
      id
      displayName
      createdAt
      message
      team
    }
  }`;

type DonationsQueryRes = {
  donations: Donation[];
};

type Props = {};

const Leaderboard = (props: Props) => {
  const [field, setOrderByField] = useState("createdAt");

  const [{ data, fetching, error }] = useQuery<DonationsQueryRes>({
    query: DonationsQuery,
    variables: {
      orderBy: {
        field,
        direction: "desc",
      },
    },
  });

  if (fetching) return <div>Fetching...</div>;
  if (error) return <div>Error: {error.message}</div>;

  return (
    <Box w="100%">
      <VStack spacing={4}>
        <Heading as="h1" size="2xl">
          LEADERBOARD
        </Heading>

        <RadioGroup onChange={setOrderByField} value={field}>
          <Stack direction="row">
            <Radio value="createdAt">Most Recent</Radio>
            <Radio value="count">Most Pounds</Radio>
          </Stack>
        </RadioGroup>

        {data?.donations.map((donation) => (
          <LeaderboardItem donation={donation} />
        ))}
      </VStack>
    </Box>
  );
};

export default Leaderboard;
