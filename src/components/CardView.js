import React, { Component } from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native';
import { colors, images } from '../res';
class CardView extends Component {
    render() {
        return (
            <View style={[styles.cardMainWrap,this.props.style?this.props.style:null]}>
                {this.props.children}
            </View>
        );
    }
}

export default CardView;

const styles = StyleSheet.create({
    cardMainWrap: {
        marginTop:10,
        width: '100%',
        padding:10,
        borderRadius:10,
        backgroundColor:'#fff',
        shadowColor: colors.borderColor,
        shadowOffset: { width: 1, height: 2 },
        shadowOpacity: 0.8,
        shadowRadius: 2,
        overflow:'hidden'
    }
})