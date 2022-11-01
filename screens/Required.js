/* eslint-disable prettier/prettier */
/* eslint-disable react-native/no-inline-styles */
/* eslint-disable react/self-closing-comp */
/* eslint-disable quotes */

import {
  StyleSheet,
  Text,
  View,
  KeyboardAvoidingView,
  Platform,
  Dimensions,
  TouchableOpacity,
  ScrollView,
} from "react-native";
import React from "react";
import Icon from "react-native-vector-icons/Ionicons";

const windowWidth = Dimensions.get("window").width;
const windowHeight = Dimensions.get("window").height;

const Required = ({ navigation }) => {
  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === "ios" ? "padding" : null}
      style={styles.container}
    >
      <ScrollView style={{ marginBottom: 50 }}>
        <View
          style={{
            paddingHorizontal: 0,
            paddingVertical: 20,
            flexDirection: "row",
          }}
        >
          <TouchableOpacity
            onPress={() => navigation.navigate("Registersuccess")}
          >
            <Icon name="arrow-back" size={30} color={"#212E5A"} />
          </TouchableOpacity>
        </View>
        <View>
          <Text style={{ fontSize: 24, color: "#212E5A", fontWeight: "700" }}>
            Required details
          </Text>
          <Text
            style={{
              paddingTop: 20,
              fontSize: 16,
              lineHeight: 24,
              color: "#828282",
            }}
          >
            Here's what you need to complete {"\n"} your account
          </Text>
          <View>
            <TouchableOpacity
              style={{
                backgroundColor: "#F9F9F9",
                paddingHorizontal: 20,
                paddingVertical: 0,
                paddingBottom: 10,
                borderRadius: 10,
                display: "flex",
                flexDirection: "row",
                alignItems: "center",
                paddingTop: 10,
                paddingLeft: 20,
                marginTop: 20,
                justifyContent: "space-between",
              }}
              onPress={() => navigation.navigate("RidersPhoto")}
            >
              <View
                style={{
                  display: "flex",
                  flexDirection: "row",
                  alignItems: "center",
                }}
              >
                <Icon
                  name="document-text-outline"
                  color={"#C4C4C4"}
                  size={20}
                />
                <Text
                  style={{
                    paddingTop: 5,
                    paddingBottom: 5,
                    fontSize: 16,
                    paddingLeft: 10,
                    color: "#C4C4C4",
                  }}
                >
                  Rider's photo
                </Text>
              </View>
              <Icon
                name="chevron-forward-outline"
                color={"#C4C4C4"}
                size={20}
              />
            </TouchableOpacity>
            <TouchableOpacity
              style={{
                backgroundColor: "#F9F9F9",
                paddingHorizontal: 20,
                paddingVertical: 0,
                paddingBottom: 10,
                borderRadius: 10,
                display: "flex",
                flexDirection: "row",
                alignItems: "center",
                paddingTop: 10,
                paddingLeft: 20,
                marginTop: 20,
                justifyContent: "space-between",
              }}
            >
              <View
                style={{
                  display: "flex",
                  flexDirection: "row",
                  alignItems: "center",
                }}
              >
                <Icon
                  name="document-text-outline"
                  color={"#C4C4C4"}
                  size={20}
                />
                <Text
                  style={{
                    paddingTop: 5,
                    paddingBottom: 5,
                    fontSize: 16,
                    paddingLeft: 10,
                    color: "#C4C4C4",
                  }}
                >
                  Vehicle details
                </Text>
              </View>
              <Icon
                name="chevron-forward-outline"
                color={"#C4C4C4"}
                size={20}
              />
            </TouchableOpacity>
            <TouchableOpacity
              style={{
                backgroundColor: "#F9F9F9",
                paddingHorizontal: 20,
                paddingVertical: 0,
                paddingBottom: 10,
                borderRadius: 10,
                display: "flex",
                flexDirection: "row",
                alignItems: "center",
                paddingTop: 10,
                paddingLeft: 20,
                marginTop: 20,
                justifyContent: "space-between",
              }}
            >
              <View
                style={{
                  display: "flex",
                  flexDirection: "row",
                  alignItems: "center",
                }}
              >
                <Icon
                  name="document-text-outline"
                  color={"#C4C4C4"}
                  size={20}
                />
                <Text
                  style={{
                    paddingTop: 5,
                    paddingBottom: 5,
                    fontSize: 16,
                    paddingLeft: 10,
                    color: "#C4C4C4",
                  }}
                >
                  Rider's card
                </Text>
              </View>
              <Icon
                name="chevron-forward-outline"
                color={"#C4C4C4"}
                size={20}
              />
            </TouchableOpacity>
            <TouchableOpacity
              style={{
                backgroundColor: "#F9F9F9",
                paddingHorizontal: 20,
                paddingVertical: 0,
                paddingBottom: 10,
                borderRadius: 10,
                display: "flex",
                flexDirection: "row",
                alignItems: "center",
                paddingTop: 10,
                paddingLeft: 20,
                marginTop: 20,
                justifyContent: "space-between",
              }}
            >
              <View
                style={{
                  display: "flex",
                  flexDirection: "row",
                  alignItems: "center",
                }}
              >
                <Icon
                  name="document-text-outline"
                  color={"#C4C4C4"}
                  size={20}
                />
                <Text
                  style={{
                    paddingTop: 5,
                    paddingBottom: 5,
                    fontSize: 16,
                    paddingLeft: 10,
                    color: "#C4C4C4",
                  }}
                >
                  Hackney Permit
                </Text>
              </View>
              <Icon
                name="chevron-forward-outline"
                color={"#C4C4C4"}
                size={20}
              />
            </TouchableOpacity>
            <TouchableOpacity
              style={{
                backgroundColor: "#F9F9F9",
                paddingHorizontal: 20,
                paddingVertical: 0,
                paddingBottom: 10,
                borderRadius: 10,
                display: "flex",
                flexDirection: "row",
                alignItems: "center",
                paddingTop: 10,
                paddingLeft: 20,
                marginTop: 20,
                justifyContent: "space-between",
              }}
            >
              <View
                style={{
                  display: "flex",
                  flexDirection: "row",
                  alignItems: "center",
                }}
              >
                <Icon
                  name="document-text-outline"
                  color={"#C4C4C4"}
                  size={20}
                />
                <Text
                  style={{
                    paddingTop: 5,
                    paddingBottom: 5,
                    fontSize: 16,
                    paddingLeft: 10,
                    color: "#C4C4C4",
                  }}
                >
                  Hackney Permit
                </Text>
              </View>
              <Icon
                name="chevron-forward-outline"
                color={"#C4C4C4"}
                size={20}
              />
            </TouchableOpacity>

            <View style={{ marginTop: 60 }}>
              <Text style={{ color: "#213A5A", fontSize: 12, marginBottom: 5 }}>
                45% Completed
              </Text>
              <View
                style={{
                  backgroundColor: "#F6F6F6",
                  borderRadius: 10,
                }}
              >
                <View
                  style={{
                    backgroundColor: "#213A5A",
                    width: 100,
                    padding: 5,
                    borderRadius: 10,
                  }}
                ></View>
              </View>
              <TouchableOpacity
                style={styles.btnPrimary}
                onPress={() => navigation.navigate("Home")}
              >
                <Text style={styles.reg}>Continue</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </ScrollView>
    </KeyboardAvoidingView>
  );
};

export default Required;

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
    paddingTop: 15,
    paddingBottom: 15,
    marginTop: 20,
  },
  reg: {
    color: "#fff",
    fontSize: 18,
    textAlign: "center",
  },
});
