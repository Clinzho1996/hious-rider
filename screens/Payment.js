/* eslint-disable prettier/prettier */
/* eslint-disable react-native/no-inline-styles */

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
  KeyboardAvoidingView,
  Platform,
} from "react-native";
import React, { useState, useEffect } from "react";
import Icon from "react-native-vector-icons/Ionicons";
import { TextInput } from "react-native-gesture-handler";
import { Checkbox } from "react-native-paper";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { PayWithFlutterwaveV2 } from "flutterwave-react-native";
import DropDownPicker from "react-native-dropdown-picker";
import { SelectList } from "react-native-dropdown-select-list";

const windowWidth = Dimensions.get("window").width;
const windowHeight = Dimensions.get("window").height;

const Payment = ({ navigation }) => {
  const [modalVisible, setModalVisible] = useState(false);
  const [modalVisibleTwo, setModalVisibleTwo] = useState(false);
  const [modalVisibleThree, setModalVisibleThree] = useState(false);
  const [modalVisibleSixteen, setModalVisibleSixteen] = useState(false);
  // const [open, setOpen] = useState(false);
  // const [value, setValue] = useState(null);
  const bank = [
    {
      id: 132,
      code: "560",
      value: "Page MFBank",
    },
    {
      id: 133,
      code: "304",
      value: "Stanbic Mobile Money",
    },
    {
      id: 134,
      code: "308",
      value: "FortisMobile",
    },
    {
      id: 135,
      code: "328",
      value: "TagPay",
    },
    {
      id: 136,
      code: "309",
      value: "FBNMobile",
    },
    {
      id: 137,
      code: "011",
      value: "First Bank of Nigeria",
    },
    {
      id: 138,
      code: "326",
      value: "Sterling Mobile",
    },
    {
      id: 139,
      code: "990",
      value: "Omoluabi Mortgage Bank",
    },
    {
      id: 140,
      code: "311",
      value: "ReadyCash (Parkway)",
    },
    {
      id: 141,
      code: "057",
      value: "Zenith Bank",
    },
    {
      id: 142,
      code: "068",
      value: "Standard Chartered Bank",
    },
    {
      id: 143,
      code: "306",
      value: "eTranzact",
    },
    {
      id: 144,
      code: "070",
      value: "Fidelity Bank",
    },
    {
      id: 145,
      code: "023",
      value: "CitiBank",
    },
    {
      id: 146,
      code: "215",
      value: "Unity Bank",
    },
    {
      id: 147,
      code: "323",
      value: "Access Money",
    },
    {
      id: 148,
      code: "302",
      value: "Eartholeum",
    },
    {
      id: 149,
      code: "324",
      value: "Hedonmark",
    },
    {
      id: 150,
      code: "325",
      value: "MoneyBox",
    },
    {
      id: 151,
      code: "301",
      value: "JAIZ Bank",
    },
    {
      id: 152,
      code: "050",
      value: "Ecobank Plc",
    },
    {
      id: 153,
      code: "307",
      value: "EcoMobile",
    },
    {
      id: 154,
      code: "318",
      value: "Fidelity Mobile",
    },
    {
      id: 155,
      code: "319",
      value: "TeasyMobile",
    },
    {
      id: 156,
      code: "999",
      value: "NIP Virtual Bank",
    },
    {
      id: 157,
      code: "320",
      value: "VTNetworks",
    },
    {
      id: 158,
      code: "221",
      value: "Stanbic IBTC Bank",
    },
    {
      id: 159,
      code: "501",
      value: "Fortis Microfinance Bank",
    },
    {
      id: 160,
      code: "329",
      value: "PayAttitude Online",
    },
    {
      id: 161,
      code: "322",
      value: "ZenithMobile",
    },
    {
      id: 162,
      code: "303",
      value: "ChamsMobile",
    },
    {
      id: 163,
      code: "403",
      value: "SafeTrust Mortgage Bank",
    },
    {
      id: 164,
      code: "551",
      value: "Covenant Microfinance Bank",
    },
    {
      id: 165,
      code: "415",
      value: "Imperial Homes Mortgage Bank",
    },
    {
      id: 166,
      code: "552",
      value: "NPF MicroFinance Bank",
    },
    {
      id: 167,
      code: "526",
      value: "Parralex",
    },
    {
      id: 168,
      code: "035",
      value: "Wema Bank",
    },
    {
      id: 169,
      code: "084",
      value: "Enterprise Bank",
    },
    {
      id: 170,
      code: "063",
      value: "Diamond Bank",
    },
    {
      id: 171,
      code: "305",
      value: "Paycom",
    },
    {
      id: 172,
      code: "100",
      value: "SunTrust Bank",
    },
    {
      id: 173,
      code: "317",
      value: "Cellulant",
    },
    {
      id: 174,
      code: "401",
      value: "ASO Savings and & Loans",
    },
    {
      id: 175,
      code: "030",
      value: "Heritage",
    },
    {
      id: 176,
      code: "402",
      value: "Jubilee Life Mortgage Bank",
    },
    {
      id: 177,
      code: "058",
      value: "GTBank Plc",
    },
    {
      id: 178,
      code: "032",
      value: "Union Bank",
    },
    {
      id: 179,
      code: "232",
      value: "Sterling Bank",
    },
    {
      id: 180,
      code: "076",
      value: "Polaris Bank",
    },
    {
      id: 181,
      code: "082",
      value: "Keystone Bank",
    },
    {
      id: 182,
      code: "327",
      value: "Pagatech",
    },
    {
      id: 183,
      code: "559",
      value: "Coronation Merchant Bank",
    },
    {
      id: 184,
      code: "601",
      value: "FSDH",
    },
    {
      id: 185,
      code: "313",
      value: "Mkudi",
    },
    {
      id: 186,
      code: "214",
      value: "First City Monument Bank",
    },
    {
      id: 187,
      code: "314",
      value: "FET",
    },
    {
      id: 188,
      code: "523",
      value: "Trustbond",
    },
    {
      id: 189,
      code: "315",
      value: "GTMobile",
    },
    {
      id: 190,
      code: "033",
      value: "United Bank for Africa",
    },
    {
      id: 191,
      code: "044",
      value: "Access Bank",
    },
    {
      id: 567,
      code: "90115",
      value: "TCF MFB",
    },
    {
      id: 1413,
      code: "090175",
      value: "Test bank",
    },
    {
      id: 1731,
      code: "103",
      value: "Globus Bank",
    },
  ];
  const showModalTwo = () => {
    setModalVisibleSixteen(true);
  };
  const showModalThree = () => {
    setModalVisible(true);
    setTimeout(() => {
      setModalVisible(false);
    }, 10000);
  };
  const showModalFour = () => {
    setModalVisibleTwo(true);
  };
  const showModalFive = () => {
    setModalVisibleThree(true);
  };

  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [loadingTwo, setLoadingTwo] = useState(true);
  const [amount, setAmount] = useState("");

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

  async function withdraw() {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 2000);
    const jwt = await AsyncStorage.getItem("AccessToken");
    let item = { amount, jwt };
    console.warn(item);

    fetch("https://hiousapp.com/api/rider_auth/rider_withdraw.php", {
      method: "POST",
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

  const [selected, setSelected] = React.useState("");
  const [account_number, setAccount] = useState("");
  const [bank_name, setBank] = useState("");
  const [bank_code, setBankCode] = useState("");

  async function addBankAccount() {
    setLoading(true);
    setTimeout(() => {
      setLoadingTwo(false);
    }, 2000);
    const jwt = await AsyncStorage.getItem("AccessToken");
    let item = { account_number, bank_name, bank_code, jwt };
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

  return (
    <KeyboardAvoidingView behavior={Platform.OS === "ios" ? "padding" : null}>
      <ScrollView style={styles.container}>
        <Modal
          animationType="slide"
          transparent={true}
          visible={modalVisible}
          onRequestClose={() => {
            setModalVisible(!modalVisible);
          }}
        >
          <View style={styles.centeredViewTwo}>
            <View style={styles.modalViewTwo}>
              <Text style={styles.modalTextTwo}>Top-up wallet</Text>

              <View style={styles.filterTwo}>
                <Pressable
                  style={styles.filterpropTwo}
                  onPress={() => setModalVisible(!modalVisible)}
                >
                  <Icon name="close" size={30} color={"#fff"} />
                </Pressable>
              </View>
              <TouchableOpacity
                style={styles.call}
                onPress={() => showModalFour()}
              >
                <Text style={{ color: "#FFFFFF", textAlign: "center" }}>
                  With Bank Transfer
                </Text>
                <Icon name="chevron-forward" size={20} color={"#fff"} />
              </TouchableOpacity>
              <TouchableOpacity
                style={styles.call}
                onPress={() => showModalTwo()}
              >
                <Text style={{ color: "#FFFFFF", textAlign: "center" }}>
                  With Debit Card
                </Text>
                <Icon name="chevron-forward" size={20} color={"#fff"} />
              </TouchableOpacity>
            </View>
          </View>
        </Modal>
        <Modal
          animationType="slide"
          transparent={true}
          visible={modalVisibleThree}
          onRequestClose={() => {
            setModalVisibleThree(!modalVisibleThree);
          }}
        >
          <View style={styles.centeredViewTwo}>
            <View style={styles.modalViewTwo}>
              <Text style={styles.modalTextTwo}>Withdraw</Text>
              <View style={styles.filterTwo}>
                <Pressable
                  style={styles.filterpropTwo}
                  onPress={() => setModalVisibleThree(!modalVisibleThree)}
                >
                  <Icon name="close" size={30} color={"#fff"} />
                </Pressable>
              </View>
              <View style={{ marginVertical: 20 }}>
                <View>
                  <TextInput
                    style={{
                      backgroundColor: "#29396D",
                      paddingRight: 0,
                      paddingLeft: 20,
                      paddingVertical: 15,
                      borderRadius: 10,
                      marginTop: 10,
                      color: "#B4BDE4",
                    }}
                    placeholder="Enter amount"
                    placeholderTextColor={"#B4BDE4"}
                    keyboardType={"numeric"}
                    value={amount}
                    onChangeText={(text) => setAmount(text)}
                  />
                </View>
                <TouchableOpacity
                  style={{
                    backgroundColor: "#fff",
                    paddingHorizontal: 50,
                    paddingVertical: 15,
                    borderRadius: 10,
                    marginTop: 20,
                  }}
                  onPress={withdraw}
                >
                  <Text
                    style={{
                      fontSize: 16,
                      color: "#212E5A",
                      textAlign: "center",
                    }}
                  >
                    Withdraw Funds
                  </Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={showModalTwo}>
                  <Text
                    style={{
                      fontSize: 16,
                      color: "#fff",
                      textAlign: "right",
                      marginTop: 20,
                    }}
                  >
                    Add a new account
                  </Text>
                </TouchableOpacity>
              </View>
            </View>
          </View>
        </Modal>
        <Modal
          animationType="slide"
          transparent={true}
          visible={modalVisibleTwo}
          onRequestClose={() => {
            setModalVisibleTwo(!modalVisibleTwo);
          }}
        >
          <View style={styles.centeredViewTwo}>
            <View style={styles.modalViewTwo}>
              <Text style={styles.modalTextTwo}>Bank details</Text>

              <View style={styles.filterTwo}>
                <Pressable
                  style={styles.filterpropTwo}
                  onPress={() => setModalVisibleTwo(!modalVisibleTwo)}
                >
                  <Icon name="close" size={30} color={"#fff"} />
                </Pressable>
              </View>
              <View>
                <Text
                  style={{
                    color: "#FFFFFF",
                    textAlign: "left",
                    fontSize: 16,
                    fontWeight: "300",
                  }}
                >
                  Bank name:{" "}
                  <Text
                    style={{
                      fontWeight: "600",
                    }}
                  >
                    dolor sit amet, consecte
                  </Text>
                </Text>
                <Text
                  style={{
                    color: "#FFFFFF",
                    textAlign: "left",
                    fontSize: 16,
                    fontWeight: "300",
                  }}
                >
                  Account name:{" "}
                  <Text
                    style={{
                      fontWeight: "600",
                    }}
                  >
                    Arcu potenti
                  </Text>
                </Text>
                <Text
                  style={{
                    color: "#FFFFFF",
                    textAlign: "left",
                    fontSize: 16,
                    fontWeight: "300",
                  }}
                >
                  Account number:{" "}
                  <Text
                    style={{
                      fontWeight: "600",
                    }}
                  >
                    0012345678
                  </Text>
                </Text>
              </View>
              <View style={styles.callTwo}>
                <TouchableOpacity onPress={() => showModalFour()}>
                  <Text style={{ color: "#FFFFFF", textAlign: "left" }}>
                    Copy Account number
                  </Text>
                </TouchableOpacity>
                <TouchableOpacity>
                  <Image
                    source={require("../assets/copies.png")}
                    style={{ width: 30, height: 30 }}
                  />
                </TouchableOpacity>
              </View>
              <Text
                style={{
                  color: "#FFFFFF",
                  textAlign: "left",
                  fontSize: 12,
                  fontWeight: "300",
                  paddingVertical: 30,
                }}
              >
                Please note, it might take about 15mins for the top-up to
                reflect in your wallet.
              </Text>
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
                Add new account
              </Text>
              <View style={{ marginVertical: 20 }}>
                <Text
                  style={{
                    color: "#FFFFFF",
                    fontSize: 18,
                    fontWeight: "500",
                    lineHeight: 27,
                    marginTop: 20,
                    marginBottom: 20,
                  }}
                >
                  Bank Name
                </Text>
                <SelectList
                  data={bank}
                  save="code"
                  setSelected={(value, code) => {
                    setBankCode(code);
                    setBank(value);
                  }}
                  inputStyles={{ color: "#B4BDE4" }}
                  boxStyles={{
                    backgroundColor: "#29396D",
                    borderColor: "#29396D",
                  }}
                  dropdownStyles={{ backgroundColor: "white", color: "#000" }}
                  dropdownTextStyles={{ color: "#000" }}
                />
                <Text
                  style={{
                    color: "#FFFFFF",
                    fontSize: 18,
                    fontWeight: "500",
                    lineHeight: 27,
                    marginTop: 20,
                  }}
                >
                  Account Number
                </Text>
                <TextInput
                  style={{
                    backgroundColor: "#29396D",
                    paddingHorizontal: 20,
                    paddingVertical: 15,
                    borderRadius: 10,
                    marginTop: 10,
                    color: "#B4BDE4",
                  }}
                  placeholder="Enter account number"
                  placeholderTextColor={"#B4BDE4"}
                  keyboardType={"numeric"}
                  value={account_number}
                  onChangeText={(text) => setAccount(text)}
                />

                <TouchableOpacity
                  style={{
                    backgroundColor: "#fff",
                    paddingHorizontal: 40,
                    paddingVertical: 15,
                    borderRadius: 10,
                    marginTop: 30,
                  }}
                  onPress={addBankAccount}
                >
                  <Text
                    style={{
                      fontSize: 16,
                      color: "#212E5A",
                      textAlign: "center",
                    }}
                  >
                    Add New Account
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
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <TouchableOpacity onPress={() => navigation.openDrawer()}>
            <Image
              source={require("../assets/user.png")}
              style={{ width: 40, height: 40, borderRadius: 50 }}
            />
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => navigation.navigate("Notifications")}
          >
            <Image
              source={require("../assets/notify.png")}
              style={{ width: 30, height: 30 }}
            />
          </TouchableOpacity>
        </View>
        <View
          style={{
            paddingTop: 0,
            flexDirection: "row",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <Text style={{ fontSize: 24, color: "#212E5A", fontWeight: "600" }}>
            Wallet
          </Text>
        </View>
        <View style={styles.wallet}>
          <View style={{ alignItems: "center", paddingVertical: 30 }}>
            <Text style={{ color: "#FFFFFF", fontSize: 16, lineHeight: 24 }}>
              Total balance
            </Text>
            {loading ? (
              <Text
                style={{
                  color: "#FFFFFF",
                  fontSize: 20,
                  lineHeight: 45,
                  fontWeight: "600",
                }}
              >
                Fetching Wallet balance
              </Text>
            ) : (
              <Text
                style={{
                  color: "#FFFFFF",
                  fontSize: 30,
                  lineHeight: 45,
                  fontWeight: "600",
                }}
              >
                {data.wallet}
              </Text>
            )}
          </View>
          <View
            style={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            <TouchableOpacity style={styles.topup} onPress={showModalTwo}>
              <Text style={styles.topupText}>Add Bank</Text>
              <Icon name="add-outline" color={"#fff"} size={18} />
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.topup}
              onPress={() => showModalFive()}
            >
              <Text style={styles.topupText}>Withdraw</Text>
              <Icon name="link-outline" color={"#fff"} size={18} />
            </TouchableOpacity>
          </View>
        </View>

        {/* <View style={{paddingVertical: 10}}>
        <View
          style={{
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'center',
          }}>
          <Text style={{color: '#212E5A', fontSize: 18, fontWeight: '600'}}>
            Cards
          </Text>
          <TouchableOpacity>
            <Text style={{fontSize: 16, fontWeight: '400', color: '#B9BCBF'}}>
              See all
            </Text>
          </TouchableOpacity>
        </View>
        <View
          style={{
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'space-between',
            marginTop: 10,
          }}>
          <View
            style={{
              backgroundColor: '#F9F9F9',
              padding: 15,
              borderRadius: 15,
              width: 145,
            }}>
            <Text style={{color: '#5C5C5C'}}>**** 7545</Text>
            <View
              style={{
                display: 'flex',
                flexDirection: 'row',
                justifyContent: 'space-between',
                alignItems: 'center',
                paddingTop: 20,
              }}>
              <Text style={{color: '#5C5C5C'}}>02/22</Text>
              <Image
                source={require('../assets/master.png')}
                style={{width: 30, height: 20}}
              />
            </View>
          </View>
          <View
            style={{
              backgroundColor: '#CCCFE2',
              padding: 15,
              borderRadius: 15,
              width: 145,
            }}>
            <Text style={{color: '#5C5C5C'}}>**** 7545</Text>
            <View
              style={{
                display: 'flex',
                flexDirection: 'row',
                justifyContent: 'space-between',
                alignItems: 'center',
                paddingTop: 20,
              }}>
              <Text style={{color: '#5C5C5C'}}>02/22</Text>
              <Image
                source={require('../assets/master.png')}
                style={{width: 30, height: 20}}
              />
            </View>
          </View>
        </View>
        <TouchableOpacity style={styles.btnPrimary}>
          <Text style={styles.reg}>Manage cards</Text>
        </TouchableOpacity>
      </View> */}
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
            <TouchableOpacity
              onPress={() => navigation.navigate("Transactions")}
            >
              <Text
                style={{ fontSize: 16, fontWeight: "400", color: "#B9BCBF" }}
              >
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
                source={require("../assets/topup.png")}
                style={{ width: 40, height: 40 }}
              />
              <View>
                <Text
                  style={{ color: "#5C5C5C", fontSize: 14, paddingLeft: 20 }}
                >
                  Gabriella Ikenduamaka
                </Text>
                <Text
                  style={{ color: "#B9BCBF", fontSize: 13, paddingLeft: 20 }}
                >
                  Card (****34875)
                </Text>
              </View>
            </View>
            <View>
              <View>
                <Text
                  style={{ color: "#5C5C5C", fontSize: 14, paddingLeft: 20 }}
                >
                  +5,000
                </Text>
                <Text
                  style={{ color: "#B9BCBF", fontSize: 13, paddingLeft: 20 }}
                >
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
                source={require("../assets/outgone.png")}
                style={{ width: 40, height: 40 }}
              />
              <View>
                <Text
                  style={{ color: "#5C5C5C", fontSize: 14, paddingLeft: 20 }}
                >
                  Transfer
                </Text>
                <Text
                  style={{ color: "#B9BCBF", fontSize: 13, paddingLeft: 20 }}
                >
                  Wallet
                </Text>
              </View>
            </View>
            <View>
              <View>
                <Text
                  style={{ color: "#5C5C5C", fontSize: 14, paddingLeft: 20 }}
                >
                  -2,850
                </Text>
                <Text
                  style={{ color: "#B9BCBF", fontSize: 13, paddingLeft: 20 }}
                >
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
                source={require("../assets/topup.png")}
                style={{ width: 40, height: 40 }}
              />
              <View>
                <Text
                  style={{ color: "#5C5C5C", fontSize: 14, paddingLeft: 20 }}
                >
                  Gabriella Ikenduamaka
                </Text>
                <Text
                  style={{ color: "#B9BCBF", fontSize: 13, paddingLeft: 20 }}
                >
                  Card (****34875)
                </Text>
              </View>
            </View>
            <View>
              <View>
                <Text
                  style={{ color: "#5C5C5C", fontSize: 14, paddingLeft: 20 }}
                >
                  +5,000
                </Text>
                <Text
                  style={{ color: "#B9BCBF", fontSize: 13, paddingLeft: 20 }}
                >
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
                source={require("../assets/outgone.png")}
                style={{ width: 40, height: 40 }}
              />
              <View>
                <Text
                  style={{ color: "#5C5C5C", fontSize: 14, paddingLeft: 20 }}
                >
                  Transfer
                </Text>
                <Text
                  style={{ color: "#B9BCBF", fontSize: 13, paddingLeft: 20 }}
                >
                  Wallet
                </Text>
              </View>
            </View>
            <View>
              <View>
                <Text
                  style={{ color: "#5C5C5C", fontSize: 14, paddingLeft: 20 }}
                >
                  -2,850
                </Text>
                <Text
                  style={{ color: "#B9BCBF", fontSize: 13, paddingLeft: 20 }}
                >
                  Successful
                </Text>
              </View>
            </View>
          </View>
        </View>
      </ScrollView>
    </KeyboardAvoidingView>
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
    padding: 15,
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
    paddingRight: 6,
  },
  centeredView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 0,
    backgroundColor: "rgba(0,0,0,0.5)",
    paddingTop: 290,
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
    marginBottom: -20,
    alignItems: "flex-end",
  },
  centeredViewTwo: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 0,
    backgroundColor: "rgba(0,0,0,0.5)",
    paddingTop: 450,
  },
  modalViewTwo: {
    margin: 20,
    backgroundColor: "#212E5A",
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    padding: 35,
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
  textStyleTwo: {
    color: "white",
    fontWeight: "bold",
  },
  modalTextTwo: {
    marginBottom: 5,
    fontSize: 24,
    color: "#fff",
    fontWeight: "600",
  },
  filterTwo: {
    marginTop: 0,
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    position: "absolute",
    right: 10,
    top: 20,
  },
  filterpropTwo: {
    borderRadius: 6,
    paddingHorizontal: 20,
    paddingVertical: 10,
    margin: 5,
    alignItems: "flex-end",
  },
  call: {
    backgroundColor: "rgba(0,0,0,0.2)",
    marginTop: 20,
    width: 280,
    padding: 20,
    borderRadius: 15,
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
  },
  innerDetails: {
    paddingBottom: 150,
  },
  callTwo: {
    backgroundColor: "rgba(0,0,0,0.2)",
    marginTop: 20,
    width: 280,
    padding: 15,
    borderRadius: 15,
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingHorizontal: 20,
  },
});
