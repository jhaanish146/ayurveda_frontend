import {Image,TextInput, Text, TouchableOpacity, View, ActivityIndicator } from 'react-native'
import React, { useState } from 'react'
import { containerfull, goback, logo1 } from '../Commoncss/Pagecss'
import { AntDesign } from '@expo/vector-icons';
import logo from '../../assets/leaf.png'
import { forHead2, formInput, formbtn } from '../Commoncss/formcss';

const ForgotPassword_enter_email = ({ navigation }) => {

  const [email,setemail] = useState('');
  const [loading,setloading] = useState('');

  const handleemail = () => {
if(email == ""){
  alert("Enter the Email")
}
else {
  setloading(true);
  fetch('http://192.168.43.37:3000/verifyfp',{
    method:'post',
    headers: {
      'Content-Type':"application/json"
    },
    body: JSON.stringify({email:email})
  })
  .then(res => res.json()).then(data=>{
    if(data.error){
      alert("Invalid Credentials")
      setloading(false)
    }
    else  if(data.message)
    {
setloading(false);
alert("Verification sent to your Email");
navigation.navigate('Forgot_password_enter_verification_code', {
  useremail:data.email,
  userverificationcode:data.VerificationCode
})
    }
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
      <Text style={forHead2}>Enter Your Email</Text>
      <TextInput placeholder='Enter Your Email' style={formInput}
      onChangeText={(text) => setemail(text)}
      />
      {
        loading ?<ActivityIndicator size="large" color="#0000ff"/>:
        <Text style={formbtn} onPress={() => handleemail() }>Next</Text>
      }
     
    </View>
  )
}

export default ForgotPassword_enter_email

