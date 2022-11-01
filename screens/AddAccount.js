/* eslint-disable prettier/prettier */
/* eslint-disable react-native/no-inline-styles */
/* eslint-disable quotes */
/* eslint-disable react/self-closing-comp */

import {
  StyleSheet,
  Text,
  View,
  Dimensions,
  TouchableOpacity,
  Pressable,
  ImageBackground,
  Modal,
  Alert,
} from "react-native";
import React, { useState } from "react";
import Icon from "react-native-vector-icons/Ionicons";
import { TextInput } from "react-native-gesture-handler";

const windowWidth = Dimensions.get("window").width;
const windowHeight = Dimensions.get("window").height;

const AddAccount = ({ navigation }) => {
  const [modalVisibleTwoTwo, setModalVisibleTwoTwo] = useState(false);
  return (
    <ImageBackground
      style={styles.container}
      source={require("../assets/map.png")}
    >
      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisibleTwoTwo}
        onRequestClose={() => {
          setModalVisibleTwoTwo(!modalVisibleTwoTwo);
        }}
      >
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
            <View style={styles.filter}>
              <Pressable
                style={styles.filterprop}
                onPress={() => navigation.navigate("Main")}
              >
                <Icon name="close" color={"#fff"} size={30} />
              </Pressable>
            </View>
            <Text
              style={{
                color: "#FFFFFF",
                fontSize: 24,
                fontWeight: "600",
                lineHeight: 27,
                marginTop: 20,
              }}
            >
              Enter your password
            </Text>
            <View style={{ marginVertical: 20 }}>
              <Text
                style={{
                  color: "#FFFFFF",
                  fontSize: 18,
                  fontWeight: "500",
                  lineHeight: 27,
                  marginTop: 20,
                }}
              >
                To add bank account, we need to {"\n"} confirm you are the one.
              </Text>
              <TextInput
                style={{
                  backgroundColor: "#29396D",
                  paddingHorizontal: 40,
                  paddingVertical: 15,
                  borderRadius: 10,
                  marginTop: 20,
                  color: "#B4BDE4",
                }}
                placeholder="Enter your password"
                placeholderTextColor={"#B4BDE4"}
                secureTextEntry={true}
              />
              <TouchableOpacity
                style={{
                  backgroundColor: "#fff",
                  paddingHorizontal: 40,
                  paddingVertical: 15,
                  borderRadius: 10,
                  marginTop: 100,
                }}
                onPress={() => navigation.navigate("FormSuccess")}
              >
                <Text
                  style={{
                    fontSize: 16,
                    color: "#212E5A",
                    textAlign: "center",
                  }}
                >
                  Confirm
                </Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </Modal>
      <View style={styles.centeredView}>
        <View style={styles.modalView}>
          <View style={styles.filter}>
            <Pressable
              style={styles.filterprop}
              onPress={() => navigation.navigate("Payment")}
            >
              <Icon name="close" color={"#fff"} size={30} />
            </Pressable>
          </View>
          <Text
            style={{
              color: "#FFFFFF",
              fontSize: 24,
              fontWeight: "600",
              lineHeight: 27,
              marginTop: 20,
            }}
          >
            Add new account
          </Text>
          <View style={{ marginVertical: 20 }}>
            <Text
              style={{
                color: "#FFFFFF",
                fontSize: 18,
                fontWeight: "500",
                lineHeight: 27,
                marginTop: 20,
              }}
            >
              Account number
            </Text>
            <TextInput
              style={{
                backgroundColor: "#29396D",
                paddingHorizontal: 40,
                paddingVertical: 15,
                borderRadius: 10,
                marginTop: 10,
                color: "#B4BDE4",
              }}
              placeholder="Enter 10-digits account number"
              placeholderTextColor={"#B4BDE4"}
              keyboardType={"numeric"}
            />
            <View
              style={{
                display: "flex",
                flexDirection: "row",
                justifyContent: "space-between",
                marginTop: 10,
              }}
            >
              <Text
                style={{
                  color: "#FFFFFF",
                  fontSize: 18,
                  fontWeight: "500",
                  lineHeight: 27,
                  marginTop: 20,
                }}
              >
                Choose bank
              </Text>
            </View>
            <TouchableOpacity
              style={{
                backgroundColor: "#29396D",
                paddingHorizontal: 40,
                paddingVertical: 15,
                borderRadius: 10,
                marginTop: 10,
                color: "#B4BDE4",
                display: "flex",
                flexDirection: "row",
                justifyContent: "space-between",
                alignItems: "center",
              }}
            >
              <Text style={{ color: "#B4BDE4", fontSize: 16 }}>
                Guaranty Trust Bank
              </Text>
              <Icon name="chevron-forward-outline" color={"#B4BDE4"} />
            </TouchableOpacity>
            <TouchableOpacity
              style={{
                backgroundColor: "#fff",
                paddingHorizontal: 40,
                paddingVertical: 15,
                borderRadius: 10,
                marginTop: 30,
              }}
              onPress={() => setModalVisibleTwoTwo(true)}
            >
              <Text
                style={{
                  fontSize: 16,
                  color: "#212E5A",
                  textAlign: "center",
                }}
              >
                Add account
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </ImageBackground>
  );
};

export default AddAccount;

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#fff",
    width: windowWidth,
    height: windowHeight,
    paddingVertical: 0,
  },
  btnPrimary: {
    paddingHorizontal: 40,
    paddingVertical: 16,
    backgroundColor: "#212E5A",
    borderRadius: 10,
    marginTop: 15,
  },
  reg: {
    color: "#fff",
    fontSize: 18,
    textAlign: "center",
  },
  wallet: {
    paddingHorizontal: 20,
    paddingVertical: 10,
    backgroundColor: "#212E5A",
    marginVertical: 20,
    borderRadius: 10,
  },
  topup: {
    padding: 20,
    backgroundColor: "#29396D",
    borderRadius: 10,
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  topupText: {
    color: "#fff",
    fontSize: 16,
    paddingRight: 16,
  },
  centeredView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 0,
    backgroundColor: "rgba(0,0,0,0.5)",
    paddingTop: 290,
  },
  modalView: {
    margin: 20,
    backgroundColor: "#212E5A",
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    paddingVertical: 20,
    paddingHorizontal: 25,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
    width: windowWidth,
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
    marginTop: 30,
    textAlign: "center",
    fontSize: 24,
    color: "#fff",
    fontWeight: "600",
  },
  filterprop: {
    alignItems: "flex-end",
    marginBottom: -20,
  },
});
