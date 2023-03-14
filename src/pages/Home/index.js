import { StyleSheet, Text, View, Button } from "react-native";
import React from "react";
import { useNavigation } from "@react-navigation/native";

const Home = () => {
  const navigation = useNavigation();

  const navegaAbout = () => {
    navigation.navigate("About", {nome: 'Ricardo', email: 'ricardo@email.com'})
  }

  const navegaContato = () => {
    navigation.navigate("Contato", {nome: 'Ricardo', email: 'ricardo@email.com'})
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
    </View>
  );
};

export default Home;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
