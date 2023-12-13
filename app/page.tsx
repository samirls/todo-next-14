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

export default function Home() {
  return (
    <main className={styles.main}>
      <Box
        fontSize="2rem"
        fontWeight="500"
        display="flex"
        justifyContent="center"
        pt="50px"
      >
        Welcome!
      </Box>
      <Box fontSize="1.3rem" display="flex" justifyContent="center">
        This is a WebApp to help organize your family's tasks. What needs to be
        done? Write it here, and everyone will know!
      </Box>
      <Box
        fontSize="1.5rem"
        fontWeight="500"
        display="flex"
        justifyContent="center"
        pt="50px"
      >
        What does this app do?
      </Box>
      <List
        spacing={3}
        fontSize="1.5rem"
        display="flex"
        justifyContent="center"
        textAlign="justify"
      >
        <Box>
          <ListItem>
            <ListIcon as={MdCheckCircle} color="green.500" />
            You can organize your family's tasks in this app, such as "buy
            butter at the grocery store."
          </ListItem>
          <ListItem>
            <ListIcon as={MdCheckCircle} color="green.500" />
            Add family members to the app so they can read, write, or delete
            tasks.
          </ListItem>
          <ListItem>
            <ListIcon as={MdCheckCircle} color="green.500" />
            Say goodbye to notes on the fridge or paper shopping lists!
          </ListItem>
          <ListItem>
            <ListIcon as={MdCheckCircle} color="green.500" />
            Don't forget to open the app and check the tasks daily!
          </ListItem>
        </Box>
      </List>
    </main>
  );
}
