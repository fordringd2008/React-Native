/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 *
 *
 *
 */

import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  Button,
  View,
  Image,
  TouchableOpacity
} from 'react-native';

import { StackNavigator } from 'react-navigation';

const instructions = Platform.select({
  ios: 'Press Cmd+R to reload,\n' +
    'Cmd+D or shake for dev menu',
  android: 'Double tap R on your keyboard to reload,\n' +
    'Shake or press menu button for dev menu',
});

// 第一个页面
const HomeScreen = ({ navigation} ) => {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Home Screen</Text>
      <Button title='Go to Details'
              onPress={ ()=> { navigation.navigate('Details', { navigation : navigation }); } }
      ></Button>
    </View>
  );
};

// const DetailsScreen = ({ navigation }) => {
//   return (
//     <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
//       <Text onPress={ ()=> navigation.navigate('Details', { text:'标题' } )  }> { this.props.text ? this.props.text : 'Details Screen' } </Text>
//     </View>
//   );
// };

// 下一个页面
export class DetailsScreen extends Component<{}>{

  constructor(props) {
    super(props);

    // 取上层传递的值是用 this.props.navigation.state.params.XXX

    // 赋值给属性
    this.navigation = this.props.navigation;
    this.text = this.navigation.state.params.text;
  }

  render(){

    var text = this.text;

    console.log(text);

    // 传递的值
    var params = {
      text:'标题',
      navigation:this.props.navigation
    };

    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text onPress={ ()=> this.props.navigation.navigate('Details',  params)  }> { text ? text : 'Details Screen' } </Text>
      </View>
    );
  }
}


// 主导航器
const RootNavitor = StackNavigator({
  Home:{
    screen:HomeScreen,
    navigationOptions:{
      headerTitle:'Home'
    }
  },
  Details:{
    screen:DetailsScreen,
    navigationOptions: ( ({navigation}) => StackOptions({navigation}) )
    // navigationOptions: ( ({navigation}) => {(<StackOptions navigation = navigation  />)} )

    // navigationOptions:{
    //   headerTitle:'Details',
    // }
  },
});



export default class App2 extends Component<{}> {
  render() {
    return (
      <RootNavitor/>
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
