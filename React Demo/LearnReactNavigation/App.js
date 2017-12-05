/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 *
 *  StackNavigator 导航器练习
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
  TouchableHighlight
} from 'react-native';

import { StackNavigator } from 'react-navigation';
// 让安卓实现push动画
import CardStackStyleInterpolator from 'react-navigation/src/views/CardStack/CardStackStyleInterpolator';

import Ionicons from 'react-native-vector-icons/Ionicons';

// Icon

// 使用这个矢量图像库，需要引入库文件，命令 npm install react-native-vector-icons --save





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


    let navigationNumber = this.navigation.navigate.length;
    console.log(navigationNumber);


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
      navigationOptions: ( ({navigation}) => StackOptions(navigation, 'Home') ),
    // mode:'card',
    // headerMode:'screen',
    // transitionConfig:()=>({
    //   screenInterpolator:CardStackStyleInterpolator.forHorizontal,
    // }),
    // mode: 'card',  // 页面切换模式, 左右是card(相当于iOS中的push效果), 上下是modal(相当于iOS中的modal效果)
    // headerMode: 'screen', // 导航栏的显示模式, screen: 有渐变透明效果, float: 无透明效果, none: 隐藏导航栏
    onTransitionStart: ()=>{
      console.log('导航栏切换开始');
      },  // 回调
    onTransitionEnd: ()=>{
      console.log('导航栏切换结束');
    },  // 回调

    transitionConfig: () => ({
      transitionSpec: {
        duration: 300,
        easing: Easing.out(Easing.poly(4)),
        timing: Animated.timing,
      },
      screenInterpolator: sceneProps => {
        const { layout, position, scene } = sceneProps;
        const { index } = scene;

        const height = layout.initHeight;
        const translateY = position.interpolate({
          inputRange: [index - 1, index, index + 1],
          outputRange: [height, 0, 0],
        });

        const opacity = position.interpolate({
          inputRange: [index - 1, index - 0.99, index],
          outputRange: [0, 1, 1],
        });

        return { opacity, transform: [{ translateY }] };
      },
    }),



  },
  Details:{
    screen:DetailsScreen,
    navigationOptions: ( ({navigation}) => StackOptions(navigation, 'Details') )
  },
});

// 自定义导航配置
const StackOptions = (navigation, title)=>{
  console.log(navigation);
  let {state, goBack} = navigation;

  let params = state.params;

  // 判断是否隐藏或显示header
  const visible = params ? params.isVisible : false;
  let header;
  if (visible === true){
    header = null;
  }

  const gesturesEnabled = false;

  const headerStyle = { backgroundColor:'red' };
  var headerTitle = params ? params.title : null;

  headerTitle = headerTitle ? headerTitle : title;

  // const headerTitle = '11';
  const headerTitleStyle = { fontSize:20, color:'white', fontWeight:'500', };
  const headerBackTitle = false;
  const headerLeft = CustomNavBackButton('AAA', goBack);
  return { headerStyle,headerTitle,headerTitleStyle,headerBackTitle,headerLeft,header,gesturesEnabled };
};

// 自定义导航返回按钮
const CustomNavBackButton = (title, callBack)=>{
  {/*<View style={ { alignItems:'center', flexDirection:'row' } }>*/}
    {/*<Button*/}
      {/*title={title}*/}
      {/*isCustom={true}*/}
      {/*customView={*/}
        {/*<Ionicons*/}
          {/*name='ios-arrow-back'*/}
          {/*size={30}*/}
          {/*color='white'*/}
          {/*style={{marginLeft:13}}*/}
        {/*/>*/}
      {/*}*/}
      {/*onPress={()=>{callBack()}}*/}
    {/*/>*/}
    {/*<Text style={ { width:60, height:44 } } >{title}</Text>*/}
  {/*</View>*/}

  //
  <TouchableHighlight onPress={ ()=> { callBack() } }>
    <Image source={ { uri:'http://pic.58pic.com/58pic/15/28/02/40y58PICn4x_1024.jpg' } } />
    {/*<Ionicons*/}
      {/*name = 'ios-arrow-back'*/}
      {/*size = {30}*/}
      {/*color= 'white'*/}
      {/*style={ { marginLeft:13 } }*/}
    {/*/>*/}
    <Text style={ { width:60, height:44, marginLeft:10 } }>{title}</Text>
  </TouchableHighlight>

};




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
