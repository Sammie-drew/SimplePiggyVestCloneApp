/** @format */

import React from "react";
import { View, StyleSheet, Text, ScrollView } from "react-native";

import { Feather } from "@expo/vector-icons";

const PiggyVest = (props) => {
  return (
    <ScrollView style={styles.container}>
      <View style={styles.money}>
        <View>
          <Text style={styles.text}>Savings</Text>
          <Text style={styles.texti}>$50,000.34</Text>
        </View>
        <View style={{ position: "absolute", right: 30 }}>
          <Feather name="info" size={25} color="blue" />
        </View>
      </View>
      <View
        style={{
          marginTop: 20,
          marginLeft: 20,
          marginBottom: 20,
          height: 120,
          width: "90%",
          backgroundColor: "black",
          borderTopLeftRadius: 17,
          borderTopRightRadius: 17,
          borderBottomRightRadius: 17,
          flexDirection: "row",
        }}
      >
        <View>
          <Text
            style={{
              color: "lightgreen",
              position: "absolute",
              top: 20,
              left: 30,
            }}
          >
            Introducing
          </Text>
          <Text style={styles.textm}>Flex Dollar</Text>
        </View>
        <Text
          style={[
            styles.text,
            {
              position: "absolute",
              right: 30,
              marginTop: 20,
              fontWeight: "bold",
              fontSize: 60,
              color: "lightgreen",
            },
          ]}
        >
          $
        </Text>
      </View>
      <View style={{ flexDirection: "row" }}>
        <View
          style={{
            marginTop: 20,
            marginLeft: 12,
            height: 220,
            width: "44%",
            backgroundColor: "#CCF0FE",
            borderTopLeftRadius: 17,
            borderTopRightRadius: 17,
            borderBottomRightRadius: 17,
          }}
        >
          <View style={{ paddingTop: 20, paddingLeft: 10, paddingRight: 10 }}>
            <Feather name="award" size={30} color="#0d47a1" />
            <Text
              style={{
                color: "#0d47a1",
                marginTop: 10,
                marginBottom: 20,
                fontWeight: "bold",
              }}
            >
              Piggybank
            </Text>
            <Text style={{ fontSize: 9, fontWeight: "300", color: "black" }}>
              Strict savings automatically.Daily,weekly or Monthly.10% , p.a
            </Text>
            <Text
              style={{
                marginTop: 40,
                fontWeight: "300",
                color: "blue",
                fontWeight: "bold",
              }}
            >
              $48,000.34
            </Text>
          </View>
        </View>
        <View
          style={{
            marginTop: 20,
            marginLeft: 12,
            height: 220,
            width: "44%",
            backgroundColor: "#fce4ec",
            borderTopLeftRadius: 17,
            borderTopRightRadius: 17,
            borderBottomRightRadius: 17,
          }}
        >
          <View style={{ paddingTop: 20, paddingLeft: 10, paddingRight: 10 }}>
            <Feather name="film" size={30} color="#E7439C" />
            <Text
              style={{
                color: "#E7439C",
                marginTop: 10,
                marginBottom: 20,
                fontWeight: "bold",
              }}
            >
              Flex Naira
            </Text>
            <Text style={{ fontSize: 9, fontWeight: "300", color: "black" }}>
              Flexible savings for emergencies, Free treansfer, withdrawals etc.
              p.a
            </Text>
            <Text
              style={{
                marginTop: 40,
                fontWeight: "bold",
                color: "#E7439C",
                fontWeight: "bold",
              }}
            >
              $3,600.34
            </Text>
          </View>
        </View>
      </View>
      <View style={{ flexDirection: "row" }}>
        <View
          style={{
            marginTop: 20,
            marginLeft: 12,
            height: 220,
            width: "44%",
            backgroundColor: "#E3F2FD",
            borderTopLeftRadius: 17,
            borderTopRightRadius: 17,
            borderBottomRightRadius: 17,
          }}
        >
          <View style={{ paddingTop: 20, paddingLeft: 20 }}>
            <Feather name="lock" size={30} color="#2196f3" />
            <Text
              style={{
                color: "#2196f3",
                marginTop: 10,
                fontWeight: "bold",
                marginBottom: 20,
              }}
            >
              Safelock
            </Text>
            <Text style={{ fontSize: 12, fontWeight: "300", color: "black" }}>
              Strict savings automatically.
            </Text>

            <Text
              style={{ marginTop: 40, fontWeight: "bold", color: "#2196f3" }}
            >
              $1,000.34
            </Text>
          </View>
        </View>
        <View
          style={{
            marginTop: 20,
            marginLeft: 12,
            height: 220,
            width: "44%",
            backgroundColor: "#dcffeb",
            borderTopLeftRadius: 17,
            borderTopRightRadius: 17,
            borderBottomRightRadius: 17,
          }}
        >
          <View style={{ paddingTop: 20, paddingLeft: 20 }}>
            <Feather name="target" size={30} color="green" />
            <Text
              style={{
                color: "green",
                marginTop: 10,
                fontWeight: "bold",
                marginBottom: 20,
              }}
            >
              Targets
            </Text>
            <Text style={{ fontSize: 12, fontWeight: "300", color: "black" }}>
              Reach your unique individual saving goal. 10% p.a
            </Text>
            <Text style={{ marginTop: 40, fontWeight: "bold", color: "green" }}>
              $0.00
            </Text>
          </View>
        </View>
      </View>
      <View
        style={{
          marginTop: 20,
          marginLeft: 12,
          height: 220,
          width: "44%",
          backgroundColor: "#eceff1",
          borderTopLeftRadius: 17,
          borderTopRightRadius: 17,
          borderBottomRightRadius: 17,
        }}
      >
        <View style={{ paddingTop: 20, paddingLeft: 20 }}>
          <Feather name="dollar-sign" size={30} color="black" />
          <Text
            style={{
              color: "black",
              marginTop: 10,
              fontWeight: "bold",
              marginBottom: 20,
            }}
          >
            Flex Dollar
          </Text>
          <Text style={{ fontSize: 9, fontWeight: "300", color: "black" }}>
            Save and grow your wealth in dollars,Up to 6% p.a in dollars
          </Text>
          <Text style={{ marginTop: 40, fontWeight: "bold", color: "black" }}>
            $0.00
          </Text>
        </View>
      </View>
      <View style={{ marginTop: 20 }}></View>
    </ScrollView>
  );
};

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
  textm: {
    marginTop: 40,
    color: "#fff",
    paddingLeft: 30,
    fontSize: 30,
    fontWeight: "bold",
  },
  texti: {
    color: "blue",
    paddingLeft: 30,
    fontSize: 26,
    fontWeight: "100",
  },
});

export default PiggyVest;
