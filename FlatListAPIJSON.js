import {assertOptionalCallExpression} from '@babel/types';
import React, {Component} from 'react';
import {
  SafeAreaView,
  View,
  FlatList,
  StyleSheet,
  Text,
  StatusBar,
  ActivityIndicator,
} from 'react-native';

class FlatListAPIJSON extends Component {
  constructor() {
    super();
    this.state = {
      data: [],
    };
  }
  componentDidMount() {
    this.APIcall();
  }
  async APIcall() {
    let Resp = await fetch('https://jsonplaceholder.typicode.com/todos');
    let RespJSON = await Resp.json();
    this.setState({data: RespJSON});
  }
  render() {
    return (
      <SafeAreaView style={styles.container}>
        <View style={{flex: 1, flexDirection: 'column'}}>
          <View style={styles.Header}>
            <Text style={styles.Headertxt}>API fetch DATA From URL</Text>
          </View>
          <FlatList
            style={styles.FlatList}
            data={this.state.data}
            renderItem={({item}) => (
              <View style={styles.Txt}>
                <Text>
                  {item.id}. {item.title.toUpperCase()}
                </Text>
              </View>
            )}
          />
        </View>
      </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#67baf6',
  },
  FlatList: {
    backgroundColor: 'gray',
  },
  Header: {
    backgroundColor: 'gray',
    height: 50,
    fontSize: 25,
    justifyContent: 'center',
    alignItems: 'center',
  },
  Headertxt: {
    fontSize: 25,
  },
  Txt: {
    backgroundColor: 'white',
    borderRadius: 1,
    marginBottom: 1,
    paddingLeft: 8,
    height: 50,
    justifyContent: 'center',
  },
});

export default FlatListAPIJSON;
