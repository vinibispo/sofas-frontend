import React, {useState} from 'react';
import {
  View,
  SafeAreaView,
  StyleSheet,
  StatusBar,
  ScrollView,
} from 'react-native';
import {Searchbar} from 'react-native-paper';
import HomeCard from '../components/HomeCard';

export default function Home() {
  const [search, setSearch] = useState('');
  const onChangeSearch = (query: string) => setSearch(query);
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.view}>
        <View style={styles.search}>
          <Searchbar
            placeholder="Pesquisar"
            onChangeText={onChangeSearch}
            value={search}
            iconColor="#c32c4f"
          />
        </View>
        <ScrollView>
          <HomeCard />

          <HomeCard />

          <HomeCard />
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
    marginHorizontal: 20,
  },
  search: {
    marginVertical: 10,
  },
});
