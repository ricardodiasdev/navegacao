import { StyleSheet, Text, View, Button } from "react-native";
import { useNavigation } from "@react-navigation/native";
import React, { useLayoutEffect } from "react";
import { useRoute } from "@react-navigation/native";

const About = () => {
  const navigation = useNavigation();
  const route = useRoute();

  useLayoutEffect(() => {
    navigation.setOptions({
      title:
        route.params?.nome === ""
          ? "Página About"
          : `About ${route.params?.nome}`,
    });
  }, [navigation]);

  return (
    <View style={styles.container}>
      <Text>Tela About</Text>
      <Text>{route.params?.nome}</Text>
      <Text>{route.params?.email}</Text>
      <Button
        title="Home"
        onPress={() => {
          navigation.navigate("Home");
        }}
      />
      <Button
        title="Contato"
        onPress={() =>
          navigation.navigate("Contato", {
            nome: "Ricardo",
            email: "ricardo@email.com",
          })
        }
      />
    </View>
  );
};

export default About;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
