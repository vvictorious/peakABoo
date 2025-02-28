import React from "react";
import { View, Text, Button, Alert } from "react-native";
import { signOut } from "firebase/auth";
import { auth } from "../config/firebase";
import type { StackScreenProps } from "@react-navigation/stack";
import { RootStackParamList } from "../navigation/StackNavigator";

type HomeScreenProps = StackScreenProps<RootStackParamList, "Home">;

export default function HomeScreen({ navigation }: HomeScreenProps) {
  const handleLogout = async () => {
    try {
      await signOut(auth);
      Alert.alert("Logged Out", "You have been logged out.");
      navigation.replace("Signup"); // Redirect to Signup screen
    } catch (error) {
      Alert.alert("Logout Failed", (error as Error).message);
    }
  };

  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <Text>Welcome to the Home Screen!</Text>
      <Button title="Logout" onPress={handleLogout} color="red" />
    </View>
  );
}
