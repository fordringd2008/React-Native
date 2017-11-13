import { AppRegistry } from 'react-native';
import App from './App';


/*

  注册入口组件
  AppRegistry :负责注册运行ReactNative应用程序的 JavaScript入口，
  registerComponent注册应用程序的入口组件。告知 ReactNative哪一个组件被注册为应用的根容器

  第二个参数使用了 ES6语法，箭头函数：
  （） => HelloWord
  返回的必须是定义的组件类的名字

  这里的APP在 App.js 中， 是一个组件

  等价于
  function () { return App }

*/


AppRegistry.registerComponent('HelloWord', () => App);
