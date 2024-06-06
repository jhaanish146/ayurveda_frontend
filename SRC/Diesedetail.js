import { StyleSheet,Share, Text, View, Image,ScrollView, TouchableOpacity } from "react-native";
import React from "react";
import { AntDesign } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons';
import { Feather } from '@expo/vector-icons';
import { MaterialIcons } from '@expo/vector-icons';
import migrain from '../assets/migrain.jpg'

const Diesedetail = ({navigation}) => {

  const shareData = async () => {
    try {
      await Share.share({
        message: "This is the demo text",
      });
    } catch (error) {
      alert(error.message);
    }
  };

  return (
    <View style={styles.container}>
      
      <View style={styles.first}>
        <View style={styles.topview}></View>
         <View style={styles.menu}>
            <TouchableOpacity   onPress={() => navigation.navigate('First')}>
        <Feather name="menu" size={30} color="white" />
        </TouchableOpacity>
      <Text style={styles.header}>Migrain</Text>
      <TouchableOpacity  onPress={() => navigation.navigate('First')}>
      <Ionicons name="search" size={30} color="white"  />
      </TouchableOpacity>
        
    
         </View>
      </View>

      <View style={styles.secondcontainer}>
        <Image source={migrain}  style={styles.imagecontainer}/>
      </View>
      <View style={styles.thelogocontainer}>
      <AntDesign name="save" size={35} color="white" style={styles.logo1} />
      {/* <MaterialIcons name="send" size={40} color="white"  style={styles.logo2}/> */}
      <Ionicons name="share-social" size={35} color="white"  style={styles.logo2} onPress={shareData}  />
      </View>
      <View style={styles.thirdcontainer}>

<View style={styles.midcontainer}>
  <View style={styles.headermidcontainer}>
  <Text style={styles.diesename}>Migrain(Ardhavabhedaka)</Text>
  </View>
  <View style={styles.scrollcontainer}>
  <ScrollView stryle={styles.scrollview} showsVerticalScrollIndicator={false}>
    <Text style={styles.scrollviewtext}>
The exact cause of migraines is unknown. They're thought to be the result of abnormal brain activity temporarily affecting nerve signals, chemicals and blood vessels in the brain. Around half of all people who experience migraines have a close relative with the condition. This suggests that genes may play a role

What is the main cause of migraine?
The exact cause of migraines is unknown. They're thought to be the result of abnormal brain activity temporarily affecting nerve signals, chemicals and blood vessels in the brain. Around half of all people who experience migraines have a close relative with the condition. This suggests that genes may play a role.</Text>
  </ScrollView>
  </View>
</View>
      </View>
     
    </View>
  );
};

export default Diesedetail;

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

  header: {
    color: "#fff",
    textAlign: "center",
    fontWeight: "bold",
    justifyContent: "center",
    fontSize: 25,
  },
    secondcontainer: {
    width:"100%",
    height:"30%",
    backgroundColor: "#fff",
    padding:10,
    borderRadius:20,

  },
  imagecontainer: {
    width:"100%",
    height:"100%",
    borderRadius:20
  },

  thirdcontainer: {
    width:"100%",
    height:"50%",
    backgroundColor: "#32de84",
  },
  midcontainer : {
    width:"100%",
    height:"90%",
    backgroundColor:"#fff",
    // borderRadius:10,
    top:10
  },
  headermidcontainer :{
  width:"100%",
  heigh:"20%",
  alignItems:"center",
  justifyContent:"center",
  },
  diesename:{
    fontSize:20,
    fontWeight:"bold"
  },

  scrollcontainer: {
    width:"100%",
    height:"90%",
    padding:20,
    alignItems:"center",
    justifyContent:"space-between",
    top:10,
    
  },
  scrollviewtext: {
    color:"#111111",
    fontSize:15,
    fontWeight:"bold",
    // textTransform:"uppercase",

  },

  thelogocontainer :{
    width:"100%",
    height:"10%",
    // backgroundColor:"#fff",
    zIndex:1,
    position: 'absolute',
    top:330,
    padding:20,
    flexDirection:"row",
    alignItems:"center",
    justifyContent:"space-between"
  },
  logo1: {
    
    width:40,
    height:40,
    borderRadius:10,
    backgroundColor:"#32de84",
    alignSelf:"center"
    
  },
  logo2: {
    width:40,
    height:40,
    borderRadius:10,
    backgroundColor:"#32de84"
  },


 

 

 
});
