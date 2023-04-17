import React from "react";
import { Box, Heading, VStack } from "@chakra-ui/layout";
import LeaderboardItem from "./LeaderboardItem";
import { count } from "console";

type Props = {};

const Leaderboard = (props: Props) => {
  return (
    <Box w="100%">
      <Heading>LEADERBOARD</Heading>
      <VStack spacing={4}>
        <LeaderboardItem
          donation={{
            displayName: "Leaderboard",
            count: 300,
            createdAt: "12/13/2030",
            team: "team",
            message: "Leader",
          }}
        />
      </VStack>
    </Box>
  );
};

export default Leaderboard;
