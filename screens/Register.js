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
  ScrollView,
  Alert,
  Modal,
} from "react-native";
import React, { useState } from "react";
import Icon from "react-native-vector-icons/Ionicons";
const windowWidth = Dimensions.get("window").width;
const windowHeight = Dimensions.get("window").height;

const Register = ({ navigation }) => {
  const [modalVisibleTen, setModalVisibleTen] = useState(false);
  const showModal = () => {
    setModalVisibleTen(true);
    setTimeout(() => {
      setModalVisibleTen(false);
    }, 10000);
  };
  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === "ios" ? "padding" : null}
      style={styles.container}
    >
      <ScrollView>
        <Modal
          animationType="slide"
          transparent={true}
          visible={modalVisibleTen}
          onRequestClose={() => {
            setModalVisibleTen(false);
          }}
        >
          <View style={styles.centeredView}>
            <View style={styles.modalView}>
              <Text style={styles.modalText}>Check mail</Text>
              <View>
                <Text
                  style={{
                    color: "#FFFFFF",
                    textAlign: "center",
                    lineHeight: 24,
                  }}
                >
                  Enter the 4-digits code sent to {"\n"} your mail to verify
                  your email
                </Text>
              </View>
              <View
                style={{
                  display: "flex",
                  flexDirection: "row",
                  alignItems: "center",
                  justifyContent: "center",
                  marginLeft: 10,
                  marginTop: 10,
                }}
              >
                <TextInput
                  style={styles.input}
                  keyboardType={"numeric"}
                  maxLength={1}
                />
                <TextInput
                  style={styles.input}
                  keyboardType={"numeric"}
                  maxLength={1}
                />
                <TextInput
                  style={styles.input}
                  keyboardType={"numeric"}
                  maxLength={1}
                />
                <TextInput
                  style={styles.input}
                  keyboardType={"numeric"}
                  maxLength={1}
                />
              </View>
              <TouchableOpacity style={{ marginTop: 10, marginLeft: 12 }}>
                <Text
                  style={{
                    color: "#7A86C0",
                    fontSize: 12,
                  }}
                >
                  Resend code to your mail
                </Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={{
                  marginTop: 20,
                  padding: 20,
                  backgroundColor: "#fff",
                  width: 270,
                  borderRadius: 10,
                  // eslint-disable-next-line no-dupe-keys
                  marginTop: 50,
                  marginLeft: 10,
                }}
                onPress={() => navigation.navigate("Verified")}
              >
                <Text
                  style={{
                    color: "#383838",
                    fontSize: 16,
                    textAlign: "center",
                  }}
                >
                  Confirm mail
                </Text>
              </TouchableOpacity>
            </View>
          </View>
        </Modal>
        <View
          style={{
            paddingHorizontal: 0,
            paddingVertical: 20,
            flexDirection: "row",
          }}
        >
          <TouchableOpacity onPress={() => navigation.navigate("Login")}>
            <Icon name="arrow-back" size={30} color={"#c4c4c4"} />
          </TouchableOpacity>
        </View>
        <View>
          <Text style={{ fontSize: 28, color: "#212E5A", fontWeight: "700" }}>
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
            Enter your email or phone number to {"\n"}create an account.
          </Text>
          <View>
            <View
              style={{
                backgroundColor: "#F9F9F9",
                paddingHorizontal: 0,
                paddingVertical: 0,
                paddingBottom: 10,
                borderRadius: 15,
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
                }}
                placeholder="Email or phone number"
                placeholderTextColor={"#C4C4C4"}
                textContentType={"emailAddress"}
              />
            </View>
            <View>
              <TouchableOpacity
                style={styles.btnPrimary}
                onPress={() => {
                  showModal();
                }}
              >
                <Text style={styles.reg}>Register</Text>
              </TouchableOpacity>
            </View>
          </View>
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
  },
  btnPrimary: {
    paddingHorizontal: 40,
    paddingVertical: 20,
    backgroundColor: "#212E5A",
    borderRadius: 15,
    marginTop: 375,
  },
  reg: {
    color: "#fff",
    fontSize: 18,
    textAlign: "center",
  },
  centeredView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 0,
    backgroundColor: "rgba(0,0,0,0.5)",
  },
  modalView: {
    margin: 20,
    backgroundColor: "#212E5A",
    borderRadius: 20,
    paddingVertical: 25,
    paddingHorizontal: 20,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
    width: 320,
  },
  button: {
    borderRadius: 20,
    padding: 10,
    elevation: 2,
  },
  buttonOpen: {
    backgroundColor: "#F194FF",
  },
  buttonClose: {
    backgroundColor: "#2196F3",
  },
  textStyle: {
    color: "white",
    fontWeight: "bold",
    textAlign: "center",
  },
  modalText: {
    marginBottom: 15,
    textAlign: "center",
    fontSize: 28,
    color: "#fff",
    fontWeight: "700",
  },
  input: {
    borderWidth: 1,
    borderColor: "#7A86C0",
    textAlign: "center",
    paddingHorizontal: 20,
    paddingVertical: 15,
    marginTop: 20,
    borderRadius: 10,
    marginRight: 10,
    color: "#fff",
    fontSize: 18,
  },
});
