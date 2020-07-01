/** @format */

import React, { useState } from "react";
import {
  View,
  StyleSheet,
  Text,
  ScrollView,
  Image,
  TouchableOpacity,
  Dimensions,
} from "react-native";

import { Feather } from "@expo/vector-icons";

const PiggyVest = (props) => {
  const { active, setActive } = useState("products");

  const tabs = ["Active", "Explore", "Matured"];

  const renderTab = (tab) => {
    const setActive = active === tab;

    return (
      <TouchableOpacity
        key={`tab-${tab}`}
        onPress={() => {
          setActive(tab);
        }}
        style={[styles.tab]}
      >
        <Text style={{ paddingRight: 20, color: "#fff", textAlign: "justify" }}>
          {tab}
        </Text>
      </TouchableOpacity>
    );
  };
  return (
    <ScrollView style={styles.container} showsVerticalScrollIndicator={false}>
      <View style={styles.money}>
        <View>
          <Text style={styles.text}>Investify</Text>
          <Text style={styles.texti}>$50,000.34</Text>
        </View>
        <View style={{ position: "absolute", right: 30 }}>
          <Feather name="info" size={25} color="#9a51e0" />
        </View>
      </View>
      <View style={styles.card}>
        <Image
          source={require("../assets/investe.jpg")}
          style={styles.images}
        />
      </View>
      <View style={{ flexDirection: "row" }}>
        {tabs.map((tab) => renderTab(tab))}
      </View>

      <Text
        style={{
          paddingTop: 150,
          alignSelf: "center",
          fontSize: 30,
        }}
      >
        Start Investing!
      </Text>
      <Text
        style={{
          paddingTop: 5,
          alignSelf: "center",
          fontSize: 13,
          paddingLeft: 20,
        }}
      >
        Start Investing in verified opportunities. Lets help you get started.
      </Text>
      <View style={styles.card3}>
        <Text
          style={{
            alignSelf: "center",
            paddingLeft: windowWidth / 2 - 50,
            color: "#fff",
            fontWeight: "bold",
            fontSize: 12,
          }}
        >
          Invest Now
        </Text>
      </View>
      <View style={styles.card4}>
        <Text
          style={{
            alignSelf: "center",
            paddingLeft: windowWidth / 2 - 50,
            color: "#9a51e0",
            fontWeight: "bold",
            fontSize: 12,
          }}
        >
          Learn More
        </Text>
      </View>
      <View style={{ marginTop: 80 }}></View>
    </ScrollView>
  );
};

const windowWidth = Dimensions.get("window").width;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
  },
  money: {
    marginTop: 90,
    flexDirection: "row",
  },
  text: {
    color: "black",
    paddingLeft: 30,
    fontSize: 30,
    fontWeight: "bold",
  },

  texti: {
    color: "#9a51e0",
    paddingLeft: 30,
    fontSize: 26,
    fontWeight: "100",
  },
  card: {
    marginTop: 20,
    marginLeft: 20,
    marginBottom: 20,
    height: 120,
    width: "90%",
    flexDirection: "row",
  },
  images: {
    height: 120,
    width: "100%",
    borderRadius: 10,
  },
  tab: {
    marginRight: 10,
    paddingBottom: 10,
    paddingLeft: 50,

    backgroundColor: "#9a51e0",
    borderRadius: 10,
    textAlign: "center",
  },
  card3: {
    marginTop: 40,
    marginLeft: 20,
    height: 70,
    width: "90%",
    textAlign: "center",
    flexDirection: "row",
    borderTopLeftRadius: 17,
    borderTopRightRadius: 17,
    borderBottomRightRadius: 17,
    backgroundColor: "#9a51e0",
  },
  card4: {
    marginTop: 40,
    marginLeft: 20,
    height: 70,
    width: "90%",
    textAlign: "center",
    flexDirection: "row",
    borderTopLeftRadius: 17,
    borderTopRightRadius: 17,
    borderBottomRightRadius: 17,
    borderWidth: 1,
    borderColor: "#9a51e0",
  },
});

export default PiggyVest;
