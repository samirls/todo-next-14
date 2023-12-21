"use client";

import { Link } from "@chakra-ui/next-js";
import { Box } from "@chakra-ui/react";
import React from "react";
import DrawerComponent from "./DrawerComponent";
import { FcTodoList } from "react-icons/fc";
//import { usePathname } from "next/navigation";

function Topnav() {

  //const pathname = usePathname();

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

      <Box gap={10} fontSize="1.3rem" display={{ base: "none", lg: "flex" }}>

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
          </>


          <>
            <Link href="/tasks" color="blue.400" _hover={{ color: "blue.600" }}>
              Tasks
            </Link>
            <Link
              href="/friends"
              color="blue.400"
              _hover={{ color: "blue.600" }}
            >
              Friends
            </Link>
            <Link
              href="/logout"
              color="blue.400"
              _hover={{ color: "blue.600" }}
            >
              Logout
            </Link>
          </>

      </Box>
      <DrawerComponent />
    </Box>
  );
}

export default Topnav;
