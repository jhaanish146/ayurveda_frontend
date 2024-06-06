import { StyleSheet, Text, TextInput,Image, TouchableOpacity, View } from 'react-native'
import React, { useState } from 'react'
import { containerfull, goback, logo1 } from '../Commoncss/Pagecss'
import { AntDesign } from '@expo/vector-icons';
import logo from '../../assets/leaf.png'
import { forHead2, formInput,formbtn } from '../Commoncss/formcss';


const Signup_enter_verification_code = ({ navigation, route }) => {
  const {useremail,userVerificationCode} = route.params;
  // console.log(useremail,userVerificationCode);
  const [VerificationCode,setVerificationCode] = useState('');

  const handleVerificationCode = () => {
    if(VerificationCode != userVerificationCode){
      alert("Invalid Verification Code")
    }
    else if(VerificationCode == userVerificationCode){
      alert("Code is Matched")
    navigation.navigate('Signup_choose_user_name', {
      email:useremail
    })
  

    }
    else {
      alert("please try again")
    }
  }
  return (
    <View style={containerfull}>
      <TouchableOpacity onPress={() => navigation.navigate('Login')} style={goback}>
      <AntDesign name="back" size={30} color="white" />
        <Text style={{
        color:'grey',
        fontSize:16,
        marginLeft:10,
        fontWeight:'bold'
      }}>Go Back</Text></TouchableOpacity>

      <Image source={logo} style={logo1}></Image>
      <Text style={forHead2}>A Verification Sent to Your Email</Text>
      <TextInput placeholder='Enter Your code' style={formInput}
      onChangeText={(text) => setVerificationCode(text)}
      />
      <Text style={formbtn} onPress={() => handleVerificationCode()}>Next</Text>
    </View>
  )
}

export default Signup_enter_verification_code

const styles = StyleSheet.create({})