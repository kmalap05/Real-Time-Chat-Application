import React from "react";
import "./HomePage.css";
import {
  Box,
  Container,
  Tabs,
  TabList,
  TabPanels,
  Tab,
  TabPanel,
  Text,
} from "@chakra-ui/react";
import Login from "../components/Authentication/Login";
import SignUp from "../components/Authentication/SignUp";

const HomePage = () => {
  return (
    <>
      <Container maxW="500px" bg="whiteAlpha.900" className="container">
        <Box className="logo">
          <Text className="logo-text">Chitchat</Text>
        </Box>
        <Box>
          <Tabs variant="soft-rounded" colorScheme="blue">
            <TabList className="tab-list">
              <Tab>LOGIN</Tab>
              <Tab>SIGNUP</Tab>
            </TabList>
            <TabPanels>
              {/* LOGIN */}
              <TabPanel className="tab-panel-login">
                <Login />
              </TabPanel>
              {/* SIGNUP */}
              <TabPanel className="tab-panel-signup">
                <SignUp />
              </TabPanel>
            </TabPanels>
          </Tabs>
        </Box>
      </Container>
    </>
  );
};

export default HomePage;
