/* eslint-disable react-native/no-inline-styles */
/* eslint-disable prettier/prettier */
/* eslint-disable quotes */
import {
  StyleSheet,
  Text,
  View,
  Image,
  Dimensions,
  TouchableOpacity,
  Modal,
  Pressable,
  Alert,
  TextInput,
} from "react-native";
import React, { useState, useEffect } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { DrawerContentScrollView } from "@react-navigation/drawer";
import Icon from "react-native-vector-icons/Ionicons";

const windowHeight = Dimensions.get("window").height;

const CustomDrawer = ({ navigation }) => {
  const [modalVisible, setModalVisible] = useState(false);
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);

  async function getData() {
    const jwt = await AsyncStorage.getItem("AccessToken");
    let item = { jwt };
    console.warn(item);

    return fetch(
      "https://hiousapp.com/api/rider_auth/fetch_rider_profile.php",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify(item),
      }
    )
      .then((response) => response.json())
      .then((json) => setData(json))
      .catch((error) => console.error(error))
      .finally(() => setLoading(false));
  }

  useEffect(() => {
    getData();
  }, []);
  return (
    <View style={{ flex: 1 }}>
      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
          Alert.alert("Modal has been closed.");
          setModalVisible(!modalVisible);
        }}
      >
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
            <Text style={styles.modalText}>
              Are you sure you {"\n"}want to sign out?
            </Text>

            <View style={styles.close}>
              <TouchableOpacity
                style={{
                  backgroundColor: "#29396D",
                  paddingHorizontal: 40,
                  paddingVertical: 15,
                  borderRadius: 10,
                }}
                onPress={() => setModalVisible(!modalVisible)}
              >
                <Text
                  style={{ color: "#B4BDE4", fontSize: 16, fontWeight: "400" }}
                >
                  Cancel
                </Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={{
                  backgroundColor: "#fff",
                  paddingHorizontal: 35,
                  paddingVertical: 15,
                  borderRadius: 10,
                }}
                onPress={() => navigation.navigate("Login")}
              >
                <Text
                  style={{
                    color: "#5C5C5C",
                    fontSize: 16,
                    fontWeight: "500",
                  }}
                >
                  Sign out
                </Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </Modal>
      <DrawerContentScrollView
        contentContainerStyle={{
          backgroundColor: "#212E5A",
          padding: 30,
          height: windowHeight,
        }}
      >
        <View
          style={{
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            borderBottomColor: "#A6ACCA66",
            borderBottomWidth: 1,
            marginBottom: 30,
            marginHorizontal: 30,
            paddingVertical: 30,
          }}
        >
          <Image
            source={require("../assets/profile.png")}
            style={{ width: 60, height: 60, borderRadius: 6 }}
          />
          <Text
            style={{
              color: "#FFFFFF",
              fontSize: 16,
              lineHeight: 24,
              padding: 20,
            }}
          >
            {data.name}
          </Text>
        </View>
        {/* <DrawerItemList {...props} /> */}
        <TouchableOpacity
          style={{
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            paddingTop: 0,
            marginHorizontal: 30,
            paddingHorizontal: 0,
          }}
          onPress={() => navigation.navigate("Profile")}
        >
          <Icon name="person-outline" color={"#fff"} size={22} />
          <Text
            style={{
              color: "#FFFFFF",
              fontSize: 16,
              lineHeight: 24,
              padding: 10,
            }}
          >
            Profile
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={{
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            paddingTop: 20,
            marginHorizontal: 30,
            paddingHorizontal: 0,
          }}
          onPress={() => navigation.navigate("Chat")}
        >
          <Icon name="chatbox-ellipses-outline" color={"#fff"} size={22} />
          <Text
            style={{
              color: "#FFFFFF",
              fontSize: 16,
              lineHeight: 24,
              padding: 10,
            }}
          >
            Chat with us
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={{
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            paddingTop: 20,
            marginHorizontal: 30,
            paddingHorizontal: 0,
          }}
          onPress={() => navigation.navigate("About")}
        >
          <Icon name="list-circle-outline" color={"#fff"} size={22} />
          <Text
            style={{
              color: "#FFFFFF",
              fontSize: 16,
              lineHeight: 24,
              padding: 10,
            }}
          >
            About us
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={{
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          <View
            style={{
              display: "flex",
              flexDirection: "row",
              alignItems: "center",
              paddingTop: 20,
              marginHorizontal: 30,
              paddingHorizontal: 0,
            }}
          >
            <Icon name="star-outline" color={"#fff"} size={22} />
            <Text
              style={{
                color: "#FFFFFF",
                fontSize: 16,
                lineHeight: 24,
                padding: 10,
              }}
            >
              Rate us
            </Text>
          </View>
          <View
            style={{
              paddingTop: 20,
              marginHorizontal: 30,
              paddingHorizontal: 0,
            }}
          >
            <Icon name="chevron-forward-outline" color={"#fff"} size={22} />
          </View>
        </TouchableOpacity>
        <TouchableOpacity
          style={{
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            borderTopColor: "#A6ACCA66",
            borderTopWidth: 1,
            marginTop: 220,
            paddingTop: 20,
            marginHorizontal: 30,
            paddingHorizontal: 0,
          }}
          onPress={() => navigation.navigate("SignOut")}
        >
          <Icon name="log-out-outline" color={"#fff"} size={30} />
          <Text
            style={{
              color: "#FFFFFF",
              fontSize: 16,
              lineHeight: 24,
              padding: 20,
            }}
          >
            Sign out
          </Text>
        </TouchableOpacity>
      </DrawerContentScrollView>
    </View>
  );
};

export default CustomDrawer;

const styles = StyleSheet.create({
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
    padding: 20,
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
  textStyle: {
    color: "white",
    fontWeight: "bold",
    textAlign: "left",
  },
  modalText: {
    marginBottom: 15,
    textAlign: "center",
    fontSize: 24,
    color: "#fff",
    fontWeight: "600",
  },
  close: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 10,
  },
});
