import { StyleSheet, Text, View, Image,ScrollView, TouchableOpacity } from "react-native";
import React from "react";
import auerveda from "../assets/image.webp";
import yoga from "../assets/yoga.jpg"
import diese from "../assets/diese.jpg"
import ayuervedic from "../assets/ayuervedic.webp"
import homeremendiese from "../assets/home.jpg"
import healthy from "../assets/diet.jpg"
import skincare from "../assets/skin.jpeg"
import { Ionicons } from '@expo/vector-icons';
import { Feather } from '@expo/vector-icons';

const Mainpage = ({navigation}) => {
  return (
    <View style={styles.container}>
      
      <View style={styles.first}>
        <View style={styles.topview}></View>
         <View style={styles.menu}>
            <TouchableOpacity   onPress={() => navigation.navigate('Herbalremendies')}>
        <Feather name="menu" size={30} color="white" />
        </TouchableOpacity>
      <Text style={styles.header}>Ayurveda Tretment</Text>
      <TouchableOpacity  onPress={() => navigation.navigate('First')}>
      <Ionicons name="search" size={30} color="white"  />
      </TouchableOpacity>
        
    
         </View>
      </View>
      {/* <ScrollView> */}
      <View style={styles.second}>
        
        <View style={styles.secondmid}>
          <View style={styles.midcontainer}>
            <TouchableOpacity onPress={() => navigation.navigate('Dieseandtreatment')}>
            <Image source={diese} style={styles.imagecontainer}  />
            <Text style={styles.text}>Disease and Treatment</Text>
            </TouchableOpacity>
          </View>
          <View style={styles.midcontainer}>
          <TouchableOpacity onPress={() => navigation.navigate('First')}>
            <Image source={ayuervedic} style={styles.imagecontainer} />
            <Text style={styles.text}>Ayurvedic medicine</Text>
            </TouchableOpacity>
          </View>
        </View>
        {/* the second row  */}
        <View style={styles.secondmid}>
          <View style={styles.midcontainer} >
          <TouchableOpacity onPress={() => navigation.navigate('First')}>
            <Image source={yoga} style={styles.imagecontainer} />
            <Text style={styles.text}>Yoga</Text>
            </TouchableOpacity>
          </View>
          <View style={styles.midcontainer}>
          <TouchableOpacity onPress={() => navigation.navigate('First')}>
            <Image source={homeremendiese} style={styles.imagecontainer} />
            <Text style={styles.text}>Home Remendies</Text>
            </TouchableOpacity>
          </View>
        </View>

        {/* the third row  */}
        <View style={styles.secondmid}>
          
          <View style={styles.midcontainer}>
          <TouchableOpacity onPress={() => navigation.navigate('First')}>
            <Image source={healthy} style={styles.imagecontainer} />
            <Text style={styles.text}>Healthy Diet</Text>
            </TouchableOpacity>
          </View>
          <View style={styles.midcontainer}>
          <TouchableOpacity onPress={() => navigation.navigate('First')}>
            <Image source={skincare} style={styles.imagecontainer} />
            <Text style={styles.text}>Skin Care</Text>
            </TouchableOpacity>
          </View>
        </View>

       {/* the duplicate  */}

       
      </View>
      {/* </ScrollView> */}
    </View>
  );
};

export default Mainpage;

const styles = StyleSheet.create({
  container: {
    width: "100%",
    height: "100%",
    backgroundColor: "#fff",
    flex: 1,
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
    // padding:10
    // position:"relative"
  },
  secondmid: {
    width: "100%",
    height: "30%",
    backgroundColor: "#50C878",
    flexDirection: "row",
    justifyContent: "space-between",
    padding: 10,
  },
  header: {
    color: "#fff",
    textAlign: "center",
    fontWeight: "bold",
    justifyContent: "center",
    fontSize: 25,
  },
  midcontainer: {
    width: "45%",
    height: "100%",
    backgroundColor: "#fff",
    borderRadius: 10,
    paddingVertical: 10, // to get the full image in main page you have to comment this part in the midcontainer
  },
  imagecontainer: {
    width: "100%",
    height: "80%",
    // width:"auto"
    // borderRadius: 30,
    // zIndex:10
  },
  text: {
    color: "#111111",
    textAlign: "center",
    fontWeight: "bold",
    top: 10,
  },
  // icon: {
  // top:70,
  // marginLeft:10
  // },
  // icon2:{
  //   alignSelf:"flex-end",
  //   top:40,
  //   marginRight:10
  // },
 

 
});
