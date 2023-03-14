import { View, Text, StyleSheet, Button } from "react-native";
import {
  useNavigation,
  useRoute,
  StackActions,
} from "@react-navigation/native";
import React, { useLayoutEffect } from "react";

const Contato = () => {
  const navigation = useNavigation();
  const route = useRoute();
  useLayoutEffect(() => {
    navigation.setOptions({
      title:
        route.params?.nome === ""
          ? "Página Contato"
          : `Contato de ${route.params?.nome}`,
    });
  }, [navigation]);
  return (
    <View style={styles.container}>
      <Text>Página Contato</Text>
      <Button
        title="Home"
        onPress={() => navigation.dispatch(StackActions.popToTop)} // zerar a pilha 
      />
      <Button title="About" onPress={() => navigation.navigate("About")} />
    </View>
  );
};

export default Contato;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
