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
  Easing
} from 'react-native';

import { UIManager } from 'react-native';


export default class App extends Component<{}> {
  // <FadeInView />
  // <View style={{ backgroundColor:'gray', flex:1 }} />

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


  /*
  * Animated, 可选基本组件， Text, Image, View(可以包裹任意子View)
  *
  *
  * */

  componentDidMount() {
    this.startAnimation();
  }

  startAnimation = ()=>{
    // this.state.fadeOutOpacity.setValue(1);
    // Animated.timing(
    //   this.state.fadeOutOpacity,
    //   {
    //     toValue:0.5,
    //     duration:1000,
    //     easing:Easing.linear
    //   }
    // ).start();

    //   toValue: number | AnimatedValue | {x: number, y: number} | AnimatedValueXY,
    //   easing?: (value: number) => number,
    //   duration?: number,
    //   delay?: number,

    /*
    *   Animated.decay   以一个初始速度开始并且逐渐减慢停止
    *   Animated.spring  基础的单次弹跳物理模型
    *   Animated.sequence
    *   Animated.timing
    *   Animated.timing
    *   Animated.timing
    *   Animated.timing
     */

    // this.state.translateValue.setValue({x:0, y:0});
    // Animated.decay(
    //   this.state.translateValue,
    //   {
    //     velocity:10,          // 初始速度，必填
    //     deceleration:0.8,     // 速度衰减比例，可填，默认0.997
    //   }
    // ).start();
    // velocity: number | {x: number, y: number},
    // deceleration?: number,

    // 平移
    // this.state.translateValue.setValue({x:0, y:0});
    // Animated.decay( // 以一个初始速度开始并且逐渐减慢停止。  S=vt-（at^2）/2   v=v - at
    //   this.state.translateValue,
    //   {
    //     velocity: 10, // 起始速度，必填参数。
    //     deceleration: 0.8, // 速度衰减比例，默认为0.997。
    //   }
    // ).start();

    // this.state.rotateValue.setValue(0);
    // Animated.decay(
    //   this.state.rotateValue,
    //   {
    //     velocity: 2, // 起始速度，必填参数。
    //     deceleration: 0.1, // 速度衰减比例，默认为0.997。
    //     useNativeDriver:true,   // 使用原声动画驱动
    //   },
    // ).start();

    // 图片首先缩小80%，2秒之后，旋转360度，之后沿着X轴与Y轴交叉方向向右下角移动一段距离，最后消失变成全透明

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

    // 简单的淡入淡出
    // {/*<FadeInView style={{width: 250, height: 50, backgroundColor: 'powderblue',*/}
    // {/*margin:50*/}
    // {/*}}>*/}
    // {/*<Text style={{fontSize: 28, textAlign: 'center', margin: 10}}>Fading in</Text>*/}
    // {/*</FadeInView>*/}

    // interpolate 差值函数的参数列表
    // inputRange: this._config.inputRange,
    //   // Only the `outputRange` can contain strings so we don't need to tranform `inputRange` here
    //   outputRange: this.__transformDataType(this._config.outputRange),
    //   extrapolateLeft:
    // this._config.extrapolateLeft || this._config.extrapolate || 'extend',
    //   extrapolateRight:
    // this._config.extrapolateRight || this._config.extrapolate || 'extend',
    //   type: 'interpolation',


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


// // 淡入淡出
// export class FadeInView extends Component {
//
//   constructor(props){
//     super(props);
//
//     this.state = {
//       fadeAnim : new Animated.Value(0),     // 初始值
//     };
//   }
//
//   componentDidMount() {
//     // Animated.timing( this.state.fadeAnim,  );
//     Animated.timing(
//       this.state.fadeAnim,
//       {
//         toValue:1
//       }
//     ).start();
//   }
//
//   render(){
//     return (
//       <Animated.View
//         style = { {
//           ...this.props.style,
//           opacity:this.state.fadeAnim     // 指定为变量
//         }}
//       >
//         {this.props.children}
//       </Animated.View>
//     );
//   }
//
// }