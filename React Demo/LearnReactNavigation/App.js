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
  Button,
  View,
  Image,
  TouchableOpacity
} from 'react-native';

import { StackNavigator } from 'react-navigation';

const instructions = Platform.select({
  ios: 'Press Cmd+R to reload,\n' +
    'Cmd+D or shake for dev menu',
  android: 'Double tap R on your keyboard to reload,\n' +
    'Shake or press menu button for dev menu',
});

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
    navigationOptions:{
      headerTitle:'Home'
    }
  },
  Details:{
    screen:DetailsScreen,
    navigationOptions: ( ({navigation}) => StackOptions({navigation}) )
    // navigationOptions: ( ({navigation}) => {(<StackOptions navigation = navigation  />)} )

    // navigationOptions:{
    //   headerTitle:'Details',
    // }
  },
});

// 自定义导航条配置
const StackOptions = ({navigation}) => {
  console.log(navigation);
  let {state,goBack} = navigation;

  // 用来判断是否隐藏或显示header
  const visible= state.params.isVisible;
  let header;
  if (visible === true){
    header = null;
  }

  const headerStyle = {backgroundColor:'#4ECBFC'};
  const headerTitle = state.params.title;
  const headerTitleStyle = {fontSize:20,color:'white',fontWeight:'500'}
  const headerBackTitle = false;



  // {/*<Button*/}
  // {/*title="返回"*/}
  // {/*// isCustom={true}*/}
  // {/*// customView={*/}
  // {/*//   <Image source={ { uri:"http://pic.58pic.com/58pic/15/28/02/40y58PICn4x_1024.jpg" } } />*/}
  // {/*//   // <Icon*/}
  // {/*//   //   name='ios-arrow-back'*/}
  // {/*//   //   size={30}*/}
  // {/*//   //   color='white'*/}
  // {/*//   //   style={{marginLeft:13}}*/}
  // {/*//   // />*/}
  // {/*// }*/}
  // {/*onPress={()=>{ goBack() }}*/}
  // {/*/>*/}

  const headerLeft = (

    <NavigationBackButton onPress={()=>{ goBack() }}  />
  );
  return {headerStyle,headerTitle,headerTitleStyle,headerBackTitle,headerLeft,header}
};


// 自定义导航栏返回按钮
export  class NavigationBackButton extends Component<{}>{
  render(){
    return (
      <TouchableOpacity style={{ flex:1, flexDirection:'row', alignItems:'center' }}
                        {...this.props}
      >
        <Image source={ { uri:"http://pic.58pic.com/58pic/15/28/02/40y58PICn4x_1024.jpg" } }
               style={ { width: 30, height:24 } }
        />
        <Text style={ {flex:1} } >返回</Text>
      </TouchableOpacity>
    );
  };
}



export default class App extends Component<{}> {
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
