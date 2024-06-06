import {
    StyleSheet,
    Text,
    View,
    Image,
    ScrollView,
    TouchableOpacity,
    TextInput,
    ActivityIndicator
  } from "react-native";
  import AsyncStorage from '@react-native-async-storage/async-storage'
  import React, { useState } from "react";
  import diet from "../assets/diet.jpg";
  
  
  const login_signup = ({ navigation }) => {
    const [email, setemail] = useState("");
    const [password, setpassword] = useState("");
    const [loading, setloading] = useState("");
  
    const handleLogin = () => {
      if (email == "" || password == "") {
        alert("Field is empty");
      } else {
        setloading(true);
        fetch("http://192.168.43.37:3000/signin", {
          method: "post",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            email: email,
            password: password,
          }),
        })
          .then((res) => res.json())
          .then(async (data) => {
            if (data.error) {
              setloading(false);
              alert(data.error);
            } else if (data.message == "Succesfully Signed In") {
              setloading(false);
              await AsyncStorage.setItem("user", JSON.stringify(data));
              alert(data.message);
              navigation.navigate("Mainpage", { data });
            }
          })
          .catch((err) => {
            setloading(false);
            console.log(err);
          });
      }
    };
  
    return (
      <View style={styles.container}>
        <View style={styles.first}>
          <View style={styles.topview}></View>
          <View style={styles.menu}>
            <Text style={styles.header}>Welcome</Text>
          </View>
        </View>
  
        <View style={styles.secondcontainer}>
          <Image source={diet} style={styles.imagecontainer} />
        </View>
  
        <View style={styles.thirdcontainer}>
          <View style={styles.midcontainer}>
            <View style={styles.headermidcontainer}>
              <Text style={styles.diesename}>Login</Text>
            </View>
            <View style={styles.scrollcontainer}>
              <TextInput
                style={styles.textinput}
                placeholder="Enter the Email"
                onChangeText={(text) => setemail(text)}
              />
              <TextInput
                style={styles.textinput}
                secureTextEntry={true}
                placeholder="Enter the Password"
                onChangeText={(text) => setpassword(text)}
              />
              <View style={styles.textmidcon}>
                <Text style={styles.text}
                 onPress={() => navigation.navigate("ForgotPassword_enter_email")}
                >Forgot Password</Text>
                <Text style={styles.text}
                onPress={() => navigation.navigate("Signupenteremail")}
                >Signup</Text>
              </View>
            
              {
  loading? <ActivityIndicator size="large" color="#fff"/>:
  <TouchableOpacity style={styles.enter} onPress={() => handleLogin()}>
  <Text style={styles.enterbutton} >Login</Text>
  </TouchableOpacity>
        }
            </View>
          </View>
        </View>
      </View>
    );
  };
  
  export default login_signup;
  
  const styles = StyleSheet.create({
    container: {
      width: "100%",
      height: "100%",
      backgroundColor: "#fff",
      position: "absolute",
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
      height: "100%",
      backgroundColor: "#fff",
      // borderRadius:10,
      // zIndex:1,
      bottom: 100,
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
    enterbutton: {
      fontSize: 15,
      textAlign: "center",
      fontWeight: "700",
      alignItems: "center",
      justifyContent: "center",
      top: 10,
    },
    textinput: {
      width: "100%",
      height: "15%",
      backgroundColor: "#fff",
      borderWidth: 1,
      textAlign: "center",
      borderColor: "#4FFFB0",
      fontWeight: "800",
    },
    textmidcon: {
      top: 20,
      flexDirection: "row",
      justifyContent: "space-between",
    },
    text: {
      color: "#111111",
      fontWeight: "700",
    },
    enter: {
      width: "80%",
      height: "15%",
      backgroundColor: "#fff",
      alignSelf: "center",
  
      top: 80,
      borderRadius: 20,
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
      fontSize: 15,
      fontWeight: "700",
    },
    feverposition: {
      width: "100%",
      height: "10%",
      backgroundColor: "blue",
    },
    fevercontent: {
      flexDirection: "column",
      left: 20,
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
  });
  