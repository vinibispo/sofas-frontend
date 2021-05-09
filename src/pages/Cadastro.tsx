import React from 'react';
import {
  View,
  SafeAreaView,
  StyleSheet,
  StatusBar,
  Text,
  ScrollView,
} from 'react-native';
import {theme} from '../utils/theme';
import {TextInput} from 'react-native-paper';

export default function SignUp() {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.view}>
        <View style={styles.center}>
          <Text style={styles.pinkText}>(Empreendimento) - (Planta)</Text>
          <Text style={styles.text}>Finalizar</Text>
        </View>
        <ScrollView style={styles.form}>
          <TextInput label="Nome Completo" />

          <TextInput label="Nome Completo" />

          <TextInput label="Nome Completo" />

          <TextInput label="Nome Completo" />

          <TextInput label="Nome Completo" />

          <TextInput label="Nome Completo" />

          <TextInput label="Nome Completo" />

          <TextInput label="Nome Completo" />

          <TextInput label="Nome Completo" />

          <TextInput label="Nome Completo" />

          <TextInput label="Nome Completo" />

          <TextInput label="Nome Completo" />

          <TextInput label="Nome Completo" />

          <TextInput label="Nome Completo" />

          <TextInput label="Nome Completo" />
        </ScrollView>
      </View>
    </SafeAreaView>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: StatusBar.currentHeight,
  },
  view: {
    flex: 1,
    margin: 20,
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
  pinkText: {
    color: theme.colors.primary,
    fontWeight: '700',
  },
  form: {},
});
