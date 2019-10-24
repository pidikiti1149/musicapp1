import React, {
  useState,
  useEffect,
} from 'react';
import {
  View,
  Text,
  StyleSheet,
  FlatList,
} from 'react-native';

const ArtistsScreen = (props) => {
  
  const [ dataLoaded, isLoaded ] = useState(false);
  const [ artists, setArtists ] = useState([]);
  
  useEffect(() => {
    if (!dataLoaded) {
      fetch('https://thawing-hollows-21222.herokuapp.com/artists')
        .then(res => res.json())
        .then(({ data }) => {
          setArtists(data);
          isLoaded(true);
        });
    }
  });

  const keyExtractor = (item) => {
    return `${ item.id }`;
  }

  return (
    <FlatList
      data={ artists }
      keyExtractor={ keyExtractor }
      renderItem={({ item }) => {
        return (
          <View style={styles.container}> 
          <Text>Name</Text>
            <Text>{ item.name  }</Text>
          </View>
        );
      }}
    />
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 10,
    backgroundColor: '#000',
    textDecorationColor:'#ffc0cb',
    alignItems: 'center',
    justifyContent: 'center',
    textAlign: "center",
    marginRight:3,
    marginBottom:6,
    },
});
