/* eslint-disable prettier/prettier */
/* eslint-disable react-native/no-inline-styles */
import {
  StyleSheet,
  Text,
  View,
  Image,
  Dimensions,
  TouchableOpacity,
} from 'react-native';
import React from 'react';
import Lottie from 'lottie-react-native';

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

const Verified = ({navigation}) => {
  return (
    <View style={styles.container}>
      <View>
        <View style={{alignItems: 'center', paddingTop: 100, height: 350}}>
          <Lottie source={require('../assets/success.json')} autoPlay loop />
        </View>
        <View style={styles.details}>
          <Text style={styles.text}>
            Your account has {'\n'} been verified{' '}
          </Text>
          <Text style={styles.textDetails}>
            We verified your account and now {'\n'} your account is fully
            active. {'\n'} Enjoy connecting with businesses.
          </Text>
          <View style={styles.cta}>
            <TouchableOpacity
              style={styles.btnPrimary}
              onPress={() => navigation.navigate('Personal')}>
              <Text style={styles.reg}>Continue</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </View>
  );
};

export default Verified;

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    width: windowWidth,
    height: windowHeight,
  },
  text: {
    fontSize: 28,
    fontWeight: '900',
    color: '#212E5A',
    textAlign: 'center',
  },
  details: {
    alignContent: 'center',
    paddingHorizontal: 50,
    paddingVertical: 20,
  },
  textDetails: {
    textAlign: 'center',
    lineHeight: 20.89,
    fontSize: 14,
    paddingVertical: 10,
    color: '#828282',
  },
  cta: {
    paddingTop: 30,
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
  },
  btnPrimary: {
    paddingHorizontal: 40,
    paddingVertical: 20,
    backgroundColor: '#212E5A',
    borderRadius: 10,
    width: 280,
  },
  btnSec: {
    paddingHorizontal: 40,
    paddingVertical: 20,
    backgroundColor: '#f9f9f9',
    borderRadius: 10,
    marginLeft: 10,
  },
  reg: {
    color: '#fff',
    fontSize: 16,
    textAlign: 'center',
  },
  login: {
    fontSize: 16,
  },
});
