import React from 'react';
import {View, SafeAreaView, StyleSheet, StatusBar, Text} from 'react-native';

export default function Home() {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.center}>
        <Text style={styles.text}>
          Sua <Text>melhor</Text> opção de <Text>móveis planejados</Text>{' '}
        </Text>
      </View>
    </SafeAreaView>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: StatusBar.currentHeight,
  },
  search: {
    marginVertical: 10,
  },
  center: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    fontSize: 16,
    color: '#707170',
  },
  image: {
    height: 40,
    width: 60,
  },
});
