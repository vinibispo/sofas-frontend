import React, {useState, useCallback} from 'react';
import {
  View,
  SafeAreaView,
  StyleSheet,
  StatusBar,
  Text,
  ScrollView,
} from 'react-native';
import {DatePickerModal} from 'react-native-paper-dates';
import {theme} from '../utils/theme';
import {Formik} from 'formik';
import Input from '../components/Input';
import {Button} from 'react-native-paper';
import {RouteProp, useRoute, useNavigation} from '@react-navigation/native';
import {api} from '../services/api';

const value = {
  user: {
    name: '',
    email: '',
    cpf: '',
    born_date: new Date(),
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
};
type Values = typeof value;
type CadastroScreenRouteProp = RouteProp<{Cadastro: {id: number}}, 'Cadastro'>;
export default function SignUp() {
  const [open, setOpen] = useState(false);
  const {
    params: {id},
  } = useRoute<CadastroScreenRouteProp>();
  const navigator = useNavigation();
  const handleSubmitValue = useCallback(
    (values: Values) => {
      api
        .post('/sign_up.json', {
          ...values,
          order: {
            plan_id: id,
          },
        })
        .then(() => {
          navigator.navigate('Final');
        });
    },
    [id, navigator],
  );
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.view}>
        <View style={styles.center}>
          <Text style={styles.pinkText}>(Empreendimento) - (Planta)</Text>
          <Text style={styles.text}>Finalizar</Text>
        </View>
        <Formik
          onSubmit={handleSubmitValue}
          initialValues={{
            user: {
              name: '',
              email: '',
              cpf: '',
              born_date: new Date(),
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
          {({handleBlur, handleChange, values, submitForm, ...formik}) => (
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
                  keyboardType="email-address"
                />
                <Input
                  label="CPF"
                  value={values.user.cpf}
                  onChangeText={handleChange('user.cpf')}
                  onBlur={handleBlur('user.cpf')}
                  keyboardType="numeric"
                />
                <DatePickerModal
                  mode="single"
                  date={values.user.born_date}
                  visible={open}
                  onConfirm={({date}) => {
                    setOpen(false);
                    if (date) {
                      formik.setFieldValue('user.born_date', date);
                    }
                  }}
                  onDismiss={() => setOpen(false)}
                />
                <Button onPress={() => setOpen(true)} mode="contained">
                  Data de Nascimento
                </Button>
                <Text>{values.user.born_date.toDateString()}</Text>
                <Input
                  label="Celular 1"
                  value={values.user.phone_1}
                  onChangeText={handleChange('user.phone_1')}
                  onBlur={handleBlur('user.phone_1')}
                  keyboardType="phone-pad"
                />
                <Input
                  label="Celular 2"
                  value={values.user.phone_2}
                  onChangeText={handleChange('user.phone_2')}
                  onBlur={handleBlur('user.phone_2')}
                  keyboardType="phone-pad"
                />
                <Input
                  label="CEP"
                  value={values.address.cep}
                  onChangeText={handleChange('address.cep')}
                  onBlur={handleBlur('address.cep')}
                  keyboardType="numeric"
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
                  keyboardType="numeric"
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
                  keyboardType="numeric"
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
