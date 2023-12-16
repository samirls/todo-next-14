/* eslint-disable react/no-unescaped-entities */
"use client";

import { Link } from "@chakra-ui/next-js";
import {
  Box,
  Button,
  Flex,
  FormControl,
  FormLabel,
  Input,
  Stack,
  useToast,
  Select,
  Grid,
} from "@chakra-ui/react";
import React, { useState } from "react";
import { ChangeEvent, FormEvent } from "react";
import { useRouter } from "next/navigation";
import { register } from "../lib/actions";

function Register() {
  const toast = useToast();
  const [isLoading, setIsLoading] = useState(false);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [passwordConfirmation, setPasswordConfirmation] = useState("");
  const [sex, setSex] = useState("");
  const [color, setColor] = useState("");
  const [age, setAge] = useState("");

  const router = useRouter();

  const handleSubmit = async (event: FormEvent) => {
    event.preventDefault();

    if (password !== passwordConfirmation) {
      toast({
        title: "Password and confirmation do not match",
        position: "top",
        status: "error",
        duration: 5000,
        isClosable: true,
      });
      return;
    }

    setIsLoading(true);
    await register(name, email, password, sex, color, age);
    setIsLoading(false);

    setEmail("");
    setPassword("");
    toast({
      title: "Registration completed!",
      position: "top",
      description: "You must login now.",
      status: "success",
      duration: 5000,
      isClosable: true,
    });
    router.push("/login");
  };

  return (
    <Box
      pb={{ base: "110px", lg: "150px" }}
      pt={{ base: "150px", lg: "170px" }}
    >
      <Flex align="center" justify="center">
        <Stack spacing={8} mx="auto">
          <Stack align="center">
            <Box
              fontSize="2rem"
              fontWeight="500"
              display="flex"
              justifyContent="center"
            >
              Register
            </Box>
          </Stack>
          <form onSubmit={handleSubmit}>
          <Box rounded="lg" bg="gray.100" boxShadow="lg" p={8}>
            <Stack spacing={4}>
              <Grid templateColumns={{ base: "1fr", lg: "1fr 1fr" }} gap={6}>
                
                  <FormControl isRequired>
                    <FormLabel>Name</FormLabel>
                    <Input
                      type="text"
                      bg="white"
                      onChange={(e) => setName(e.target.value)}
                      value={name}
                    />
                  </FormControl>
                  <FormControl isRequired>
                    <FormLabel>Email</FormLabel>
                    <Input
                      type="email"
                      bg="white"
                      onChange={(e) => setEmail(e.target.value)}
                      value={email}
                    />
                  </FormControl>
                  <FormControl isRequired>
                    <FormLabel>Password</FormLabel>
                    <Input
                      type="password"
                      bg="white"
                      onChange={(e) => setPassword(e.target.value)}
                      value={password}
                    />
                  </FormControl>
                  <FormControl isRequired>
                    <FormLabel>Confirm Password</FormLabel>
                    <Input 
                      type="password"
                      bg="white"
                      onChange={(e) => setPasswordConfirmation(e.target.value)}
                      value={passwordConfirmation}
                    />
                  </FormControl>
                  <FormControl isRequired>
                    <FormLabel>Sex</FormLabel>
                    <Select
                      placeholder="Select option"
                      bg="white"
                      onChange={(e) => setSex(e.target.value)}
                    >
                      <option value="male">Male</option>
                      <option value="female">Female</option>
                      <option value="noAnswer">Don't answer</option>
                    </Select>
                  </FormControl>
                  <FormControl isRequired>
                    <FormLabel>Color</FormLabel>
                    <Select
                      placeholder="Select option"
                      bg="white"
                      onChange={(e) => setColor(e.target.value)}
                      required
                    >
                      <option value="blue">Blue</option>
                      <option value="pink">Pink</option>
                      <option value="green">Green</option>
                    </Select>
                  </FormControl>
                  <FormControl isRequired>
                    <FormLabel>Age</FormLabel>
                    <Select
                      placeholder="Select option"
                      bg="white"
                      onChange={(e) => setAge(e.target.value)}
                      required
                    >
                      <option value="18orLess">18 or less</option>
                      <option value="19to25">19 to 25</option>
                      <option value="26to35">26 to 35</option>
                      <option value="36to45">36 to 45</option>
                      <option value="45orAbove">45 or above</option>
                    </Select>
                  </FormControl>
                
              </Grid>
              <Stack spacing={10}>
                <Stack
                  direction={{ base: "column", sm: "row" }}
                  align="start"
                  justify="space-between"
                >
                  <Box>
                    Already have an account?{" "}
                    <Link href="/login" color="blue.400">
                      Login
                    </Link>
                  </Box>
                </Stack>
                <Button
                  loadingText="Conectando..."
                  bg="blue.400"
                  color="white"
                  _hover={{
                    bg: "blue.600",
                  }}
                  type="submit"
                  isLoading={isLoading}
                >
                  Register
                </Button>
                
              </Stack>
            </Stack>
          </Box>
          </form>
        </Stack>
      </Flex>
    </Box>
  );
}

export default Register;
