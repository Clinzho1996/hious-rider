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
  TextInput,
  Image,
  Modal,
  Pressable,
  Alert,
} from "react-native";
import React, { useState } from "react";
import Icon from "react-native-vector-icons/Ionicons";
import { RadioButton } from "react-native-paper";

const windowWidth = Dimensions.get("window").width;
const windowHeight = Dimensions.get("window").height;

const Profile = ({ navigation }) => {
  const [modalVisibleEleven, setModalVisibleEleven] = useState(false);
  const [modalVisibleTwelve, setModalVisibleTwelve] = useState(false);
  const [modalVisibleThirteen, setModalVisibleThirteen] = useState(false);
  const [modalVisibleFourteen, setModalVisibleFourteen] = useState(false);
  const [checked, setChecked] = React.useState("first");
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
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
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
              placeholder="David Ohenacho"
              placeholderTextColor={"#fff"}
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
              <TouchableOpacity>
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
        </View>
      </Modal>
      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisibleTwelve}
        onRequestClose={() => {
          setModalVisibleTwelve(!modalVisibleTwelve);
        }}
      >
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
            <Pressable
              style={{
                display: "flex",
                flexDirection: "row",
                alignItems: "flex-end",
                position: "absolute",
                right: 20,
                top: 20,
              }}
              onPress={() => setModalVisibleTwelve(!modalVisibleTwelve)}
            >
              <Icon name="close" size={30} color={"#fff"} />
            </Pressable>
            <Text style={styles.modalText}>Gender</Text>
            <View
              style={{
                display: "flex",
                flexDirection: "row",
                justifyContent: "space-between",
                alignItems: "center",
              }}
            >
              <Text style={{ color: "#fff", fontSize: 18, fontWeight: "500" }}>
                Male
              </Text>
              <RadioButton
                value="Male"
                status={checked === "first" ? "checked" : "unchecked"}
                onPress={() => setChecked("first")}
                color="#fff"
              />
            </View>
            <View
              style={{
                display: "flex",
                flexDirection: "row",
                justifyContent: "space-between",
                alignItems: "center",
              }}
            >
              <Text style={{ color: "#fff", fontSize: 18, fontWeight: "500" }}>
                Female
              </Text>
              <RadioButton
                value="Female"
                status={checked === "second" ? "checked" : "unchecked"}
                onPress={() => setChecked("second")}
                color="#fff"
              />
            </View>
          </View>
        </View>
      </Modal>
      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisibleThirteen}
        onRequestClose={() => {
          setModalVisibleThirteen(!modalVisibleThirteen);
        }}
      >
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
            <Pressable
              style={{
                display: "flex",
                flexDirection: "row",
                alignItems: "flex-end",
                position: "absolute",
                right: 20,
                top: 20,
              }}
              onPress={() => setModalVisibleThirteen(!modalVisibleThirteen)}
            >
              <Icon name="close" size={30} color={"#fff"} />
            </Pressable>
            <Text style={styles.modalText}>Date of Birth</Text>
            <TextInput
              style={{
                backgroundColor: "#29396D",
                padding: 10,
                borderRadius: 6,
                color: "#fff",
                fontSize: 16,
                width: 260,
              }}
              placeholder="David Ohenacho"
              placeholderTextColor={"#fff"}
            />

            <View style={styles.close}>
              <TouchableOpacity
                onPress={() => setModalVisibleThirteen(!modalVisibleThirteen)}
              >
                <Text
                  style={{ color: "#B4BDE4", fontSize: 16, fontWeight: "400" }}
                >
                  Cancel
                </Text>
              </TouchableOpacity>
              <TouchableOpacity>
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
        </View>
      </Modal>
      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisibleFourteen}
        onRequestClose={() => {
          setModalVisibleFourteen(!modalVisibleFourteen);
        }}
      >
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
            <Pressable
              style={{
                display: "flex",
                flexDirection: "row",
                alignItems: "flex-end",
                position: "absolute",
                right: 20,
                top: 20,
              }}
              onPress={() => setModalVisibleFourteen(!modalVisibleFourteen)}
            >
              <Icon name="close" size={30} color={"#fff"} />
            </Pressable>
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
              multiline={true}
              numberOfLines={6}
              placeholder="Lorem ipsum dolor sit amet,  consectetur adipiscing elit. Nulla eget dui vitae amet. Dui, ante varius nulla natoque facilisis morbi."
              placeholderTextColor={"#fff"}
            />

            <View style={styles.close}>
              <TouchableOpacity
                onPress={() => setModalVisibleFourteen(!modalVisibleFourteen)}
              >
                <Text
                  style={{ color: "#B4BDE4", fontSize: 16, fontWeight: "400" }}
                >
                  Cancel
                </Text>
              </TouchableOpacity>
              <TouchableOpacity>
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
        </View>
      </Modal>
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
              source={require("../assets/profile.png")}
              style={{ width: 120, height: 120, borderRadius: 20 }}
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
              <TouchableOpacity onPress={() => setModalVisibleEleven(true)}>
                <Text style={{ color: "#B9BCBF", fontSize: 16 }}>
                  David Ohenacho
                </Text>
              </TouchableOpacity>
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
                Gender
              </Text>
              <TouchableOpacity onPress={() => setModalVisibleTwelve(true)}>
                <Text style={{ color: "#B9BCBF", fontSize: 16 }}>Male</Text>
              </TouchableOpacity>
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
                Date of birth
              </Text>
              <TouchableOpacity onPress={() => setModalVisibleThirteen(true)}>
                <Text style={{ color: "#B9BCBF", fontSize: 16 }}>
                  Apr. 11th, 1991
                </Text>
              </TouchableOpacity>
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
              <TouchableOpacity onPress={() => setModalVisibleFourteen(true)}>
                <Text style={{ color: "#B9BCBF", fontSize: 16 }}>
                  Lorem ipsum dolor sit amet, consecte adipiscing elit.
                  Pharetra.
                </Text>
              </TouchableOpacity>
            </View>
          </View>

          <TouchableOpacity style={styles.btnPrimary}>
            <Text style={styles.reg}>Save changes</Text>
          </TouchableOpacity>
        </View>
      </View>
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
    justifyContent: "center",
    alignItems: "center",
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
    fontSize: 20,
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
