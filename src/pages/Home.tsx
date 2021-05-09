import React, {useState} from 'react';
import {View} from 'react-native';
import {
  Searchbar,
  Card,
  Title,
  Paragraph,
  Button,
  Avatar,
} from 'react-native-paper';

const LeftContent = props => <Avatar.Icon {...props} icon="folder" />;
export default function Home() {
  const [search, setSearch] = useState('');
  const onChangeSearch = (query: string) => setSearch(query);
  return (
    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      <Searchbar
        placeholder="Pesquisar"
        onChangeText={onChangeSearch}
        value={search}
        iconColor="#c32c4f"
      />
      <Card>
        <Card.Title
          title="Card Title"
          subtitle="Card Subtitle"
          left={LeftContent}
        />
        <Card.Content>
          <Title>Card title</Title>
          <Paragraph>Card content</Paragraph>
        </Card.Content>
        <Card.Cover source={{uri: 'https://picsum.photos/700'}} />
        <Card.Actions>
          <Button>Cancel</Button>
          <Button>Ok</Button>
        </Card.Actions>
      </Card>
    </View>
  );
}
