import { StyleSheet, Text, TextInput, TouchableOpacity,Image, View } from 'react-native'
import React from 'react'
import { containerfull, goback, logo1, row } from '../Commoncss/Pagecss'
import { AntDesign } from '@expo/vector-icons';
import logo from '../../assets/leaf.png'
import { forHead2, formInput, formbtn } from '../Commoncss/formcss';
import { MaterialCommunityIcons } from '@expo/vector-icons';


const Forgotpassword_account_recoverd = ({ navigation }) => {
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
     <View style={row}>
     <MaterialCommunityIcons name="check-decagram" size={24} color="#fff" />
     <Text style={forHead2}> Account Recoverd Succesfully</Text>

     </View>
     <Text style={formbtn} onPress={() => navigation.navigate('Login')}>Let's Roll</Text>
    </View>
  )
}

export default Forgotpassword_account_recoverd

const styles = StyleSheet.create({})