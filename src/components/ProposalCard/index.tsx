import React, {useCallback} from 'react';
import {Card, Paragraph, Button, Title} from 'react-native-paper';
import {View, StyleSheet, Text, Image} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {formatValue} from '../../utils/formatValue';
export default function ProposalCard() {
  const navigator = useNavigation();
  const handleGoToPlantPage = useCallback(() => {
    navigator.navigate('Plant', {
      id: '1',
    });
  }, [navigator]);
  return (
    <View style={styles.container}>
      <Card elevation={4}>
        <View style={styles.twoColumns}>
          <View style={styles.cardImage}>
            <Image
              style={styles.image}
              source={{uri: 'https://picsum.photos/700'}}
            />
          </View>
          <View>
            <Text style={styles.title}>Quarto 1 - Ouro</Text>

            <Card.Content>
              <Paragraph style={styles.cardParagraph}>
                - Guarda roupas com 2 portas;
              </Paragraph>

              <Paragraph style={styles.cardParagraph}>
                - Cama de solteiro padrão
              </Paragraph>

              <Paragraph style={styles.cardParagraph}>
                - Guarda roupas com 2 portas;
              </Paragraph>
              <Paragraph style={styles.cardParagraph}>
                - Escrivaninha;
              </Paragraph>

              <Paragraph style={styles.cardParagraph}>
                - Prazo: 2 meses;
              </Paragraph>
            </Card.Content>
          </View>
        </View>
        <Card.Actions style={styles.cardActions}>
          <Button mode="outlined">Ouro</Button>
          <Button>Alterar</Button>
          <Title>{formatValue(8000)}</Title>
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
  cardActions: {
    marginVertical: 20,
    alignItems: 'center',
    justifyContent: 'space-between',
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
  twoColumns: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  cardImage: {
    alignItems: 'center',
    justifyContent: 'center',
    flex: 1,
  },
  image: {
    width: 120,
    height: 100,
  },
});
