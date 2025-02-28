import React, { useState } from "react";
import { View, Text, TextInput, Button, Alert } from "react-native";
import { sendPasswordResetEmail } from "firebase/auth";
import { auth } from "../config/firebase";

import type { StackScreenProps } from "@react-navigation/stack";
import { RootStackParamList } from "../navigation/StackNavigator";

type ForgotPasswordScreenProps = StackScreenProps<
  RootStackParamList,
  "ForgotPassword"
>;

export default function ForgotPasswordScreen({
  navigation,
}: ForgotPasswordScreenProps) {
  const [email, setEmail] = useState("");

  const handleForgotPassword = async () => {
    if (!email) {
      Alert.alert("Reset Password", "Please enter your email first.");
      return;
    }

    try {
      await sendPasswordResetEmail(auth, email);
      Alert.alert(
        "Password Reset",
        "A reset link has been sent to your email."
      );
      navigation.navigate("Login"); // Redirect to login screen
    } catch (error) {
      Alert.alert("Error", (error as Error).message);
    }
  };

  return (
    <View style={{ flex: 1, justifyContent: "center", padding: 20 }}>
      <Text style={{ fontSize: 24, marginBottom: 20 }}>Forgot Password</Text>

      <TextInput
        placeholder="Enter your email"
        value={email}
        onChangeText={setEmail}
        style={{ borderWidth: 1, padding: 10, marginBottom: 10 }}
      />

      <Button title="Reset Password" onPress={handleForgotPassword} />
    </View>
  );
}
