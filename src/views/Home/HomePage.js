import React, { Component } from 'react';
import { Platform, StyleSheet, Text, View, Image, TouchableOpacity, BackHandler, ScrollView, Dimensions, ImageBackground } from 'react-native';
import { WebView } from 'react-native-webview';
import { images, colors, globalStyle, fonts } from '../../res/';
import Header from '../../components/Header'
import { withNavigationFocus } from 'react-navigation';
import RNMinimizeApp from 'react-native-minimize';
var { width, height } = Dimensions.get('window');

class HomePage extends Component {
    menuIcon = [[{ name: 'What next?', icon: 'dashboard_list_icon', action: 'DashboardPage' },
    { name: 'Members', icon: 'member_icon', action: 'MemberPage' },
    { name: 'Permanent Projects', icon: 'project_icon', action: 'PermanentProjectPage' }],
    [{ name: 'Projects', icon: 'permanent_project_icon', action: 'ProjectPage' },
    { name: 'About us', icon: 'about_icon', action: 'AboutPage' },
    { name: 'Contact us', icon: 'contact_icon', action: 'ContactPage' }],
    [{ name: 'Privilege', icon: 'privilege_icon', action: 'PrivilegePage' }]]


    componentDidMount(prevProps) {
        BackHandler.addEventListener('hardwareBackPress', (data) => {
            if (this.props.isFocused) {
                RNMinimizeApp.minimizeApp();
                return true;
            }
        });
    }

    pageRedirection(page) {
        this.props.navigation.navigate(page)
    }
    render() {
        return (
            <View style={[globalStyle.fullView, { backgroundColor: '#f5f5f5' }]}>
                <Header title={"JCI Erode"} leftPressed={() => this.props.navigation.openDrawer()} />
                <ScrollView style={globalStyle.fullView}>
                    <ImageBackground source={images.common.banner} style={styles.bannerWrap} />
                    <View style={styles.logoWrap}>
                        <Image source={images.common.logo} style={styles.logoIcon} />
                    </View>
                    <View style={styles.menuGridView}>
                        {this.menuIcon.map(rowItem => {
                            return (<View style={styles.gridRow}>
                                {rowItem.map((gridItem) => {
                                    return (<TouchableOpacity style={styles.grid} onPress={() => this.pageRedirection(gridItem.action)}>
                                        <View style={styles.menuIconWrap}>
                                            <Image source={images.menu[gridItem.icon]} style={styles.icon} />
                                        </View>
                                        <Text style={styles.menuText}>{gridItem.name}</Text>
                                    </TouchableOpacity>)
                                })}
                            </View>)
                        })}
                    </View>
                </ScrollView>
            </View>
        );
    }
}
const styles = StyleSheet.create({
    bannerWrap: {
        height: height / 5.5,
        alignItems: "center",
        overflow: "visible"
    },
    logoWrap: {
        zIndex: 2000,
        marginTop: -((height / 4.5) / 2.8),
        alignSelf: "center",
        borderWidth: 2,
        borderColor: colors.primaryColor,
        width: 120,
        height: 120,
        backgroundColor: '#fff',
        padding: 5,
        borderRadius: 150 / 2,
    },
    logoIcon: {
        width: '100%',
        height: '100%',
        resizeMode: 'contain'
    },
    menuGridView: {
        width: width,
    },
    grid: {
        borderRadius: 12,
        alignItems: 'center',
        justifyContent: 'center',
        width: width / 3.4,
        backgroundColor: '#fff',
        height: width / 3.4
    },
    icon: {
        width: "70%",
        height: "70%",
        resizeMode: "contain"
    },
    menuIconWrap: {
        padding: 5,
        width: "60%",
        justifyContent: 'center',
        alignItems: "center",
        height: "60%",
        borderRadius: 80 / 2,
        backgroundColor: colors.primaryColor
    },
    menuText: {
        marginTop: 5,
        textAlign: 'center',
        alignItems: 'center'
    },
    gridRow: {
        padding: 10,
        justifyContent: 'space-between',
        flexDirection: 'row'
    }
})

export default withNavigationFocus(HomePage);