/* eslint-disable prettier/prettier */
/* eslint-disable react-native/no-inline-styles */
/* eslint-disable quotes */

import {
  StyleSheet,
  Text,
  View,
  KeyboardAvoidingView,
  Platform,
  Dimensions,
  TouchableOpacity,
  TextInput,
  Image,
} from "react-native";
import React from "react";
import Icon from "react-native-vector-icons/Ionicons";

const windowWidth = Dimensions.get("window").width;
const windowHeight = Dimensions.get("window").height;

const ForgotPassword = ({ navigation }) => {
  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === "ios" ? "padding" : null}
      style={styles.container}
    >
      <View
        style={{
          paddingHorizontal: 0,
          paddingVertical: 20,
          flexDirection: "row",
        }}
      >
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Icon name="arrow-back" size={30} color={"#828282"} />
        </TouchableOpacity>
      </View>
      <View style={{ alignItems: "center", paddingTop: 10 }}>
        <Image
          source={require("../assets/2.png")}
          style={{ width: 250, height: 320 }}
        />
      </View>
      <View>
        <Text style={{ fontSize: 24, color: "#212E5A", fontWeight: "600" }}>
          Forgot Password ?
        </Text>
        <Text
          style={{
            paddingTop: 20,
            fontSize: 16,
            lineHeight: 24,
            color: "#828282",
          }}
        >
          Don't worry, we will help you get your {"\n"} account back!
        </Text>
        <View>
          <View
            style={{
              backgroundColor: "#F9F9F9",
              paddingHorizontal: 0,
              paddingVertical: 0,
              paddingBottom: 10,
              borderRadius: 10,
              display: "flex",
              flexDirection: "row",
              alignItems: "center",
              paddingTop: 10,
              paddingLeft: 20,
              marginTop: 30,
            }}
          >
            <Icon name="mail-outline" size={20} color={"#c4c4c4"} />
            <TextInput
              style={{
                paddingTop: 10,
                paddingBottom: 10,
                fontSize: 16,
                paddingLeft: 10,
                color: "#828282",
              }}
              placeholder="Email"
              placeholderTextColor={"#C4C4C4"}
            />
          </View>
          <View>
            <View>
              <TouchableOpacity
                style={styles.btnPrimary}
                onPress={() => navigation.navigate("Reset")}
              >
                <Text style={styles.reg}>Reset Password</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </View>
    </KeyboardAvoidingView>
  );
};

export default ForgotPassword;

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#fff",
    width: windowWidth,
    height: windowHeight,
    paddingHorizontal: 30,
    paddingVertical: 0,
  },
  btnPrimary: {
    paddingHorizontal: 40,
    paddingVertical: 20,
    backgroundColor: "#212E5A",
    borderRadius: 10,
    marginTop: 20,
  },
  reg: {
    color: "#fff",
    fontSize: 18,
    textAlign: "center",
  },
});
