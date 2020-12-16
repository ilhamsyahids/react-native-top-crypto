import React from 'react';
import { View, StyleSheet, ScrollView } from 'react-native'
import Spinner from 'react-native-loading-spinner-overlay'
import { connect } from 'react-redux';

import FetchCoinData from '../Actions/FetchCoinData'
import CoinCard from './CoinCard';

const styles = StyleSheet.create({
    contentContainer: {
        paddingBottom: 100,
        paddingTop: 55
    }
})

class WrapperCoins extends React.Component {

    componentDidMount() {
        this.props.FetchCoinData();
    }

    renderCards() {
        console.log(this.props.crypto)
        const { crypto } = this.props
        return crypto.data.map(coin => {
            return (
                <CoinCard
                    key={coin.id}
                    id={coin.id}
                    name={coin.name}
                    symbol={coin.symbol}
                />
            )
        })
    }

    render() {
        const { crypto } = this.props
        if (crypto.isFetching) {
            return (
                <View>
                    <Spinner
                        visible={crypto.isFetching}
                        textContent="Loading..."
                        textStyle={{ color: '#253145' }}
                        animation="fade"
                    />
                </View>
            )
        }

        return (
            <ScrollView contentContainerStyle={styles.contentContainer}>
                {this.renderCards()}
            </ScrollView>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        crypto: state.crypto
    }
}

export default connect(mapStateToProps, { FetchCoinData })(WrapperCoins)