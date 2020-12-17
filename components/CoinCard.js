import React from 'react';
import { View, Text, StyleSheet, Image, ActivityIndicator } from 'react-native'

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
    coinSymbol: {
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
    coinPrice: {
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
    coinSymbol, seperator, coinName,
    coinPrice, moneySymbol, statsContainer,
    percentChangeMinus, percentChangePlus
} = styles;

const CoinCard = ({ id, symbol, name, price, price24h, price7d }) => {
    return (
        <View style={container}>
            <View style={containerRow}>
                <Image
                    style={image}
                    source={{ uri: `https://s2.coinmarketcap.com/static/img/coins/64x64/${id}.png` }}
                />
                <Text style={coinSymbol}>{symbol}</Text>
                <Text style={seperator}>|</Text>
                <Text style={coinName}>{name}</Text>
                <Text style={coinPrice}>
                    {
                        price
                        ? price.toFixed(2)
                        : <ActivityIndicator size="small" animating />
                    }
                    <Text style={moneySymbol}> $ </Text>
                </Text>
            </View>


            <View style={statsContainer}>
                <Text>24h:&nbsp;
                    {
                        price24h
                        ? <Text style={price24h < 0 ? percentChangeMinus : percentChangePlus}> {price24h.toFixed(2)} % </Text>
                        : <ActivityIndicator size="small" animating />
                    }
                </Text>
                <Text>7d:&nbsp;
                    {
                        price7d
                        ? <Text style={price7d < 0 ? percentChangeMinus : percentChangePlus}> {price7d.toFixed(2)} % </Text>
                        : <ActivityIndicator size="small" animating />
                    }
                </Text>
            </View>
        </View>
    )
}

export default CoinCard;