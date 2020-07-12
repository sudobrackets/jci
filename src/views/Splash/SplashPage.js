import React, { Component } from 'react';
import { Platform, StyleSheet, Animated, Text, View, Image, TouchableOpacity } from 'react-native';
import DeviceInfo from 'react-native-device-info';
var PushNotification = require("react-native-push-notification");
import { POST } from '../../utils/API';
import AsyncStorage from '@react-native-community/async-storage';
import { globalStyle, images } from '../../res';

class SplashPage extends Component {
    state = {
        springValue: new Animated.Value(0.6),
    }
    componentDidMount() {
        this.spring()
        this.timerHandle = setTimeout(() => {
            this.props.navigation.navigate('Drawer');
        }, 3000);

        this.pushNotificationTest()
    }

    pushNotificationTest = () => {
        var self = this;
        PushNotification.configure({
            onRegister: function (token) {
                self.registerNoitification(token.token)
            },

            onNotification: function (notification) {
            },
            senderID: "478647774280",
            permissions: {
                alert: true,
                badge: true,
                sound: true
            },
            popInitialNotification: true,
            requestPermissions: true
        });
    }
    async  registerNoitification(notification) {
        var status = await AsyncStorage.getItem('pushnotification');

        if (status == null) {
            var body = {
                "deviceId": notification,
                "device": DeviceInfo.getDeviceId(),
                "deviceType": Platform.OS
            }

            POST('addDevices', body, this.apicallBack);
        } else {
        }
    }
    apicallBack = (key, data) => {
        if (key == "success") {
            AsyncStorage.setItem('pushnotification', '1');
        } else {
            this.errorMessage(data)
        }
    }

    spring() {
        Animated.spring(
            this.state.springValue,
            {
                toValue: 1,
                friction: 1,
            }
        ).start()
    }
    componentWillUnmount() {
        if (this.timerHandle) {                  // ***
            clearTimeout(this.timerHandle);      // ***
            this.timerHandle = 0;                // ***
        }
    }
    render() {
        return (
            <View style={globalStyle.container}>
                <Animated.Image style={[styles.image, { transform: [{ scale: this.state.springValue }] }]} source={images.common.logo} />
            </View>
        );
    }
}

const styles = StyleSheet.create({
    image: {
        width: 2002 / 7,
        height: 1032 / 7
    }
})

export default SplashPage;
