/* eslint-disable prettier/prettier */
/* eslint-disable react-native/no-inline-styles */
/* eslint-disable quotes */
/* eslint-disable react/self-closing-comp */

import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  Dimensions,
  TouchableOpacity,
  Image,
  Modal,
  Pressable,
  Alert,
} from "react-native";
import React, { useState } from "react";
import Icon from "react-native-vector-icons/Ionicons";
import { TextInput } from "react-native-gesture-handler";
import { Checkbox } from "react-native-paper";

const windowWidth = Dimensions.get("window").width;
const windowHeight = Dimensions.get("window").height;

const Payment = ({ navigation }) => {
  const [modalVisibleFifteen, setModalVisibleFifteen] = useState(false);
  const [modalVisibleSixteen, setModalVisibleSixteen] = useState(false);
  const [checked, setChecked] = React.useState(false);
  const showModal = () => {
    setModalVisibleFifteen(true);
    setTimeout(() => {
      setModalVisibleFifteen(false);
    }, 5000);
  };
  const showModalTwo = () => {
    setModalVisibleSixteen(true);
    setTimeout(() => {
      setModalVisibleSixteen(false);
    }, 5000);
  };
  return (
    <ScrollView style={styles.container}>
      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisibleFifteen}
        onRequestClose={() => {
          setModalVisibleFifteen(!modalVisibleFifteen);
        }}
      >
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
            <View style={styles.filter}>
              <Pressable
                style={styles.filterprop}
                onPress={() => setModalVisibleFifteen(!modalVisibleFifteen)}
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
              }}
            >
              Transfer funds
            </Text>
            <View style={{ marginVertical: 20 }}>
              <View
                style={{
                  display: "flex",
                  flexDirection: "row",
                  justifyContent: "space-between",
                }}
              >
                <Text
                  style={{
                    color: "#FFFFFF",
                    fontSize: 18,
                    fontWeight: "500",
                    lineHeight: 27,
                  }}
                >
                  Bank Accounts
                </Text>
                <TouchableOpacity
                  onPress={() => navigation.navigate("AddAccount")}
                >
                  <Text
                    style={{
                      color: "#FFFFFF",
                      fontSize: 12,
                      fontWeight: "400",
                      lineHeight: 27,
                    }}
                  >
                    Add a new account
                  </Text>
                </TouchableOpacity>
              </View>
              <View
                style={{
                  display: "flex",
                  flexDirection: "row",
                  marginTop: 20,
                  justifyContent: "space-between",
                }}
              >
                <View
                  style={{
                    backgroundColor: "#fff",
                    padding: 15,
                    borderRadius: 15,
                  }}
                >
                  <Text
                    style={{
                      fontSize: 14,
                      color: "#5C5C5C",
                    }}
                  >
                    0243783491
                  </Text>
                  <Text
                    style={{
                      fontSize: 14,
                      color: "#5C5C5C",
                    }}
                  >
                    Lorem ipsum dolor
                  </Text>
                  <View
                    style={{
                      display: "flex",
                      flexDirection: "row",
                      marginTop: 20,
                      justifyContent: "space-between",
                      alignItems: "center",
                    }}
                  >
                    <Text
                      style={{
                        fontSize: 14,
                        color: "#C4C4C4",
                      }}
                    >
                      Guaranty Trust bank
                    </Text>
                    <Icon
                      name="checkmark-circle"
                      size={25}
                      color={"#C4C4C4"}
                      style={{ marginLeft: 40 }}
                    />
                  </View>
                </View>
                <View
                  style={{
                    backgroundColor: "#29396D",
                    padding: 15,
                    borderRadius: 15,
                    marginLeft: 20,
                  }}
                >
                  <Text
                    style={{
                      fontSize: 14,
                      color: "#5C5C5C",
                    }}
                  >
                    0243783491
                  </Text>
                  <Text
                    style={{
                      fontSize: 14,
                      color: "#5C5C5C",
                    }}
                  >
                    Lorem ipsum dolor
                  </Text>
                  <View
                    style={{
                      display: "flex",
                      flexDirection: "row",
                      marginTop: 20,
                      justifyContent: "space-between",
                      alignItems: "center",
                    }}
                  >
                    <Text
                      style={{
                        fontSize: 14,
                        color: "#5C5C5C",
                      }}
                    >
                      Guaranty Trust bank
                    </Text>
                    <Icon
                      name="checkmark-circle"
                      size={25}
                      color={"#5C5C5C"}
                      style={{ marginLeft: 40 }}
                    />
                  </View>
                </View>
              </View>
              <Text
                style={{
                  color: "#FFFFFF",
                  fontSize: 18,
                  fontWeight: "500",
                  lineHeight: 27,
                  marginTop: 20,
                }}
              >
                Transfer Amount
              </Text>
              <TextInput
                style={{
                  backgroundColor: "#29396D",
                  paddingHorizontal: 40,
                  paddingVertical: 15,
                  borderRadius: 10,
                  marginTop: 10,
                  color: "#B4BDE4",
                }}
                placeholder="Enter amount"
                placeholderTextColor={"#B4BDE4"}
                keyboardType={"numeric"}
              />
              <View
                style={{
                  display: "flex",
                  flexDirection: "row",
                  justifyContent: "flex-start",
                  alignItems: "center",
                  marginTop: 20,
                }}
              >
                <Checkbox
                  status={checked ? "checked" : "unchecked"}
                  onPress={() => {
                    setChecked(!checked);
                  }}
                  color="#fff"
                />
                <Text
                  style={{
                    color: "#FFFFFF",
                    fontSize: 12,
                    fontWeight: "400",
                    marginLeft: 10,
                  }}
                >
                  Lorem ipsum dolor sit amet, consectetur {"\n"} adipiscing
                  elit. Tortor consectetur.
                </Text>
              </View>
              <TouchableOpacity
                style={{
                  backgroundColor: "#fff",
                  paddingHorizontal: 40,
                  paddingVertical: 15,
                  borderRadius: 10,
                  marginTop: 30,
                }}
              >
                <Text
                  style={{
                    fontSize: 16,
                    color: "#212E5A",
                    textAlign: "center",
                  }}
                >
                  Confirm transfer
                </Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </Modal>
      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisibleSixteen}
        onRequestClose={() => {
          setModalVisibleSixteen(!modalVisibleSixteen);
        }}
      >
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
            <View style={styles.filter}>
              <Pressable
                style={styles.filterprop}
                onPress={() => setModalVisibleSixteen(!modalVisibleSixteen)}
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
              }}
            >
              Wallet Topup
            </Text>
            <View style={{ marginVertical: 20 }}>
              <View
                style={{
                  display: "flex",
                  flexDirection: "row",
                  justifyContent: "space-between",
                }}
              >
                <Text
                  style={{
                    color: "#FFFFFF",
                    fontSize: 18,
                    fontWeight: "500",
                    lineHeight: 27,
                  }}
                >
                  Bank Cards
                </Text>
                <Text
                  style={{
                    color: "#FFFFFF",
                    fontSize: 12,
                    fontWeight: "400",
                    lineHeight: 27,
                  }}
                >
                  Add a new card
                </Text>
              </View>
              <View
                style={{
                  display: "flex",
                  flexDirection: "row",
                  justifyContent: "space-between",
                  marginTop: 10,
                }}
              >
                <View
                  style={{
                    backgroundColor: "#F9F9F9",
                    padding: 15,
                    borderRadius: 15,
                    width: 155,
                  }}
                >
                  <Text style={{ color: "#5C5C5C" }}>**** 7545</Text>
                  <View
                    style={{
                      display: "flex",
                      flexDirection: "row",
                      justifyContent: "space-between",
                      alignItems: "center",
                      paddingTop: 20,
                    }}
                  >
                    <Text style={{ color: "#5C5C5C" }}>02/22</Text>
                    <Image
                      source={require("../assets/master.png")}
                      style={{ width: 30, height: 20 }}
                    />
                  </View>
                </View>
                <View
                  style={{
                    backgroundColor: "#CCCFE2",
                    padding: 15,
                    borderRadius: 15,
                    width: 155,
                  }}
                >
                  <Text style={{ color: "#5C5C5C" }}>**** 7545</Text>
                  <View
                    style={{
                      display: "flex",
                      flexDirection: "row",
                      justifyContent: "space-between",
                      alignItems: "center",
                      paddingTop: 20,
                    }}
                  >
                    <Text style={{ color: "#5C5C5C" }}>02/22</Text>
                    <Image
                      source={require("../assets/master.png")}
                      style={{ width: 30, height: 20 }}
                    />
                  </View>
                </View>
              </View>
              <Text
                style={{
                  color: "#FFFFFF",
                  fontSize: 18,
                  fontWeight: "500",
                  lineHeight: 27,
                  marginTop: 20,
                }}
              >
                Topup Amount
              </Text>
              <TextInput
                style={{
                  backgroundColor: "#29396D",
                  paddingHorizontal: 40,
                  paddingVertical: 15,
                  borderRadius: 10,
                  marginTop: 10,
                  color: "#B4BDE4",
                }}
                placeholder="Enter amount"
                placeholderTextColor={"#B4BDE4"}
                keyboardType={"numeric"}
              />
              <View
                style={{
                  display: "flex",
                  flexDirection: "row",
                  justifyContent: "flex-start",
                  alignItems: "center",
                  marginTop: 20,
                }}
              >
                <Checkbox
                  status={checked ? "checked" : "unchecked"}
                  onPress={() => {
                    setChecked(!checked);
                  }}
                  color="#fff"
                />
                <Text
                  style={{
                    color: "#FFFFFF",
                    fontSize: 12,
                    fontWeight: "400",
                    marginLeft: 10,
                  }}
                >
                  Lorem ipsum dolor sit amet, consectetur {"\n"} adipiscing
                  elit. Tortor consectetur.
                </Text>
              </View>
              <TouchableOpacity
                style={{
                  backgroundColor: "#fff",
                  paddingHorizontal: 40,
                  paddingVertical: 15,
                  borderRadius: 10,
                  marginTop: 30,
                }}
              >
                <Text
                  style={{
                    fontSize: 16,
                    color: "#212E5A",
                    textAlign: "center",
                  }}
                >
                  Topup Wallet
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
          justifyContent: "flex-end",
        }}
      >
        <TouchableOpacity onPress={() => navigation.openDrawer()}>
          <Image source={require("../assets/user.png")} />
        </TouchableOpacity>
      </View>
      <View style={{ paddingTop: 0 }}>
        <Text style={{ fontSize: 24, color: "#212E5A", fontWeight: "600" }}>
          Wallet
        </Text>
      </View>
      <View style={styles.wallet}>
        <View style={{ alignItems: "center", paddingVertical: 30 }}>
          <Text style={{ color: "#FFFFFF", fontSize: 16, lineHeight: 24 }}>
            Total balance
          </Text>
          <Text
            style={{
              color: "#FFFFFF",
              fontSize: 30,
              lineHeight: 45,
              fontWeight: "600",
            }}
          >
            ₦245,759.00
          </Text>
        </View>
        <View
          style={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <TouchableOpacity
            style={styles.topup}
            onPress={() => showModalTwo()}
          >
            <Text style={styles.topupText}>Topup</Text>
            <Icon name="add-outline" color={"#fff"} size={20} />
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.topup}
            onPress={() => showModal()}
          >
            <Text style={styles.topupText}>Transfer</Text>
            <Icon name="return-up-forward-outline" color={"#fff"} size={20} />
          </TouchableOpacity>
        </View>
      </View>

      <View style={{ paddingVertical: 10 }}>
        <View
          style={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <Text style={{ color: "#212E5A", fontSize: 18, fontWeight: "600" }}>
            Cards
          </Text>
          <TouchableOpacity>
            <Text style={{ fontSize: 16, fontWeight: "400", color: "#B9BCBF" }}>
              See all
            </Text>
          </TouchableOpacity>
        </View>
        <View
          style={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-between",
            marginTop: 10,
          }}
        >
          <View
            style={{
              backgroundColor: "#F9F9F9",
              padding: 15,
              borderRadius: 15,
              width: 145,
            }}
          >
            <Text style={{ color: "#5C5C5C" }}>**** 7545</Text>
            <View
              style={{
                display: "flex",
                flexDirection: "row",
                justifyContent: "space-between",
                alignItems: "center",
                paddingTop: 20,
              }}
            >
              <Text style={{ color: "#5C5C5C" }}>02/22</Text>
              <Image
                source={require("../assets/master.png")}
                style={{ width: 30, height: 20 }}
              />
            </View>
          </View>
          <View
            style={{
              backgroundColor: "#CCCFE2",
              padding: 15,
              borderRadius: 15,
              width: 145,
            }}
          >
            <Text style={{ color: "#5C5C5C" }}>**** 7545</Text>
            <View
              style={{
                display: "flex",
                flexDirection: "row",
                justifyContent: "space-between",
                alignItems: "center",
                paddingTop: 20,
              }}
            >
              <Text style={{ color: "#5C5C5C" }}>02/22</Text>
              <Image
                source={require("../assets/master.png")}
                style={{ width: 30, height: 20 }}
              />
            </View>
          </View>
        </View>
        <TouchableOpacity style={styles.btnPrimary}>
          <Text style={styles.reg}>Manage cards</Text>
        </TouchableOpacity>
      </View>
      <TouchableOpacity
        style={{
          paddingVertical: 20,
          justifyContent: "center",
          display: "flex",
          alignItems: "center",
        }}
        onPress={() => navigation.navigate("Transactions")}
      >
        <Image
          source={require("../assets/Vector.png")}
          style={{ width: 40, height: 20 }}
        />
      </TouchableOpacity>
      <View style={{ paddingTop: 0 }}>
        <View
          style={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <Text style={{ color: "#212E5A", fontSize: 18, fontWeight: "600" }}>
            Transactions
          </Text>
          <TouchableOpacity onPress={() => navigation.navigate("Transactions")}>
            <Text style={{ fontSize: 16, fontWeight: "400", color: "#B9BCBF" }}>
              See all
            </Text>
          </TouchableOpacity>
        </View>
        <View
          style={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-between",
            alignItems: "center",
            paddingVertical: 10,
          }}
        >
          <View
            style={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            <Image
              source={require("../assets/arrow.png")}
              style={{ width: 40, height: 40 }}
            />
            <View>
              <Text style={{ color: "#5C5C5C", fontSize: 14, paddingLeft: 20 }}>
                Gabriella Ikenduamaka
              </Text>
              <Text style={{ color: "#B9BCBF", fontSize: 13, paddingLeft: 20 }}>
                Card (****34875)
              </Text>
            </View>
          </View>
          <View>
            <View>
              <Text style={{ color: "#5C5C5C", fontSize: 14, paddingLeft: 20 }}>
                +5,000
              </Text>
              <Text style={{ color: "#B9BCBF", fontSize: 13, paddingLeft: 20 }}>
                Successful
              </Text>
            </View>
          </View>
        </View>
        <View
          style={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-between",
            alignItems: "center",
            paddingVertical: 10,
          }}
        >
          <View
            style={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            <Image
              source={require("../assets/arrow.png")}
              style={{ width: 40, height: 40 }}
            />
            <View>
              <Text style={{ color: "#5C5C5C", fontSize: 14, paddingLeft: 20 }}>
                Transfer
              </Text>
              <Text style={{ color: "#B9BCBF", fontSize: 13, paddingLeft: 20 }}>
                Wallet
              </Text>
            </View>
          </View>
          <View>
            <View>
              <Text style={{ color: "#5C5C5C", fontSize: 14, paddingLeft: 20 }}>
                -2,850
              </Text>
              <Text style={{ color: "#B9BCBF", fontSize: 13, paddingLeft: 20 }}>
                Successful
              </Text>
            </View>
          </View>
        </View>
      </View>
    </ScrollView>
  );
};

export default Payment;

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
    paddingHorizontal: 20,
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
    paddingTop: 240,
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
    alignItems: "flex-end",
    marginBottom: -20,
  },
});
