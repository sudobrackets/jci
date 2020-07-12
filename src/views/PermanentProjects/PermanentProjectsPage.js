import React, { Component } from 'react'

import {
    View, StyleSheet, Text
} from 'react-native';

import { connect } from 'react-redux';
import { loaderActions } from '../../redux/actions'

import ProjectCard from '../../components/common/ProjectCardComponent'

import { POST } from '../../utils/API';

import { colors, globalStyle } from '../../res'
import Header from '../../components/Header'

class PermanentProjects extends Component {

    constructor(props) {
        super(props);

        this.state = {
            projectList: [],
            loading: false
        }
    }

    componentDidMount() {
        this.props.navigation.addListener('willFocus', () => {
            this.getProjectList()
        });
    }

    getProjectList = () => {
        this.props.Loader(true);
        this.setState({ projectList: [], loading: true })
        var body = {
            "type": "1"
        }
        POST('getProjects', body, this.apicallBack)
    }

    apicallBack = (key, data) => {
        this.props.Loader(false);
        if (key == "success") {
            this.setState({ loading: false, projectList: data })
        } else {
            this.setState({ loading: false })
            this.errorMessage(data)
        }
    }

    errorMessage = (error) => {
        alert(error)
    }

    goToProjectDetails = (data) => {
        this.props.navigation.navigate(
            'ProjectDetailsPage',
            { projectId: data.project_id, title: "Permanent Project Details" }
        )
    }

    render() {
        const { projectList, loading } = this.state;
        return (
            <View style={globalStyle.fullView}>
                <Header title={"Permanent Projects"} leftPressed={() => this.props.navigation.openDrawer()} />
                {
                    projectList.length ?
                        <View style={globalStyle.bodyWrap}>
                            <ProjectCard projectList={projectList} cardPressed={this.goToProjectDetails} />
                        </View>
                        :
                        loading ?
                            <View style={styles.msgTextView}>
                                <Text>Loading ...</Text>
                            </View>
                            :
                            <View style={styles.msgTextView}>
                                <Text>No data found</Text>
                            </View>
                }
            </View>
        )
    }
}

export default connect(null, { ...loaderActions })(PermanentProjects)


const styles = StyleSheet.create({
    msgTextView: {
        height: "100%",
        width: "100%",
        alignItems: "center",
        justifyContent: "center"
    }
})