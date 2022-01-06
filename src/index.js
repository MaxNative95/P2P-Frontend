import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { ChakraProvider, extendTheme } from "@chakra-ui/react";
import { BrowserRouter } from "react-router-dom";
import { Router } from './router/index';
//import { MoralisProvider } from "react-moralis";

const colors = {
  brand: {
    900: '#1a365d',
    800: '#153e75',
    700: '#2a69ac',
  },
}

const theme = extendTheme({
  colors, config: {
    initialColorMode: 'dark'
  }
});

//const appId = "pqs6dzx882BUL9HAB3gjbn4yU9jhltAzbgESOaph";
//const serverUrl = "https://hnmyb5qk1hbe.usemoralis.com:2053/server";

ReactDOM.render(
  <BrowserRouter>
    <ChakraProvider theme={theme}>
      <Router />
    </ChakraProvider>
  </BrowserRouter>,
  document.getElementById('root')
);

