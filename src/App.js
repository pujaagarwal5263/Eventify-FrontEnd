// import { Routes, Route } from "react-router-dom";
// import FirstPage from "./components/FirstPage";
// import Dashboard from "./components/Dashboard";
// import AboutPage from "./components/About";
// import ContactPage from "./components/Contact";

// function App() {
//   return (
//     <ChakraProvider>
//       <Routes>
//         <Route path="/" element={<FirstPage />} />
//         <Route path="dashboard" element={<Dashboard />} />
//         <Route path="about" element={<AboutPage />} />
//         <Route path="contact" element={<ContactPage />} />

//         <Route />
//       </Routes>
//     </ChakraProvider>
//   );
// }

// export default App;

import React from "react";
import Home from "./components/Home";
import {
  ChakraProvider,
  Button,
  Box,
  Text,
  Flex,
  HStack,
  VStack,
  Link,
} from "@chakra-ui/react";

import "./App.css";
import { ExternalLinkIcon, WarningIcon } from "@chakra-ui/icons";
import Back from "./components/Back";

const App = () => {
  return (
    <ChakraProvider>
      <Box bg="#131316" w="100%" h="100vh">
        <Box h="70px" borderBottom="1px solid white">
          <Box px="24px" py="16px" marginLeft="80px" marginRight="80px">
            <HStack display="flex" justifyContent="space-between">
              <Box>
                <Text as="b" fontSize="3xl" color="white">
                  Eventify
                </Text>
              </Box>

              <Link
                href="https://chakra-ui.com"
                isExternal
                color="white"
                // marginLeft="1090px"
              >
                Coming Events <ExternalLinkIcon mx="12px" />
              </Link>
            </HStack>
            <Back />
          </Box>
        </Box>
        {/* <Box bg="red">
          <Text>Sign In to Grafbase</Text>
        </Box> */}
        <Home />
      </Box>
    </ChakraProvider>
    // <div className="App">
    //   <Home />
    // </div>
  );
};

export default App;