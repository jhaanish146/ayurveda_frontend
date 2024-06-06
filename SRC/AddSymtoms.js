import {
  StyleSheet,
  Text,
  View,
  Image,
  ScrollView,
  TouchableOpacity,
  TextInput,
} from "react-native";
import React from "react";
import { AntDesign } from "@expo/vector-icons";
import { Ionicons } from "@expo/vector-icons";
import { Feather } from "@expo/vector-icons";
import { MaterialIcons } from "@expo/vector-icons";
import migrain from "../assets/migrain.jpg";

const AddSymtoms = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <View style={styles.first}>
        <View style={styles.topview}></View>
        <View style={styles.menu}>
          <TouchableOpacity onPress={() => navigation.navigate("First")}>
            <Feather name="menu" size={30} color="white" />
          </TouchableOpacity>
          <Text style={styles.header}>Add Symtoms</Text>
          <TouchableOpacity onPress={() => navigation.navigate("First")}>
            <Ionicons name="search" size={30} color="white" />
          </TouchableOpacity>
        </View>
      </View>

      <View style={styles.secondcontainer}>
        <TextInput placeholder="Enter the Symtoms" style={styles.textbar} />
        <TouchableOpacity style={styles.add}><Text style={styles.addtext}>Add</Text></TouchableOpacity>
      </View>

      <View style={styles.thirdcontainer}>
        <View style={styles.midcontainer}>
          <View style={styles.headermidcontainer}>
            <Text style={styles.diesename}>Symtoms</Text>
          </View>
          <View style={styles.scrollcontainer}>
            <View style={styles.symtoms}>
              <Text style={styles.symtomstext}>Elevated Body Temrature</Text>
              <Ionicons name="add-circle-sharp" size={24} color="black" />
            </View>

            {/* the second  */}
            <View style={styles.symtoms}>
              <Text style={styles.symtomstext}>Elevated Body Temrature</Text>
              <Ionicons name="add-circle-sharp" size={24} color="black" />
            </View>
            {/* the third  */}
            <View style={styles.symtoms}>
              <Text style={styles.symtomstext}>Elevated Body Temrature</Text>
              <Ionicons name="add-circle-sharp" size={24} color="black" />
            </View>
            {/* the four  */}
            <View style={styles.symtoms}>
              <Text style={styles.symtomstext}>Elevated Body Temrature</Text>
              <Ionicons name="add-circle-sharp" size={24} color="black" />
            </View>
            {/* the five */}
            <View style={styles.symtoms}>
              <Text style={styles.symtomstext}>Elevated Body Temrature</Text>
              <Ionicons name="add-circle-sharp" size={24} color="black" />
            </View>
            {/* the six  */}
            <View style={styles.symtoms}>
              <Text style={styles.symtomstext}>Elevated Body Temrature</Text>
              <Ionicons name="add-circle-sharp" size={24} color="black" />
            </View>
             {/* the six  */}
             <View style={styles.symtoms}>
              <Text style={styles.symtomstext}>Elevated Body Temrature</Text>
              <Ionicons name="add-circle-sharp" size={24} color="black" />
            </View>
          </View>
        </View>
      </View>

      <View style={styles.fourcontainer}>
        {/* <Text style={styles.continue}>Continue</Text> */}
        <TouchableOpacity style={styles.continue}><Text style={styles.textcon}>Continue</Text></TouchableOpacity>
      </View>
    </View>
  );
};

export default AddSymtoms;

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
  menu: {
    // backgroundColor:"red",
    //  backgroundColor: "#32de84",
    width: "100%",
    height: "40%",
    zIndex: 1,
    top: 30,
    flexDirection: "row",
    justifyContent: "space-between",
    padding: 10,
    // position:"fixed"
  },
  topview: {
    width: "100%",
    height: "20%",
    backgroundColor: "#fff",
  },

  header: {
    color: "#fff",
    textAlign: "center",
    fontWeight: "bold",
    justifyContent: "center",
    fontSize: 25,
  },
  secondcontainer: {
    width: "100%",
    height: "20%",
    //   backgroundColor: "#fff",
    backgroundColor: "#32de84",
    alignItems: "center",
    justifyContent: "space-around",
    flexDirection:"row"
    // position:"relative"
  },
  textbar: {
    width: "70%",
    height: "40%",
    backgroundColor: "#fff",
    textAlign: "center",
    fontWeight: "bold",
  
  },
  add: {
width:"15%",
height:"40%",
backgroundColor:"#fff",
borderRadius:10,
alignItems:"center",
justifyContent:"center"
  },
  addtext:{
    textAlign:"center",
    fontSize:15,
    fontWeight:"bold"
  },

  thirdcontainer: {
    width: "100%",
    height: "50%",
    backgroundColor: "#32de84",
    paddingHorizontal: 15,
  },
  midcontainer: {
    width: "100%",
    height: "90%",
    backgroundColor: "#fff",
    // borderRadius:10,
    top: 10,
  },
  headermidcontainer: {
    width: "100%",
    heigh: "20%",
    alignItems: "center",
    justifyContent: "center",
  },
  diesename: {
    fontSize: 20,
    fontWeight: "bold",
  },

  scrollcontainer: {
    width: "100%",
    height: "90%",
    padding: 20,
    top: 10,
    backgroundColor: "#4FFFB0",
  },
  scrollviewtext: {
    color: "#111111",
    fontSize: 15,
    fontWeight: "bold",
    // textTransform:"uppercase",
  },
  symtoms: {
    width: "100%",
    height: "15%",
    backgroundColor: "#fff",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    // borderWidth:20
  },
  symtomstext: {
    paddingLeft: 10,
    fontWeight: "bold",
  },
  fourcontainer: {
    width: "100%",
    height: "20%",
    backgroundColor: "#32de84",
    alignItems: "center",
    justifyContent: "center",
  },
  continue: {
    width: "80%",
    height: "30%",
    backgroundColor: "#fff",
   alignItems:"center",
   justifyContent:"center",
    borderRadius:20,
    bottom:50
  },
  textcon:{
 textAlign:"center",
    fontSize:20,
    fontWeight:"bold",
  }
});
