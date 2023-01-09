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
} from "react-native";
import React, { useState } from "react";
import Icon from "react-native-vector-icons/Ionicons";
import { user_reset } from "../api/FetchUsersReset";
import AsyncStorage from "@react-native-async-storage/async-storage";

const windowWidth = Dimensions.get("window").width;
const windowHeight = Dimensions.get("window").height;

const ResetCode = ({ navigation }) => {
  const [ref_code, setRefCode] = useState("");
  const [loading, setLoading] = useState(false);

  async function resetCode() {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 4000);
    let item = { ref_code };
    console.warn(item);

    if (resetCode) {
      user_reset({
        ref_code: ref_code,
      })
        .then((result) => {
          if (result.status == 200) {
            AsyncStorage.setItem("ResetToken", result.data.jwt);
            console.log(result);
            navigation.navigate("Changepass");
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
          Reset Code
        </Text>
        <Text
          style={{
            paddingTop: 20,
            fontSize: 16,
            lineHeight: 24,
            color: "#828282",
          }}
        >
          Kindly enter the reset code sent to {"\n"} your email.
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
                color: "#828282",
              }}
              placeholder="Enter reset code"
              placeholderTextColor={"#C4C4C4"}
              value={ref_code}
              onChangeText={(text) => setRefCode(text)}
            />
          </View>
          <View>
            <View>
              <TouchableOpacity style={styles.btnPrimary} onPress={resetCode}>
                <Text style={styles.reg}>Reset Password</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </View>
    </KeyboardAvoidingView>
  );
};

export default ResetCode;

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#fff",
    width: windowWidth,
    height: windowHeight,
    paddingHorizontal: 50,
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
});
