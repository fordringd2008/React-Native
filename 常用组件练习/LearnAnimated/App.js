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
  Animated
} from 'react-native';


export default class App extends Component<{}> {
  // <FadeInView />
  // <View style={{ backgroundColor:'gray', flex:1 }} />
  render() {
    return (
      <FadeInView style={{width: 250, height: 50, backgroundColor: 'powderblue',
        justifyContent:'center',
        alignItems:'center',
      }}>
        <Text style={{fontSize: 28, textAlign: 'center', margin: 10}}>Fading in</Text>
      </FadeInView>
    );
  }
}


// 淡入淡出
export class FadeInView extends Component {

  constructor(props){
    super(props);

    this.state = {
      fadeAnim : new Animated.Value(0),     // 初始值
    };
  }

  componentDidMount() {
    // Animated.timing( this.state.fadeAnim,  );
    Animated.timing(
      this.state.fadeAnim,
      {
        toValue:1
      }
    ).start();
  }

  render(){
    return (
      <Animated.View
        style = { {
          ...this.props.style,
          opacity:this.state.fadeAnim     // 指定为变量
        }}
      >
        {this.props.children}
      </Animated.View>
    );
  }

}