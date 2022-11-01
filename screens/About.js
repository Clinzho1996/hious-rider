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
  ImageBackground,
} from "react-native";
import React from "react";
import Icon from "react-native-vector-icons/Ionicons";

const windowWidth = Dimensions.get("window").width;
const windowHeight = Dimensions.get("window").height;

const About = ({ navigation }) => {
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
        <TouchableOpacity onPress={() => navigation.navigate("Main")}>
          <Icon name="arrow-back" size={30} color={"#828282"} />
        </TouchableOpacity>
      </View>
      <View>
        <Text style={{ fontSize: 24, color: "#212E5A", fontWeight: "600" }}>
          About us
        </Text>
        <Text
          style={{
            paddingTop: 20,
            fontSize: 16,
            lineHeight: 24,
            color: "#828282",
          }}
        >
          We are Hious, we help connect easily {"\n"}with businesses around you
          especially {"\n"}when it’s your first time there.
        </Text>
        <View style={{ paddingHorizontal: 20, paddingVertical: 40 }}>
          <View>
            <TouchableOpacity
              style={{
                display: "flex",
                flexDirection: "row",
                justifyContent: "space-between",
              }}
            >
              <Text style={{ color: "#5C5C5C", fontSize: 16 }}>FAQs</Text>
              <Icon
                name="chevron-forward-outline"
                color={"#5C5C5C"}
                size={22}
              />
            </TouchableOpacity>
            <TouchableOpacity
              style={{
                display: "flex",
                flexDirection: "row",
                justifyContent: "space-between",
                paddingVertical: 20,
              }}
            >
              <Text style={{ color: "#5C5C5C", fontSize: 16 }}>Our blog</Text>
              <Icon
                name="chevron-forward-outline"
                color={"#5C5C5C"}
                size={22}
              />
            </TouchableOpacity>
          </View>
        </View>
        <TouchableOpacity>
          <ImageBackground
            resizeMode={"cover"}
            source={require("../assets/direct.png")}
            style={{ padding: 50 }}
            imageStyle={{ borderRadius: 16 }}
          >
            <Text
              style={{ color: "#FFFFFF", fontSize: 16, textAlign: "center" }}
            >
              Get directions
            </Text>
          </ImageBackground>
        </TouchableOpacity>
        <View style={{ paddingVertical: 20 }}>
          <TouchableOpacity
            style={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "flex-start",
              paddingVertical: 5,
            }}
          >
            <Icon name="location-outline" color={"#5C5C5C"} size={22} />
            <Text
              style={{ color: "#5C5C5C", fontSize: 16, paddingHorizontal: 10 }}
            >
              Hious Enterprise House, Lekki
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "flex-start",
              paddingVertical: 5,
            }}
          >
            <Icon name="mail-open-outline" color={"#5C5C5C"} size={22} />
            <Text
              style={{ color: "#5C5C5C", fontSize: 16, paddingHorizontal: 10 }}
            >
              hious@gmail.com
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "flex-start",
              paddingVertical: 5,
            }}
          >
            <Icon name="call-outline" color={"#5C5C5C"} size={22} />
            <Text
              style={{ color: "#5C5C5C", fontSize: 16, paddingHorizontal: 10 }}
            >
              +234 (805) 464 6955
            </Text>
          </TouchableOpacity>
        </View>
        <View
          style={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "flex-start",
            paddingTop: 40,
          }}
        >
          <TouchableOpacity>
            <Icon name="logo-instagram" color={"#212E5A"} size={25} />
          </TouchableOpacity>
          <TouchableOpacity style={{ paddingHorizontal: 10 }}>
            <Icon name="logo-facebook" color={"#212E5A"} size={25} />
          </TouchableOpacity>
          <TouchableOpacity>
            <Icon name="logo-twitter" color={"#212E5A"} size={25} />
          </TouchableOpacity>
        </View>
      </View>
    </KeyboardAvoidingView>
  );
};

export default About;

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
