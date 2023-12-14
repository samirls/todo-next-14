"use client";

import { Link } from "@chakra-ui/next-js";
import { Box, useDisclosure } from "@chakra-ui/react";
import React from "react";
import { IoMdMenu } from "react-icons/io";
import DrawerComponent from "./DrawerComponent";
import { FcTodoList } from "react-icons/fc";

function Topnav() {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <Box
      display="flex"
      width="100vw"
      justifyContent="space-between"
      alignItems="center"
      py="50px"
      px={{ base: "15px", lg: "80px" }}
      boxShadow="md"
      position="fixed"
      top={0}
      height="120px"
      bg="white"
      zIndex="9"
    >
      <Link href="/" color="black.900" _hover={{ color: "blue.600" }}>
        <Box fontSize={{ base: "1.8rem", lg: "2rem" }} fontWeight="700" display='flex' alignItems='center' gap={2}>
          <FcTodoList />
          Task List App
        </Box>
      </Link>
      <Box gap={10} fontSize="1.3rem" display={{ base: "none", lg: "flex" }}>
        <Link href="/" color="blue.400" _hover={{ color: "blue.600" }}>
          Home
        </Link>
        <Box>Login</Box>
        <Box>Register</Box>
        <Link href="/tasks" color="blue.400" _hover={{ color: "blue.600" }}>
          Tasks
        </Link>
      </Box>
      <Box
        position="absolute"
        fontSize="3rem"
        top={8}
        right={3}
        color="black"
        display={{ base: "block", lg: "none" }}
        onClick={() => onOpen()}
      >
        <IoMdMenu />
      </Box>
      <DrawerComponent isOpen={isOpen} onClose={onClose} />
    </Box>
  );
}

export default Topnav;
