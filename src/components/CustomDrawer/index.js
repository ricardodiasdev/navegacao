import { View, Text, StyleSheet, Image } from "react-native";
import React from "react";
import {
  DrawerContentScrollView,
  DrawerItemList,
} from "@react-navigation/drawer";

import perfil from "../../assets/perfil.png";
const CustomDrawer = (props) => {
  return (
    <DrawerContentScrollView {...props}>
      <View style={styles.container}>
        <Image style={styles.perfil} source={perfil} />
        <Text style={styles.saudacao}>Bem-vindo!</Text>
      </View>
      <DrawerItemList {...props} />
    </DrawerContentScrollView>
  );
};

export default CustomDrawer;

const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: 85,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
    marginTop: 30
  },
  perfil: {
    width: 65,
    height: 65,
  },
  saudacao:{
    color: '#000',
    fontSize: 17,
    marginTop: 5,
    marginBottom: 35
  }
});
