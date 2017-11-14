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





// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     justifyContent: 'center',
//     alignItems: 'center',
//     backgroundColor: '#F5FCFF',
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




export default class App extends Component<{}>{
  render(){
    return (
      <View style={styles.container}>
        <View style={styles.child1}>
        </View>
        <View style={styles.child2}>
        </View>
      </View>
    );
  }
}


// const styles = StyleSheet.create({
//   container:{
//     margin          :30,
//     backgroundColor :"yellow",
//     width           :300,
//     height          :500,
//     // 默认的主轴是 “column”, 列， 即只有一列
//     flexDirection   :"row",
//     // 主轴方向
//     justifyContent  :"center",
//     // 交叉轴方向
//     alignItems      :"center",
//   },
//   child1:{
//     width:100,
//     height:100,
//     backgroundColor:"blue",
//   },
//   child2:{
//     width:100,
//     height:100,
//     backgroundColor:"red",
//   },
// });

/*
  flex

  可以给组件指定数字，flex的值是数字，flex:1 表示组件可以充满父父组件所有的剩余空间
  如果同时存在多个并列的子组件，flex:1 均分

  如果这些并列的 flex 不一样， 谁的值更大，谁占剩余空间的比例大，
  即占剩余空间的比等于并列组件间 flex值的比

  即 1 ：2

*/

const styles = StyleSheet.create({

  // flex: 数字比例
  // container:{
  //   // 父组件充满了整个窗口
  //   flex            :1,
  //   // margin          :30,
  //   marginTop       :30,
  //   backgroundColor :"yellow",
  // },
  // child1:{
  //   // 我希望充满父组件的剩余空间
  //   flex:1,
  //   backgroundColor:"blue",
  // },
  // child2:{
  //   // 我也希望充满父组件的剩余空间
  //   flex:2,
  //   backgroundColor:"red",
  // },






});
