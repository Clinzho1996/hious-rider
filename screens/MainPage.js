/* eslint-disable prettier/prettier */
/* eslint-disable react-native/no-inline-styles */
/* eslint-disable react-hooks/rules-of-hooks */
/* eslint-disable quotes */

import {
  StyleSheet,
  Text,
  View,
  ImageBackground,
  Dimensions,
  Image,
  TouchableOpacity,
  Alert,
  Modal,
  Pressable,
  PermissionsAndroid,
} from "react-native";
import React, { useState, useEffect } from "react";
import Icon from "react-native-vector-icons/Ionicons";
import MapView, { Marker } from "react-native-maps";
import Geolocation from "@react-native-community/geolocation";

const windowWidth = Dimensions.get("window").width;
const windowHeight = Dimensions.get("window").height;

// Function to get permission for location
const requestLocationPermission = async () => {
  try {
    const granted = await PermissionsAndroid.request(
      PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION,
      {
        title: "Geolocation Permission",
        message: "Can we access your location?",
        buttonNeutral: "Ask Me Later",
        buttonNegative: "Cancel",
        buttonPositive: "OK",
      }
    );
    console.log("granted", granted);
    if (granted === "granted") {
      console.log("You can use Geolocation");
      return true;
    } else {
      console.log("You cannot use Geolocation");
      return false;
    }
  } catch (err) {
    return false;
  }
};

