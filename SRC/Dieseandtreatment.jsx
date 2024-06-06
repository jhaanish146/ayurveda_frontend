

import { StyleSheet, Text, View, Image,ScrollView, TouchableOpacity } from "react-native";
import React from "react";
import { Ionicons } from '@expo/vector-icons';
import { Feather } from '@expo/vector-icons';
import { Entypo } from '@expo/vector-icons';

const Dieseandtreatment = ({navigation}) => {
  return (
    <View style={styles.container}>
      
      <View style={styles.first}>
        <View style={styles.topview}></View>
         <View style={styles.menu}>
            <TouchableOpacity   onPress={() => navigation.navigate('Diesedetail')}>
        <Feather name="menu" size={30} color="white" />
        </TouchableOpacity>
      <Text style={styles.header}>Disease And Tretment</Text>
      <TouchableOpacity  onPress={() => navigation.navigate('First')}>
      <Ionicons name="search" size={30} color="white"  />
      </TouchableOpacity>
        
    
         </View>
      </View>
      {/* <ScrollView></ScrollView> */}
      <View style={styles.second}>
        {/* <ScrollView></ScrollView> */}
        <TouchableOpacity  style={styles.scrollview} onPress={() => navigation.navigate('Diesedetail')} >
            <Text style={styles.diesetext}>Diseas Name Or Symtoms</Text>
            <Entypo name="chevron-thin-right" size={24} color="black" />
            </TouchableOpacity>
            <TouchableOpacity  style={styles.scrollview} onPress={() => navigation.navigate('First')}>
            <Text style={styles.diesetext}>Diseas Name Or Symtoms</Text>
            <Entypo name="chevron-thin-right" size={24} color="black" />
            </TouchableOpacity>
            <TouchableOpacity  style={styles.scrollview} onPress={() => navigation.navigate('First')}>
            <Text style={styles.diesetext}>Diseas Name Or Symtoms</Text>
            <Entypo name="chevron-thin-right" size={24} color="black" />
            </TouchableOpacity>
            <TouchableOpacity  style={styles.scrollview} onPress={() => navigation.navigate('First')}>
            <Text style={styles.diesetext}>Diseas Name Or Symtoms</Text>
            <Entypo name="chevron-thin-right" size={24} color="black" />
            </TouchableOpacity>
            <TouchableOpacity  style={styles.scrollview} onPress={() => navigation.navigate('First')}>
            <Text style={styles.diesetext}>Diseas Name Or Symtoms</Text>
            <Entypo name="chevron-thin-right" size={24} color="black" />
            </TouchableOpacity>
        
            <TouchableOpacity  style={styles.scrollview} onPress={() => navigation.navigate('First')}>
            <Text style={styles.diesetext}>Diseas Name Or Symtoms</Text>
            <Entypo name="chevron-thin-right" size={24} color="black" />
            </TouchableOpacity>
            


       
      </View>
    
    </View>
  );
};

export default Dieseandtreatment;

const styles = StyleSheet.create({
  container: {
    width: "100%",
    height: "100%",
    backgroundColor: "#fff",
    // flex:1
    // position:"absolute"
  },
  first: {
    width: "100%",
    height: "20%",
    backgroundColor: "#32de84",
    // alignItems: "center",
    // justifyContent: "center",
    // position:"relative"
  },
   menu:{
    // backgroundColor:"red",
    //  backgroundColor: "#32de84",
    width: "100%",
    height: "40%",
    zIndex:1,
    top:30,
    flexDirection:"row",
    justifyContent:"space-between",
    padding:10
    // position:"fixed"
  },
  topview:{
    width: "100%",
    height: "20%",
    backgroundColor:"#fff"
  },
  second: {
    width: "100%",
    height: "80%",
    backgroundColor: "#50C878",
    // flexDirection:"row",
    // justifyContent:"space-between",
    justifyContent:"space-evenly",
    position: 'absolute',

    // padding:10
    position:"relative"
  },

  header: {
    color: "#fff",
    textAlign: "center",
    fontWeight: "bold",
    justifyContent: "center",
    fontSize: 25,
  },
  scrollview: {
    width:"100%",
    height:"10%",
    backgroundColor:"#fff",
    borderRadius:40,
    alignItems:"center",
    justifyContent:"space-between",
    paddingHorizontal:10,
    top:5,
    flexDirection:"row",
  },
  diesetext:{
  textAlign:"center",
    fontSize:20,
    fontWeight:"bold",
    color:"#111111",
    paddingLeft:10
  },

});
