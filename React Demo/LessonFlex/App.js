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
        <View style={styles.child3}>
        </View>
        <View style={styles.child1}>
        </View>
        <View style={styles.child2}>
        </View>
        <View style={styles.child3}>
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

  // const styles = StyleSheet.create({
  //   // flex: 1
  //   container:{
  //     // 父组件充满了整个窗口
  //     flex            :1,
  //     // margin          :30,
  //     marginTop       :30,
  //     backgroundColor :"yellow",
  //   },
  //   child1:{
  //     // 我希望充满父组件的剩余空间
  //     flex:1,
  //     backgroundColor:"blue",
  //   },
  //   child2:{
  //     // 我也希望充满父组件的剩余空间
  //     flex:2,
  //     backgroundColor:"red",
  //   },
  // });



const styles = StyleSheet.create({

  container:{
    margin:40,
    backgroundColor:"yellow",
    width:300,
    height:400,
    // flexDirection:"row",

    // 注意这里的值，在""中，仍然保持了 -
    /*
    flexDirection: 值有， row, column, row-reverse, column-reverse
    */
    flexDirection:"row",

    /*
      内容布局方式
      justifyContent:值有， flex-start, flex-end, center, space-between, space-around

      space-between, 之间的间距相等，如果子组件有margin，会再加上margin

      flex-start：
      弹性项目向行头紧挨着填充。这个是默认值。第一个弹性项的main-start外边距边线被放置在该行的main-start边线，而后续弹性项依次平齐摆放
      flex-end：
      弹性项目向行尾紧挨着填充。第一个弹性项的main-end外边距边线被放置在该行的main-end边线，而后续弹性项依次平齐摆放。
      center：
      弹性项目居中紧挨着填充。（如果剩余的自由空间是负的，则弹性项目将在两个方向上同时溢出）
      space-between：
      弹性项目平均分布在该行上。如果剩余空间为负或者只有一个弹性项，则该值等同于flex-start。
      否则，第1个弹性项的外边距和行的main-start边线对齐，而最后1个弹性项的外边距和行的main-end边线对齐，
      然后剩余的弹性项分布在该行上，相邻项目的间隔相等
      space-around：
      弹性项目平均分布在该行上，两边留有一半的间隔空间。如果剩余空间为负或者只有一个弹性项，则该值等同于center。
      否则，弹性项目沿该行分布，且彼此间隔相等（比如是20px），同时首尾两边和弹性容器之间留有一半的间隔（1/2*20px=10px）

    */

    justifyContent:"flex-start",

    /*
    flex-start：
    弹性盒子元素的侧轴（纵轴）起始位置的边界紧靠住该行的侧轴起始边界。
    flex-end：
    弹性盒子元素的侧轴（纵轴）起始位置的边界紧靠住该行的侧轴结束边界。
    center：
    弹性盒子元素在该行的侧轴（纵轴）上居中放置。（如果该行的尺寸小于弹性盒子元素的尺寸，则会向两个方向溢出相同的长度）。
    baseline：
    如弹性盒子元素的行内轴与侧轴为同一条，则该值与'flex-start'等效。其它情况下，该值将参与基线对齐。
    stretch：
    如果指定侧轴大小的属性值为'auto'，则其值会使项目的边距盒的尺寸尽可能接近所在行的尺寸，但同时会遵照'min/max-width/height'属性的限制
    */

    // alignItems:"stretch",

    /*
    nowrap -
    默认， 弹性容器为单行。该情况下弹性子项可能会溢出容器。
    wrap -
    弹性容器为多行。该情况下弹性子项溢出的部分会被放置到新行，子项内部会发生断行

    注意： 只支持 wrap, nowrap,  以下几个不支持

    wrap-reverse -
    反转 wrap 排列。

    initial

    inherit
    */

    flexWrap:"wrap",

    /*
    alignContent
    用于修改 flex-wrap 属性的行为。类似于 align-items, 但它不是设置弹性子元素的对齐，而是设置各个行的对齐。

    stretch - 默认。各行将会伸展以占用剩余的空间。
    flex-start - 各行向弹性盒容器的起始位置堆叠。
    flex-end - 各行向弹性盒容器的结束位置堆叠。
    center -各行向弹性盒容器的中间位置堆叠。
    space-between -各行在弹性盒容器中平均分布。
    space-around - 各行在弹性盒容器中平均分布，两端保留子元素与子元素之间间距大小的一半。

    */

    alignContent:"space-around",





    // display:"flex",
    // display:"-webkit-flex",
    // flex:"",
  },
  child1:{
    margin:10,
    backgroundColor:"blue",
    width:50,
    height:50,
  },
  child2:{
    margin:20,
    backgroundColor:"red",
    width:50,
    height:50,
  },
  child3:{
    margin:30,
    backgroundColor:"gray",
    width:50,
    height:50,
  },

});
