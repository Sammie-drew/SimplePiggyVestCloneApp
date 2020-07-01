/** @format */

import React from "react";
import { View, StyleSheet, Text } from "react-native";
import { Feather } from "@expo/vector-icons";

const Icon = ({
  backgroundColor = "transparent",
  name = "user",
  color = "#212121",
  title,
}) => {
  return (
    <View style={{ paddingTop: 15 }}>
      <View style={[styles.container, { backgroundColor }]}>
        <Feather name={name} size={27} color={color} />
        <Text style={[styles.textstyle, (color = { color })]}>{title}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginLeft: 20,
    height: 60,
    width: "90%",
    borderWidth: 1,
    borderColor: "lightgrey",
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
    borderBottomRightRadius: 10,
    paddingTop: 20,
    paddingHorizontal: 20,
    flexDirection: "row",
  },
  textstyle: {
    fontSize: 15,
    marginLeft: 20,
    paddingTop: 3,
  },
});

export default Icon;
