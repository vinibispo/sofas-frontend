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
import PlantCard from '../components/PlantCard';
import {api} from '../services/api';
import {useRoute, RouteProp} from '@react-navigation/native';

type PlantScreenRouteProp = RouteProp<{Plant: {id: number}}, 'Plant'>;

interface Plan {
  id: number;
  room: number;
  area: number;
  image: string;
  enterprise_id: number;
}
export default function Plant() {
  const {
    params: {id: enterpriseId},
  } = useRoute<PlantScreenRouteProp>();
  const [search, setSearch] = useState('');
  const [plans, setPlans] = useState<Plan[]>([]);
  const onChangeSearch = (query: string) => setSearch(query);
  useEffect(() => {
    api
      .get(`enterprises/${enterpriseId}/plans.json`, {
        params: {
          q: search,
        },
      })
      .then(res => setPlans(res.data));
  }, [search, enterpriseId]);
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.view}>
        <View style={styles.center}>
          <Text style={styles.text}>Selecione a planta da sua unidade</Text>
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
          {plans.map(plan => (
            <PlantCard key={plan.id} plan={plan} />
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
});
