/* eslint-disable prettier/prettier */
/* eslint-disable react-native/no-inline-styles */
/* eslint-disable react-hooks/rules-of-hooks */
import {
  StyleSheet,
  Text,
  View,
  Image,
  Dimensions,
  TouchableOpacity,
} from "react-native";
import React from "react";

const windowWidth = Dimensions.get("window").width;
const windowHeight = Dimensions.get("window").height;

const Welcome = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <View>
        <View style={{ alignItems: "center", paddingTop: 50 }}>
          <Image
            source={require("../assets/1.png")}
            style={{ width: 300, height: 300 }}
          />
        </View>
        <View style={styles.details}>
          <Text style={styles.text}>Earn good money delivering packages</Text>
          <Text style={styles.textDetails}>
            Help users pickup their goods from vendors and have it delivered to
            them
          </Text>
          <View style={styles.cta}>
            <TouchableOpacity
              style={styles.btnPrimary}
              onPress={() => navigation.navigate("Register")}
            >
              <Text style={styles.reg}>Register</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.btnSec}
              onPress={() => navigation.navigate("Login")}
            >
              <Text style={styles.login}>Sign in</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </View>
  );
};

export default Welcome;

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#fff",
    width: windowWidth,
    height: windowHeight,
  },
  text: {
    fontSize: 28,
    fontWeight: "900",
    color: "#212E5A",
    textAlign: "center",
  },
  details: {
    alignContent: "center",
    paddingHorizontal: 50,
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
    paddingTop: 50,
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
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
  },
  login: {
    fontSize: 16,
    color: "#212E5A",
  },
});
