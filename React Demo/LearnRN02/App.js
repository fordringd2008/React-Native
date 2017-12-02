/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View,
  TouchableHighlight,
} from 'react-native';

const instructions = Platform.select({
  ios: 'Press Cmd+R to reload,\n' +
    'Cmd+D or shake for dev menu',
  android: 'Double tap R on your keyboard to reload,\n' +
    'Shake or press menu button for dev menu',
});

export default class App extends Component<{}> {

  // 静态属性
  // static inputNum = 1;

  constructor(props){
    super(props);

    this.buttonPress = this.buttonPress.bind(this);

    this.state = {
      inputNum:0
    };
  }


  // 方法绑定的4中方式，


  buttonPress(){

    var inputNum = 1;

    // App.inputNum += 1;

    this.setState((state)=>{
      inputNum:state.inputNum+1
    }, ()=>{
      alert(this.state.inputNum);
    });


    // this.setState((oldState)=>{
    //   inputNum:(oldState.inputNum+1)
    // }, ()=>{
    //   alert(this.state.inputNum);
    // });
  }

  buttonPress2(){

    var inputNum = 1;

    this.setState((state)=>{
      inputNum:state.inputNum+1
    }, ()=>{
      alert(this.state.inputNum);
    });
  }

  buttonPress3(){

    var inputNum = 1;

    this.setState((state)=>{
      inputNum:state.inputNum+1
    }, ()=>{
      alert(this.state.inputNum);
    });

  }

  /*
  *  事件绑定
  *
  *  1， 直接写在组件中，不调用外部方法， 不需要使用bind函数
  *
  *  onPress = { (e)=> { alert(e); } }
  *
  *  2，回调函数使用箭头函数来定义, 不需要使用bind函数
  *
  *  updateNum = (e)=>{
  *   ...
  *  };
  *
  *  onPress = { this.updateNum } }
  *
  *
  *  3，正常的写法, 使用bind
  *
  *  updateNum(){
  *
  *  }
  *
  **  onPress = { this.updateNum } }
  *
  *   4，是第三种方法的简化写法，在构造函数中不bind, 在赋值的时候bind
  *   缺点是，每次render时，都会执行一次bind函数，第三种写法只会在构造时bind。
  *   这种会降低应用在渲染时的性能表现，在非render函数中可以使用这种方法
  *
  *   onPress = { this.updateNum.bind(this) } }
  *
  * */


  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>
          Welcome to React Native!
        </Text>
        <Text style={styles.instructions}>
          To get started, edit App.js
        </Text>
        <Text style={styles.instructions}>
          {instructions}
        </Text>
        <TouchableHighlight
          onPress={ (e)=>{  alert(e); } }
          style={{ width:200, height:30, backgroundColor:'yellow' }}
        >
          <Text style={{ alignItems:'center', textAlign:'center', justifyContent:'center' }} >这是一个测试按钮</Text>
        </TouchableHighlight>
        <Text style={ { width:230, height:30, backgroundColor:'red', color:'white', textAlign:'center'} }
              onPress={ this.buttonPress2 }
        >第2个测试按钮</Text>
        <Text style={ { width:230, height:30, backgroundColor:'red', color:'white', textAlign:'center'} }
              onPress={ ()=>{ this.buttonPress3.bind(this) } }
        >第3个测试按钮</Text>
      </View>
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
