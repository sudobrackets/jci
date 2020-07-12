import React, { Component } from 'react';
import { Platform, StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native';

import { images, colors, globalStyle, fonts } from '../../res/';
import Header from '../../components/Header'
import CardView from '../../components/CardView'
import { ScrollView, FlatList } from 'react-native-gesture-handler';
import { connect } from 'react-redux';
import { loaderActions } from '../../redux/actions'
import { POST } from '../../utils/API';


class AboutPage extends Component {
    state = {
        aboutDetails: [{
            "description": "",
            "image_url": ""
        }]
    }

    componentDidMount() {
        var body = {}
        this.props.Loader(true);
        POST('about', body, this.apicallBack)
    }
    apicallBack = (key, data) => {
        this.props.Loader(false);
        if (key == "success") {
            this.setState({ aboutDetails: data })
        } else {
            this.errorMessage(data)
        }
    }

    errorMessage(error) {
        alert(error)
    }
    renderAboutItem(data) {
        var item = data.item;
        var index = data.index;
        console.log('images', item.image_url)
        return (
            <>
                <Image source={{ uri: item.image_url }} style={{ height: 200, marginTop: index == 0 ? 0 : 20 }} resizeMode="stretch" />
                <View style={styles.contentWrap}>
                    <Text style={styles.contentText}>
                        {item.description}
                    </Text>
                </View>
            </>
        );
    }
    render() {
        return (
            <View style={globalStyle.fullView}>
                <Header title={"About us"} leftPressed={() => this.props.navigation.openDrawer()} />

                <ScrollView style={globalStyle.bodyWrap}>
                    <CardView style={{ padding: 0 }}>
                        <FlatList
                            data={this.state.aboutDetails}
                            renderItem={this.renderAboutItem}
                            keyExtractor={(item, index) => ('aboutDetails' + index)}
                        />
                    </CardView>
                </ScrollView>

            </View>
        );
    }
}
const styles = StyleSheet.create({
    contentWrap: {
        paddingLeft: 20,
        paddingRight: 15,
    },
    contentText: {
        fontSize: 13,
        marginTop: 20,
        textAlign: 'justify',
        fontFamily: fonts.regular

    }
})
export default connect(null, { ...loaderActions })(AboutPage);

