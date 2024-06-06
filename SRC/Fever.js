import {
  StyleSheet,
  Text,
  View,
  Image,
  ScrollView,
  TouchableOpacity,
} from "react-native";
import React from "react";
import auerveda from "../assets/image.webp";
import yoga from "../assets/yoga.jpg";
import diese from "../assets/diese.jpg";
import ayuervedic from "../assets/ayuervedic.webp";
import homeremendiese from "../assets/home.jpg";
import healthy from "../assets/diet.jpg";
import skincare from "../assets/skin.jpeg";
import { AntDesign } from "@expo/vector-icons";
import { Ionicons } from "@expo/vector-icons";
import { Feather } from "@expo/vector-icons";
import { MaterialIcons } from "@expo/vector-icons";
import migrain from "../assets/migrain.jpg";

const Fever = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <View style={styles.first}>
        <View style={styles.topview}></View>
        <View style={styles.menu}>
          <TouchableOpacity onPress={() => navigation.navigate("First")}>
            <Feather name="menu" size={30} color="white" />
          </TouchableOpacity>
          <Text style={styles.header}>Fever</Text>
          <TouchableOpacity onPress={() => navigation.navigate("First")}>
            <Ionicons name="search" size={30} color="white" />
          </TouchableOpacity>
        </View>
      </View>

      <View style={styles.secondcontainer}>
        <Image source={diese} style={styles.imagecontainer} />
      </View>
      <View style={styles.thelogocontainer}>
        <AntDesign name="save" size={35} color="white" style={styles.logo1} />
        {/* <MaterialIcons name="send" size={40} color="white"  style={styles.logo2}/> */}
        <Ionicons
          name="share-social"
          size={35}
          color="white"
          style={styles.logo2}
        />
      </View>
      <View style={styles.thirdcontainer}>
        <View style={styles.midcontainer}>
          <View style={styles.headermidcontainer}>
            <Text style={styles.diesename}>Fever</Text>
          </View>
          <View style={styles.scrollcontainer}>
            
            <TouchableOpacity style={styles.scrollpoint}>
            <View style={styles.fevercontent}>
              <Text style={styles.scrolltext}>Herbal Remendiese (herbal chikitsa)</Text>
              <View style={styles.feverposition}></View>
              <Text>80% like this treatment</Text>
              </View>
              <AntDesign name="right" size={24} color="black" />
            </TouchableOpacity>

            <TouchableOpacity style={styles.scrollpoint}>
            <View style={styles.fevercontent}>
              <Text style={styles.scrolltext}>Herbal Remendiese (herbal chikitsa)</Text>
              <View style={styles.feverposition}></View>
              <Text>80% like this treatment</Text>
              </View>
              <AntDesign name="right" size={24} color="black" />
            </TouchableOpacity>


            <TouchableOpacity style={styles.scrollpoint}>
            <View style={styles.fevercontent}>
              <Text style={styles.scrolltext}>Herbal Remendiese (herbal chikitsa)</Text>
              <View style={styles.feverposition}></View>
              <Text>80% like this treatment</Text>
              </View>
              <AntDesign name="right" size={24} color="black" />
            </TouchableOpacity>

            <TouchableOpacity style={styles.scrollpoint}>
            <View style={styles.fevercontent}>
              <Text style={styles.scrolltext}>Herbal Remendiese (herbal chikitsa)</Text>
              <View style={styles.feverposition}></View>
              <Text>80% like this treatment</Text>
              </View>
              <AntDesign name="right" size={24} color="black" />
            </TouchableOpacity>

            
            <TouchableOpacity style={styles.scrollpoint}>
            <View style={styles.fevercontent}>
              <Text style={styles.scrolltext}>Herbal Remendiese (herbal chikitsa)</Text>
              <View style={styles.feverposition}></View>
              <Text>80% like this treatment</Text>
              </View>
              <AntDesign name="right" size={24} color="black" />
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </View>
  );
};

export default Fever;

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
    height: "30%",
    backgroundColor: "#fff",
    //   padding: 10,
    //   borderRadius: 20,
  },
  imagecontainer: {
    width: "100%",
    height: "100%",
    //   borderRadius: 20,
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
    top: 10,
    gap: 10,
    backgroundColor: "#4FFFB0",
    padding: 10,
  },

  scrollpoint: {
    width: "100%",
    height: "15%",
    backgroundColor: "#fff",
    // top:10,

    alignItems: "center",
    flexDirection: "row",
    justifyContent: "space-between",
  },
  scrolltext: {
    // left:10,
    fontSize:15,
    fontWeight:"700"
  },
  feverposition:{
width:"100%",
height:"10%",
backgroundColor:"blue"
  },
  fevercontent:{
flexDirection:"column",
left:20
  },

  thelogocontainer: {
    width: "100%",
    height: "10%",
    // backgroundColor:"#fff",
    zIndex: 1,
    position: "absolute",
    top: 330,
    padding: 20,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  logo1: {
    width: 40,
    height: 40,
    borderRadius: 10,
    backgroundColor: "#32de84",
    alignSelf: "center",
  },
  logo2: {
    width: 40,
    height: 40,
    borderRadius: 10,
    backgroundColor: "#32de84",
  },
});
