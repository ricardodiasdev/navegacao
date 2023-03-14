import React from "react";

import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Home2 from "../pages/Home2";
import Detalhes from "../pages/Detalhes";

const Stack = createNativeStackNavigator();

const StackGroup = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Home2" component={Home2} />
      <Stack.Screen name="Detalhes" component={Detalhes} />

    </Stack.Navigator>
  );
};

export default StackGroup;
