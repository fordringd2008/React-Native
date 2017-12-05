/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 *
 * LayoutAnimation 动画
 *
 *
 *
 */

import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View,
  Image,
  Button,
  LayoutAnimation,
  // Animated
} from 'react-native';


export default class App extends Component<{}> {
  constructor(){
    super();

    this.plus = true;

    this.state = {
      width:100,
      height:100,
    };
  }

  press = ()=>{
    // this.setState({
    //   height:this.state.height+10,
    //   width:this.state.width+10
    // });


    // declare var exports: (callback: any) => any;
    // var count = 0;
    // while (++count<50){
    //
    //   //  // 通过重绘组件来实现，容易卡顿
    //   // requestAnimationFrame(()=>{
    //   //
    //   //   this.setState({
    //   //     height:this.state.height+1,
    //   //     width:this.state.width+1
    //   //   });
    //   // });
    //
    //
    //   // ref 属性，详见 http://bbs.reactnative.cn/topic/608/%E5%AF%B9%E7%BB%84%E4%BB%B6%E7%9A%84%E5%BC%95%E7%94%A8-refs
    //
    //   // setNativeProps 直接修改组件底层特性，不会重绘组件
    //   this.refs.image.setNativeProps({
    //     style:{
    //       width:this.state.width++,
    //       height:this.state.height++,
    //     }
    //   });
    //
    // }


    // LayoutAnimation

  /*

    type Anim = {
      duration?: number,                    持续时间
      delay?: number,                       延迟时间
      springDamping?: number,               弹跳动画阻尼系数
      initialVelocity?: number,             初始速度
      type?: $Enum<typeof TypesEnum>,       类型
      property?: $Enum<typeof PropertiesEnum>,  属性
    };

    const TypesEnum = {
      spring: true,           弹跳
      linear: true,           线性
      easeInEaseOut: true,    缓入缓出
      easeIn: true,           缓入
      easeOut: true,          缓出
      keyboard: true,
    };

    const PropertiesEnum = {
      opacity: true,      透明度
      scaleXY: true,      缩放
    };



    type Config = {
      duration: number,
      create?: Anim,
      update?: Anim,
      delete?: Anim,
    };
  */

    // // 完整版
    // // 修改动画时间，延迟，阻尼放在update里面
    // LayoutAnimation.configureNext({
    //   duration:700,
    //   create:{
    //     type:LayoutAnimation.Types.spring,
    //     property:LayoutAnimation.Properties.scaleXY
    //   },
    //
    //   update:{
    //     duration:2000,
    //     delay:1000,
    //     springDamping:50,
    //     type:LayoutAnimation.Types.spring,
    //   },
    // });

    // // 简洁版
    // LayoutAnimation.configureNext(LayoutAnimation.create(
    //   700,
    //   LayoutAnimation.Types.spring,
    //   LayoutAnimation.Types.scaleXY
    // ), ()=>{
    //   alert('动画结束');
    // });


    // 巨简洁版， 线性动画， 默认为0.5秒
    LayoutAnimation.configureNext(LayoutAnimation.Presets.linear);


    this.setState({
      width:this.state.width +  (this.plus ? 50:-50),
      height:this.state.height +  (this.plus ? 50:-50),
    }, ()=>{
      this.plus = !this.plus;
    });

  }

  render() {
    return (
      <View style={ { flex:1, justifyContent:'center', alignItems:'center'  } } >
        <Image source={ require('./img/tab_profile.png') }
               ref='image'
               style={ { height:this.state.height, width:this.state.width,
                 borderWidth:1, borderColor:'red'
               } }
        />
        <Button title='Press' onPress = { this.press } />
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