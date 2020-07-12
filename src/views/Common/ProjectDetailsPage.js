import React, { Component } from 'react'

import {
    StyleSheet,
    View,
    ScrollView
} from 'react-native';

import { colors, globalStyle } from '../../res'
import Header from '../../components/Header'
import ProjectDetailsComponent from '../../components/common/ProjectDetailsComponent'

export default class ProjectDetailsPage extends Component {

    constructor(props) {
        super(props)
        var title = this.props.navigation.state.params.title;
        this.state = {
            projectId: this.props.navigation.state.params.projectId,
            title: title,
            projectType: title == "Permanent Project Details" ? "1" : "0",
        }
    }

    goBack = () => {
        this.props.navigation.goBack()
    }

    render() {
        return (
            <View style={globalStyle.fullView}>
                <Header title={this.state.title} leftPressed={this.goBack} />
                <View style={globalStyle.bodyWrap}>
                    <ProjectDetailsComponent navigation={this.props.navigation} projectId={this.state.projectId} projectType={this.state.projectType} />
                </View>
            </View>
        )
    }
}