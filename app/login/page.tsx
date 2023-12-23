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
} from "@chakra-ui/react";
import React, { useState } from "react";
import { ChangeEvent, FormEvent } from "react";
import { useFormState, useFormStatus } from "react-dom";
import { authenticate } from "@/app/lib/actions";
import { useRouter } from "next/navigation";

function Login() {
  const toast = useToast();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const router = useRouter();

  const handleSubmit = async (event: FormEvent) => {
    event.preventDefault();
    try {
      if (email === "" || password === "") {
        return toast({
          title: "Enter your e-mail and password",
          position: "top",
          status: "error",
          duration: 5000,
          isClosable: true,
        });
      }

      setIsLoading(true);
      await authenticate({ email, password });
      setIsLoading(false);


      setEmail("");
      setPassword("");
      toast({
        title: "You are logged in!",
        position: "top",
        status: "success",
        duration: 4000,
        isClosable: true,
      });
      router.push("/tasks");
    } catch (error) {
      setIsLoading(false);
      toast({
        title: "Error",
        description: `${error}`,
        position: "top",
        status: "error",
        duration: 5000,
        isClosable: true,
      });
      console.log(error);
    }
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
              Login
            </Box>
          </Stack>
          <Box rounded="lg" bg="gray.100" boxShadow="lg" p={8}>
            <Stack spacing={4}>
              <FormControl id="login">
                <FormLabel>Email</FormLabel>
                <Input
                  type="email"
                  name="email"
                  id="email"
                  bg="white"
                  onChange={(e) => setEmail(e.target.value)}
                  value={email}
                />
              </FormControl>
              <FormControl id="password">
                <FormLabel>Password</FormLabel>
                <Input
                  type="password"
                  name="password"
                  id="password"
                  bg="white"
                  onChange={(e) => setPassword(e.target.value)}
                  value={password}
                />
              </FormControl>
              <Stack spacing={10}>
                <Stack
                  direction={{ base: "column", sm: "row" }}
                  align="start"
                  justify="space-between"
                >
                  <Link href="/forgot-password" color="blue.400">
                    Forgot your password?
                  </Link>
                </Stack>
                <Button
                  loadingText="Conectando..."
                  bg="blue.400"
                  color="white"
                  _hover={{
                    bg: "blue.600",
                  }}
                  onClick={handleSubmit}
                  isLoading={isLoading}
                >
                  Login
                </Button>
              </Stack>
            </Stack>
          </Box>
        </Stack>
      </Flex>
    </Box>
  );
}

export default Login;
