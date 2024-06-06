import { StyleSheet, Text, TextInput, TouchableOpacity,Image, View, ActivityIndicator } from 'react-native'
import React, { useState } from 'react'
import { containerfull, goback, logo1 } from '../Commoncss/Pagecss'
import { AntDesign } from '@expo/vector-icons';
import logo from '../../assets/leaf.png'
import { forHead2, formInput, formbtn } from '../Commoncss/formcss';


const Signup_choose_user_name = ({ navigation, route }) => {
  const {email} = route.params;
  const [username,setusername] = useState('');
  const [loading,setloading] = useState('');

  const handleUsername = () => {
    if(username == ''){
      alert("Please Enter Username")
    }
    else {
      setloading(true);
      fetch('http://192.168.43.37:3000/changeusername',{
        method:'post',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          email:email,
          username:username
        })
      })
      .then(res => res.json()).then(
      
        data =>{
          if(data.message){
            setloading(false)
            alert("Username Add been sucessfully")
           navigation.navigate('Signup_chossepassword',{
            email:email, username:username
           })
            
           
          }
          else {
            setloading(false);
            alert("UserName Not Availaible");
       
  
          }
        }
      ).catch(err => {
        console.log(err);
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

      <Image source={logo} style={logo1}></Image>
      <Text style={forHead2}>Choose a Username</Text>
      <TextInput placeholder='Enter Your username' style={formInput}
      onChangeText={(text) => setusername(text)}
      />
      {
        loading ? <ActivityIndicator/> :
      <Text style={formbtn} onPress={() => handleUsername()}>Next</Text>

      }
    </View>
  )
}

export default Signup_choose_user_name

const styles = StyleSheet.create({})