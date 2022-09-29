import { StyleSheet, Text, View, Image } from 'react-native';
import Estacio from './src/components/AppName';
import pizza from './assets/pizza.jpg';

export default function App() {
  return (
    <View>
      <View style={styles.container}>
        <Image source={pizza} defaultSource={pizza} style={styles.pizzaLogo}></Image>
        <Estacio>Texto Qualquer</Estacio>
        <Estacio>ABCDE</Estacio>
        <Estacio>XPTO</Estacio>
        <Estacio>AEIOU</Estacio>
        <Text style={styles.appDescription}>A melhor pizzaria da cidade</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  appName : {
    fontSize: 30,
    fontWeight: 'bold',
    color: 'red',
  },
  appDescription: {
    fontSize: 20,
    color: '#c0c0c0c0',
    fontStyle: 'italic',
  },
  pizzaLogo: {
    width: 320,
    height: 200,
  }
});
