/* eslint-disable react/no-unescaped-entities */
"use client";

import styles from "./page.module.css";
import { Box } from "@chakra-ui/react";
import {
  List,
  ListItem,
  ListIcon,
  OrderedList,
  UnorderedList,
} from "@chakra-ui/react";
import { MdCheckCircle } from "react-icons/md";
import { FaTools } from "react-icons/fa";

export default function Home() {
  return (
    <main className={styles.main}>
      <Box
        fontSize={{ base: "1.8rem", lg: "2rem" }}
        fontWeight="500"
        display="flex"
        justifyContent="center"
        pt={{ base: "150px", lg: "170px" }}
      >
        Welcome!
      </Box>
      <Box
        fontSize={{ base: "1.2rem", lg: "1.3rem" }}
        display="flex"
        justifyContent="center"
        textAlign="justify"
        px={{ base: "20px", lg: "0px" }}
      >
        This is a WebApp to help you organize your Tasks. What needs to be done?
        Write it here, envite people, and share what you are doing!
      </Box>
      <Box
        fontSize={{ base: "1.6rem", lg: "1.6rem" }}
        fontWeight="500"
        display="flex"
        justifyContent="center"
        pt="50px"
      >
        What does this App do?
      </Box>
      <List
        spacing={3}
        fontSize="1.5rem"
        display="flex"
        justifyContent="center"
        textAlign="justify"
      >
        <Box
          fontSize={{ base: "1.2rem", lg: "1.3rem" }}
          px={{ base: "20px", lg: "0px" }}
        >
          <ListItem>
            <ListIcon as={MdCheckCircle} color="green.500" />
            You can organize your family's Tasks in this App, such as "buy
            butter at the grocery store."
          </ListItem>
          <ListItem>
            <ListIcon as={MdCheckCircle} color="green.500" />
            Add Friends to the App so they can read, write, or delete Tasks.
          </ListItem>
          <ListItem>
            <ListIcon as={MdCheckCircle} color="green.500" />
            Say goodbye to notes on the fridge or paper shopping lists!
          </ListItem>
          <ListItem>
            <ListIcon as={MdCheckCircle} color="green.500" />
            Don't forget to open the App and check the Tasks daily!
          </ListItem>
        </Box>
      </List>
      <Box
        fontSize={{ base: "1.6rem", lg: "1.6rem" }}
        fontWeight="500"
        display="flex"
        justifyContent="center"
        pt="50px"
      >
        You can Contribute:
      </Box>
      <List
        spacing={3}
        fontSize="1.5rem"
        display="flex"
        justifyContent="center"
        textAlign="justify"
        pb="100px"
      >
        <Box
          fontSize={{ base: "1.2rem", lg: "1.3rem" }}
          px={{ base: "20px", lg: "0px" }}
        >
          <ListItem>
            <ListIcon as={FaTools} color="gray.500" />
            Give some feedback.
          </ListItem>
          <ListItem>
            <ListIcon as={FaTools} color="gray.500" />
            Report Bugs and Issues.
          </ListItem>
          <ListItem>
            <ListIcon as={FaTools} color="gray.500" />
            Suggest new ideas.
          </ListItem>
          <ListItem>
            <ListIcon as={FaTools} color="gray.500" />
            Contribute with Code.
          </ListItem>
        </Box>
      </List>
    </main>
  );
}
