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
import {Formik} from 'formik';
import Input from '../components/Input';
import {Button} from 'react-native-paper';

export default function SignUp() {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.view}>
        <View style={styles.center}>
          <Text style={styles.pinkText}>(Empreendimento) - (Planta)</Text>
          <Text style={styles.text}>Finalizar</Text>
        </View>
        <Formik
          onSubmit={console.log}
          initialValues={{
            user: {
              name: '',
              email: '',
              cpf: '',
              born_date: '',
              phone_1: '',
              phone_2: '',
            },
            address: {
              cep: '',
              street: '',
              number: '',
              complement: '',
              district: '',
              uf: '',
              unity_number: '',
            },
          }}>
          {({handleBlur, handleChange, values, submitForm}) => (
            <>
              <ScrollView style={styles.form}>
                <Input
                  label="Nome Completo"
                  value={values.user.name}
                  onChangeText={handleChange('user.name')}
                  onBlur={handleBlur('user.name')}
                />

                <Input
                  label="E-mail"
                  value={values.user.email}
                  onChangeText={handleChange('user.email')}
                  onBlur={handleBlur('user.email')}
                />
                <Input
                  label="CPF"
                  value={values.user.cpf}
                  onChangeText={handleChange('user.cpf')}
                  onBlur={handleBlur('user.cpf')}
                />
                <Input
                  label="Data de Nascimento"
                  value={values.user.born_date}
                  onChangeText={handleChange('user.born_date')}
                  onBlur={handleBlur('user.born_date')}
                />
                <Input
                  label="Celular 1"
                  value={values.user.phone_1}
                  onChangeText={handleChange('user.phone_1')}
                  onBlur={handleBlur('user.phone_1')}
                />
                <Input
                  label="Celular 2"
                  value={values.user.phone_2}
                  onChangeText={handleChange('user.phone_2')}
                  onBlur={handleBlur('user.phone_2')}
                />
                <Input
                  label="CEP"
                  value={values.address.cep}
                  onChangeText={handleChange('address.cep')}
                  onBlur={handleBlur('address.cep')}
                />
                <Input
                  label="Endereço"
                  value={values.address.street}
                  onChangeText={handleChange('address.street')}
                  onBlur={handleBlur('address.street')}
                />
                <Input
                  label="N°"
                  value={values.address.number}
                  onChangeText={handleChange('address.number')}
                  onBlur={handleBlur('address.number')}
                />
                <Input
                  label="Complemento"
                  value={values.address.complement}
                  onChangeText={handleChange('address.complement')}
                  onBlur={handleBlur('address.complement')}
                />
                <Input
                  label="Bairro"
                  value={values.address.district}
                  onChangeText={handleChange('address.district')}
                  onBlur={handleBlur('address.district')}
                />
                <Input
                  label="UF"
                  value={values.address.uf}
                  onChangeText={handleChange('address.uf')}
                  onBlur={handleBlur('address.uf')}
                />
                <Input
                  label="N° da unidade"
                  value={values.address.unity_number}
                  onChangeText={handleChange('address.unity_number')}
                  onBlur={handleBlur('address.unity_number')}
                />
              </ScrollView>
              <Button mode={'contained'} onPress={submitForm}>
                Contratar
              </Button>
            </>
          )}
        </Formik>
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
  form: {
    margin: 10,
  },
});
