/* eslint-disable prettier/prettier */
/* eslint-disable no-unused-vars */
/* eslint-disable react/self-closing-comp */
/* eslint-disable quotes */

/* eslint-disable react-native/no-inline-styles */

import { StyleSheet, Dimensions, ImageBackground } from "react-native";
import React, { useEffect } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";

const { width, height } = Dimensions.get("window");

const Onboarding = ({ navigation }) => {
  useEffect(() => {
    setTimeout(() => {
      handleGetToken();
    }, 3000);
  });

  const handleGetToken = async () => {
    const dataToken = await AsyncStorage.getItem("AccessToken");
    if (!dataToken) {
      navigation.navigate("Welcome");
    } else {
      navigation.navigate("Home");
    }
  };
  return (
    <ImageBackground
      source={require("../assets/launch_screen.png")}
      style={styles.container}
      imageStyle={{ opacity: 1 }}
    ></ImageBackground>
  );
};

export default Onboarding;

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#fff",
    height: height,
    flex: 1,
    alignItems: "center",
    paddingHorizontal: 30,
    paddingVertical: 50,
    resizeMode: "cover",
    width: width,
  },
  text: {
    fontSize: 24,
    fontWeight: "600",
    marginTop: 50,
    color: "#3E90FC",
  },
  btnLogin: {
    backgroundColor: "#3E90FC",
    width: 300,
    paddingHorizontal: 30,
    paddingVertical: 15,
    borderRadius: 15,
    marginTop: 20,
  },
  btnRegister: {
    width: 300,
    paddingHorizontal: 30,
    paddingVertical: 15,
    borderRadius: 15,
    marginTop: 20,
    borderWidth: 1,
    borderColor: "#3E90FC",
  },
  btnTextRegister: {
    color: "#3E90FC",
    fontSize: 18,
    fontWeight: "600",
    textAlign: "center",
  },
  btnText: {
    color: "#fff",
    fontSize: 18,
    fontWeight: "600",
    textAlign: "center",
  },
  img: {
    paddingHorizontal: 30,
    width: 300,
    height: 300,
    marginVertical: 50,
  },
});
