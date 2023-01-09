/* eslint-disable prettier/prettier */
/* eslint-disable quotes */
import React from "react";
import { createDrawerNavigator } from "@react-navigation/drawer";
import Chat from "../screens/Chat";
import Profile from "../screens/Profile";
import BusinessProfile from "../screens/BusinessProfile";
import Rate from "../screens/Rate";
import About from "../screens/About";
import SignOut from "../screens/SignOut";
import CustomDrawer from "./CustomDrawer";
import Welcome from "../screens/Welcome";
import Login from "../screens/Login";
import Register from "../screens/Register";
import RegisterSuccess from "../screens/RegisterSuccess";
import ForgotPassword from "../screens/ForgotPassword";
import ChangePassword from "../screens/ChangePassword";
import ResetCode from "../screens/ResetCode";
import Success from "../screens/Success";
import Verified from "../screens/Verified";
import Home from "../screens/Home";
import Settings from "../screens/Settings";
import Required from "../screens/Required";
import Personaldetails from "../screens/Personaldetails";
import Receipts from "../screens/Receipts";
import Transactions from "../screens/Transactions";
import Payment from "../screens/Payment";
import AddAccount from "../screens/AddAccount";
import AccountSuccess from "../screens/AccountSuccess";
import OrderComplete from "../screens/OrderComplete";
import OrderCancel from "../screens/OrderCancel";
import CancelSuccess from "../screens/CancelSuccess";
import Onboarding from "../screens/Onboarding";
import EmailVerify from "../screens/EmailVerify";

const Drawer = createDrawerNavigator();

const AppStack = () => {
  return (
    <Drawer.Navigator
      initialRouteName="Onboarding"
      drawerContent={(props) => <CustomDrawer {...props} />}
      screenOptions={{
        headerShown: false,
        DrawerNavigatorBarVisible: false,
      }}
    >
      <Drawer.Screen name="Receipts" component={Receipts} />
      <Drawer.Screen name="CancelSuccess" component={CancelSuccess} />
      <Drawer.Screen name="OrderCancel" component={OrderCancel} />
      <Drawer.Screen name="OrderComplete" component={OrderComplete} />
      <Drawer.Screen name="FormSuccess" component={AccountSuccess} />
      <Drawer.Screen name="AddAccount" component={AddAccount} />
      <Drawer.Screen name="Payments" component={Payment} />
      <Drawer.Screen name="Transactions" component={Transactions} />
      <Drawer.Screen name="Welcome" component={Welcome} />
      <Drawer.Screen name="Chat" component={Chat} />
      <Drawer.Screen name="About" component={About} />
      <Drawer.Screen name="Profile" component={Profile} />
      <Drawer.Screen name="Business" component={BusinessProfile} />
      <Drawer.Screen name="Rate" component={Rate} />
      <Drawer.Screen name="SignOut" component={SignOut} />
      <Drawer.Screen name="Register" component={Register} />
      <Drawer.Screen name="Login" component={Login} />
      <Drawer.Screen name="Forgot" component={ForgotPassword} />
      <Drawer.Screen name="Verified" component={Verified} />
      <Drawer.Screen name="Success" component={Success} />
      <Drawer.Screen name="Registersuccess" component={RegisterSuccess} />
      <Drawer.Screen name="Changepass" component={ChangePassword} />
      <Drawer.Screen name="Reset" component={ResetCode} />
      <Drawer.Screen name="Home" component={Home} />
      <Drawer.Screen name="Settings" component={Settings} />
      <Drawer.Screen name="Personal" component={Personaldetails} />
      <Drawer.Screen name="Required" component={Required} />
      <Drawer.Screen name="Onboarding" component={Onboarding} />
      <Drawer.Screen name="EmailVerify" component={EmailVerify} />
    </Drawer.Navigator>
  );
};

export default AppStack;
