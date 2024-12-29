import React from "react";
import { Appbar } from "react-native-paper";

export default function Header({ navigation, back, options }) {
  return (
    <Appbar.Header style={{ backgroundColor: "#6200ee" }}>
      {back && <Appbar.BackAction onPress={navigation.goBack} />}
      <Appbar.Content title={options.title} />
    </Appbar.Header>
  );
}
