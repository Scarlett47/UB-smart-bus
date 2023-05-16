import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, Image } from "react-native";
import React from "react";

export default function App() {
  return (
    <View style={styles.container}>
      <View style={styles.line}>
        <View style={styles.line1}></View>
        <View style={styles.line2}></View>
      </View>
      <View style={styles.widicon}>
        <Image
          style={styles.widicon1}
          source={require("./assets/widicon.png")}
        ></Image>
      </View>
      <Text style={styles.text1}>Нийтийн тээврийн үйлчилгээний мэдээлэл</Text>
      <View style={styles.smcon}>
        <View style={styles.smcon1}>
          <Text style={styles.smtext1}></Text>
          <Text style={styles.smtext2}>Чиглэл хайх</Text>
          <Text style={styles.smtext3}>sra</Text>
        </View>
        <View style={styles.smcon2}></View>
        <View style={styles.smcon3}></View>
      </View>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    marginTop: 30,
  },
  line: {
    display: "flex",
    flexDirection: "row",
    height: 5,
  },
  line1: {
    flex: 2,
    backgroundColor: "orange",
  },
  line2: {
    flex: 2,
    backgroundColor: "purple",
  },
  widicon: {
    display: "flex",
    alignItems: "center",
    paddingTop: 2,
  },
  widicon1: {
    width: 160,
    height: 50,
    resizeMode: "contain",
  },
  text1: {
    fontWeight: "bold",
    textTransform: "uppercase",
    textAlign: "center",
    paddingTop: 5,
    fontSize: 13,
  },
  smcon1: {
    width: "100%",
    height: 160,
    backgroundColor: "purple",
    flexDirection: "row",
    alignItems: "center",
  },
  smcon2: {
    width: "100%",
    height: 160,
    backgroundColor: "gray",
    flexDirection: "row",
  },
  smcon3: {
    width: "100%",
    height: 160,
    flexDirection: "row",
    backgroundColor: "orange",
  },
  smtext1: {
    flex: 1,
    color: "white",
    fontSize: 30,
    fontWeight: "bold",
  },
  smtext2: {
    color: "white",
    flex: 1,
    fontSize: 20,
    fontWeight: "bold",
  },
  smtext3: {
    color: "white",
    flex: 1,
    fontSize: 30,

    fontWeight: "bold",
  },
});
