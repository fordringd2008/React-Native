/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, { Component } from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
  TouchableOpacity,
  Alert,
  Button,
  TouchableWithoutFeedbackComponent,
  TouchableWithoutFeedback,
  Image,
} from 'react-native';

import {
  Colors,
} from 'react-native/Libraries/NewAppScreen';
import symbolicateStackTrace from 'react-native/Libraries/Core/Devtools/symbolicateStackTrace';


// export default class App extends Component {
//   _onPressButton() {
//     Alert.alert('You tapped the button!');
//   }
//   render() {
//     return (
//       <View style={[styles.container, styles.flex]}>
//         {/* <Button
//           onPress={this._onPressButton}
//           title="Click me"
//           styles={styles.text}
//         /> */}
//         <TouchableWithoutFeedback
//           onPress={this._onPressButton}
//           style={styles.container}>
//           <Text>搜索</Text>
//         </TouchableWithoutFeedback>
//       </View>
//     );
//   }
// }

export default class App extends Component {
  _onPressButton() {
    Alert.alert('You tapped the button!');
  }
  render() {
    return (
      <ScrollView style={{flex:1}}>
        <Text style={{fontSize: 96}}>Scroll view</Text>
        <Image
          source={{
            uri:
              'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1584030596588&di=4339c3e1783c3d6379d7fb8e903a4b71&imgtype=0&src=http%3A%2F%2Fcdn.qiancipai.com%2F190305170514872174.jpg',
            width: 164,
            height: 164,
          }}
        />
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  text: {
    width: 45,
    height: 50,
    marginLeft: 55,
    marginTop: 55,
    flex: 1,
    backgroundColor: 'red',
  },
  container: {
    flexDirection: 'row',
    height: 45,
    marginTop: 88,
  },
  flex: {
    flex: 1,
  },
  input: {
    height: 45,
    borderWidth: 1,
    marginLeft: 5,
    paddingLeft: 5,
    marginRight: 5,
    borderColor: '#CCCCCC',
    borderRadius: 4,
  },
  btn: {
    width: 55,
    marginLeft: 5,
    marginRight: 5,
    borderColor: '#234CCC',
    justifyContent: 'center',
    backgroundColor: 'red',
    alignItems: 'center',
    height: 45,
  },
  search: {
    color: '#FFF',
    fontSize: 15,
    fontWeight: 'bold',
  },
});

// export default App;
