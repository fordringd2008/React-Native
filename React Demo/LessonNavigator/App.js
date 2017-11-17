import React, {Component, PropTypes} from 'react';
import {
    StyleSheet,
    Text,
    View,
    NavigatorIOS,
    TouchableHighlight,
    TextInput,
} from 'react-native';

// Component<{}>
// React.Component
export default class App extends Component<{}> {
    render() {
        // var contents = this.props["scores"].map(
        //   score => <Text key={score.name}>{score.name}:{score.value}{"\n"}</Text>
        // );
        // const routes = [
        //   {title: 'First Scene', index: 0},
        //   {title: 'Second Scene', index: 1},
        //   ];
        return (
            <NavigatorIOS
                initialRoute={{
                    component: MyScene,
                    title: 'My Initial Scene',
                    passProps: {myProp: 'foo'}
                }}
                style={{flex: 1}}/>

        );
    }
}


class MyScene extends Component {
    // static propTypes = {
    //     title: PropTypes.string.isRequired,
    //     navigator: PropTypes.object.isRequired,
    // }
    //   私有方法如果要访问this, 需要在和初始化的时候，进行方法bind

    constructor(props, context) {
        super(props, context);
        this._onForward = this._onForward.bind(this);
        this._onChangeText = this._onChangeText.bind(this);
        // this._onChange = this._onChange.bind(this);
    }

    // 在挂载后，才能赋值，否则会报出警告
    componentDidMount() {
        this.setState({
            textInputString: " "
        })
    }


    _onForward() {
        this.props.navigator.push({
            component: MyView,
            title: 'Genius',
            passProps: {myProp: this.state.textInputString },
        });
    }


    // 绑定方法
    // _onChange = (text) => {
    //     // event.nativeEvent.text
    //     this.setState({
    //         textInputString: text
    //     })
    // };

    _onChangeText(text){
        alert(text);

        this.setState({
            textInputString : text
        });
        // alert(text);
        // var text = this.state.textInputString ? this.state.textInputString : "111";
        // alert(text);
    }

    // updateText(e) {
    //     // alert(e.nativeEvent.text);
    //
    //     var newText = e.nativeEvent.text;
    //
    // }


    // onChange={this._onChange()}
    // onChange={ this._onChange.binding(this) }
    // onChangeText={ this.onChangeText }
    // onChange={(event) => this.updateText(event)}
    render() {
        console.log("rendering");
        return (
            <View style={styles.container}>
                <TextInput style={styles.textInputOld}
                    // onChange={  this._onChange }
                    //        onChange={this.updateText}
                           onChangeText={ this._onChangeText }
                />
                <Text style={styles.flex}>Current Scene: {this.props.title}</Text>
                <TouchableHighlight
                    style={styles.flex}
                    onPress={this._onForward}>
                    <Text style={{backgroundColor: "gray", borderWidth: 1, borderColor: "red"}}>Tap me to load the next
                        scene</Text>
                </TouchableHighlight>
            </View>
        )
    }
}


class MyView extends Component {

    _handleNextPress(nextRoute) {

        this.props.navigator.push(nextRoute);
    }

    _onBack() {
        this.props.navigator.pop();
    }

    render() {


        // 下一个路由，还是 MyView
        const nextRoute = {
            component: MyView,
            title: 'Bar That',
            passProps: {myProp: 'bar'}
        };
        return (
            <View>
                <Text></Text>
                <TouchableHighlight onPress={() => this._handleNextPress(nextRoute)}
                                    underlayColor='transparent'
                >
                    <Text style={{
                        marginTop: 200,
                        alignSelf: 'center',
                        borderWidth: 1,
                        borderColor: "red",
                        backgroundColor: 'yellow'
                    }}>
                        See you on the other nav {this.props.myProp}!
                    </Text>
                </TouchableHighlight>
                <TouchableHighlight onPress={this._onBack.bind(this)} underlayColor='red'>
                    <Text style={{
                        marginTop: 200,
                        alignSelf: 'center',
                        borderWidth: 1,
                        borderColor: "red",
                        backgroundColor: 'yellow'
                    }}>Tap me to the last scene</Text>
                </TouchableHighlight>
            </View>
        );
    }
}


const styles = StyleSheet.create({
    container: {
        marginTop: 100,
        flex: 1,
        // justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'column',
        backgroundColor: '#FFFFFF',

    },

    textInputOld: {
        borderWidth: 1,
        borderColor: 'red',
        width: 200,
        flex: 1
    },
    textInputNew: {
        borderWidth: 1,
        borderColor: 'red',
        width: 300,
        flex: 1
    },

    flex: {
        flex: 1,
    },
    highScoresTitle: {
        fontSize: 20,
        textAlign: 'center',
        margin: 10,
    },
    scores: {
        textAlign: 'center',
        color: '#333333',
        marginBottom: 5,
    },
});
