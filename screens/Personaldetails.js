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
  ScrollView,
} from 'react-native';
import React, {useState} from 'react';
import Icon from 'react-native-vector-icons/Ionicons';

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

const Personaldetails = ({navigation}) => {
  const [showPassword, setShowPassword] = useState(false);
  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === 'ios' ? 'padding' : null}
      style={styles.container}>
      <ScrollView style={{marginBottom: 50}}>
        <View
          style={{
            paddingHorizontal: 0,
            paddingVertical: 20,
            flexDirection: 'row',
          }}>
          <TouchableOpacity onPress={() => navigation.goBack()}>
            <Icon name="arrow-back" size={30} color={'#212E5A'} />
          </TouchableOpacity>
        </View>
        <View>
          <Text style={{fontSize: 24, color: '#212E5A', fontWeight: '700'}}>
            Personal details
          </Text>
          <Text
            style={{
              paddingTop: 20,
              fontSize: 16,
              lineHeight: 24,
              color: '#828282',
            }}>
            Setup your account by imputting your personal information below.
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
                marginTop: 20,
              }}>
              <TextInput
                style={{
                  paddingTop: 5,
                  paddingBottom: 5,
                  fontSize: 16,
                  paddingLeft: 10,
                  color: '#828282',
                }}
                placeholder="Full name"
                placeholderTextColor={'#C4C4C4'}
              />
            </View>
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
                marginTop: 20,
              }}>
              <TextInput
                style={{
                  paddingTop: 5,
                  paddingBottom: 5,
                  fontSize: 16,
                  paddingLeft: 10,
                  color: '#828282',
                }}
                placeholder="Phone number"
                placeholderTextColor={'#C4C4C4'}
              />
            </View>
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
                marginTop: 20,
              }}>
              <TextInput
                style={{
                  paddingTop: 5,
                  paddingBottom: 5,
                  fontSize: 16,
                  paddingLeft: 10,
                  color: '#828282',
                }}
                placeholder="Gender"
                placeholderTextColor={'#C4C4C4'}
              />
            </View>
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
                marginTop: 20,
              }}>
              <TextInput
                style={{
                  paddingTop: 5,
                  paddingBottom: 5,
                  fontSize: 16,
                  paddingLeft: 10,
                  color: '#828282',
                }}
                placeholder="Date of birth"
                placeholderTextColor={'#C4C4C4'}
              />
            </View>
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
                  marginTop: 20,
                }}>
                <TextInput
                  style={{
                    fontSize: 16,
                    width: '82%',
                    paddingTop: 5,
                    paddingBottom: 5,
                    color: '#828282',
                  }}
                  placeholder="Password"
                  placeholderTextColor={'#C4C4C4'}
                  secureTextEntry={!showPassword}
                />
                <TouchableOpacity
                  style={{
                    height: 30,
                    width: 30,
                  }}
                  onPress={() => setShowPassword(!showPassword)}>
                  <Icon
                    name={showPassword ? 'eye-off-outline' : 'eye-outline'}
                    size={20}
                    color={'#C4C4C4'}
                  />
                </TouchableOpacity>
              </View>
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
                  marginTop: 20,
                }}>
                <TextInput
                  style={{
                    fontSize: 16,
                    width: '82%',
                    paddingTop: 5,
                    paddingBottom: 5,
                    color: '#828282',
                  }}
                  placeholder="Confirm Password"
                  placeholderTextColor={'#C4C4C4'}
                  secureTextEntry={!showPassword}
                />
                <TouchableOpacity
                  style={{
                    height: 30,
                    width: 30,
                  }}
                  onPress={() => setShowPassword(!showPassword)}>
                  <Icon
                    name={showPassword ? 'eye-off-outline' : 'eye-outline'}
                    size={20}
                    color={'#C4C4C4'}
                  />
                </TouchableOpacity>
              </View>
              <View>
                <TouchableOpacity
                  style={styles.btnPrimary}
                  onPress={() => navigation.navigate('Required')}>
                  <Text style={styles.reg}>Continue</Text>
                </TouchableOpacity>
              </View>
            </View>
          </View>
        </View>
      </ScrollView>
    </KeyboardAvoidingView>
  );
};

export default Personaldetails;

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    width: windowWidth,
    height: windowHeight,
    paddingHorizontal: 30,
    paddingVertical: 0,
  },
  btnPrimary: {
    paddingHorizontal: 40,
    paddingVertical: 20,
    backgroundColor: '#212E5A',
    borderRadius: 10,
    marginTop: 70,
    paddingTop: 15,
    paddingBottom: 15,
  },
  reg: {
    color: '#fff',
    fontSize: 18,
    textAlign: 'center',
  },
});
