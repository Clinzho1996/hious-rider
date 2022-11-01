/* eslint-disable quotes */
/* eslint-disable prettier/prettier */
import "react-native-gesture-handler";
import * as React from "react";
import SplashScreen from "react-native-splash-screen";
import { Provider as PaperProvider } from "react-native-paper";
import { Component } from "react";

import { NavigationContainer } from "@react-navigation/native";
import AppStack from "./navigations/AppStack";

export default class App extends Component {
  componentDidMount() {
    SplashScreen.hide();
  }
  render() {
    return (
      <PaperProvider>
        <NavigationContainer>
          <AppStack />
        </NavigationContainer>
      </PaperProvider>
    );
  }
}
