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
} from 'react-native';
import React, {useState} from 'react';
import Icon from 'react-native-vector-icons/Ionicons';

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

const ResetCode = ({navigation}) => {
  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === 'ios' ? 'padding' : null}
      style={styles.container}>
      <View
        style={{
          paddingHorizontal: 0,
          paddingVertical: 20,
          flexDirection: 'row',
        }}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Icon name="arrow-back" size={30} color={'#828282'} />
        </TouchableOpacity>
      </View>
      <View>
        <Text style={{fontSize: 24, color: '#212E5A', fontWeight: '600'}}>
          Reset Code
        </Text>
        <Text
          style={{
            paddingTop: 20,
            fontSize: 16,
            lineHeight: 24,
            color: '#828282',
          }}>
          Kindly enter the reset code sent to {'\n'} your email.
        </Text>
        <View>
          <View
            style={{
              backgroundColor: '#F9F9F9',
              paddingHorizontal: 0,
              paddingVertical: 0,
              paddingBottom: 10,
              borderRadius: 10,
              display: 'flex',
              flexDirection: 'row',
              alignItems: 'center',
              paddingTop: 10,
              paddingLeft: 20,
              marginTop: 30,
            }}>
            <TextInput
              style={{
                paddingTop: 5,
                paddingBottom: 5,
                fontSize: 16,
                paddingLeft: 10,
                color: '#828282',
              }}
              placeholder="Enter reset code"
              placeholderTextColor={'#C4C4C4'}
            />
          </View>
          <View>
            <View>
              <TouchableOpacity
                style={styles.btnPrimary}
                onPress={() => navigation.navigate('Changepass')}>
                <Text style={styles.reg}>Reset Password</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </View>
    </KeyboardAvoidingView>
  );
};

export default ResetCode;

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    width: windowWidth,
    height: windowHeight,
    paddingHorizontal: 50,
    paddingVertical: 0,
  },
  btnPrimary: {
    paddingHorizontal: 40,
    paddingVertical: 20,
    backgroundColor: '#212E5A',
    borderRadius: 10,
    marginTop: 330,
  },
  reg: {
    color: '#fff',
    fontSize: 18,
    textAlign: 'center',
  },
});
