/* eslint-disable prettier/prettier */
/* eslint-disable react-native/no-inline-styles */
/* eslint-disable quotes */

import {
  StyleSheet,
  Text,
  View,
  Dimensions,
  TouchableOpacity,
} from "react-native";
import React from "react";
import Lottie from "lottie-react-native";

const windowWidth = Dimensions.get("window").width;
const windowHeight = Dimensions.get("window").height;

const CancelSuccess = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <View>
        <View style={{ alignItems: "center", paddingTop: 100, height: 350 }}>
          <Lottie source={require("../assets/success.json")} autoPlay loop />
        </View>
        <View style={styles.details}>
          <Text style={styles.text}>Order cancelled successfully </Text>
          <Text style={styles.textDetails}>
            Your order have been cancelled successfully {"\n"} proceed to get a
            new order
          </Text>
          <View style={styles.cta}>
            <TouchableOpacity
              style={styles.btnPrimary}
              onPress={() => navigation.navigate("Payment")}
            >
              <Text style={styles.reg}>Back to home</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </View>
  );
};

export default CancelSuccess;

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#fff",
    width: windowWidth,
    height: windowHeight,
    paddingHorizontal: 30,
  },
  text: {
    fontSize: 28,
    fontWeight: "900",
    color: "#212E5A",
    textAlign: "center",
  },
  details: {
    alignContent: "center",
    paddingHorizontal: 30,
    paddingVertical: 20,
  },
  textDetails: {
    textAlign: "center",
    lineHeight: 20.89,
    fontSize: 14,
    paddingVertical: 10,
    color: "#828282",
  },
  cta: {
    paddingTop: 30,
  },
  btnPrimary: {
    paddingHorizontal: 40,
    paddingVertical: 20,
    backgroundColor: "#212E5A",
    borderRadius: 10,
  },
  btnSec: {
    paddingHorizontal: 40,
    paddingVertical: 20,
    backgroundColor: "#f9f9f9",
    borderRadius: 10,
    marginLeft: 10,
  },
  reg: {
    color: "#fff",
    fontSize: 16,
    textAlign: "center",
  },
  login: {
    fontSize: 16,
  },
});
