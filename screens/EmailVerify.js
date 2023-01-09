/* eslint-disable prettier/prettier */
/* eslint-disable react-native/no-inline-styles */

import {
  StyleSheet,
  Text,
  View,
  KeyboardAvoidingView,
  Platform,
  Dimensions,
  TouchableOpacity,
  TextInput,
  Alert,
  ActivityIndicator,
} from "react-native";
import React, { useState } from "react";
import Icon from "react-native-vector-icons/Ionicons";
import { user_verify } from "../api/user_verify";

const windowWidth = Dimensions.get("window").width;
const windowHeight = Dimensions.get("window").height;

const EmailVerify = ({ navigation }) => {
  const [verify_code, setVerifyCode] = useState("");
  const [loading, setLoading] = useState(false);

  async function verifyCode() {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 4000);
    let item = { verify_code };
    console.warn(item);

    if (verifyCode) {
      user_verify({
        verify_code: verify_code,
      })
        .then((result) => {
          if (result.status == 200) {
            console.log(result);
            navigation.navigate("Verified");
          } else {
            console.log(result.message);
            Alert.alert("Warning", result.data.message);
          }
        })
        .catch((error) => {
          console.error(error);
        });
    }
  }

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === "ios" ? "padding" : null}
      style={styles.container}
    >
      <View style={styles.containerTwo}>
        {loading ? (
          <ActivityIndicator
            //visibility of Overlay Loading Spinner
            visible={loading}
            //Text with the Spinner
            textContent={"Loading..."}
            //Text style of the Spinner Text
            textStyle={styles.spinnerTextStyle}
          />
        ) : (
          <>
            <View
              style={{
                paddingHorizontal: 0,
                paddingVertical: 20,
                flexDirection: "row",
              }}
            >
              <TouchableOpacity onPress={() => navigation.navigate("Register")}>
                <Icon name="arrow-back" size={30} color={"#828282"} />
              </TouchableOpacity>
            </View>
            <View>
              <Text
                style={{ fontSize: 28, color: "#212E5A", fontWeight: "600" }}
              >
                Account created successfully
              </Text>
              <Text
                style={{
                  paddingTop: 20,
                  fontSize: 16,
                  lineHeight: 24,
                  color: "#828282",
                }}
              >
                Welcome to Hious. Kindly check your email and enter verification
                code below.
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
                      color: "#C4C4C4",
                    }}
                    placeholder="Enter verify code"
                    placeholderTextColor={"#C4C4C4"}
                    value={verify_code}
                    onChangeText={(text) => setVerifyCode(text)}
                  />
                </View>
                <View>
                  <View>
                    <TouchableOpacity
                      style={styles.btnPrimary}
                      onPress={verifyCode}
                    >
                      <Text style={styles.reg}>Verify Account</Text>
                    </TouchableOpacity>
                  </View>
                </View>
              </View>
            </View>
          </>
        )}
      </View>
    </KeyboardAvoidingView>
  );
};

export default EmailVerify;

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
    marginTop: 330,
  },
  reg: {
    color: "#fff",
    fontSize: 18,
    textAlign: "center",
  },
  containerTwo: {
    flex: 1,
    justifyContent: "center",
    textAlign: "center",
    paddingTop: 0,
    padding: 8,
  },
  spinnerTextStyle: {
    color: "#FFF",
  },
});
