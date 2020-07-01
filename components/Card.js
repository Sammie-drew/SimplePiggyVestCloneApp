/** @format */

import React from "react";
import { View, StyleSheet, Text, TouchableOpacity } from "react-native";
import { Feather } from "@expo/vector-icons";

const Card = ({
  backgroundColor,
  name,
  amount,
  Title,
  color,
  textColor,
  amountColor,
  onPress,
}) => {
  return (
    <TouchableOpacity
      style={[styles.container, { backgroundColor }]}
      onPress={onPress}
    >
      <Feather name={name} size={27} color={color} style={{ paddingTop: 20 }} />
      <View style={{ flexDirection: "column", paddingLeft: 20 }}>
        <Text style={[styles.textstyle, { color: textColor }]}>{Title}</Text>
        <Text
          style={[styles.amountstyle, { color: amountColor }]}
        >{`$${amount}`}</Text>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 2,
    marginLeft: 20,
    height: 100,
    width: 300,
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
    borderBottomRightRadius: 10,
    paddingTop: 20,
    paddingHorizontal: 20,
    flexDirection: "row",
    elevation: 4,
    marginVertical: 10,
  },
  textstyle: {
    fontSize: 16,
    fontWeight: "bold",
    paddingTop: 3,
  },
  amountstyle: {
    // color: "#fff",
    fontSize: 16,
    fontWeight: "bold",
    paddingTop: 3,
  },
});

export default Card;
