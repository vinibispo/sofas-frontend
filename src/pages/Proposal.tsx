import React, {useState} from 'react';
import {
  View,
  SafeAreaView,
  StyleSheet,
  StatusBar,
  ScrollView,
  Text,
} from 'react-native';
import {Searchbar, Title, Button} from 'react-native-paper';
import ProposalCard from '../components/ProposalCard';
import {theme} from '../utils/theme';
import {formatValue} from '../utils/formatValue';

export default function Proposal() {
  const [search, setSearch] = useState('');
  const onChangeSearch = (query: string) => setSearch(query);
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.view}>
        <View style={styles.center}>
          <Text style={styles.pinkText}>(Empreendimento) - (Planta)</Text>
          <Text style={styles.text}>Proposta</Text>
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
          <ProposalCard />

          <ProposalCard />

          <ProposalCard />
        </ScrollView>
      </View>

      <View style={styles.bottom}>
        <View style={styles.twoColumns}>
          <Text style={styles.total}>Total</Text>

          <Title>{formatValue(22 * 10 ** 3)}</Title>
        </View>
        <View style={{...styles.center, marginTop: 20}}>
          <Button mode="contained">Continuar</Button>
        </View>
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

  pinkText: {
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
