import React, {useState} from 'react';
import {
  View,
  SafeAreaView,
  StyleSheet,
  StatusBar,
  ScrollView,
  Text,
} from 'react-native';
import {Searchbar} from 'react-native-paper';
import PlantCard from '../components/PlantCard';

export default function Plant() {
  const [search, setSearch] = useState('');
  const onChangeSearch = (query: string) => setSearch(query);
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
          <PlantCard />

          <PlantCard />

          <PlantCard />
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
});
