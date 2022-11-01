/* eslint-disable prettier/prettier */
/* eslint-disable react-native/no-inline-styles */
/* eslint-disable quotes */
/* eslint-disable react/self-closing-comp */

import {
  StyleSheet,
  Text,
  View,
  KeyboardAvoidingView,
  Platform,
  Dimensions,
  TouchableOpacity,
} from "react-native";
import React from "react";

const windowWidth = Dimensions.get("window").width;
const windowHeight = Dimensions.get("window").height;

const Order = ({ navigation}) => {
  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === "ios" ? "padding" : null}
      style={styles.container}
    >
      <View style={{ paddingTop: 30 }}>
        <Text style={{ fontSize: 24, color: "#212E5A", fontWeight: "600" }}>
          Order history
        </Text>
      </View>
      <View style={{ paddingVertical: 20 }}>
        <View
          style={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-between",
            paddingVertical: 10,
          }}
        >
          <TouchableOpacity onPress={() => navigation.navigate("Receipts")}>
            <Text style={{ color: "#383838", fontSize: 14, fontWeight: "700" }}>
              Order from Hious Supermark...
            </Text>
            <Text style={{ color: "#383838", fontSize: 14, fontWeight: "700" }}>
              Ongoing
            </Text>
          </TouchableOpacity>
          <View>
            <Text style={{ color: "#C4C4C4", fontSize: 14 }}>2 mins ago</Text>
          </View>
        </View>
        <View
          style={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-between",
            paddingVertical: 10,
          }}
        >
          <View>
            <Text style={{ color: "#383838", fontSize: 14, fontWeight: "400" }}>
              Order from Ikorodu mall
            </Text>
            <Text style={{ color: "#383838", fontSize: 14, fontWeight: "400" }}>
              Cancelled
            </Text>
          </View>
          <View>
            <Text style={{ color: "#C4C4C4", fontSize: 14 }}>Yesterday</Text>
          </View>
        </View>
        <View
          style={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-between",
            paddingVertical: 10,
          }}
        >
          <View>
            <Text style={{ color: "#383838", fontSize: 14, fontWeight: "400" }}>
              Order from Ikorodu mall
            </Text>
            <Text style={{ color: "#383838", fontSize: 14, fontWeight: "400" }}>
              Cancelled
            </Text>
          </View>
          <View>
            <Text style={{ color: "#C4C4C4", fontSize: 14 }}>Yesterday</Text>
          </View>
        </View>
        <View
          style={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-between",
            paddingVertical: 10,
          }}
        >
          <View>
            <Text style={{ color: "#383838", fontSize: 14, fontWeight: "400" }}>
              Order from Hious Supermarket
            </Text>
            <Text style={{ color: "#383838", fontSize: 14, fontWeight: "400" }}>
              Delivered
            </Text>
          </View>
          <View>
            <Text style={{ color: "#C4C4C4", fontSize: 14 }}>2 days</Text>
          </View>
        </View>
        <View
          style={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-between",
            paddingVertical: 10,
          }}
        >
          <View>
            <Text style={{ color: "#383838", fontSize: 14, fontWeight: "400" }}>
              Order from Ikorodu mall
            </Text>
            <Text style={{ color: "#383838", fontSize: 14, fontWeight: "400" }}>
              Pending payment
            </Text>
          </View>
          <View>
            <Text style={{ color: "#C4C4C4", fontSize: 14 }}>02-10-2021</Text>
          </View>
        </View>
        <View
          style={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-between",
            paddingVertical: 10,
          }}
        >
          <View>
            <Text style={{ color: "#383838", fontSize: 14, fontWeight: "400" }}>
              Order from Ikorodu mall
            </Text>
            <Text style={{ color: "#383838", fontSize: 14, fontWeight: "400" }}>
              Cancelled
            </Text>
          </View>
          <View>
            <Text style={{ color: "#C4C4C4", fontSize: 14 }}>05-10-2021</Text>
          </View>
        </View>
      </View>
    </KeyboardAvoidingView>
  );
};

export default Order;

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
