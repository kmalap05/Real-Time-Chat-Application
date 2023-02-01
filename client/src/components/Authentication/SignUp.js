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
import { GoSignIn } from "react-icons/go";
import { AiOutlineEyeInvisible, AiOutlineEye } from "react-icons/ai";

const SignUp = () => {
  const [show, setShow] = React.useState(false);
  const handleShow = () => setShow(!show);

  const [fullName, setFullName] = React.useState("");
  const handleName = (event) => setFullName(event.target.value);

  const [emailId, setEmailId] = React.useState("");
  const handleEmail = (event) => setEmailId(event.target.value);

  const [password, setPassword] = React.useState("");
  const handlePassword = (event) => setPassword(event.target.value);

  const [confirmPassword, setConfirmPassword] = React.useState("");
  const handleConfirmPassword = (event) =>
    setConfirmPassword(event.target.value);

  const postPic = (pics) => {};

  const submitHandler = () => {};

  return (
    <>
      <VStack align="start">
        <FormControl isRequired>
          <FormLabel mb="6px">Full Name:</FormLabel>
          <Input
            className="input"
            maxW="md"
            value={fullName}
            onChange={handleName}
            placeholder="Enter Your Full Name Here"
            size="sm"
          />
        </FormControl>

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

        <FormControl isRequired>
          <FormLabel mb="6px" mt="7px">
            Confirm Password:
          </FormLabel>
          <InputGroup>
            <Input
              className="input"
              maxW="md"
              value={confirmPassword}
              onChange={handleConfirmPassword}
              placeholder="Enter Your Password Here"
              size="sm"
              type={show ? "text" : "password"}
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

        <FormControl id="pic">
          <FormLabel mb="6px" mt="7px">
            Upload Your Picture:
          </FormLabel>
          <Input
            className="input"
            maxW="md"
            onChange={(e) => postPic(e.target.files[0])}
            type="file"
            size="sm"
            border="none"
            accept="image/*"
          />
        </FormControl>

        <Box
          m="0"
          p="0"
          display="flex"
          alignItems="center"
          justifyContent="center"
          width="100%"
        >
          <Button
            rightIcon={<GoSignIn />}
            colorScheme="blue"
            variant="solid"
            onClick={submitHandler}
            width="50%"
          >
            SignUp
          </Button>
        </Box>
      </VStack>
    </>
  );
};

export default SignUp;
