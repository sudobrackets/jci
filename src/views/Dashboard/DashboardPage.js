import React, { Component } from 'react';
import { Platform, StyleSheet, Text, View, Image, TouchableOpacity, BackHandler, } from 'react-native';
import { images, colors, globalStyle, fonts } from '../../res/';
import { connect } from 'react-redux';
import { loaderActions } from '../../redux/actions'
import { withNavigationFocus } from 'react-navigation';
import { POST } from '../../utils/API';
import Constants from '../../utils/Constants';

import Header from '../../components/Header'
import CardView from '../../components/CardView'
import { FlatList } from 'react-native-gesture-handler';

class DashboardPage extends Component {
    state = {
        eventList: [],
        loading: true,
    }
    componentDidMount() {
        this.intialApiCall();
    }
    intialApiCall() {
        var body = {}
        this.props.Loader(true);
        this.setState({ loading: true })
        POST('getEvents', body, this.apicallBack)
    }
    apicallBack = (key, data) => {
        this.setState({ loading: false })
        this.props.Loader(false);
        if (key == "success") {
            this.setState({ eventList: data })
        } else {
            this.errorMessage(data);
        }
    }
    errorMessage(error) {
        alert(error)
    }
    combineAddress = () => {
        var removeSpace = address.filter(item => item);
        return removeSpace.join() + ' - ' + zip_code
    }
    renderEventItem(data) {
        var item = data.item;
        var dateSplit = item.date_time.split(' ');


        var address = [item.address, item.address2, item.city, item.state, item.country];
        var removeSpace = address.filter(item => item);

        var combineAddress = removeSpace.join() + ' - ' + item.zip_code

        return (
            <CardView key={item.key}>
                <Text style={styles.eventTitleText}>
                    {item.event_name}
                </Text>
                <View style={globalStyle.eventDetailWrap}>
                    <Image source={images.icons.date_icon} style={globalStyle.labelIcon} />
                    <Text style={globalStyle.label} >{Constants.formatDate(dateSplit[0])}</Text>
                    <View style={globalStyle.labelControl} >
                        <Image source={images.icons.time_icon} style={globalStyle.labelIcon} />
                        <Text style={globalStyle.label}>{Constants.formatAMPM(dateSplit[1])}</Text>
                    </View>
                </View>
                <View style={globalStyle.eventDetailWrap}>
                    <Image source={images.icons.location} style={globalStyle.labelIcon} />
                    <View style={{ paddingRight: 10 }}>
                        <Text style={globalStyle.label} >{item.location}</Text>
                        <Text style={globalStyle.labelHint} >{combineAddress}</Text>
                    </View>
                </View>
            </CardView>
        );
    }
    render() {
        return (
            <View style={globalStyle.fullView}>
                <Header title={"Dashboard"} subTitle={"Upcoming Events"} leftPressed={() => this.props.navigation.openDrawer()} />
                <View style={globalStyle.bodyWrap}>
                    {this.state.eventList.length > 0 ? <FlatList
                        data={this.state.eventList}
                        renderItem={this.renderEventItem}
                        keyExtractor={(item, index) => (item.key = 'eventList' + index)}
                    /> :
                        <View style={globalStyle.container}>
                            {this.state.loading ? null : <Text>No data found</Text>}
                        </View>
                    }

                </View>
            </View >
        );
    }
}
const styles = StyleSheet.create({
    eventTitleText: {
        marginTop: 5,
        fontSize: 15,
        color: colors.headingColor,
        fontWeight: '600',
        fontFamily: fonts.SemiBold
    },
})


export default connect(null, { ...loaderActions })(DashboardPage);

