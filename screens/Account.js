/** @format */

import React from "react";
import {
  View,
  StyleSheet,
  Text,
  Image,
  ScrollView,
  Dimensions,
  Switch,
} from "react-native";

import Icon from "../components/Icon";

const HomeScreen = (props) => {
  return (
    <ScrollView style={styles.container} showsVerticalScrollIndicator={false}>
      <View style={styles.header}>
        <View>
          <Text style={styles.text}>My Account</Text>
          <Text style={styles.texti}>Samuel Andrew</Text>
        </View>
        <View
          style={{
            position: "absolute",
            end: 30,
          }}
        >
          <Image source={require("../assets/c.jpg")} style={styles.image} />
        </View>
      </View>

      <View>
        <View style={styles.card}>
          <Text
            style={{
              marginTop: 50,
              marginLeft: 20,
              color: "#fff",
              fontWeight: "bold",
            }}
          >
            Join the Super Savers
          </Text>
          <Text
            style={{
              marginLeft: 20,
              color: "#fff",
              fontWeight: "bold",
            }}
          >
            of 2020
          </Text>
        </View>
      </View>
      <View
        style={{
          marginTop: 25,
          flexDirection: "row",
          width: windowWidth,
          height: 30,
          alignItems: "center",
        }}
      >
        <Text style={{ marginLeft: 20, fontWeight: "bold" }}>
          Show Dashboard Account Balances
        </Text>
        <Switch
          style={{
            marginLeft: windowWidth / 2 - 130,
          }}
          value={true}
        />
      </View>
      <View
        style={{
          marginTop: 15,
          flexDirection: "row",
          width: windowWidth,
          height: 30,
        }}
      >
        <Text style={{ marginLeft: 20, fontWeight: "bold" }}>
          Enable Dark mode
        </Text>
        <Switch
          style={{
            marginLeft: windowWidth / 2 - 15,
          }}
        />
      </View>
      <View style={{ flexDirection: "row" }}>
        <View
          style={{
            height: 50,
            width: "42%",
            marginLeft: 25,
            borderWidth: 1,
            borderColor: "lightgrey",
            borderRadius: 5,
          }}
        >
          <Text style={{ fontSize: 11, marginLeft: 10, marginTop: 6 }}>
            Flex Number by Providus
          </Text>
          <Text style={{ fontSize: 11, marginLeft: 10, marginTop: 2 }}>
            9900204031
          </Text>
        </View>
        <View
          style={{
            height: 50,
            width: "42%",
            marginLeft: 10,
            borderWidth: 1,
            borderColor: "lightgrey",
            borderRadius: 5,
          }}
        >
          <Text
            style={{
              fontSize: 11,
              marginRight: 10,
              marginTop: 6,
              textAlign: "right",
            }}
          >
            piggyPoint
          </Text>
          <Text
            style={{
              fontSize: 11,
              marginRight: 10,
              marginTop: 2,
              textAlign: "right",
            }}
          >
            No point!
          </Text>
        </View>
      </View>

      <View style={{ flexDirection: "row" }}>
        <View
          style={{
            height: 50,
            marginTop: 20,
            width: "42%",
            marginLeft: 25,
            borderWidth: 1,
            borderColor: "lightgrey",
            borderRadius: 5,
          }}
        >
          <Text style={{ fontSize: 11, marginLeft: 10, marginTop: 6 }}>
            Create a PiggyLink ID
          </Text>
          <Text style={{ fontSize: 11, marginLeft: 10, marginTop: 2 }}>
            # Piggylink ID
          </Text>
        </View>
        <View
          style={{
            height: 50,
            marginTop: 20,
            width: "42%",
            marginLeft: 10,
            borderWidth: 1,
            borderColor: "lightgrey",
            borderRadius: 5,
            marginBottom: 20,
          }}
        >
          <Text
            style={{
              fontSize: 11,
              marginRight: 10,
              marginTop: 6,
              textAlign: "right",
            }}
          >
            Referral Earnings
          </Text>
          <Text
            style={{
              fontSize: 11,
              marginRight: 10,
              marginTop: 2,
              textAlign: "right",
            }}
          >
            $1,000
          </Text>
        </View>
      </View>
      <Icon title="My Account Settings" />
      <Icon name="paperclip" title="Self Help" />
      <Icon name="archive" title="Update KYC" />
      <Icon name="share-2" title="Contact Us" />
      <Icon name="dollar-sign" title="Withdraw Funds" />
      <Icon name="credit-card" title="My Card & Bank Settings" />
      <Icon name="book" title="View Piggyvest Library" />
      <Icon name="phone" title="Contact Us" />
      <Icon name="log-out" color="red" title="Log Out" />
      <View style={{ marginTop: 50 }}></View>
    </ScrollView>
  );
};

const windowWidth = Dimensions.get("window").width;

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
    width: 60,
    height: 60,
    alignSelf: "center",
    borderRadius: 30,
    marginBottom: 20,
  },
  card: {
    marginTop: 190,
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
