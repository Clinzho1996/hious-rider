/* eslint-disable prettier/prettier */
/* eslint-disable react-native/no-inline-styles */
/* eslint-disable react-hooks/rules-of-hooks */
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
  ScrollView,
  Alert,
  ActivityIndicator,
} from "react-native";
import React, { useState } from "react";
import Icon from "react-native-vector-icons/Ionicons";
const windowWidth = Dimensions.get("window").width;
const windowHeight = Dimensions.get("window").height;

const Register = ({ navigation }) => {
  const [showPassword, setShowPassword] = useState(false);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirm_password, setConfirmPassword] = useState("");
  const [phone_number, setPhoneNumber] = useState("");
  const [loading, setLoading] = useState(false);

  async function register() {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 2000);
    let item = { name, email, phone_number, password, confirm_password };
    console.warn(item);

    fetch("https://hiousapp.com/api/rider_auth/create_rider.php", {
      method: "POST",
      body: JSON.stringify(item),
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
    })
      .then((result) => {
        let statusCode = result.status,
          success = result.ok;
        result.json().then((result) => {
          if (!success) {
            console.log(result.message);
            Alert.alert("Warning", result.message);
            return;
          } else {
            console.log(result);
            Alert.alert("Success", result.message);
            navigation.navigate("EmailVerify");
          }
        });
      })
      .catch((error) => {
        console.log(error);
      });
  }

  return (
    <KeyboardAvoidingView behavior={Platform.OS === "ios" ? "padding" : null}>
      <ScrollView
        style={{
          backgroundColor: "#fff",
          paddingHorizontal: 30,
          paddingVertical: 0,
        }}
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
                <TouchableOpacity onPress={() => navigation.goBack()}>
                  <Icon name="arrow-back" size={30} color={"#c4c4c4"} />
                </TouchableOpacity>
              </View>
              <View>
                <Text
                  style={{ fontSize: 28, color: "#212E5A", fontWeight: "600" }}
                >
                  Register
                </Text>
                <Text
                  style={{
                    paddingTop: 20,
                    fontSize: 16,
                    lineHeight: 24,
                    color: "#828282",
                  }}
                >
                  Create an account by providing {"\n"} your basic details below
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
                      marginTop: 20,
                    }}
                  >
                    <Icon name="person-outline" size={20} color={"#C4C4C4"} />
                    <TextInput
                      style={{
                        paddingTop: 5,
                        paddingBottom: 5,
                        fontSize: 16,
                        paddingLeft: 10,
                        color: "#C4C4C4",
                      }}
                      placeholder="Full Name"
                      placeholderTextColor={"#C4C4C4"}
                      value={name}
                      onChangeText={(text) => setName(text)}
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
                      marginTop: 15,
                    }}
                  >
                    <Icon name="mail-outline" size={20} color={"#C4C4C4"} />
                    <TextInput
                      style={{
                        paddingTop: 5,
                        paddingBottom: 5,
                        fontSize: 16,
                        paddingLeft: 10,
                        color: "#C4C4C4",
                      }}
                      placeholder="Email"
                      placeholderTextColor={"#C4C4C4"}
                      textContentType={"emailAddress"}
                      value={email}
                      onChangeText={(text) => setEmail(text)}
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
                      marginTop: 15,
                    }}
                  >
                    <Icon name="call-outline" size={20} color={"#C4C4C4"} />
                    <TextInput
                      style={{
                        paddingTop: 5,
                        paddingBottom: 5,
                        fontSize: 16,
                        paddingLeft: 10,
                        color: "#C4C4C4",
                      }}
                      placeholder="Phone number"
                      placeholderTextColor={"#C4C4C4"}
                      value={phone_number}
                      onChangeText={(text) => setPhoneNumber(text)}
                      keyboardType={"numeric"}
                    />
                  </View>
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
                        marginTop: 15,
                      }}
                    >
                      <Icon
                        name="lock-closed-outline"
                        size={20}
                        color={"#C4C4C4"}
                      />
                      <TextInput
                        style={{
                          fontSize: 16,
                          width: "82%",
                          paddingTop: 5,
                          paddingBottom: 5,
                          color: "#C4C4C4",
                        }}
                        placeholder="Password"
                        placeholderTextColor={"#C4C4C4"}
                        secureTextEntry={!showPassword}
                        value={password}
                        onChangeText={(text) => setPassword(text)}
                      />
                      <TouchableOpacity
                        style={{
                          height: 30,
                          width: 30,
                        }}
                        onPress={() => setShowPassword(!showPassword)}
                      >
                        <Icon
                          name={
                            showPassword ? "eye-off-outline" : "eye-outline"
                          }
                          size={20}
                          color={"#C4C4C4"}
                        />
                      </TouchableOpacity>
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
                        marginTop: 15,
                      }}
                    >
                      <Icon
                        name="lock-closed-outline"
                        size={20}
                        color={"#C4C4C4"}
                      />
                      <TextInput
                        style={{
                          fontSize: 16,
                          width: "82%",
                          paddingTop: 5,
                          paddingBottom: 5,
                          color: "#C4C4C4",
                        }}
                        placeholder="Confirm Password"
                        placeholderTextColor={"#C4C4C4"}
                        secureTextEntry={!showPassword}
                        value={confirm_password}
                        onChangeText={(text) => setConfirmPassword(text)}
                      />
                      <TouchableOpacity
                        style={{
                          height: 30,
                          width: 30,
                        }}
                        onPress={() => setShowPassword(!showPassword)}
                      >
                        <Icon
                          name={
                            showPassword ? "eye-off-outline" : "eye-outline"
                          }
                          size={20}
                          color={"#C4C4C4"}
                        />
                      </TouchableOpacity>
                    </View>
                    <View>
                      <TouchableOpacity
                        style={styles.btnPrimary}
                        onPress={register}
                      >
                        <Text style={styles.reg}>Register</Text>
                      </TouchableOpacity>
                    </View>
                    <View style={{ marginTop: 20, alignItems: "center" }}>
                      <Text style={{ color: "#475569", fontSize: 16 }}>
                        Or Continue with
                      </Text>
                    </View>
                    <View
                      style={{
                        flexDirection: "row",
                        justifyContent: "space-around",
                        paddingHorizontal: 80,
                        paddingVertical: 20,
                      }}
                    >
                      <TouchableOpacity
                        style={{
                          flexDirection: "row",
                          alignItems: "center",
                          backgroundColor: "#F1F5F9",
                          borderRadius: 6,
                          padding: 10,
                        }}
                      >
                        <Icon name="logo-google" size={15} color={"#212E5A"} />
                      </TouchableOpacity>
                      <TouchableOpacity
                        style={{
                          flexDirection: "row",
                          alignItems: "center",
                          backgroundColor: "#F1F5F9",
                          borderRadius: 6,
                          padding: 10,
                        }}
                      >
                        <Icon name="logo-twitter" size={15} color={"#212E5A"} />
                      </TouchableOpacity>
                      <TouchableOpacity
                        style={{
                          flexDirection: "row",
                          alignItems: "center",
                          backgroundColor: "#F1F5F9",
                          borderRadius: 6,
                          padding: 10,
                        }}
                      >
                        <Icon
                          name="logo-facebook"
                          size={15}
                          color={"#212E5A"}
                        />
                      </TouchableOpacity>
                    </View>
                    <View
                      style={{
                        justifyContent: "center",
                        alignItems: "center",
                        flexDirection: "row",
                        marginTop: 10,
                        paddingBottom: 20,
                      }}
                    >
                      <Text
                        style={{
                          color: "#828282",
                          fontSize: 16,
                          marginRight: 10,
                        }}
                      >
                        Already have an account?
                      </Text>
                      <TouchableOpacity
                        onPress={() => navigation.navigate("Login")}
                      >
                        <Text
                          style={{
                            fontWeight: "600",
                            fontSize: 16,
                            color: "#212E5A",
                          }}
                        >
                          Sign in
                        </Text>
                      </TouchableOpacity>
                    </View>
                  </View>
                </View>
              </View>
            </>
          )}
        </View>
      </ScrollView>
    </KeyboardAvoidingView>
  );
};

export default Register;

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#fff",
    width: windowWidth,
    height: windowHeight,
    paddingHorizontal: 30,
    paddingVertical: 0,
    flexGrow: 1,
  },
  btnPrimary: {
    paddingHorizontal: 40,
    paddingVertical: 20,
    backgroundColor: "#212E5A",
    borderRadius: 10,
    marginTop: 15,
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
    backgroundColor: "#fff",
    height: 800,
  },
  spinnerTextStyle: {
    color: "#FFF",
  },
});
