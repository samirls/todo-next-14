"use client";

import {
  Box,
  Drawer,
  DrawerBody,
  DrawerCloseButton,
  DrawerContent,
} from "@chakra-ui/react";
import React from "react";
import { usePathname } from "next/navigation";
import { Link } from "@chakra-ui/next-js";
import { FcTodoList } from "react-icons/fc";
import { IoPersonAddSharp } from "react-icons/io5";
import { BiSolidLogIn } from "react-icons/bi";
import { FaHome } from "react-icons/fa";
import { BiSolidBeenHere } from "react-icons/bi";

interface DrawerComponentProps {
  isOpen: boolean;
  onClose: () => void;
}

function DrawerComponent({ isOpen, onClose }: DrawerComponentProps) {
  const pathname = usePathname();

  return (
    <Drawer isOpen={isOpen} placement="left" onClose={onClose}>
      <DrawerContent
        bg="whiteAlpha.900"
        w="200px"
        maxWidth="200px"
        boxShadow="dark-lg"
      >
        <DrawerBody
          display="flex"
          flexDir="column"
          justifyContent="center"
          height="300px"
          p={3}
          bg="white"
        >
          <Box
            gap={10}
            fontSize="1.3rem"
            display="flex"
            flexDir="column"
            justifyContent="center"
          >
            <Link
              href="/"
              color="blue.500"
              _hover={{ color: "blue.600" }}
              onClick={onClose}
              display="flex"
              alignItems="center"
              gap={2}
              bg={pathname === "/" ? 'teal.100' : ""}
              borderRadius='10px'
            >
              <FaHome />
              Home 
            </Link>
            <Link
              href="/login"
              color="blue.500"
              _hover={{ color: "blue.600" }}
              onClick={onClose}
              display="flex"
              alignItems="center"
              gap={2}
              bg={pathname === "/login" ? 'teal.100' : ""}
              borderRadius='10px'
            >
              <BiSolidLogIn />
              Login
            </Link>
            <Link
              href="/register"
              color="blue.500"
              _hover={{ color: "blue.600" }}
              onClick={onClose}
              display="flex"
              alignItems="center"
              gap={2}
              bg={pathname === "/register" ? 'teal.100' : ""}
              borderRadius='10px'
            >
              <IoPersonAddSharp />
              Register
            </Link>
            <Link
              href="/tasks"
              color="blue.500"
              _hover={{ color: "blue.600" }}
              onClick={onClose}
              display="flex"
              alignItems="center"
              gap={2}
              bg={pathname === "/tasks" ? 'teal.100' : ""}
              borderRadius='10px'
            >
              <FcTodoList />
              Tasks
            </Link>
          </Box>
        </DrawerBody>
      </DrawerContent>
    </Drawer>
  );
}

export default DrawerComponent;