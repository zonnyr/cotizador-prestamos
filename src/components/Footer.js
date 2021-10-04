import React from 'react'
import { StyleSheet, View, Text, TouchableOpacity } from 'react-native'
import colors from '../utils/colors';

const Footer = (props) => {
    
    const { calculate } = props

    return ( 
        <View style={styles.viewFooter}>
            <TouchableOpacity 
                style={styles.button}
                onPress={calculate}
            >
                <Text style={styles.text}>Calcular</Text>
            </TouchableOpacity>
        </View>
    );
}
 
export default Footer;

const styles = StyleSheet.create({
    viewFooter: {
        position: 'absolute',
        bottom: 0,
        width: '100%',
        backgroundColor: colors.PRIMARY_COLOR,
        height: 100,
        borderTopLeftRadius: 30,
        borderTopRightRadius: 30,
        alignItems: 'center',
        justifyContent: 'center'
    },
    button: {
        backgroundColor: colors.SECONDARY_COLOR,
        padding: 16,
        borderRadius: 20,
        width: '75%'
    },
    text: {
        fontWeight: 'bold',
        fontSize: 18,
        color: 'white',
        textAlign: 'center'
    },
})