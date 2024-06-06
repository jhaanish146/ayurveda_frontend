import {Image,TextInput, Text, TouchableOpacity, View } from 'react-native'
import React, { useState } from 'react'
import { containerfull, goback, logo1 } from '../Commoncss/Pagecss'
import { AntDesign } from '@expo/vector-icons';
import logo from '../../assets/leaf.png';
import { forHead3 ,formInput, formbtn,} from '../Commoncss/formcss';

const Forgot_password_enter_verification_code = ({ navigation , route}) => {
  const {useremail,userverificationcode} = route.params;
  console.log(userverificationcode);

  const [verificationcode,setverificationcode] = useState('');

  const handleVerficationcode = () => {
   
    if(verificationcode != userverificationcode){
      alert("please Enter the Valid code ")
    }
    else {
      alert("code is Matched")
       navigation.navigate('Forgotpassword_choosePaaword', {
        email:useremail
       })

    }
  }
  return (
    <View style={containerfull}>
      <TouchableOpacity onPress={() => navigation.navigate('Login')} style={goback}>
      <AntDesign name="back" size={30} color="white" />
        <Text style={{
        color:'white',
        fontSize:16,
        marginLeft:10,
        fontWeight:'bold'
      }}>Go Back</Text></TouchableOpacity>

       <Image source={logo} style={logo1}/>
      <Text style={forHead3}>A Verification is Sended to Your Email</Text>
      <TextInput placeholder='Enter The Code' style={formInput}
      onChangeText={(text) => setverificationcode(text)}
      />
      <Text style={formbtn} onPress={() => handleVerficationcode()}>Next</Text>
    </View>
  )
}

export default Forgot_password_enter_verification_code

