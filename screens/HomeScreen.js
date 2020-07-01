/** @format */

import React from "react";
import { View, StyleSheet, Text, Image, ScrollView } from "react-native";
import { Feather } from "@expo/vector-icons";
import { TouchableOpacity } from "react-native-gesture-handler";
import Card from "../components/Card";

const HomeScreen = ({ navigation }) => {
  return (
    <ScrollView style={styles.container} showsVerticalScrollIndicator={false}>
      <View style={styles.header}>
        <View>
          <Text style={styles.text}>Samuel</Text>
          <Text style={styles.texti}>You go makge AM</Text>
        </View>
        <View
          style={{
            position: "absolute",
            end: 30,
          }}
        >
          <TouchableOpacity onPress={() => navigation.navigate("Account")}>
            <Image source={require("../assets/c.jpg")} style={styles.image} />
          </TouchableOpacity>
        </View>
      </View>
      <View style={{ marginTop: 160 }}>
        <ScrollView
          horizontal={true}
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={styles.contentContainer}
        >
          <Card
            name="shield"
            backgroundColor="#0d60d8"
            Title="Total Savings"
            amount="40,000"
            color="white"
            textColor="#fff"
            amountColor="#fff"
            onPress={() => navigation.navigate("Savings")}
          />
          <Card
            name="trending-up"
            backgroundColor="#7912e5"
            Title="Total Investment"
            amount="0.00"
            color="white"
            textColor="#fff"
            amountColor="#fff"
            onPress={() => navigation.navigate("Invest")}
          />
          <Card
            name="dollar-sign"
            backgroundColor="#222222"
            Title="Flex Dollar"
            amount="0.00"
            color="white"
            textColor="#fff"
            amountColor="#fff"
          />
          <Card
            name="film"
            backgroundColor="#fff"
            Title="Total Investment"
            amount="379.29"
            color="#E7439C"
            textColor="black"
            amountColor="#E7439C"
          />
          <View style={{ paddingRight: 20 }} />
        </ScrollView>
      </View>
      <View>
        <Text
          style={{
            marginTop: 50,
            marginBottom: 10,
            marginLeft: 20,
            fontWeight: "700",
            color: "black",
          }}
        >
          SUPER SAVER CHALLENGE
        </Text>
        <View style={styles.card}>
          <Text
            style={{
              paddingTop: 50,
              paddingLeft: 20,
              color: "#fff",
              fontWeight: "bold",
            }}
          >
            Join the Super Savers
          </Text>
          <Text
            style={{
              paddingLeft: 20,
              color: "#fff",
              fontWeight: "bold",
            }}
          >
            of 2020
          </Text>
        </View>
      </View>
      <View style={{ flexDirection: "row" }}>
        <Text style={{ marginTop: 80, marginLeft: 20 }}>TO-DO-LIST</Text>
        <Text style={{ marginTop: 80, color: "#0d60d8" }}>-REFRESH</Text>
      </View>
      <TouchableOpacity style={styles.card3}>
        <View style={{ paddingTop: 20, paddingLeft: 10 }}>
          <Feather name="circle" size={30} color="#0d60d8" />
        </View>
        <Text style={{ paddingTop: 25, paddingLeft: 10 }}>
          Turn on piggybank auto save
        </Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.card3}>
        <View style={{ paddingTop: 20, paddingLeft: 10 }}>
          <Feather name="circle" size={30} color="#0d60d8" />
        </View>
        <Text style={{ paddingTop: 25, paddingLeft: 10 }}>
          Safe lock 41,000 for 61-90 days
        </Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.card4}>
        <View style={{ paddingTop: 40, paddingLeft: 10 }}>
          <Feather name="activity" size={30} color="#0d60d8" />
        </View>
        <View
          style={{
            flexDirection: "column",
            paddingTop: 30,
            paddingLeft: 12,
            marginRight: 2,
          }}
        >
          <Text style={{ color: "#0d60d8", fontSize: 15 }}>
            Stay Informed. COVID-19
          </Text>
          <Text
            style={{
              textAlign: "justify",
              justifyContent: "flex-start",
              fontSize: 9,
              marginRight: 9,
              width: "70%",
            }}
          >
            Get the latest information directly from the NCDC about coronavirus
            in Nigeria
          </Text>
        </View>
      </TouchableOpacity>
      <TouchableOpacity style={styles.card4}>
        <View style={{ paddingTop: 40, paddingLeft: 10 }}>
          <Feather name="thumbs-up" size={30} color="#0d60d8" />
        </View>
        <View
          style={{ flexDirection: "column", paddingTop: 30, paddingLeft: 15 }}
        >
          <Text style={{ color: "#0d60d8", fontSize: 15 }}>
            See your recent activies
          </Text>
          <Text
            style={{
              textAlign: "justify",
              justifyContent: "flex-start",
              fontSize: 9,
            }}
          >
            See your most recent activities on PiggVest
          </Text>
        </View>
      </TouchableOpacity>
      <Text style={{ paddingLeft: 20, marginTop: 60 }}>Refer and earn</Text>
      <View style={styles.card5}>
        <Image
          source={require("../assets/covid.jpg")}
          resizeMode="stretch"
          style={styles.images}
        />
      </View>
      <View style={{ marginTop: 80 }}></View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    marginTop: 20,
  },
  header: {
    position: "absolute",
    top: 80,
    flexDirection: "row",
    width: "100%",
  },
  text: {
    color: "black",
    paddingLeft: 30,
    fontSize: 30,
    fontWeight: "bold",
  },
  texti: {
    color: "grey",
    paddingLeft: 30,
    fontSize: 12,
    fontWeight: "bold",
  },
  image: {
    width: 50,
    height: 50,
    alignSelf: "center",
    borderRadius: 25,
    marginBottom: 20,
  },
  card: {
    marginLeft: 20,
    height: 120,
    width: "90%",
    borderRadius: 10,
    elevation: 2,
    backgroundColor: "#0d47a1",
  },

  card3: {
    marginTop: 20,
    marginLeft: -1,
    height: 65,
    width: "90%",
    borderTopLeftRadius: 17,
    borderTopRightRadius: 17,
    borderBottomRightRadius: 17,
    borderWidth: 1,
    borderColor: "#cfd8dc",
    flexDirection: "row",
    alignSelf: "center",
    alignContent: "center",
  },
  card4: {
    marginTop: 40,
    marginLeft: 20,
    height: 100,
    width: "90%",
    textAlign: "center",
    flexDirection: "row",
    borderTopLeftRadius: 17,
    borderTopRightRadius: 17,
    borderBottomRightRadius: 17,
    borderWidth: 1,
    borderColor: "#0d60d8",
  },
  card5: {
    marginTop: 30,
    marginLeft: 20,
    height: 130,
    width: "90%",
    textAlign: "center",
    flexDirection: "row",
    borderRadius: 20,
  },
  images: {
    height: 130,
    width: "100%",
    borderRadius: 10,
  },
});

export default HomeScreen;
