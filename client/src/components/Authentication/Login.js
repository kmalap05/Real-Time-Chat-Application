import React from "react";
import {
  Button,
  Input,
  VStack,
  FormControl,
  FormLabel,
  InputGroup,
  InputRightElement,
  Box,
} from "@chakra-ui/react";
import { FiLogIn } from "react-icons/fi";
import { FaUserCircle } from "react-icons/fa";
import { AiOutlineEyeInvisible, AiOutlineEye } from "react-icons/ai";

const Login = () => {
  const [show, setShow] = React.useState(false);
  const handleShow = () => setShow(!show);

  const [emailId, setEmailId] = React.useState("");
  const handleEmail = (event) => setEmailId(event.target.value);

  const [password, setPassword] = React.useState("");
  const handlePassword = (event) => setPassword(event.target.value);

  const submitHandler = () => {};

  return (
    <>
      <VStack align="start">
        <FormControl isRequired>
          <FormLabel mb="6px" mt="7px">
            Email ID:
          </FormLabel>
          <Input
            className="input"
            maxW="md"
            value={emailId}
            onChange={handleEmail}
            placeholder="Enter Your Email ID Here"
            size="sm"
            required
          />
        </FormControl>

        <FormControl isRequired>
          <FormLabel mb="6px" mt="7px">
            Password:
          </FormLabel>
          <InputGroup>
            <Input
              className="input"
              maxW="md"
              value={password}
              onChange={handlePassword}
              placeholder="Enter Your Password Here"
              size="sm"
              type={show ? "text" : "password"}
              required
            />
            <InputRightElement width="50px" height="100%" bgColor="none">
              <Button
                fontSize="90px"
                bgColor="whiteAlpha.50"
                position="relative"
                top="-10px"
                _hover="bgColor: whiteAlpha.500"
                _active="bgColor: whiteAlpha.500"
                onClick={handleShow}
              >
                {show ? <AiOutlineEye /> : <AiOutlineEyeInvisible />}
              </Button>
            </InputRightElement>
          </InputGroup>
        </FormControl>

        <Box
          display="flex"
          alignItems="center"
          justifyContent="center"
          width="100%"
        >
          <Button
            rightIcon={<FiLogIn />}
            colorScheme="blue"
            variant="solid"
            type="submit"
            onClick={submitHandler}
          >
            Login
          </Button>
          <Button
            rightIcon={<FaUserCircle />}
            colorScheme="red"
            variant="solid"
            type="submit"
            onClick={() => {
              setEmailId("guest@example.com");
              setPassword("123456");
            }}
            ml="20px"
          >
            Get Guest Credentials
          </Button>
        </Box>
      </VStack>
    </>
  );
};

export default Login;
