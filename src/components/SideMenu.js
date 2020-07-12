
import React, { Component } from 'react';
import {
    Platform,
    StyleSheet,
    Text,
    View, ScrollView, Image, TouchableOpacity, SafeAreaView,
    Dimensions
} from 'react-native';
// import styles from '../styles/sideMenuStyles';
import { images, colors, globalStyle, fonts } from '../res';
var { width, height } = Dimensions.get('window');

var menuData = [
    { name: 'Home', icon: '', action: 'HomePage' },
    { name: 'What next?', icon: '', action: 'DashboardPage' },
    { name: 'Members', icon: '', action: 'MemberPage' },
    { name: 'Permanent Projects', icon: '', action: 'PermanentProjectPage' },
    { name: 'Projects', icon: '', action: 'ProjectPage' },
    { name: 'About us', icon: '', action: 'AboutPage' },
    { name: 'Contact us', icon: '', action: 'ContactPage' },
    { name: 'Privilege', icon: '', action: 'PrivilegePage' }
];

const MenuRow = ({ item, onPress }) => {
    var IconName = item.icon;
    var MenuItemName = item.name;
    const { sideMenuWrapper, sideMenu, menuLeftWrap, menuIcon } = styles;
    return (<TouchableOpacity style={sideMenuWrapper} onPress={onPress}>
        <View style={menuLeftWrap}>
            <Image source={images.icons.dashboard_List_icon} style={menuIcon} />
            <Text style={sideMenu}>{MenuItemName}</Text>
        </View>
        <Image source={images.icons.dashboard_Arrow_icon} style={menuIcon} />
    </TouchableOpacity>);
};

class sideMenu extends Component {

    sideMenuAction = (item) => {
        this.props.navigation.closeDrawer();

        if (item.action == "LoginPage") {
            this.props.navigation.navigate('LoginPage')
        } else {
            this.props.navigation.navigate(item.action)
        }
    }
    render() {
        const { sideMenuWrap, header, sideMenuImage, selectImage, sideMenuHeader, sideMenuTitle, sideSubMenuTitle,
            sideSubMenuPickerTitle } = styles;
        return (
            <View style={sideMenuWrap}>
                <View style={styles.topSplit} />
                <View style={styles.bottomSplit}>
                    {menuData.map((item) => {
                        return <MenuRow item={item} onPress={() => this.sideMenuAction(item)} />
                    })}
                </View>

            </View>
        )
    }
}
const styles = StyleSheet.create({
    sideMenuWrap: {
        flex: 1,
        backgroundColor: colors.primaryColor,
    },
    topSplit: {
        flex: 1.5,
    },
    bottomSplit: {
        flex: 8.5,
        paddingLeft: 15,
        paddingRight: 15,
    },
    header: {
        padding: 10,
        flexDirection: 'row',
        backgroundColor: colors.Primary,
        borderBottomColor: colors.DrawerShadow,
        borderBottomWidth: 1.5,
        ...globalStyle.centerWrap
    },
    sideMenuImage: {
        flex: 0.3,
    },
    selectImage: {
        height: 80,
        width: 80,
        borderRadius: 90 / 2,
        borderWidth: 4,
        borderColor: colors.White,
    },
    sideMenuHeader: {
        flex: 0.7,
        flexDirection: 'column',
    },
    sideMenuTitle: {
        color: colors.SidebarFontColor,
        fontSize: 22,
        paddingBottom: 3
    },
    sideSubMenuTitle: {
        color: colors.DarkLight,
        fontSize: 14,
    },
    sideSubMenuPickerTitle: {
        color: colors.SidebarFontColor,
        textAlign: 'right',
        paddingRight: 20,
        fontSize: 15,
    },
    sideMenuWrapper: {
        borderRadius: 50,
        alignItems: "center",
        justifyContent: 'space-between',
        flexDirection: 'row',
        backgroundColor: '#fff',
        marginTop: 15,
    },
    menuLeftWrap: {
        flexDirection: 'row',
        alignItems: 'center'
    },
    menuIcon: {
        width: 40,
        height: 40,
        borderRadius: 50
    },
    sideMenu: {
        paddingLeft: 5,
        marginLeft: 10,
        color: colors.SidebarFontColor,
        fontSize: width * (3.5 / 100),
        fontFamily: fonts.SemiBold
    },
    sideMenuItemIcon: {
        alignSelf: "center",
    }

})
export default sideMenu;