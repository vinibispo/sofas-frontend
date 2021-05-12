import React, {useCallback} from 'react';
import {Card, Button} from 'react-native-paper';
import {View, StyleSheet, Text} from 'react-native';
import {useNavigation} from '@react-navigation/native';

interface Plan {
  id: number;
  room: number;
  area: number;
  image: string;
  enterprise_id: number;
}
interface PlantCardProps {
  plan: Plan;
}
export default function PlantCard({plan}: PlantCardProps) {
  const navigator = useNavigation();
  const handleGoToSignUpPage = useCallback(() => {
    navigator.navigate('Cadastro', {
      enterprise_id: plan.enterprise_id,
      id: plan.id,
    });
  }, [navigator, plan]);
  return (
    <View style={styles.container}>
      <Card elevation={4}>
        <Text style={styles.title}>
          {plan.room} quartos - {plan.area} m {'{Unidades finais 1 e 2}'}
        </Text>
        <Card.Cover style={styles.cardImage} source={{uri: plan.image}} />

        <Card.Actions style={styles.cardActions}>
          <Button mode="contained" onPress={handleGoToSignUpPage}>
            Selecionar
          </Button>
        </Card.Actions>
      </Card>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    marginVertical: 20,
    flexGrow: 1,
  },
  cardImage: {
    marginVertical: 10,
    marginHorizontal: 10,
  },
  cardActions: {
    marginVertical: 20,
    alignItems: 'center',
    justifyContent: 'center',
  },
  cardParagraph: {
    maxWidth: 200,
  },
  title: {
    fontWeight: '700',
    fontSize: 18,
    marginVertical: 5,
    marginHorizontal: 5,
  },
});
