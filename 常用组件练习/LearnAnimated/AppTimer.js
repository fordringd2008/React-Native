/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 *
 * Animated 动画练习
 *
 */

import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View,
  Image,
  Animated,
  Easing,
  InteractionManager
} from 'react-native';

import { UIManager } from 'react-native';



export default class App extends Component<{}> {
  constructor(){
    super();

    if (Platform.OS === 'android'){
      // android 动画检查
      //加上这句就有 效果了
      UIManager.setLayoutAnimationEnabledExperimental && UIManager.setLayoutAnimationEnabledExperimental(true);
    }

    this.state = {
      fadeOutOpacity : new Animated.Value(1),
      translateValue : new Animated.ValueXY({x:0, y:0}),  // 二维坐标
      rotateValue    : new Animated.Value(1),
      bounceValue    : new Animated.Value(1),
    };

    this.state.fadeOutOpacity.addListener((obj)=>{
      console.log('fadeOutOpacity=>' + obj.value);
    });
  }


  componentDidMount() {

    // 执行耗时的同步任务，比如动画
    InteractionManager.runAfterInteractions(()=>{
      this.startAnimation();
    });

    this.timer1 = setTimeout(()=>{
      console.log('setTimeout 1');
      alert("111");
    }, 1300);

    this.timer2 = setInterval(
      ()=>{
        console.log('setInterval 2')},
      1500
    )
  }

  componentWillUnmount() {

    this.timer1 &&  clearTimeout(this.timer1);
    this.timer2 && clearInterval(this.timer2);
  }

  startAnimation = ()=>{

    this.state.bounceValue.setValue(1.5); // 设置一个较大的初始值
    this.state.rotateValue.setValue(0);
    this.state.translateValue.setValue({x: 0,y: 0});
    this.state.fadeOutOpacity.setValue(1);

    // 动画组
    /*
    *   sequence 组合动画，
    *   parallel 同时执行
    *   stagger  错峰 其实就是插入了delay的parrllel
    *   delay    延迟
    * */
    Animated.parallel([
      Animated.spring(
        this.state.bounceValue, {
          toValue:0.8,
          friction:1,     // 摩擦力，默认为7
          tension:4,     // 张力，默认 40
        }
      ),
      // Animated.delay(1000),
      Animated.timing(
        this.state.rotateValue,
        {
          toValue:1,
          duration:800,
          easing:Easing.out(Easing.quad), // 一个用于定义曲线的渐变函数
          delay:0,
        }
      ),
      Animated.decay(
        this.state.translateValue,
        {
          velocity:10,
          deceleration:0.8
        }
      ),
    ]).start(()=> { console.log('动画结束') } );    // 结束的回调，这里是不断的调用自己

  }

  render() {
    return (
      <View style={{flex:1, alignItems:'center', justifyContent:'center'}} >
        <Animated.View
          style = {{flex: 1,alignItems: 'center',justifyContent: 'center',
            borderColor:'red', borderWidth:5,
            opacity: this.state.fadeOutOpacity,

            transform:[
              { translateX:this.state.translateValue.x },
              { translateY:this.state.translateValue.y },
              { rotate: this.state.rotateValue.interpolate({
                inputRange:[0, 1],
                outputRange:[ '0deg', '180deg' ],
              }) },
              { scale:this.state.bounceValue }
            ],
          }} >
          <Image
            source = { require('./img/tab_profile.png') }
            // source = {{uri: 'http://192.168.0.28/%E6%B5%8B%E8%AF%95%E5%9B%BE%E7%89%87/XMKOH81.jpg'}}
            style = {{width: 400,height: 400, borderColor:'green', borderWidth:5 }}/>
        </Animated.View>
        <Text >11111</Text>
      </View>

    );
  }
}