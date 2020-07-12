import React from 'react'

import { TouchableOpacity, Image } from 'react-native';

import { images } from '../../res/images'

export const SearchIcon = (props) => {
    return (
        <TouchableOpacity
            style={props.style}
            onPress={props.onPress ? props.onPress : null}
        >
            <Image
                style={{ width: '100%', height: '100%' }}
                source={images.icons.searchIcon} />
        </TouchableOpacity>
    )
}