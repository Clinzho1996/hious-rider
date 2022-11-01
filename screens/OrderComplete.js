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
  ImageBackground,
} from "react-native";
import React from "react";

const windowWidth = Dimensions.get("window").width;
const windowHeight = Dimensions.get("window").height;

const OrderComplete = ({ navigation }) => {
  return (
    <ImageBackground style={styles.container}>
      <View
        style={{
          paddingVertical: 50,
          textAlign: "center",
        }}
      >
        <Text
          style={{
            color: "#383838",
            fontSize: 16,
            fontWeight: "400",
            textAlign: "center",
          }}
        >
          Total amount
        </Text>
        <Text
          style={{
            color: "#212E5A",
            fontSize: 58,
            fontWeight: "600",
            textAlign: "center",
          }}
        >
          ₦2,500
        </Text>
      </View>
      <View style={styles.centeredView}>
        <View style={styles.modalView}>
          <Text
            style={{
              color: "#e8e8e8",
              fontSize: 16,
              fontWeight: "600",
              lineHeight: 27,
              marginTop: 20,
              opacity: 0.6,
            }}
          >
            Order Summary
          </Text>
          <View style={{ marginVertical: 20 }}>
            <Text
              style={{
                color: "#FFFFFF",
                fontSize: 16,
                fontWeight: "600",
                lineHeight: 27,
                marginTop: 0,
              }}
            >
              Package picked up from:
            </Text>

            <Text
              style={{
                color: "#e8e8e8",
                opacity: 0.6,
                fontSize: 16,
                fontWeight: "600",
                lineHeight: 27,
                marginTop: 0,
              }}
            >
              Hious Supermarket. 23, Oladeinde street, Maryland. {"\n"}
              12km - 15mins
            </Text>
          </View>
          <View style={{ marginVertical: 0 }}>
            <Text
              style={{
                color: "#FFFFFF",
                fontSize: 16,
                fontWeight: "600",
                lineHeight: 27,
                marginTop: 0,
              }}
            >
              Package delivered to:
            </Text>

            <Text
              style={{
                color: "#e8e8e8",
                opacity: 0.6,
                fontSize: 16,
                fontWeight: "600",
                lineHeight: 27,
                marginTop: 0,
              }}
            >
              44, Sobowale street, Ikorodu.
              {"\n"}
              32km - 33mins
            </Text>
            <TouchableOpacity
              style={{
                backgroundColor: "#fff",
                paddingHorizontal: 40,
                paddingVertical: 15,
                borderRadius: 10,
                marginTop: 120,
                marginBottom: 80,
              }}
              onPress={() => navigation.navigate("Main")}
            >
              <Text
                style={{
                  fontSize: 16,
                  color: "#212E5A",
                  textAlign: "center",
                }}
              >
                Payment completed
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </ImageBackground>
  );
};

export default OrderComplete;

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
    backgroundColor: "#fff",
    paddingTop: 80,
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
