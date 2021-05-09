import React from 'react';
import {Card, Button} from 'react-native-paper';
import {View, StyleSheet, Text} from 'react-native';
export default function PlantCard() {
  return (
    <View style={styles.container}>
      <Card elevation={4}>
        <Text style={styles.title}>
          3 quartos - 111 m {'{Unidades finais 1 e 2}'}
        </Text>
        <Card.Cover
          style={styles.cardImage}
          source={{uri: 'https://picsum.photos/700'}}
        />

        <Card.Actions style={styles.cardActions}>
          <Button mode="contained">Selecionar</Button>
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
