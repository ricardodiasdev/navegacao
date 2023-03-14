import { View, Text, StyleSheet } from "react-native";
import React from "react";

const Detalhes = () => {
  return (
    <View style={styles.container}>
      <Text>Detalhes</Text>
    </View>
  );
};

export default Detalhes;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "red",
    alignItems: "center",
    justifyContent: "center",
  },
});
