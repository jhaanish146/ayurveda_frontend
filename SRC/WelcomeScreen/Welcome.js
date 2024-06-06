import React, { useEffect, useRef } from 'react';
import { View, Text, Animated, Easing, StyleSheet,Image } from 'react-native';
import logo from "../../assets/leaf.png"
import { logo1 } from '../Commoncss/Pagecss'

const Welcome = ({ navigation }) => {
  const fadeAnim = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    Animated.timing(fadeAnim, {
      toValue: 1,
      duration: 2000,
      easing: Easing.linear,
      useNativeDriver: true,
    }).start(); 

    setTimeout(() => {
      navigation.navigate("Login")
    }, 4000);
  }, [fadeAnim]);

  return (
    <Animated.View style={[styles.container, { opacity: fadeAnim }]}>
      <Image source={logo} style={logo1}/>
      <Text style={styles.title}>Welcome To Ayuerveda</Text>
    </Animated.View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
});

export default Welcome;
