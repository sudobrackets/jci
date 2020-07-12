import React, { Component } from 'react'

import {
    StyleSheet,
    View,
    Text,
    Image,
    TouchableOpacity,
    ScrollView
} from 'react-native';

import { connect } from 'react-redux';
import { loaderActions } from '../../redux/actions'
import { POST } from '../../utils/API';
import Constants from '../../utils/Constants';

import { images, globalStyle, fonts, colors } from '../../res';

class ProjectDetailsComponent extends Component {
    state = {
        details: '',
        loading: false
    }


    componentDidMount() {
        this.getProjectDetails()
    }

    getProjectDetails = () => {
        this.props.Loader(true);
        this.setState({ details: '', loading: true })
        var body = {
            "type": this.props.projectType,
            "projectId": this.props.projectId
        }
        POST('projectDetails', body, this.apicallBack)
    }

    apicallBack = (key, data) => {
        this.props.Loader(false);
        if (key == "success") {
            this.setState({ loading: false, details: data[0] ? data[0] : {} })
        } else {
            this.setState({ loading: false })
            this.errorMessage(data)
        }
    }

    errorMessage = (error) => {
        alert(error)
    }

    render() {
        const { details, loading } = this.state;
        return (
            // details.create_date

            <ScrollView>
                {
                    details ?
                        <View style={[styles.baseView, globalStyle.centerWrap]}>
                            <View style={[styles.headerView, globalStyle.centerWrap]}>
                                <Text style={styles.projectName}>{details.name}</Text>
                                <View style={styles.locationView}>
                                    <Image source={images.icons.locationIcon}
                                        style={styles.locationImg}
                                    />
                                    <Text style={styles.location}>{details.client_name}</Text>
                                </View>
                                {details.create_date ? <Text style={styles.dateText}>{Constants.formatDate(details.create_date.split(' ')[0]) + ' ' + Constants.formatAMPM(details.create_date.split(' ')[1])}</Text> : null}
                            </View>
                            <View style={styles.hrLine}></View>

                            <Text style={styles.detailsContent}>
                                {details.description}
                            </Text>

                            <View style={styles.hrLine}></View>

                            <View style={styles.galleryView}>
                                <Text style={styles.galleryText}>Gallery</Text>
                                {/*
                                <View style={styles.subHeadingRow}>
                                    <Text style={styles.gallerySubText}>Recent photos</Text> 
                                    <TouchableOpacity style={{ width: '100%', alignItems: "flex-end" }}>
                                        <Text style={styles.seeAllBtn}>See all</Text>
                                    </TouchableOpacity>
                                </View>
                                */}
                                <View style={styles.imgView}>
                                    {
                                        details.images && details.images.length > 0 ?
                                            details.images.map((item, index) => {
                                                return (
                                                    <Image key={index}
                                                        source={{ uri: item.image_url ? item.image_url : "http://jciexcellgkexams.com/img/slider/3.jpg" }}
                                                        style={styles.image}
                                                    />
                                                )
                                            })
                                            :
                                            null
                                    }
                                </View>
                            </View>
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

            </ScrollView>
        )
    }
}

export default connect(null, { ...loaderActions })(ProjectDetailsComponent)

const styles = StyleSheet.create({
    baseView: {
        backgroundColor: "#ffffff",
        flexDirection: "column",
        padding: 20,
        borderRadius: 10,
        marginTop: 10
    },
    headerView: {

    },
    projectName: {
        fontSize: 22,
        fontFamily: fonts.SemiBold,
        paddingBottom: 10,
        textAlign: "center"
    },
    locationView: {
        flexDirection: "row",
        // paddingBottom: 20
    },
    locationImg: {
        width: 18,
        height: 25
    },
    location: {
        fontSize: 15,
        fontFamily: fonts.SemiBold,
        paddingLeft: 10
    },
    dateText: {
        marginTop: 10,
        fontSize: 13,
        color: colors.textColor,
        fontFamily: fonts.regular,
    },
    hrLine: {
        height: 1,
        width: "80%",
        backgroundColor: colors.primaryBackgroundColor,
        marginTop: 15,
        marginBottom: 15
    },
    detailsContent: {
        fontSize: 12,
        fontFamily: fonts.regular,
        textAlign: "justify"
    },
    galleryView: {
        width: "100%"
    },
    galleryText: {
        fontSize: 16,
        paddingBottom: 5,
        fontFamily: fonts.SemiBold
    },
    gallerySubText: {
        fontSize: 16,
        paddingTop: 5,
        paddingBottom: 15,
        fontFamily: fonts.SemiBold
    },
    seeAllBtn: {
        fontSize: 12,
        color: "gray",
        fontFamily: fonts.SemiBold
    },
    subHeadingRow: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center"
    },
    imgView: {
        width: "100%",
    },
    image: {
        width: "100%",
        height: 200,
        resizeMode: 'cover',
        marginTop: 10
    },
    msgTextView: {
        height: "100%",
        width: "100%",
        alignItems: "center",
        justifyContent: "center"
    }
})