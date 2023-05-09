import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <View style={styles.line}>
        <View style={styles.line1}></View>
        <View style={styles.line2}></View>
      </View>
      <View style={styles.widicon}>
        <Image style={styles.widicon1} source={require("./assets/widicon.png")}></Image>
      </View>
      <Text style={styles.text1}>
        Нийтийн тээврийн үйлчилгээний мэдээлэл
      </Text>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    marginTop:30,
  },
  line:{
    display:"flex",
    flexDirection:"row",
    height:5,
  },
  line1:{
    flex: 2,
    backgroundColor: 'orange',
  },
  line2:{
    flex: 2,
    backgroundColor: 'purple'
  },
  widicon:{
    display:"flex",
    alignItems:"center",
    paddingTop:2,
  },
  widicon1:{
    width: 160,
    height: 50,
    resizeMode: 'contain',
  },
  text1:{
    fontWeight:'bold',
    textTransform:"uppercase",
    textAlign:"center",
    paddingTop:5,
  }
});
