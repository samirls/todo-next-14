'use client'

import { Box, Button, Grid, useDisclosure } from "@chakra-ui/react";
import React from "react";
import DeleteFriendModal from "./modals/DeleteFriendModal";

interface FriendProps {
  friend: singleFriend;
  loggedUserId: number | undefined;
}

interface singleFriend {
  user_id: number //this is the user_id from the friend
  name: string //this is the name from the friend
}


function Friend({friend, loggedUserId}:FriendProps) {

  const { isOpen, onOpen, onClose } = useDisclosure();

  console.log(friend)

  return (

    <Box
      display="flex"
      justifyContent="space-between"
      alignItems="center"
      height="60px"
      mx={{base: '10px', lg:"100px"}}
      px={{base: '5px', lg: "15px"}}
      boxShadow="md"
      borderRadius="lg"
      border='1px'
      borderColor='gray.100'
      mb='15px'
    >
      <Box>
        <Box fontSize={{base: '1rem', lg:"1.2rem"}}>{friend.name.toUpperCase()}</Box>
        <Box fontSize={{base: '0.8rem', lg:"1rem"}}>Id: {friend.user_id}</Box>
      </Box>
      <Box display="flex" gap={{base: 1, lg: 6}} fontSize={{base: '1rem', lg:"1.2rem"}}>
        <Button colorScheme="red" onClick={onOpen} size='sm'>Delete</Button>
        <DeleteFriendModal isOpen={isOpen} onClose={onClose} friend={friend} loggedUserId={loggedUserId}/>
      </Box>
    </Box>
  );
}

export default Friend;
