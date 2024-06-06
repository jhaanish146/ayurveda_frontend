import { StyleSheet, Text, TextInput, TouchableOpacity,Image, View } from 'react-native'
import React, { useState } from 'react'
import { containerfull, goback, logo1 } from '../Commoncss/Pagecss'
import { AntDesign } from '@expo/vector-icons';
import logo from '../../assets/leaf.png'
import { forHead2, formInput, formbtn } from '../Commoncss/formcss';


const Signup_chossepassword = ({ navigation , route}) => {
  const {email,username} = route.params;
  const [password,setpassword] = useState('');
  const [Conformpassword,setConFormpassword] = useState('');
  const [loading,setloading] = useState('');

  const handlePassword = () => {
    // navigation.navigate('Signup_Account_created')
    if(password == '' || Conformpassword == ''){
      alert("please Enter password")
    }
    else if (password != Conformpassword){
alert("please check the password field");
    }
    else {
      setloading(true);
      fetch('http://192.168.43.37:3000/signup',{
        method:'post',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          email:email,
          username:username,
          password:password
        })
      })
      .then(res => res.json()).then(
        data => {
          if(data.message = "User Register Succesfully"){
            setloading(true);
            alert(data.message);
            navigation.navigate('Login')
          }
          else {
            setloading(true);
            alert("please try Again")
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
        marginLeft:10,
        fontWeight:'bold'
      }}>Go Back</Text></TouchableOpacity>

      <Image source={logo} style={logo1}></Image>
      <Text style={forHead2}>Choose a Strong Pasword</Text>
      <TextInput placeholder='Enter a Password' style={formInput} secureTextEntry 
      onChangeText={(text) => setpassword(text)}
      />
      <TextInput placeholder='Conform a Password' style={formInput} secureTextEntry
      onChangeText={(text) => setConFormpassword(text)}
      />
      <Text style={formbtn} onPress={() => handlePassword()}>Next</Text> 
    </View>
  )
}

export default Signup_chossepassword

const styles = StyleSheet.create({})