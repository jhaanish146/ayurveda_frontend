



import {Image,TextInput, Text, TouchableOpacity, View, ActivityIndicator } from 'react-native'
import React, { useState } from 'react'
import { containerfull, goback, logo1 } from '../Commoncss/Pagecss'
import { AntDesign } from '@expo/vector-icons';
import logo from '../../assets/leaf.png'
import { forHead2 ,formInput, formbtn,} from '../Commoncss/formcss';

const Signupenteremail = ({ navigation }) => {
  const [email,setEmail] = useState('');
  const [loading,setloading] = useState(false);
  const handleEmail = () => {
    // setloading(true);
    if(email == ''){
alert("Please enter Email");
  }
  else {
    setloading(true)
    fetch('http://192.168.43.37:3000/verify', {
      method:'post',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        email:email
      })
    })
    .then(res => res.json()).then(
      
      data =>{
        if(data.error){

          alert("Inavalid Credentials")
          setloading(false)
        }
        else if(data.message === "Verification Code Sent to Your Email"){
          setloading(false);
          alert(data.message);
     navigation.navigate('Signup_enter_verification_code', {
      useremail: data.email,
      userVerificationCode: data.VerificationCode
     })

        }
      }
    )
  }
}
  return (
    <View style={containerfull}>
      <TouchableOpacity onPress={() => navigation.navigate('Login')} style={goback}>
      <AntDesign name="back" size={30} color="white" />
        <Text style={{
        color:'white',
        fontSize:16,
        marginLeft:15,
        fontWeight:'bold'
      }}>Go Back</Text></TouchableOpacity>

       <Image source={logo} style={logo1}/>
      <Text style={forHead2}>Create New Account</Text>
      <TextInput placeholder='Enter Your Email' style={formInput}
      onChangeText={(text) => {
        setEmail(text)
      }}
      />

     {
      loading ?
      <ActivityIndicator size={'large'} color={"white"} />
      :
      <Text style={formbtn} onPress={() => handleEmail() }>Next</Text>
     }
    </View>
  )
}

export default Signupenteremail



