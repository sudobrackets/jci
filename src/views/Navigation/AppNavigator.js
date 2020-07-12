import React from 'react';
import { createSwitchNavigator, createAppContainer } from 'react-navigation';
import WelcomePage from '../Example/WelcomePage';
import SplashPage from '../Splash/SplashPage';
import DrawerNavigator from '../../views/Drawer/drawerNavigation'
import ProjectDetailsPage from '../Common/ProjectDetailsPage'
import { createStackNavigator } from 'react-navigation-stack';

export default createAppContainer(createStackNavigator({
    Drawer: DrawerNavigator,
    SplashPage: SplashPage,
    ProjectDetailsPage: ProjectDetailsPage
}, {
    initialRouteName: 'SplashPage',
    headerMode: 'none',
}
));
