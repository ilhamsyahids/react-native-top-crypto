import React from 'react';
import { View, Text, StyleSheet } from 'react-native'

const styles = StyleSheet.create({
    headerContainer: {
        display: 'flex',
        marginTop: 55,
        paddingBottom: 15,
        borderBottomColor: '#eaeaea',
        borderBottomWidth: 2,
        alignItems: 'center'
    },
    header: {
        fontWeight: "bold",
        fontSize: 20
    }
})

const Header = () => {
    return (
        <View style={styles.headerContainer}>
            <Text style={styles.header}>
                Top Crypto
            </Text>
        </View>
    )
}

export default Header;