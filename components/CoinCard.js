import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native'

const styles = StyleSheet.create({
    container: {
        display: 'flex',
        marginBottom: 20,
        borderBottomColor: 'black',
        borderBottomWidth: 3,
        padding: 20
    },
    containerRow: {
        display: 'flex',
        flexDirection: 'row',
        marginBottom: 15
    },
    symbol: {
        marginTop: 10,
        marginLeft: 5,
        marginRight: 20
    },
    seperator: {
        marginTop: 10,
    },
    price: {
        marginTop: 10,
        marginLeft: "auto",
        marginRight: 10,
        fontWeight: "bold",
    },
    image: {
        width: 35,
        height: 35,
    },
    moneySymbol: {
        fontWeight: "bold",
    }
})

const {
    container, containerRow, image,
    symbol, seperator, coinName,
    coinPrice, moneySymbol
} = styles;

const CoinCard = () => {
    return (
        <View style={container}>
            <View style={containerRow}>
                <Image
                    style={image}
                    source={{ uri: "https://res.cloudinary.com/da7jhtpgh/image/upload/v1508609483/bitcoin_eqld4v.png" }}
                />
                <Text style={symbol}>BTC</Text>
                <Text style={seperator}>|</Text>
                <Text style={coinName}>Bitcoin</Text>
                <Text style={coinPrice}>
                    1000
                    <Text style={moneySymbol}> $ </Text>
                </Text>
            </View>
        </View>
    )
}

export default CoinCard;