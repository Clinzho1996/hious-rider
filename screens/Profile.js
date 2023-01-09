/* eslint-disable prettier/prettier */
/* eslint-disable react-native/no-inline-styles */
import {
  StyleSheet,
  Text,
  View,
  KeyboardAvoidingView,
  Platform,
  Dimensions,
  TouchableOpacity,
  TextInput,
  Image,
  Pressable,
  Modal,
  Alert,
  ScrollView,
  RefreshControl,
  ImageBackground,
} from "react-native";
import React, { useState, useEffect } from "react";
import Icon from "react-native-vector-icons/Ionicons";
import AsyncStorage from "@react-native-async-storage/async-storage";
import ImagePicker from "react-native-image-crop-picker";

const windowWidth = Dimensions.get("window").width;
const windowHeight = Dimensions.get("window").height;

const wait = (timeout) => {
  return new Promise((resolve) => setTimeout(resolve, timeout));
};
const Profile = ({ navigation }) => {
  const [refreshing, setRefreshing] = React.useState(false);

  const onRefresh = React.useCallback(() => {
    setRefreshing(true);
    wait(2000).then(() => setRefreshing(false));
  }, []);
  const [modalVisibleEleven, setModalVisibleEleven] = useState(false);
  const [checked, setChecked] = React.useState("first");
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [name, setName] = useState("");
  const [location, setLocation] = useState("");

  const showModal = () => {
    setModalVisibleEleven(true);
  };

  async function getData() {
    const jwt = await AsyncStorage.getItem("AccessToken");
    let item = { jwt };
    console.warn(item);

    return fetch(
      "https://hiousapp.com/api/vendor_auth/fetch_rider_profile.php",
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

  const [phone_number, setPhoneNumber] = useState("");
  const [email, setEmail] = useState("");
  const [about, setAbout] = useState("");

  async function updateName() {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 2000);
    const jwt = await AsyncStorage.getItem("AccessToken");
    let item = { name, email, location, phone_number, about, jwt };
    console.warn(item);

    fetch("https://hiousapp.com/api/rider_auth/update_rider_account.php", {
      method: "PUT",
      body: JSON.stringify(item),
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
    })
      .then((result) => {
        let statusCode = result.status,
          success = result.ok;
        result.json().then((result) => {
          if (!success) {
            console.log(result.message);
            Alert.alert("Warning", result.message);
            return;
          } else {
            console.log(result.message);
          }
        });
      })
      .catch((error) => {
        console.log(error);
      });
  }

  const [image, setImage] = useState(
    "https://api.adorable.io/avatars/80/abott@adorable.png"
  );

  const takePhotoFromCamera = () => {
    ImagePicker.openCamera({
      compressImageMaxWidth: 300,
      compressImageMaxHeight: 300,
      cropping: true,
      compressImageQuality: 0.7,
    }).then((image) => {
      console.log(image);
      setImage(image.path);
      this.bs.current.snapTo(1);
    });
  };

  const choosePhotoFromLibrary = () => {
    ImagePicker.openPicker({
      width: 300,
      height: 300,
      cropping: true,
      compressImageQuality: 0.7,
    }).then((image) => {
      console.log(image);
      setImage(image.path);
      this.bs.current.snapTo(1);
    });
  };

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === "ios" ? "padding" : null}
      style={styles.container}
    >
      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisibleEleven}
        onRequestClose={() => {
          setModalVisibleEleven(!modalVisibleEleven);
        }}
      >
        <ScrollView
          style={styles.centeredView}
          contentContainerStyle={{
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <View style={styles.modalView}>
            <TouchableOpacity
              style={{
                justifyContent: "center",
                display: "flex",
                flexDirection: "row",
                paddingTop: 30,
              }}
              onPress={choosePhotoFromLibrary}
            >
              <ImageBackground
                source={{
                  uri: image,
                }}
                style={{ height: 100, width: 100 }}
                imageStyle={{
                  borderRadius: 15,
                  borderWidth: 1,
                  borderColor: "#fff",
                }}
              >
                <View
                  style={{
                    flex: 1,
                    justifyContent: "center",
                    alignItems: "center",
                  }}
                >
                  <Icon
                    name="camera"
                    size={35}
                    color="#fff"
                    style={{
                      opacity: 0.7,
                      alignItems: "center",
                      justifyContent: "center",
                      borderWidth: 1,
                      borderColor: "#fff",
                      borderRadius: 10,
                    }}
                  />
                </View>
              </ImageBackground>
            </TouchableOpacity>
            <Pressable
              style={{
                display: "flex",
                flexDirection: "row",
                alignItems: "flex-end",
                position: "absolute",
                right: 20,
                top: 20,
              }}
              onPress={() => setModalVisibleEleven(!modalVisibleEleven)}
            >
              <Icon name="close" size={30} color={"#fff"} />
            </Pressable>
            <Text style={styles.modalText}>Name</Text>
            <TextInput
              style={{
                backgroundColor: "#29396D",
                padding: 10,
                borderRadius: 6,
                color: "#fff",
                fontSize: 16,
                width: 260,
              }}
              placeholder={data.name}
              placeholderTextColor={"#000"}
              value={data.name}
              onChangeText={(text) => setName(text)}
            />

            <Pressable
              style={{
                display: "flex",
                flexDirection: "row",
                alignItems: "flex-end",
                position: "absolute",
                right: 20,
                top: 20,
              }}
              onPress={() => setModalVisibleEleven(!modalVisibleEleven)}
            >
              <Icon name="close" size={30} color={"#fff"} />
            </Pressable>
            <Text style={styles.modalText}>Email address</Text>
            <TextInput
              style={{
                backgroundColor: "#29396D",
                padding: 10,
                borderRadius: 6,
                color: "#fff",
                fontSize: 16,
                width: 260,
              }}
              placeholder={data.email}
              placeholderTextColor={"#000"}
              value={data.email}
              onChangeText={(text) => setEmail(text)}
            />
            <Text style={styles.modalText}>Phone number</Text>
            <TextInput
              style={{
                backgroundColor: "#29396D",
                padding: 10,
                borderRadius: 6,
                color: "#fff",
                fontSize: 16,
                width: 260,
              }}
              placeholder={data.phone_number}
              placeholderTextColor={"#000"}
              value={data.phone_number}
              onChangeText={(text) => setPhoneNumber(text)}
            />
            <Text style={styles.modalText}>Address</Text>
            <TextInput
              style={{
                backgroundColor: "#29396D",
                padding: 10,
                borderRadius: 6,
                color: "#fff",
                fontSize: 16,
                width: 260,
              }}
              placeholder={data.location}
              placeholderTextColor={"#fff"}
              value={location}
              multiline={true}
              onChangeText={(text) => setLocation(text)}
            />
            <Text style={styles.modalText}>Profile</Text>
            <TextInput
              style={{
                backgroundColor: "#29396D",
                padding: 10,
                borderRadius: 6,
                color: "#fff",
                fontSize: 16,
                width: 260,
              }}
              multiline={true}
              placeholder={data.about}
              placeholderTextColor={"#f7f7f7"}
              value={about}
              onChangeText={(text) => setAbout(text)}
            />
            <View style={styles.close}>
              <TouchableOpacity
                onPress={() => setModalVisibleEleven(!modalVisibleEleven)}
              >
                <Text
                  style={{ color: "#B4BDE4", fontSize: 16, fontWeight: "400" }}
                >
                  Cancel
                </Text>
              </TouchableOpacity>
              <TouchableOpacity
                onPress={() => {
                  setModalVisibleEleven(!modalVisibleEleven);
                  Alert.alert("Success", "Profile updated successfully");
                  navigation.navigate("Home");
                  updateName();
                }}
              >
                <Text
                  style={{
                    color: "#fff",
                    fontSize: 16,
                    fontWeight: "500",
                    marginLeft: 20,
                  }}
                >
                  Save
                </Text>
              </TouchableOpacity>
            </View>
          </View>
        </ScrollView>
      </Modal>

      <ScrollView
        refreshControl={
          <RefreshControl
            refreshing={refreshing}
            onRefresh={onRefresh}
            size="default"
            color="#3E90FC"
          />
        }
      >
        <View
          style={{
            paddingHorizontal: 0,
            paddingVertical: 20,
            flexDirection: "row",
          }}
        >
          <TouchableOpacity onPress={() => navigation.navigate("Home")}>
            <Icon name="arrow-back" size={30} color={"#828282"} />
          </TouchableOpacity>
        </View>
        <View>
          <View>
            <View
              style={{
                justifyContent: "center",
                display: "flex",
                flexDirection: "row",
                paddingTop: 30,
              }}
            >
              <Image
                // source={require('../assets/user.png')}
                source={{
                  uri: image,
                }}
                style={{
                  width: 100,
                  height: 100,
                  borderRadius: 20,
                  borderColor: "#212E5A",
                  borderWidth: 2,
                }}
              />
            </View>
            <View style={{ paddingTop: 30 }}>
              <View
                style={{
                  display: "flex",
                  flexDirection: "row",
                  alignItems: "center",
                  justifyContent: "space-between",
                  paddingHorizontal: 0,
                  borderBottomColor: "#97979733",
                  borderBottomWidth: 1,
                  paddingVertical: 20,
                }}
              >
                <Text
                  style={{ fontSize: 16, color: "#5C5C5C", fontWeight: "500" }}
                >
                  Name
                </Text>
                {loading ? (
                  <Text
                    style={{
                      fontSize: 16,
                      paddingLeft: 10,
                      fontWeight: "400",
                      color: "#5C5C5C",
                    }}
                  >
                    Loading
                  </Text>
                ) : (
                  <Text
                    style={{
                      color: "#B9BCBF",
                      fontSize: 16,
                      textTransform: "capitalize",
                    }}
                  >
                    {data.name}
                  </Text>
                )}
              </View>
              <View
                style={{
                  display: "flex",
                  flexDirection: "row",
                  alignItems: "center",
                  justifyContent: "space-between",
                  paddingHorizontal: 0,
                  borderBottomColor: "#97979733",
                  borderBottomWidth: 1,
                  paddingVertical: 20,
                }}
              >
                <Text
                  style={{ fontSize: 16, color: "#5C5C5C", fontWeight: "500" }}
                >
                  Email
                </Text>
                {loading ? (
                  <Text
                    style={{
                      fontSize: 16,
                      paddingLeft: 10,
                      fontWeight: "400",
                      color: "#5C5C5C",
                    }}
                  >
                    Loading
                  </Text>
                ) : (
                  <Text style={{ color: "#B9BCBF", fontSize: 16 }}>
                    {data.email}
                  </Text>
                )}
              </View>
              <View
                style={{
                  display: "flex",
                  flexDirection: "row",
                  alignItems: "center",
                  justifyContent: "space-between",
                  paddingHorizontal: 0,
                  borderBottomColor: "#97979733",
                  borderBottomWidth: 1,
                  paddingVertical: 20,
                }}
              >
                <Text
                  style={{ fontSize: 16, color: "#5C5C5C", fontWeight: "500" }}
                >
                  Phone number
                </Text>
                {loading ? (
                  <Text
                    style={{
                      fontSize: 16,
                      paddingLeft: 10,
                      fontWeight: "400",
                      color: "#5C5C5C",
                    }}
                  >
                    Loading
                  </Text>
                ) : (
                  <Text style={{ color: "#B9BCBF", fontSize: 16 }}>
                    {data.phone_number}
                  </Text>
                )}
              </View>
              <View
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  paddingHorizontal: 0,
                  paddingVertical: 20,
                  alignItems: "flex-start",
                  borderBottomColor: "#97979733",
                  borderBottomWidth: 1,
                }}
              >
                <Text
                  style={{ fontSize: 16, color: "#5C5C5C", fontWeight: "500" }}
                >
                  Profile
                </Text>
                {loading ? (
                  <Text
                    style={{
                      fontSize: 16,
                      paddingLeft: 10,
                      fontWeight: "400",
                      color: "#5C5C5C",
                    }}
                  >
                    Loading
                  </Text>
                ) : (
                  <Text style={{ color: "#B9BCBF", fontSize: 16 }}>
                    {data.about}
                  </Text>
                )}
              </View>
              <View
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  paddingHorizontal: 0,
                  paddingVertical: 20,
                  alignItems: "flex-start",
                }}
              >
                <Text
                  style={{ fontSize: 16, color: "#5C5C5C", fontWeight: "500" }}
                >
                  Address
                </Text>
                {loading ? (
                  <Text
                    style={{
                      fontSize: 16,
                      paddingLeft: 10,
                      fontWeight: "400",
                      color: "#5C5C5C",
                    }}
                  >
                    Loading
                  </Text>
                ) : (
                  <Text style={{ color: "#B9BCBF", fontSize: 16 }}>
                    {data.location}
                  </Text>
                )}
              </View>
            </View>

            <TouchableOpacity style={styles.btnPrimary} onPress={showModal}>
              <Text style={styles.reg}>Edit Profile</Text>
            </TouchableOpacity>
          </View>
        </View>
      </ScrollView>
    </KeyboardAvoidingView>
  );
};

export default Profile;

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
    marginTop: 70,
  },
  reg: {
    color: "#fff",
    fontSize: 18,
    textAlign: "center",
  },
  centeredView: {
    flex: 1,
    marginTop: 0,
    backgroundColor: "rgba(0,0,0,0.5)",
  },
  modalView: {
    margin: 20,
    backgroundColor: "#212E5A",
    borderRadius: 20,
    padding: 35,
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
    textAlign: "left",
    marginTop: 15,
    fontSize: 14,
    color: "#fff",
    fontWeight: "600",
  },
  close: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "flex-end",
    marginTop: 30,
    alignItems: "flex-end",
  },
});
