"use client";

import { Link } from "@chakra-ui/next-js";
import { Box, Button } from "@chakra-ui/react";
import React, { useState } from "react";
import DrawerComponent from "./DrawerComponent";
import { FcTodoList } from "react-icons/fc";

interface TopnavProps {
  userEmail: string | undefined | null;
}

function Topnav({ userEmail }:TopnavProps) {

  console.log(userEmail);

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
      <Link href={!userEmail ? "/" : ''} color="black.900" _hover={{ color: "blue.600" }}>
        <Box
          fontSize={{ base: "1.8rem", lg: "2rem" }}
          fontWeight="700"
          display="flex"
          alignItems="center"
          gap={2}
        >
          <FcTodoList />
          Task List App
        </Box>
      </Link>
      <Box gap={10} fontSize="1.3rem" display={{ base: "none", lg: "flex" }}>
        {!userEmail && (
          <>
            <Link href="/" color="blue.400" _hover={{ color: "blue.600" }}>
              Home
            </Link>
            <Link href="/login" color="blue.400" _hover={{ color: "blue.600" }}>
              Login
            </Link>
            <Link
              href="/register"
              color="blue.400"
              _hover={{ color: "blue.600" }}
            >
              Register
            </Link>
            <Link href="/tasks" color="blue.400" _hover={{ color: "blue.600" }}>
              Tasks
            </Link>
          </>
        )}
        <Link href="/members" color="blue.400" _hover={{ color: "blue.600" }}>
          Members
        </Link>
        <Link href="/logout" color="blue.400" _hover={{ color: "blue.600" }}>
          Logout
        </Link>
      </Box>
      <DrawerComponent />
    </Box>
  );
}

export default Topnav;
