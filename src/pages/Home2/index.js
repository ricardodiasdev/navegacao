import { StyleSheet, Text, View, Button } from "react-native";
import React from "react";
import { useNavigation } from "@react-navigation/native";

const Home2 = () => {
  const navigation = useNavigation();

  const navegaAbout = () => {
    navigation.navigate("About2")
  }

  const navegaContato = () => {
    navigation.navigate("Contato2")
  }

  const navegaDetalhes = () => {
    navigation.navigate("Detalhes")
  }

  const abrirDrawer = () => {
    navigation.openDrawer()
  }

  return (
    <View style={styles.container}>
      <Text>Tela Home</Text>
      <Button
        title="About"
        onPress={navegaAbout}
      />
       <Button
        title="Contato"
        onPress={navegaContato}
      />
       <Button
        title="Detalhes"
        onPress={navegaDetalhes}
      />
      <Button
        title="Abrir Drawer"
        onPress={abrirDrawer}
      />
      
    </View>
  );
};

export default Home2;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "red",
    alignItems: "center",
    justifyContent: "center",
  },
});
