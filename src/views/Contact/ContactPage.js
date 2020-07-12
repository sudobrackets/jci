import React, { Component } from 'react';
import { Platform, StyleSheet, Text, View, Image, TouchableOpacity, ScrollView, Dimensions } from 'react-native';
import { WebView } from 'react-native-webview';
import { images, colors, globalStyle, fonts } from '../../res/';
import { POST } from '../../utils/API';

import { connect } from 'react-redux';
import { loaderActions } from '../../redux/actions'

import Header from '../../components/Header'
import CardView from '../../components/CardView'

var { width, height } = Dimensions.get('window');
class ContactPage extends Component {
    state = {
        mail: 'hariprashad@live.com',
        number: '9600227272',
        address: 'JFS Hari Prashad S V, \nPresident, \n14/22A Uzhavan Nagar, \nSurampatti, Erode 638009',
        location: '<iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d3911.7375785446475!2d77.7102684!3d11.3538683!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ba96f325f83fe21%3A0x9a05f5c71e68d558!2sJunior%20Chamber%20International!5e0!3m2!1sen!2sin!4v1576318116100!5m2!1sen!2sin" width="100%" height="100%" frameborder="0" style="border:0;" allowfullscreen=""></iframe>'
    }
    componentDidMount() {
        this.props.Loader(true);
        this.setState({ membersList: [], loading: true })
        let body = {}
        POST('contact', body, this.apicallBack)
    }

    apicallBack = (key, data) => {
        this.props.Loader(false);
        if (key == "success") {
            this.setState({
                mail:data[0].mail,
                number: data[0].number,
                address: data[0].address,
                location:data[0].location
            })
        } else {
            this.setState({ loading: false })
            this.errorMessage(data)
        }
    }

    errorMessage(error) {
        alert(error)
    }
    render() {
        var { address, number, mail, location } = this.state;
        return (
            <ScrollView style={globalStyle.fullView}>
                <Header title={"Contact us"} leftPressed={() => this.props.navigation.openDrawer()} />
                <View style={[globalStyle.bodyWrap, { paddingBottom: 30 }]}>
                    <CardView>
                        <View style={styles.contactViewWrap}>
                            <View style={styles.contactView}>
                                <Image source={images.icons.Contact_us_location_icon} style={styles.contactIcon} />
                                <Text style={styles.addressText}>
                                    {address}
                                </Text>
                            </View>
                            <View style={[styles.contactView, { justifyContent: 'flex-end' }]}>
                                <Text style={styles.mailText}>
                                    {mail}
                                </Text>
                                <Image source={images.icons.Contact_us_mail_icon} style={styles.contactIcon} />

                            </View>
                            <View style={styles.contactView}>
                                <Image source={images.icons.Contact_us_call_icon} style={styles.contactIcon} />
                                <Text style={styles.numberText}>
                                    Ind {number}
                                </Text>
                            </View>
                        </View>
                        <View style={styles.mapView}>
                            <Text style={styles.mapTitle}>Google map</Text>
                        </View>
                        <View style={{ marginLeft: -10, marginRight: -10, paddingBottom: 30 }}>
                            <WebView source={{
                                html: location
                            }}
                                style={{ width: "100%", height: 200 }} />
                        </View>
                    </CardView>

                </View>

            </ScrollView>
        );
    }
}
const styles = StyleSheet.create({
    eventTitleText: {
        fontSize: 15,
        color: colors.headingColor,
        fontWeight: '600',
        fontFamily: fonts.SemiBold
    },
    contactViewWrap: {
        paddingLeft: 15,
        paddingRight: 15,
    },
    contactView: {
        paddingTop: 10,
        paddingBottom: 10,
        flexDirection: 'row',
        alignItems: "center",
        borderBottomColor: colors.borderColor,
        borderBottomWidth: 1
    },
    contactIcon: {
        width: 60,
        height: 60,
        resizeMode: 'contain'
    },
    addressText: {
        fontSize: width * (3 / 100),
        lineHeight: 25,
        marginLeft: 30,
        fontFamily: fonts.regular,
        color: colors.textColor,
    },
    mailText: {
        fontSize: width * (3 / 100),
        lineHeight: 25,
        letterSpacing: 2,
        marginRight: 30,
        color: colors.textColor,
        fontFamily: fonts.regular
    },
    numberText: {
        fontSize: width * (3 / 100),
        letterSpacing: 2,
        lineHeight: 25,
        marginLeft: 30,
        fontFamily: fonts.regular,
        color: colors.textColor,
    },
    mapView: {
        alignItems: 'center'
    },
    mapTitle: {
        padding: 20,
        fontSize: 14,
    }

})

export default connect(null, { ...loaderActions })(ContactPage)
