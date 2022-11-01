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
} from "react-native";
import React from "react";
import Icon from "react-native-vector-icons/Ionicons";

const windowWidth = Dimensions.get("window").width;
const windowHeight = Dimensions.get("window").height;

const Receipts = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <View
        style={{
          paddingHorizontal: 0,
          paddingVertical: 20,
          flexDirection: "row",
        }}
      >
        <TouchableOpacity onPress={() => navigation.navigate("Order")}>
          <Icon name="arrow-back" size={30} color={"#828282"} />
        </TouchableOpacity>
      </View>
      <View style={{ paddingTop: 0 }}>
        <Text style={{ fontSize: 24, color: "#212E5A", fontWeight: "600" }}>
          Receipt
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
          <View>
            <Text style={{ color: "#212E5A", fontSize: 14, fontWeight: "400" }}>
              Pickup:
            </Text>
          </View>
          <View style={{ paddingLeft: 120, paddingRight: 20 }}>
            <Text
              style={{ color: "#C4C4C4", fontSize: 14, textAlign: "right" }}
            >
              Hious Supermarket. 23, Oladeinde street, Maryland.
            </Text>
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
            <Text style={{ color: "#212E5A", fontSize: 14, fontWeight: "400" }}>
              Drop-off:
            </Text>
          </View>
          <View style={{ paddingLeft: 120, paddingRight: 20 }}>
            <Text
              style={{ color: "#C4C4C4", fontSize: 14, textAlign: "right" }}
            >
              44, Sobowale street Ikorodu, Lagos
            </Text>
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
            <Text style={{ color: "#212E5A", fontSize: 14, fontWeight: "400" }}>
              Order ID:
            </Text>
          </View>
          <View style={{ paddingLeft: 120, paddingRight: 20 }}>
            <Text
              style={{ color: "#C4C4C4", fontSize: 14, textAlign: "right" }}
            >
              SFE53-53453KFDFR
            </Text>
          </View>
        </View>
      </View>
      <View
        style={{
          paddingVertical: 20,
          borderBottomColor: "#EDEDED",
          borderBottomWidth: 1,
        }}
      >
        <View
          style={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-between",
            paddingVertical: 10,
          }}
        >
          <View>
            <Text style={{ color: "#212E5A", fontSize: 14, fontWeight: "400" }}>
              Payment Method:
            </Text>
          </View>
          <View>
            <Text
              style={{ color: "#C4C4C4", fontSize: 14, textAlign: "right" }}
            >
              Transfer
            </Text>
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
            <Text style={{ color: "#000", fontSize: 14, fontWeight: "400" }}>
              Distance
            </Text>
          </View>
          <View>
            <Text
              style={{
                color: "#383838",
                fontSize: 14,
                textAlign: "right",
                fontWeight: "600",
              }}
            >
              44km
            </Text>
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
            <Text style={{ color: "#000", fontSize: 14, fontWeight: "400" }}>
              Price
            </Text>
          </View>
          <View>
            <Text
              style={{
                color: "#383838",
                fontSize: 14,
                textAlign: "right",
                fontWeight: "600",
              }}
            >
              ₦2,500
            </Text>
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
            <Text style={{ color: "#000", fontSize: 14, fontWeight: "400" }}>
              Tax
            </Text>
          </View>
          <View>
            <Text
              style={{
                color: "#383838",
                fontSize: 14,
                textAlign: "right",
                fontWeight: "600",
              }}
            >
              ₦0
            </Text>
          </View>
        </View>
      </View>
      <View
        style={{
          paddingVertical: 20,
          flexDirection: "row",
          justifyContent: "space-between",
        }}
      >
        <Text style={{ color: "#212E5A", fontSize: 14, fontWeight: "600" }}>
          Total amount paid
        </Text>
        <Text style={{ color: "#212E5A", fontSize: 14, fontWeight: "600" }}>
          ₦2,500
        </Text>
      </View>
    </View>
  );
};

export default Receipts;

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
