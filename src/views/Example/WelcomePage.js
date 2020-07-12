import React, { Component } from 'react';
import { Platform, StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native';
import { connect } from 'react-redux';
import { loaderActions } from '../../redux/actions'
import { images, colors } from '../../res/';

const instructions = Platform.select({
    ios: 'Press Cmd+R to reload,\n' + 'Cmd+D or shake for dev menu',
    android:
        'Double tap R on your keyboard to reload,\n' +
        'Shake or press menu button for dev menu',
});

class WelcomePage extends Component {

    onLoader = () => {
        // this.props.Loader(true);
        // setTimeout(function () {
        //     this.props.Loader(false);
        // }.bind(this), 2000);
    }
    render() {
        return (
            <View style={styles.container}>
                <Image
                    source={images.icons.welcome_icon}
                    style={styles.welcomeIconStyle}
                    resizeMode="contain" />
                <Text style={styles.welcome}>Welcome to Example Page</Text>
                <Text style={styles.instructions}>To get started, edit App.js</Text>
                <Text style={styles.instructions}>{instructions}</Text>
                <TouchableOpacity style={styles.loaderStyle} onPress={this.onLoader}>
                    <Text style={styles.loaderText}>On Loader</Text>
                </TouchableOpacity>
            </View>
        );
    }
}

function mapStateToProps(state) {
    // const { loader } = state.loaderReducer;
    return {

    };
}

export default connect(mapStateToProps, { ...loaderActions })(WelcomePage);

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#F5FCFF',
    },
    loaderStyle: {
        marginTop: 20,
        width: 120,
        height: 50,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#2196f3',
        borderRadius: 6
    },
    loaderText: {
        fontSize: 20,
        color: '#fff'
    },
    welcome: {
        fontSize: 20,
        textAlign: 'center',
        color: colors.primary,
        margin: 10,
    },
    welcomeIconStyle: {
        width: 150,
        height: 100
    },
    instructions: {
        textAlign: 'center',
        color: colors.textType1,
        marginBottom: 5,
    },
});
