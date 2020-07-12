import React, { Component } from 'react';
import { Platform, StyleSheet, Text, View, Image, ActivityIndicator, Modal } from 'react-native';
import { connect } from 'react-redux';


class LoaderComponent extends Component {
    state = {
        isLoading: false
    }
    render() {
        return (
            <View>
                {this.props.isLoading ?
                    <Modal transparent={true} visible={this.props.isLoading}>
                        <View style={styles.loaderBackground}>
                            <ActivityIndicator size="large" color="#fff" />
                        </View>
                    </Modal>
                    : null}
            </View>
        );
    }
}

function mapStateToProps(state) {
    const { isLoading } = state.Common.loaderReducer;
    return {
        isLoading
    };
}

export default connect(mapStateToProps)(LoaderComponent);


const styles = StyleSheet.create({
    loaderBackground: {
        backgroundColor: 'rgba(22,22,22,0.4)',
        width: '100%',
        height: '100%',
        alignItems: 'center',
        justifyContent: 'center'
    }
})