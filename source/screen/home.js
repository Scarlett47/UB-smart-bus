import { StatusBar } from 'expo-status-bar';
import {
  StyleSheet,
  Text,
  View,
  Image,
  ImageBackground,
  Button,
  TouchableOpacity,
  Pressable,
} from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { FontAwesome } from '@expo/vector-icons';
import { FontAwesome5 } from '@expo/vector-icons';
import { Foundation } from '@expo/vector-icons';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

export default function HomeScreen({ navigation }) {
  const image = {
    uri: 'https://th.bing.com/th/id/R.9f5b23664757e4028b9b89851bba13b3?rik=UvFQdb%2bvUHrG8g&riu=http%3a%2f%2f3.bp.blogspot.com%2f_1x1QKjjaEio%2fTB7OyN3-u9I%2fAAAAAAAAAOg%2fu1whqQxFU1E%2fs1600%2fmongoliafirstdays%2b016.jpg&ehk=p2CHrBPIZDuSKmtR0bJTW%2fkFddgOmiBwLBYDhYNs1Uo%3d&risl=&pid=ImgRaw&r=0',
  };
  return (
    <View style={styles.container}>
      <View style={styles.line}>
        <View style={styles.line1}></View>
        <View style={styles.line2}></View>
      </View>
      <View style={styles.widicon}>
        <Image
          style={styles.widicon1}
          source={require('../../assets/widicon.png')}
        ></Image>
      </View>
      <Text style={styles.text1}>Нийтийн тээврийн үйлчилгээний мэдээлэл</Text>
      <View style={styles.smcon}>
        <ImageBackground source={image}>
          <View style={styles.smcon1}>
            <Pressable
              style={styles.flex}
              onPress={() => navigation.navigate('Chiglel')}
            >
              <Text style={styles.smtext1}>
                <View style={styles.iconout}>
                  <Ionicons
                    name='bus-outline'
                    size={40}
                    style={styles.icon1}
                  ></Ionicons>
                </View>
              </Text>
              <Text style={styles.smtext2}>Чиглэл хайх</Text>
              <Text style={styles.smtext3}>
                <Ionicons size={30} name='chevron-forward-outline'></Ionicons>
              </Text>
            </Pressable>
          </View>
          <View style={styles.smcon2}>
            <Pressable
              style={styles.flex}
              onPress={() => navigation.navigate('Buudal')}
            >
              <Text style={styles.smtext1}>
                <View style={styles.iconout}>
                  <MaterialCommunityIcons
                    name='bus-stop-covered'
                    size={40}
                    color='black'
                    style={styles.icon2}
                  />
                </View>
              </Text>
              <Text style={styles.smtext2}>Автобусны буудал хайх</Text>
              <Text style={styles.smtext3}>
                <Ionicons size={30} name='chevron-forward-outline'></Ionicons>
              </Text>
            </Pressable>
          </View>
          <View style={styles.smcon3}>
            <Pressable
              style={styles.flex}
              onPress={() => navigation.navigate('Medee')}
            >
              <Text style={styles.smtext1}>
                <View style={styles.iconout}>
                  <Ionicons
                    name='alert-circle-outline'
                    size={40}
                    style={styles.icon3}
                  ></Ionicons>
                </View>
              </Text>
              <Text style={styles.smtext2}>Мэдээ мэдээлэл</Text>
              <Text style={styles.smtext3}>
                <Ionicons size={30} name='chevron-forward-outline'></Ionicons>
              </Text>
            </Pressable>
          </View>
        </ImageBackground>
      </View>
      <View style={styles.scmon4}>
        <View style={styles.sicon}>
          <FontAwesome name='star-o' size={35} color='gray' />
          <Text style={styles.text2}>Хялбар хэрэглээ</Text>
        </View>
        <View style={styles.sicon}>
          <FontAwesome5 name='map-marked-alt' size={35} color='gray' />
          <Text style={styles.text2}>Ойролцоо автобусны буудал</Text>
        </View>
        <View style={styles.sicon}>
          <Foundation name='clipboard-notes' size={35} color='gray' />
          <Text style={styles.text2}>Хэрэглэгчийн Форум</Text>
        </View>
        <View style={styles.sicon}>
          <Ionicons name='md-settings' size={35} color='gray' />
          <Text style={styles.text2}>Тохиргоо</Text>
        </View>
      </View>
      <Image
        source={require('../../assets/banner.png')}
        style={styles.banner}
      ></Image>
      <StatusBar style='auto' />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    marginTop: 30,
  },
  line: {
    display: 'flex',
    flexDirection: 'row',
    height: 5,
  },
  line1: {
    flex: 2,
    backgroundColor: 'orange',
  },
  line2: {
    flex: 2,
    backgroundColor: 'purple',
  },
  widicon: {
    display: 'flex',
    alignItems: 'center',
    paddingTop: 2,
  },
  widicon1: {
    width: 160,
    height: 50,
    resizeMode: 'contain',
  },
  text1: {
    fontWeight: 'bold',
    textTransform: 'uppercase',
    textAlign: 'center',
    paddingTop: 5,
    fontSize: 13,
  },
  smcon: {},
  smcon1: {
    width: '100%',
    height: 160,
    backgroundColor: 'purple',
    flexDirection: 'row',
    alignItems: 'center',
    opacity: 0.9,
  },
  smcon2: {
    width: '100%',
    height: 160,
    backgroundColor: 'gray',
    flexDirection: 'row',
    alignItems: 'center',
    opacity: 0.9,
  },
  smcon3: {
    width: '100%',
    height: 160,
    flexDirection: 'row',
    backgroundColor: 'orange',
    alignItems: 'center',
    opacity: 0.9,
  },
  smtext1: {
    flex: 1,
    marginLeft: 10,
    color: 'white',
    fontSize: 30,
    fontWeight: 'bold',
  },
  smtext2: {
    color: 'white',
    flex: 3,
    fontSize: 20,
    fontWeight: 'bold',
  },
  smtext3: {
    color: 'white',
    flex: 0.5,
  },
  icon1: {
    position: 'absolute',
    left: 11,
    top: 7,
    color: 'purple',
  },
  icon2: {
    position: 'absolute',
    left: 11,
    top: 7,
    color: 'gray',
  },
  icon3: {
    position: 'absolute',
    left: 11,
    top: 7,
    color: 'orange',
  },
  iconout: {
    height: 60,
    width: 60,
    backgroundColor: 'white',
    borderRadius: 60 / 2,
  },
  scmon4: {
    display: 'flex',
    flexDirection: 'row',
    marginTop: 40,
  },
  text2: {
    color: 'gray',
    fontSize: 12,
    fontWeight: 'bold',
    textAlign: 'center',
    justifyContent: 'center',
  },
  sicon: {
    width: 80,
    marginLeft: 15,
    alignItems: 'center',
    justifyContent: 'center',
  },
  banner: {
    resizeMode: 'stretch',
    position: 'absolute',
    bottom: 0,
    width: '100%',
    height: 100,
  },
  flex: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
  },
});
