
import { StyleSheet } from 'react-native'
import { colors } from './colors';

export const globalStyle = StyleSheet.create({
    /* example link */
    // textStyle:{
    // fontSize: 16
    // }
    fullView: {
        flex: 1
    },
    bodyWrap: {
        flex: 1,
        paddingLeft: 10,
        paddingRight: 10,
        backgroundColor: colors.primaryBackgroundColor
    },
    container: {
        flex: 1,
        alignItems: "center",
        justifyContent: 'center',
    },
    centerWrap: {
        justifyContent: 'center',
        alignItems: 'center',
    },
    headerMenuIcon: {
        width: 30,
        height: 30,
        marginRight: 10
    },
    row: {
        flexDirection: 'row',
    },
    rowSpace: {
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    rowEndEnd: {
        flexDirection: 'row',
        alignItems: 'flex-end'
    },
    rowEnd: {
        flexDirection: 'row',
        justifyContent: 'flex-end'
    },
    rowCenter: {
        flexDirection: 'row',
    },
    eventDetailWrap: {
        marginTop: 15,
        flexDirection: 'row'
    },
    labelIcon: {
        width: 20,
        height: 20,
        resizeMode:"contain"
    },
    label:{
        marginLeft:10,
        fontSize:14,
        // color:colors.accentColor
    },
    labelControl:{
        marginLeft:20,
        flexDirection:'row',
    },
    labelHint:{
        marginLeft:10,
        fontSize:10,
        // color:colors.accentColor
    }
});

