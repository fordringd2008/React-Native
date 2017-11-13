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
  View
} from 'react-native';

const instructions = Platform.select({
  ios: 'Press Cmd+R to reload,\n' +
    'Cmd+D or shake for dev menu',
  android: 'Double tap R on your keyboard to reload,\n' +
    'Shake or press menu button for dev menu',
});

// export default class App extends Component<{}> {
//   render() {
//     return (
//       <View style={styles.container}>
//         <Text style={styles.welcome}>
//           Welcome to React Native!
//         </Text>
//         <Text style={styles.instructions}>
//           To get started, edit App.js
//         </Text>
//         <Text style={styles.instructions}>
//           {instructions}
//         </Text>
//       </View>
//     );
//   }
// }

/*
  ES5 的写法
*/

export default class App extends Component<{}>{
  render(){
    return (
      <View style={styles.container}>
        // 样式表的拼接和 样式的优先级
        <View style={[styles.top, styles.border, { borderWidth:7 }
        ]}>
        </View>
        <View style={[styles.bottom, styles.border]}>
        </View>
      </View>
    );
  }
}


// var App = React.createClass({
//   render:function(){
//     return (
//       <div>222</div>
//       // <View style={StyleSheet.container}>
//       //   <View style={StyleSheet.top}>
//       //   </View>
//       //   <View style={StyleSheet.bottom}>
//       //   </View>
//       // </View>
//     );
//   }
// });


// var styles = StyleSheet.create({
//   // 外层的容器
//   container:{
//     marginTop:25,
//     marginLeft:30,
//     backgroundColor:"red",
//     width:300,
//     height:400,
//   },
//   // 上面的容器
//   top:{
//     backgroundColor:"red",
//     width:280,
//     height:250,
//
//   },
//   // 下面的容器
//   bottom:{
//
//   },
// });



/*
  定义样式：
  1，HTML5中以 ； 结尾
    React中以 ,  结尾
  2，HTML5中  key、value都不加引号
    React 中属于 JavaScript对象，key的名字不能出现 “-”，需要使用驼峰命名法，如果value是字符串，需要加 ”“
  3，HTML5中，value如果是数字，需要带单位，
    React 中不需要带单位

*/

//
// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     justifyContent: 'center',
//     alignItems: 'center',
//     backgroundColor: 'yellow',
//   },
//   welcome: {
//     fontSize: 20,
//     textAlign: 'center',
//     margin: 10,
//   },
//   instructions: {
//     textAlign: 'center',
//     color: '#333333',
//     marginBottom: 5,
//   },
// });

const styles = StyleSheet.create({
  // 容器
  container:{
    marginTop:25,
    marginLeft:30,
    backgroundColor:"red",
    width:300,
    height:400,
    margin:10,
  },
  // 头部
  top:{
    backgroundColor:"blue",
    width:280,
    height:250,
    margin:10,
  },
  // 底部
  bottom:{
    backgroundColor:"yellow",
    width:280,
    height:100,
    margin:10,
  },
  border:{
    borderWidth:3,
    borderColor:"black",
  },

});
