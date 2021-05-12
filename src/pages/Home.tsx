import React, {useState, useEffect} from 'react';
import {
  View,
  SafeAreaView,
  StyleSheet,
  StatusBar,
  ScrollView,
  Text,
} from 'react-native';
import {Searchbar} from 'react-native-paper';
import HomeCard from '../components/HomeCard';
import {api} from '../services/api';

interface Enterprise {
  id: number;
  nome: string;
  endereco: string;
  image: string;
}
export default function Home() {
  const [search, setSearch] = useState('');
  const [enterprises, setEnterprises] = useState<Enterprise[]>([]);
  const onChangeSearch = (query: string) => setSearch(query);
  useEffect(() => {
    api
      .get('/enterprises.json', {
        params: {
          q: search,
        },
      })
      .then(res => setEnterprises(res.data));
  }, [search]);
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.view}>
        <View style={styles.center}>
          <Text style={styles.text}>Selecione o seu empreendimento</Text>
        </View>
        <View style={styles.search}>
          <Searchbar
            placeholder="Pesquisar"
            onChangeText={onChangeSearch}
            value={search}
            iconColor="#c32c4f"
          />
        </View>
        <ScrollView>
          {enterprises.map(enterprise => (
            <HomeCard enterprise={enterprise} key={enterprise.id} />
          ))}
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
    marginHorizontal: 20,
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
