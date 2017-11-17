/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component, PropTypes } from 'react';
import {
  StyleSheet,
  Text,
  View,
  TabBarIOS,
} from 'react-native';



var MovieList = require('./movieList');
var MyScrollView = require('./myScrollView');

export default class App extends Component<{}> {

  constructor(props, context) {
    super(props, context);
    this._tabPress = this._tabPress.bind(this);
    this.state = {
      tab: "ScrollView"
    };
  }

  // componentDidMount() {
  //   this.setState({
  //     tab: "ScrollView"
  //   })
  // }

  _tabPress(title){

    this.setState({
      tab: title
    }, () => console.log(this.state))

  }

  // onPress={ this._tabPress }
  //
  // selected ={ this.state.tab === 'ScrollView' }
  //
  // selected={ this.state.tab === 'MovieList' }

  render() {
    return (
      <TabBarIOS style={{ flex:1 }}>
        <TabBarIOS.Item
          title='ScrollView'
          systemIcon="downloads"
          selected ={ this.state.tab === 'ScrollView' }
          onPress={ this._tabPress.bind(this, 'ScrollView') }
        >
          <MyScrollView></MyScrollView>
        </TabBarIOS.Item>
        <TabBarIOS.Item
          title='MovieList'
          systemIcon="favorites"
          selected={ this.state.tab === 'MovieList' }
          onPress={ this._tabPress.bind(this, 'MovieList') }
        >
          <MovieList></MovieList>
        </TabBarIOS.Item>
      </TabBarIOS>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});
