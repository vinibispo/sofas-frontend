import React from 'react';
import {
  View,
  SafeAreaView,
  StyleSheet,
  StatusBar,
  Text,
  Image,
} from 'react-native';
import {theme} from '../utils/theme';
import sophaImg from '../assets/sopha.png';

export default function Final(): JSX.Element {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.view}>
        <View style={styles.center}>
          <Image style={styles.image} source={sophaImg} />
        </View>

        <View style={styles.breakLine}>
          <Text style={styles.bold}>Obrigado.</Text>
        </View>
        <Text style={styles.text}>
          Em breve um de nossos especialistas entrarão em contado para finalizar
          sua contratação e planejar a entrega do seu projeto!
        </Text>
        <Text style={styles.text}>Qualquer dúvida, ficamos a disposição:</Text>

        <Text style={styles.bold}>meuplanejado@sopha.com.br</Text>
        <Text style={styles.pinkText}>0800 44 444 4344</Text>
      </View>
    </SafeAreaView>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: StatusBar.currentHeight,
  },
  breakLine: {
    marginTop: 40,
  },
  view: {
    flex: 1,
    marginHorizontal: 20,
  },
  bold: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  search: {
    marginVertical: 10,
  },
  center: {
    marginVertical: 30,
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    fontSize: 20,
    color: '#707170',
    maxWidth: 400,
  },
  image: {
    height: 80,
    width: 120,
  },

  pinkText: {
    fontSize: 20,
    color: theme.colors.primary,
    fontWeight: '700',
  },
  twoColumns: {
    justifyContent: 'space-between',
    flexDirection: 'row',
    alignItems: 'center',
  },
  bottom: {
    padding: 10,
    borderTopColor: theme.colors.primary,
    borderTopWidth: 3,
  },
  total: {
    fontSize: 18,
    color: theme.colors.text,
  },
});
