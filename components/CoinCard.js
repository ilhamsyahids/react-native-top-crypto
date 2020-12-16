import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native'

const styles = StyleSheet.create({
    container: {
        display: 'flex',
        marginBottom: 20,
        borderBottomColor: '#eee',
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
    coinName: {
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
    },
    statsContainer: {
        display: "flex",
        borderTopColor: "#fafafa",
        borderTopWidth: 2,
        padding: 10,
        flexDirection: "row",
        justifyContent: "space-around"
    },
    percentChangePlus: {
        color: "#00BFA5",
        fontWeight: "bold",
        marginLeft: 5
    },
    percentChangeMinus: {
        color: "#DD2C00",
        fontWeight: "bold",
        marginLeft: 5
    }
})

const {
    container, containerRow, image,
    symbol, seperator, coinName,
    price, moneySymbol, statsContainer,
    percentChangeMinus, percentChangePlus
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
                <Text style={price}>
                    1000
                    <Text style={moneySymbol}> $ </Text>
                </Text>
            </View>


            <View style={statsContainer}>
                <Text>24h:
                     <Text style={percentChangeMinus}> 10 % </Text>
                </Text>
                <Text>7d:
                    <Text style={ percentChangePlus }> 10 % </Text>
                </Text>
            </View>
        </View>
    )
}

export default CoinCard;