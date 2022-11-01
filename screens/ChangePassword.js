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
} from "react-native";
import React from "react";
import Icon from "react-native-vector-icons/Ionicons";

const windowWidth = Dimensions.get("window").width;
const windowHeight = Dimensions.get("window").height;

const ChangePassword = ({ navigation }) => {
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
      <View>
        <Text style={{ fontSize: 24, color: "#212E5A", fontWeight: "600" }}>
          New password
        </Text>
        <Text
          style={{
            paddingTop: 20,
            fontSize: 16,
            lineHeight: 24,
            color: "#828282",
          }}
        >
          Your new password must be different {"\n"}from the old one
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
            <TextInput
              style={{
                paddingTop: 5,
                paddingBottom: 5,
                fontSize: 16,
                paddingLeft: 10,
              }}
              placeholder="Enter new password"
              placeholderTextColor={"#C4C4C4"}
              secureTextEntry={true}
            />
          </View>
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
              marginTop: 20,
            }}
          >
            <TextInput
              style={{
                paddingTop: 5,
                paddingBottom: 5,
                fontSize: 16,
                paddingLeft: 10,
              }}
              placeholder="Confirm new password"
              placeholderTextColor={"#C4C4C4"}
              secureTextEntry={true}
            />
          </View>
          <View>
            <View>
              <TouchableOpacity
                style={styles.btnPrimary}
                onPress={() => navigation.navigate("Success")}
              >
                <Text style={styles.reg}>Update Password</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </View>
    </KeyboardAvoidingView>
  );
};

export default ChangePassword;

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
    marginTop: 270,
  },
  reg: {
    color: "#fff",
    fontSize: 18,
    textAlign: "center",
  },
});
