import React from 'react';
import { StyleSheet, Text, View, ActivityIndicator } from 'react-native';
import {Button} from 'react-native-elements';

export default class App extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      isLoading: true,
      dataSource: null,
    }
  }
  componentDidMount () {

    return fetch('https://thawing-hollows-21222.herokuapp.com/artists.json')
      .then( (response) => response.json() )
      .then( (responseJson) => {
        this.setState({
          isLoading: false,
          dataSource: responseJson.artists,
        })
      })

      .catch((error) => {
        console.log(error)
      });
    }

render() {
  if(this.state.isLoading) {
    return (
      <View style={styles.container}>
        <ActivityIndicator />
      </View>
    )
  } else {
    return (
      <View style={styles.container}>
        <Text>Content Loaded</Text>
      </View>
    )

  }
  return (
    <View style={styles.container}>
      <Text>Welcome to MUSICFEST  app!</Text>
    </View>
  );
}
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