export default function MainPage({ navigation }) {
  const [modalVisibleSeventeen, setModalVisibleSeventeen] = useState(false);
  const [modalVisibleEighteen, setModalVisibleEighteen] = useState(false);
  const [modalVisibleNineteen, setModalVisibleNineteen] = useState(false);
  const containerStyle = {
    backgroundColor: "white",
    padding: 20,
    margin: 20,
    borderRadius: 15,
  };

  const [position, setPosition] = useState({
    latitude: 10,
    longitude: 10,
    latitudeDelta: 0.001,
    longitudeDelta: 0.001,
  });

  useEffect(() => {
    Geolocation.getCurrentPosition((pos) => {
      const crd = pos.coords;
      setPosition({
        latitude: crd.latitude,
        longitude: crd.longitude,
        latitudeDelta: 0.0421,
        longitudeDelta: 0.0421,
      });
    });
  }, []);

  const showModal = () => {
    setModalVisibleSeventeen(true);
  };

  return (
    <View style={styles.container}>
      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisibleSeventeen}
        onRequestClose={() => {
          setModalVisibleSeventeen(!modalVisibleSeventeen);
        }}
      >
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
            <View style={styles.filter}>
              <Pressable
                style={styles.filterprop}
                onPress={() => setModalVisibleSeventeen(!modalVisibleSeventeen)}
              >
                <View
                  style={{
                    borderWidth: 3,
                    width: 100,
                    borderColor: "#e8e8e8",
                    borderRadius: 6,
                  }}
                />
              </Pressable>
            </View>
            <View style={{ marginVertical: 50 }}>
              <View
                style={{
                  display: "flex",
                  flexDirection: "row",
                  justifyContent: "space-between",
                }}
              >
                <View style={{ marginLeft: 5, marginTop: -3 }}>
                  <Text
                    style={{
                      color: "#FFFFFF",
                      fontSize: 18,
                      fontWeight: "500",
                    }}
                  >
                    Pickup
                  </Text>
                  <Text
                    style={{
                      color: "#Fefefe",
                      fontSize: 12,
                      fontWeight: "400",
                      lineHeight: 18,
                    }}
                  >
                    23, Oladeinde street, Maryland.
                  </Text>
                </View>
                <Icon name="ellipse-outline" color={"#fff"} size={20} />
              </View>
              <View
                style={{
                  display: "flex",
                  flexDirection: "row",
                  marginTop: 20,
                  justifyContent: "space-between",
                }}
              >
                <View style={{ marginLeft: 5, marginTop: -3 }}>
                  <Text
                    style={{
                      color: "#FFFFFF",
                      fontSize: 18,
                      fontWeight: "500",
                    }}
                  >
                    Drop-off
                  </Text>
                  <Text
                    style={{
                      color: "#Fefefe",
                      fontSize: 12,
                      fontWeight: "400",
                      lineHeight: 18,
                    }}
                  >
                    44, Sobowale street, Ikorodu.
                  </Text>
                  <Text
                    style={{
                      color: "#FFFFFF",
                      fontSize: 20,
                      fontWeight: "700",
                      marginTop: 10,
                    }}
                  >
                    44km // ₦2500
                  </Text>
                </View>
                <Icon name="ellipse-outline" color={"#fff"} size={20} />
              </View>
              <View
                style={{
                  display: "flex",
                  flexDirection: "row",
                  alignItems: "center",
                  justifyContent: "space-between",
                  marginTop: 50,
                }}
              >
                <TouchableOpacity
                  style={{
                    backgroundColor: "#fff",
                    paddingHorizontal: 40,
                    paddingVertical: 15,
                    borderRadius: 10,
                  }}
                  onPress={() => setModalVisibleEighteen(true)}
                >
                  <Text style={{ fontSize: 16, color: "#212E5A" }}>
                    Drive to pickup
                  </Text>
                </TouchableOpacity>
                <TouchableOpacity
                  style={{
                    backgroundColor: "rgba(255,255,255, 0.2)",
                    color: "#fff",
                    padding: 15,
                    borderRadius: 10,
                  }}
                >
                  <Icon
                    name="chatbox-ellipses-outline"
                    color={"#fff"}
                    size={25}
                  />
                </TouchableOpacity>
                <TouchableOpacity
                  style={{
                    backgroundColor: "rgba(255,255,255, 0.2)",
                    color: "#fff",
                    padding: 15,
                    borderRadius: 10,
                  }}
                  onPress={() => navigation.navigate("OrderCancel")}
                >
                  <Icon name="close" color={"#fff"} size={25} />
                </TouchableOpacity>
              </View>
            </View>
          </View>
        </View>
      </Modal>
      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisibleEighteen}
        onRequestClose={() => {
          setModalVisibleEighteen(!modalVisibleEighteen);
        }}
      >
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
            <View style={styles.filter}>
              <Pressable
                style={styles.filterprop}
                onPress={() => setModalVisibleEighteen(!modalVisibleEighteen)}
              >
                <View
                  style={{
                    borderWidth: 3,
                    width: 100,
                    borderColor: "#e8e8e8",
                    borderRadius: 6,
                  }}
                />
              </Pressable>
            </View>
            <View style={{ marginVertical: 50 }}>
              <View
                style={{
                  display: "flex",
                  flexDirection: "row",
                  justifyContent: "space-between",
                }}
              >
                <View style={{ marginLeft: 5, marginTop: -3 }}>
                  <Text
                    style={{
                      color: "#FFFFFF",
                      fontSize: 18,
                      fontWeight: "500",
                    }}
                  >
                    Pickup
                  </Text>
                  <Text
                    style={{
                      color: "#Fefefe",
                      fontSize: 12,
                      fontWeight: "400",
                      lineHeight: 18,
                    }}
                  >
                    23, Oladeinde street, Maryland.
                  </Text>
                </View>
                <Icon name="ellipse-outline" color={"#fff"} size={20} />
              </View>
              <View
                style={{
                  display: "flex",
                  flexDirection: "row",
                  marginTop: 20,
                  justifyContent: "space-between",
                }}
              >
                <View style={{ marginLeft: 5, marginTop: -3 }}>
                  <Text
                    style={{
                      color: "#FFFFFF",
                      fontSize: 18,
                      fontWeight: "500",
                    }}
                  >
                    Drop-off
                  </Text>
                  <Text
                    style={{
                      color: "#Fefefe",
                      fontSize: 12,
                      fontWeight: "400",
                      lineHeight: 18,
                    }}
                  >
                    44, Sobowale street, Ikorodu.
                  </Text>
                  <Text
                    style={{
                      color: "#FFFFFF",
                      fontSize: 20,
                      fontWeight: "700",
                      marginTop: 10,
                    }}
                  >
                    44km // ₦2500
                  </Text>
                </View>
                <Icon name="ellipse-outline" color={"#fff"} size={20} />
              </View>
              <View
                style={{
                  display: "flex",
                  flexDirection: "row",
                  alignItems: "center",
                  justifyContent: "space-between",
                  marginTop: 50,
                }}
              >
                <TouchableOpacity
                  style={{
                    backgroundColor: "#fff",
                    paddingHorizontal: 40,
                    paddingVertical: 15,
                    borderRadius: 10,
                  }}
                  onPress={() => setModalVisibleNineteen(true)}
                >
                  <Text style={{ fontSize: 16, color: "#212E5A" }}>
                    Drive to drop-off
                  </Text>
                </TouchableOpacity>
                <TouchableOpacity
                  style={{
                    backgroundColor: "rgba(255,255,255, 0.2)",
                    color: "#fff",
                    padding: 15,
                    borderRadius: 10,
                  }}
                >
                  <Icon
                    name="chatbox-ellipses-outline"
                    color={"#fff"}
                    size={25}
                  />
                </TouchableOpacity>
                <TouchableOpacity
                  style={{
                    backgroundColor: "rgba(255,255,255, 0.2)",
                    color: "#fff",
                    padding: 15,
                    borderRadius: 10,
                  }}
                  onPress={() => navigation.navigate("OrderCancel")}
                >
                  <Icon name="close" color={"#fff"} size={25} />
                </TouchableOpacity>
              </View>
            </View>
          </View>
        </View>
      </Modal>
      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisibleNineteen}
        onRequestClose={() => {
          setModalVisibleNineteen(!modalVisibleNineteen);
        }}
      >
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
            <View style={styles.filter}>
              <Pressable
                style={styles.filterprop}
                onPress={() => setModalVisibleNineteen(!modalVisibleNineteen)}
              >
                <View
                  style={{
                    borderWidth: 3,
                    width: 100,
                    borderColor: "#e8e8e8",
                    borderRadius: 6,
                  }}
                />
              </Pressable>
            </View>
            <View style={{ marginVertical: 50 }}>
              <View
                style={{
                  display: "flex",
                  flexDirection: "row",
                  justifyContent: "space-between",
                }}
              >
                <View style={{ marginLeft: 5, marginTop: -3 }}>
                  <Text
                    style={{
                      color: "#FFFFFF",
                      fontSize: 18,
                      fontWeight: "500",
                    }}
                  >
                    Pickup
                  </Text>
                  <Text
                    style={{
                      color: "#Fefefe",
                      fontSize: 12,
                      fontWeight: "400",
                      lineHeight: 18,
                    }}
                  >
                    23, Oladeinde street, Maryland.
                  </Text>
                </View>
                <Icon name="ellipse-outline" color={"#fff"} size={20} />
              </View>
              <View
                style={{
                  display: "flex",
                  flexDirection: "row",
                  marginTop: 20,
                  justifyContent: "space-between",
                }}
              >
                <View style={{ marginLeft: 5, marginTop: -3 }}>
                  <Text
                    style={{
                      color: "#FFFFFF",
                      fontSize: 18,
                      fontWeight: "500",
                    }}
                  >
                    Drop-off
                  </Text>
                  <Text
                    style={{
                      color: "#Fefefe",
                      fontSize: 12,
                      fontWeight: "400",
                      lineHeight: 18,
                    }}
                  >
                    44, Sobowale street, Ikorodu.
                  </Text>
                  <Text
                    style={{
                      color: "#FFFFFF",
                      fontSize: 20,
                      fontWeight: "700",
                      marginTop: 10,
                    }}
                  >
                    44km // ₦2500
                  </Text>
                </View>
                <Icon name="ellipse-outline" color={"#fff"} size={20} />
              </View>
              <View
                style={{
                  display: "flex",
                  flexDirection: "row",
                  alignItems: "center",
                  justifyContent: "space-between",
                  marginTop: 50,
                }}
              >
                <TouchableOpacity
                  style={{
                    backgroundColor: "#fff",
                    paddingHorizontal: 40,
                    paddingVertical: 15,
                    borderRadius: 10,
                  }}
                  onPress={() => navigation.navigate("OrderComplete")}
                >
                  <Text style={{ fontSize: 16, color: "#212E5A" }}>
                    Complete order
                  </Text>
                </TouchableOpacity>
                <TouchableOpacity
                  style={{
                    backgroundColor: "rgba(255,255,255, 0.2)",
                    color: "#fff",
                    padding: 15,
                    borderRadius: 10,
                  }}
                >
                  <Icon
                    name="chatbox-ellipses-outline"
                    color={"#fff"}
                    size={25}
                  />
                </TouchableOpacity>
                <TouchableOpacity
                  style={{
                    backgroundColor: "rgba(255,255,255, 0.2)",
                    color: "#fff",
                    padding: 15,
                    borderRadius: 10,
                  }}
                  onPress={() => navigation.navigate("OrderCancel")}
                >
                  <Icon name="close" color={"#fff"} size={25} />
                </TouchableOpacity>
              </View>
            </View>
          </View>
        </View>
      </Modal>
      <ImageBackground>
        <View style={{ height: windowHeight, padding: 20 }}>
          <MapView
            style={styles.map}
            region={position}
            showsUserLocation={true}
            showsMyLocationButton={true}
            followsUserLocation={true}
            showsCompass={true}
            scrollEnabled={true}
            zoomEnabled={true}
            pitchEnabled={true}
            showsBuildings={true}
            showsTraffic={true}
            showsIndoors={true}
            rotateEnabled={true}
            showsIndoorLevelPicker={true}
          />
          <TouchableOpacity onPress={() => navigation.openDrawer()}>
            <Image
              source={require("../assets/user.png")}
              style={{
                alignItems: "center",
                marginBottom: 10,
                width: 50,
                height: 50,
                borderRadius: 6,
                marginLeft: 20,
              }}
            />
          </TouchableOpacity>
          <View
            style={{
              backgroundColor: "#212E5A",
              padding: 13,
              width: 100,
              display: "flex",
              flexDirection: "row",
              alignItems: "center",
              justifyContent: "space-between",
              borderRadius: 10,
            }}
          >
            <Text style={{ color: "#fff", fontSize: 16 }}>Online</Text>
            <Icon name="ellipse" color={"#50EA4D"} size={20} />
          </View>
          <View
            style={{
              marginTop: 150,
              backgroundColor: "#212E5A",
              padding: 15,
              width: 180,
              borderRadius: 10,
            }}
          >
            <View
              style={{
                display: "flex",
                flexDirection: "row",
                justifyContent: "flex-end",
              }}
            >
              <Icon name="close" color={"#fff"} size={20} />
            </View>
            <View style={{ marginVertical: 20 }}>
              <View
                style={{
                  display: "flex",
                  flexDirection: "row",
                }}
              >
                <Icon name="ellipse-outline" color={"#fff"} size={10} />
                <View style={{ marginLeft: 5, marginTop: -3 }}>
                  <Text
                    style={{
                      color: "#FFFFFF",
                      fontSize: 14,
                      fontWeight: "500",
                    }}
                  >
                    Pickup
                  </Text>
                  <Text
                    style={{
                      color: "#Fefefe",
                      fontSize: 12,
                      fontWeight: "400",
                      lineHeight: 18,
                    }}
                  >
                    23, Oladeinde street, Maryland.
                  </Text>
                </View>
              </View>
              <View
                style={{
                  display: "flex",
                  flexDirection: "row",
                  marginTop: 20,
                }}
              >
                <Icon name="ellipse-outline" color={"#fff"} size={10} />
                <View style={{ marginLeft: 5, marginTop: -3 }}>
                  <Text
                    style={{
                      color: "#FFFFFF",
                      fontSize: 14,
                      fontWeight: "500",
                    }}
                  >
                    Drop-off
                  </Text>
                  <Text
                    style={{
                      color: "#Fefefe",
                      fontSize: 12,
                      fontWeight: "400",
                      lineHeight: 18,
                    }}
                  >
                    44, Sobowale street, Ikorodu.
                  </Text>
                  <Text
                    style={{
                      color: "#FFFFFF",
                      fontSize: 12,
                      fontWeight: "600",
                      marginTop: 10,
                    }}
                  >
                    44km // ₦2500
                  </Text>
                </View>
              </View>
            </View>
            <TouchableOpacity
              style={{ backgroundColor: "#fff", padding: 10, borderRadius: 10 }}
              onPress={() => showModal()}
            >
              <Text
                style={{ color: "#212E5A", fontSize: 16, textAlign: "center" }}
              >
                Accept
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </ImageBackground>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: windowWidth,
    height: windowHeight,
  },
  userMap: {
    paddingVertical: 30,
    paddingHorizontal: 30,
    height: windowHeight,
  },
  centeredView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 0,
    backgroundColor: "rgba(0,0,0,0.5)",
    paddingTop: 430,
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
    alignItems: "center",
  },
});
