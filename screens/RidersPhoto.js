/* eslint-disable prettier/prettier */
/* eslint-disable react-native/no-inline-styles */
/* eslint-disable quotes */
/* eslint-disable react/jsx-no-duplicate-props */

import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  Dimensions,
  TouchableOpacity,
  Image,
  Modal,
  Pressable,
  Alert,
} from "react-native";
import React, { useState } from "react";
import Icon from "react-native-vector-icons/Ionicons";
import { useCameraDevices, Camera } from "react-native-vision-camera";

const windowWidth = Dimensions.get("window").width;
const windowHeight = Dimensions.get("window").height;

const RidersPhoto = ({ navigation }) => {
  const [modalVisibleEight, setModalVisibleEight] = useState(false);
  const [modalVisibleNine, setModalVisibleNine] = useState(false);
  const [hasPermission, setHasPermission] = React.useState(false);
  const devices = useCameraDevices();
  const device = devices.back;
  const showModal = () => {
    setModalVisibleEight(true);
  };

  const showModalTwo = () => {
    setModalVisibleNine(true);
    setTimeout(() => {
      setModalVisibleNine(false);
    }, 5000);
  };

  React.useEffect(() => {
    (async () => {
      const status = await Camera.requestCameraPermission();
      setHasPermission(status === "authorized");
    })();
  }, []);

  return (
    <SafeAreaView style={styles.container}>
      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisibleEight}
        onRequestClose={() => {
          setModalVisibleEight(!modalVisibleEight);
        }}
      >
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
            <View style={styles.filter}>
              <Pressable
                style={styles.filterprop}
                onPress={() => setModalVisibleEight(!modalVisibleEight)}
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
                textAlign: "center",
              }}
            >
              Choose option
            </Text>
            <View style={{ marginVertical: 20 }}>
              <TouchableOpacity
                style={{
                  backgroundColor: "#fff",
                  paddingHorizontal: 40,
                  paddingVertical: 15,
                  borderRadius: 10,
                  marginTop: 10,
                }}
                onPress={() => showModalTwo()}
              >
                <Text
                  style={{
                    fontSize: 16,
                    color: "#212E5A",
                    textAlign: "center",
                  }}
                >
                  Take photo
                </Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={{
                  backgroundColor: "#fff",
                  paddingHorizontal: 40,
                  paddingVertical: 15,
                  borderRadius: 10,
                  marginTop: 20,
                }}
              >
                <Text
                  style={{
                    fontSize: 16,
                    color: "#212E5A",
                    textAlign: "center",
                  }}
                >
                  Upload photo
                </Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </Modal>
      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisibleNine}
        onRequestClose={() => {
          setModalVisibleNine(!modalVisibleNine);
        }}
      >
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
            <View style={{ marginBottom: 20 }}>
              <View style={{ marginBottom: 20 }}>
                {device != null && hasPermission && (
                  <Camera
                    device={device}
                    isActive={true}
                    style={{ width: 260, height: 340, borderRadius: 250 }}
                  />
                )}
              </View>
              <Text
                style={{ color: "#FFFFFF", fontSize: 16, textAlign: "center" }}
              >
                Make sure all your face features are very visible.
              </Text>
              <TouchableOpacity
                style={{
                  backgroundColor: "#fff",
                  paddingHorizontal: 40,
                  paddingVertical: 15,
                  borderRadius: 10,
                  marginTop: 20,
                }}
              >
                <Text
                  style={{
                    fontSize: 16,
                    color: "#212E5A",
                    textAlign: "center",
                  }}
                >
                  Take your shot
                </Text>
              </TouchableOpacity>
            </View>
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
        <TouchableOpacity onPress={() => navigation.navigate("Required")}>
          <Icon name="arrow-back" size={30} color={"#828282"} />
        </TouchableOpacity>
      </View>
      <View>
        <Text style={{ fontSize: 24, color: "#212E5A", fontWeight: "600" }}>
          Rider's photo
        </Text>
        <Text
          style={{
            paddingTop: 20,
            fontSize: 16,
            lineHeight: 24,
            color: "#828282",
          }}
        >
          Take a picture of yourself or upload a {"\n"}very recent picture.
        </Text>
        <View>
          <View style={{ marginTop: 30 }}>
            <TouchableOpacity onPress={() => showModal()}>
              <Image
                source={require("../assets/placeholder.png")}
                style={{ width: 300, height: 300 }}
              />
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.btnPrimary}
              onPress={() => navigation.navigate("Required")}
            >
              <Text style={styles.reg}>Save</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default RidersPhoto;

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
    backgroundColor: "#C4C4C4",
    borderRadius: 10,
    marginTop: 100,
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
