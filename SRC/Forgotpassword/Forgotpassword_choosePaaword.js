import {
    StyleSheet,
    Text,
    TextInput,
    TouchableOpacity,
    Image,
    View,
    ActivityIndicator,
  } from "react-native";
  import React, { useState } from "react";
  import { containerfull, goback, logo1 } from '../Commoncss/Pagecss'
  import { AntDesign } from '@expo/vector-icons';
  import logo from '../../assets/leaf.png'
  import { forHead2, formInput, formbtn } from '../Commoncss/formcss';
  
  const Forgotpassword_choosePaaword = ({ navigation, route }) => {
    const { email } = route.params;
    const [password, setpassword] = useState("");
    const [conformpassword, setconformpassword] = useState("");
    const [loading, setloading] = useState("");
  
    const handlepasswordChange = () => {
      if (password == "" || conformpassword == "") {
        alert("the field is Empty");
      } else if (password != conformpassword) {
        alert("please Enter the Valid Password");
      } else {
        setloading(true);
        fetch("http://192.168.43.37:3000/verifyfp", {
          method: "post",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ email: email, password: password }),
        })
          .then((res) => res.json())
          .then((data) => {
            if ((data.message = "Password Changed Succesfully")) {
              setloading(false);
              alert(data.message);
              navigation.navigate("Forgotpassword_account_recoverd");
            } else {
              setloading(false);
              alert("please try again");
            }
          })
          .catch((err) => {
            setloading(false);
            console.log(err);
            alert(err);
          });
      }
    };
    return (
      <View style={containerfull}>
        <TouchableOpacity
          onPress={() => navigation.navigate("Login")}
          style={goback}
        >
          <AntDesign name="back" size={30} color="white" />
          <Text
            style={{
              color: "white",
              fontSize: 16,
              marginLeft: 10,
              fontWeight: "bold",
            }}
          >
            Go Back
          </Text>
        </TouchableOpacity>
  
        <Image source={logo} style={logo1}></Image>
        <Text style={forHead2}>Choose a Strong Pasword</Text>
        <TextInput
          placeholder="Enter a Password"
          style={formInput}
          secureTextEntry
          onChangeText={(text) => setpassword(text)}
        />
        <TextInput
          placeholder="Conform a Password"
          style={formInput}
          secureTextEntry
          onChangeText={(text) => setconformpassword(text)}
        />
        {loading ? (
          <ActivityIndicator size="large" color="#fff" />
        ) : (
          <Text style={formbtn} onPress={() => handlepasswordChange()}>
            Next
          </Text>
        )}
      </View>
    );
  };
  
  export default Forgotpassword_choosePaaword;
  
  const styles = StyleSheet.create({});
  