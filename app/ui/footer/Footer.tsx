"use client";

import React from "react";
import { Box } from "@chakra-ui/react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { Link } from "@chakra-ui/next-js";

function Footer() {
  return (
    <Box
      position="fixed"
      bottom={0}
      width="100vw"
      height={{base: '70px', lg:"100px"}}
      bg="gray.100"
      display="flex"
      flexDir="column"
      justifyContent="space-around"
      alignItems="center"
    >
      <Box fontSize="1.2rem">Created by samirls</Box>
      <Box display="flex" fontSize="2rem" gap={5}>
        <Box color="purple.600" _hover={{color: 'purple.700'}}>
          <Link
            href="https://github.com/samirls"
            target="_blank"
            rel="noreferrer"
          >
            <FaGithub />
          </Link>
        </Box>
        <Box color="blue.600" _hover={{color: 'blue.700'}}>
          <Link
            href="https://www.linkedin.com/in/samir-laguardia/"
            target="_blank"
            rel="noreferrer"
          >
            <FaLinkedin />
          </Link>
        </Box>
      </Box>
    </Box>
  );
}

export default Footer;
