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
  TextInput,
} from "react-native";
import React from "react";
import { Checkbox } from "react-native-paper";

const windowWidth = Dimensions.get("window").width;
const windowHeight = Dimensions.get("window").height;

const OrderCancel = ({ navigation }) => {
  const [checked, setChecked] = React.useState(false);
  const [checkedTwo, setCheckedTwo] = React.useState(false);
  const [checkedThree, setCheckedThree] = React.useState(false);
  const [checkedFour, setCheckedFour] = React.useState(false);
  const [checkedFive, setCheckedFive] = React.useState(false);
  return (
    <ImageBackground
      style={styles.container}
      source={require("../assets/map.png")}
    >
      <View style={styles.centeredView}>
        <View style={styles.modalView}>
          <Text
            style={{
              color: "#212E5A",
              fontSize: 18,
              fontWeight: "600",
              lineHeight: 27,
              marginTop: 20,
            }}
          >
            Why do you want to cancel the order?
          </Text>
          <View style={{ marginLeft: -8 }}>
            <View
              style={{
                marginVertical: 10,
                display: "flex",
                flexDirection: "row",
                justifyContent: "flex-start",
                alignItems: "center",
              }}
            >
              <Checkbox
                status={checked ? "checked" : "unchecked"}
                onPress={() => {
                  setChecked(!checked);
                }}
                color="#212E5A"
              />
              <Text style={{ color: "#676767", fontSize: 14 }}>
                Receiver not available
              </Text>
            </View>
            <View
              style={{
                marginVertical: 0,
                display: "flex",
                flexDirection: "row",
                justifyContent: "flex-start",
                alignItems: "center",
              }}
            >
              <Checkbox
                status={checkedTwo ? "checked" : "unchecked"}
                onPress={() => {
                  setCheckedTwo(!checkedTwo);
                }}
                color="#212E5A"
              />
              <Text style={{ color: "#676767", fontSize: 14 }}>
                Sender not available
              </Text>
            </View>
            <View
              style={{
                marginVertical: 10,
                display: "flex",
                flexDirection: "row",
                justifyContent: "flex-start",
                alignItems: "center",
              }}
            >
              <Checkbox
                status={checkedThree ? "checked" : "unchecked"}
                onPress={() => {
                  setCheckedThree(!checkedThree);
                }}
                color="#212E5A"
              />
              <Text style={{ color: "#676767", fontSize: 14 }}>
                Heavy traffic
              </Text>
            </View>
            <View
              style={{
                marginVertical: 0,
                display: "flex",
                flexDirection: "row",
                justifyContent: "flex-start",
                alignItems: "center",
              }}
            >
              <Checkbox
                status={checkedFour ? "checked" : "unchecked"}
                onPress={() => {
                  setCheckedFour(!checkedFour);
                }}
                color="#212E5A"
              />
              <Text style={{ color: "#676767", fontSize: 14 }}>
                Could not reach the receiver
              </Text>
            </View>
            <View
              style={{
                marginVertical: 10,
                display: "flex",
                flexDirection: "row",
                justifyContent: "flex-start",
                alignItems: "center",
              }}
            >
              <Checkbox
                status={checkedFive ? "checked" : "unchecked"}
                onPress={() => {
                  setCheckedFive(!checkedFive);
                }}
                color="#212E5A"
              />
              <Text style={{ color: "#676767", fontSize: 14 }}>Others</Text>
            </View>
          </View>
          <TextInput
            placeholder="Tell us why you would like to cancel the delivery."
            placeholderTextColor={"#A1A1A1"}
            style={{
              color: "#A1A1A1",
              backgroundColor: "#F8F8F8",
              padding: 10,
              borderRadius: 10,
              marginBottom: 20,
              fontSize: 14,
            }}
            multiline={true}
            numberOfLines={3}
          />
          <View
            style={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "space-between",
            }}
          >
            <TouchableOpacity
              style={{
                backgroundColor: "#212E5A",
                paddingHorizontal: 40,
                paddingVertical: 15,
                borderRadius: 10,
              }}
              onPress={() => navigation.navigate("CancelSuccess")}
            >
              <Text
                style={{
                  fontSize: 16,
                  color: "#fff",
                  textAlign: "center",
                }}
              >
                Cancel
              </Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={{
                backgroundColor: "#F6F6F6",
                paddingHorizontal: 40,
                paddingVertical: 15,
                borderRadius: 10,
              }}
              onPress={() => navigation.navigate("Main")}
            >
              <Text
                style={{
                  fontSize: 16,
                  color: "#383838",
                  textAlign: "center",
                }}
              >
                Close
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </ImageBackground>
  );
};

export default OrderCancel;

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
  },
  modalView: {
    margin: 20,
    backgroundColor: "#fff",
    borderRadius: 20,
    paddingVertical: 20,
    paddingHorizontal: 30,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
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
