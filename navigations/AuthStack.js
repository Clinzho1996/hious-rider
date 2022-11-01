/* eslint-disable prettier/prettier */
/* eslint-disable quotes */

import React from "react";

import Login from "../screens/Login";
import Register from "../screens/Register";
import RegisterSuccess from "../screens/RegisterSuccess";
import ForgotPassword from "../screens/ForgotPassword";
import ChangePassword from "../screens/ChangePassword";
import ResetCode from "../screens/ResetCode";
import Success from "../screens/Success";
import Verified from "../screens/Verified";
import { createStackNavigator } from "@react-navigation/stack";
import Settings from "../screens/Settings";
import Required from "../screens/Required";
import Personaldetails from "../screens/Personaldetails";
import Receipts from "../screens/Receipts";

const Tab = createStackNavigator();

const AuthStack = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarVisible: false,
      }}
    >
      <Tab.Screen name="Register" component={Register} />
      <Tab.Screen name="Login" component={Login} />
      <Tab.Screen name="Forgot" component={ForgotPassword} />
      <Tab.Screen name="Verified" component={Verified} />
      <Tab.Screen name="Success" component={Success} />
      <Tab.Screen name="Registersuccess" component={RegisterSuccess} />
      <Tab.Screen name="Changepass" component={ChangePassword} />
      <Tab.Screen name="Reset" component={ResetCode} />
      <Tab.Screen name="Settings" component={Settings} />
      <Tab.Screen name="Personal" component={Personaldetails} />
      <Tab.Screen name="Required" component={Required} />
      <Tab.Screen name="Receipts" component={Receipts} />
    </Tab.Navigator>
  );
};

export default AuthStack;
