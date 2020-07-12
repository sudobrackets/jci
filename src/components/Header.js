import React, { Component } from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity, SafeAreaView } from 'react-native';
import { colors, images, fonts } from '../res';

class Header extends Component {
    render() {
        return (
            <View style={styles.header}>
                <View style={styles.headerWrap}>
                    <SafeAreaView>
                        <View style={styles.mainHeaderWrap}>
                            <TouchableOpacity onPress={() => this.props.leftPressed()} style={styles.leftWrap}>
                                <Image
                                    source={
                                        (this.props.title === "Project Details" || this.props.title == "Permanent Project Details") ? images.icons.Back_icon
                                            : images.icons.menu}
                                    style={styles.menuIcon}
                                />
                            </TouchableOpacity>
                            <Text style={styles.headerTitle}>{this.props.title}</Text>
                            {this.props.title != "JCI Erode" ?
                                <Image source={images.common.white_logo} style={styles.logoIcon} /> : <View style={styles.logoIcon}></View>}
                        </View>
                        {this.props.subTitle ?
                            <View style={styles.subHeaderWrap}>
                                <Text style={styles.headerSubTitle}>{this.props.subTitle}</Text>
                            </View> : null}
                    </SafeAreaView>

                </View>

            </View>
        );
    }
}

export default Header;


const styles = StyleSheet.create({
    header: {
        backgroundColor: colors.primaryBackgroundColor,
    },
    headerWrap: {
        minHeight: 55,
        backgroundColor: colors.primaryColor,
        padding: 15,
        paddingBottom: 5,
        width: '100%',
        borderBottomLeftRadius: 15,
        borderBottomEndRadius: 15
    },
    leftWrap: {
        width: 175 / 3,
        height: 74 / 3,
    },
    mainHeaderWrap: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between'
    },
    subHeaderWrap: {
        marginTop: 20,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center'
    },
    menuIcon: {
        width: 25,
        height: 25,
        resizeMode: 'contain'
    },
    headerTitle: {
        fontSize: 19,
        color: colors.primaryTextColor,
        fontFamily: fonts.SemiBold
    },
    headerSubTitle: {
        fontSize: 12,
        color: colors.primaryTextColor
    },
    logoIcon: {
        width: 175 / 3,
        height: 74 / 3,
        resizeMode: 'contain'
    }
})