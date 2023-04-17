import { Avatar, Flex, Text, Badge } from "@chakra-ui/react";
import React from "react";
import { Donation } from "../typings/type";
import formatDate from "../utils/formatDate";

interface Props {
  donation: Donation;
}

const LeaderboardItem = ({ donation }: Props) => {
  return (
    <Flex
      boxShadow="md"
      p={3}
      bg="white"
      borderRadius="lg"
      maxWidth="xl"
      w="100%"
    >
      <Avatar size="lg" />
      <Flex justifyContent="space-between" w="100%">
        <Flex flexDirection="column" textAlign="left" ml="6">
          <Text
            fontWeight="medium"
            color="#EF7517"
            fontSize="sm"
            textTransform="uppercase"
          >
            {donation.team}
          </Text>
          <Text fontWeight="bold" color="#00AACC">
            {donation.displayName}
          </Text>
          <Text fontSize="sm">{donation.message}</Text>
        </Flex>
        <Flex
          flexDirection="column"
          justifyContent="space-around"
          textAlign="right"
        >
          <Badge
            backgroundColor="#00AACC"
            borderRadius="md"
            color="white"
            py={1.5}
            px={2}
            textTransform="lowercase"
            textAlign="center"
            as="div"
          >
            {donation.count.toLocaleString()} pounds
          </Badge>
          <Text fontSize="xs">{formatDate(donation.createdAt)}</Text>
        </Flex>
      </Flex>
    </Flex>
  );
};

export default LeaderboardItem;
