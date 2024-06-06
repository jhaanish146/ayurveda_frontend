import { StyleSheet, Text, View, Image, TextInput, ActivityIndicator } from 'react-native'
import AsyncStorage from '@react-native-async-storage/async-storage'
import React, { useState } from 'react'
import logo from '../assets/leaf.png';
import { containerfull, hr80, logo1 } from './Commoncss/Pagecss'
import { formHead, formInput, formbtn, formtextLinkCenter, formtextLinkRight } from './Commoncss/formcss'

const Login = ({ navigation }) => {

  const [email,setemail] = useState('');
  const [password,setpassword] = useState('');
  const [loading,setloading] = useState('');

  const handleLogin = () => {
   
    if(email == "" || password == ""){
      alert("Field is empty")
    }
    else {
      setloading(true);
      fetch('http://192.168.43.37:3000/signin',{
        method:'post',
        headers: {
          'Content-Type':"application/json"
        },
        body: JSON.stringify({
          email:email,
          password:password
        })
      })
      .then(res => res.json())
      .then( async data => {
if(data.error){
  setloading(false);
  alert(data.error)
}
else  if(data.message == "Succesfully Signed In")
{
setloading(false);
await AsyncStorage.setItem('user', JSON.stringify(data))
alert(data.message)
 navigation.navigate('Mainpage',{data})
}
      })
      .catch(err => {
        setloading(false);
        console.log(err);
      })
    }
  }
  return (
    <View style={containerfull}>
       <Image source={logo} style={logo1}/>
       <Text style={formHead}>Login</Text>
       <TextInput placeholder='Enter Your Email' style={formInput}
         onChangeText={(text) => setemail(text)}
       />
       <TextInput placeholder='Enter Your password' style={formInput} secureTextEntry={true}
       onChangeText={(text) => setpassword(text)}
       />
       <Text style={formtextLinkRight} onPress={() => navigation.navigate('ForgotPassword_enter_email')}>Forget Password</Text>
      {
loading? <ActivityIndicator size="large" color="#fff"/>:
<Text style={formbtn} onPress={() => handleLogin()} >Submit</Text>
      }
      

      <View style={hr80}></View>

      <Text style={formtextLinkCenter}>Dont have an Account?<Text style={{color:'white'}} onPress={() => navigation.navigate('Signupenteremail')}>Signup</Text></Text>
    </View>
  )
}

export default Login

const styles = StyleSheet.create({})