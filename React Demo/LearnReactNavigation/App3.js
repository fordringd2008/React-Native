/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 *
 * StackNavigator
 * TabNavigator 混合练习
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

// TabBar
import { StackNavigator, TabNavigator } from 'react-navigation';

// Icon
// import { Ionicons } from 'react-native-vector-icons/Ionicons';

// 使用这个矢量图像库，需要引入库文件，命令 npm install react-native-vector-icons --save
import Ionicons from 'react-native-vector-icons/Ionicons';



// 第一个视图的首页
export class OneFirstScreen extends Component<{}>{
  constructor(props){
    super(props);
    this.navigation = this.props.navigation;

  }


  // 第一个视图，从首页跳转到详情的事件
  oneHomeToDetails = ()=>{

    // alert(this.navigation);

    console.log(this.navigation);

    this.navigation.navigate('OneSecondScreen', { text: '首页传进来的参数'  } );
  }

  render(){
    return (
      <View style={{ flex:1, backgroundColor:'red', alignItems:'center', justifyContent:'center'}}>
        <Button onPress={ this.oneHomeToDetails }
          title='Go To OneDetails'
        />
      </View>
    );
  }
}


{/*<View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>*/}
  {/*<Text>Home Screen</Text>*/}
  {/*<Button title='Go to Details'*/}
          {/*onPress={ ()=> { navigation.navigate('Details', { navigation : navigation }); } }*/}
  {/*></Button>*/}
{/*</View>*/}

// 第一个视图的第二页
export class OneSecondScreen extends Component<{}>{

  constructor(props){
    super(props);

    this.text = this.props.text;

    console.log('OneSecondScreen' + this.text);
  }

  render(){
    return (
      <View style={{ flex:1, backgroundColor:'purple' }}>
        <Text> { this.text } </Text>
      </View>
    );
  }
}



// 第二个视图的首页
export class TwoFirstScreen extends Component<{}>{
  render(){
    return (
      <View style={{ flex:1, backgroundColor:'gray' }}></View>
    );
  }
}

// 第二个视图的第二页
export class TwoSecondScreen extends Component<{}>{
  render(){
    return (
      <View style={{ flex:1, backgroundColor:'yellow' }}></View>
    );
  }
}

// One 的导航器
const OneNavigator = StackNavigator({
  OneFirstScreen:{
    screen:OneFirstScreen,
    navigationOptions: ( ({navigation}) => StackOptions(navigation, 'OneHome') )
  },
  OneSecondScreen:{
    screen:OneSecondScreen,
    navigationOptions: ( ({navigation}) => StackOptions(navigation, 'OneDetail') )
  }
});

// Two 的导航器
const TwoNavigator = StackNavigator({
  TwoFirstScreen:{
    screen:TwoFirstScreen,
    navigationOptions: ( ({navigation}) => StackOptions(navigation, 'TwoHome') )
  },
  TwoSecondScreen:{
    screen:TwoSecondScreen,
    navigationOptions: ( ({navigation}) => StackOptions(navigation, 'TwoDetails') )
  }
});


// 主导航器
const RootTabNavigator = TabNavigator({
  OneS : {
    screen: OneNavigator,
    navigationOptions: {
      tabBarLabel:'One',
      tabBarIcon: ()=>(
        <Image
          source = { { uri: 'http://pic.58pic.com/58pic/15/28/02/40y58PICn4x_1024.jpg' }}
          resizeMode='contain'
          style={ {  width:30, height:30 } }
        />
      ),
      tabBarPosition: 'bottom',
      swipeEnabled:false,
      animationEnabled:false,
      tabBarOptions: {
        style: {
          height:49
        },
        activeBackgroundColor:'white',
        // activeTintColor:'#4ECBFC',
        activeTintColor:'red',
        inactiveBackgroundColor:'white',
        inactiveTintColor:'#aaa',
        showLabel:false,
      }
    }
  },
  TwoS : {
    screen: TwoNavigator,
    navigationOptions : ( () => TabOptions('Two!', null, null, 'TwoFirst'))
  },
});

const tabBarImageStyle = { width:30, height:30 };

// 之定义tabBar样式
const TabOptions = (tabBarTitle, normalImage, selectedImage, navTitle)=>{
  const tabBarLabel = tabBarTitle;
  const tabBarIcon = (({ tintColor, focused })=>{
    return (
      focused ?
        <Image source={ { uri: 'http://pic.58pic.com/58pic/15/28/02/40y58PICn4x_1024.jpg' } }
               resizeMode='contain'
               style={ tabBarImageStyle }
        />:
        <Image source={ { uri: 'http://img9.3lian.com/c1/vector/10/01/043.jpg' } }
               resizeMode='contain'
               style={ tabBarImageStyle }
        />
    );
  });
  const headerTitle = navTitle;
  const headerTitleStyle = { fontSize:20, color:'white' };
  const headerStyle = { backgroundColor:'black' };
  return { tabBarLabel,tabBarIcon,headerTitle,headerTitleStyle,headerStyle };
}

// 自定义导航配置
const StackOptions = (navigation, title)=>{
  let {state, goBack} = navigation;

  let params = state.params;

  // 判断是否隐藏或显示header
  const visible = params ? params.isVisible : false;
  let header;
  if (visible === true){
    header = null;
  }

  const headerStyle = { backgroundColor:'blue' };
  var headerTitle = params ? params.title : null;

  headerTitle = headerTitle ? headerTitle : title;

  // const headerTitle = '11';
  const headerTitleStyle = { fontSize:20, color:'white', fontWeight:'500', };
  const headerBackTitle = false;
  const headerLeft = CustomNavBackButton('AAA', goBack);
  return { headerStyle,headerTitle,headerTitleStyle,headerBackTitle,headerLeft,header };
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
      <RootTabNavigator/>
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
