import { StyleSheet, Text, View } from "react-native";
import React from "react";

const About2 = () => {
  return (
    <View style={styles.container}>
      <Text>Tela About</Text>
    </View>
  );
};

export default About2;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
