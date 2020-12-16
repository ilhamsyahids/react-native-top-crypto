import React from 'react';
import { View, StyleSheet, ScrollView } from 'react-native'
import Spinner from 'react-native-loading-spinner-overlay'

import CoinCard from './CoinCard';

const styles = StyleSheet.create({
    contentContainer: {
        paddingBottom: 100,
        paddingTop: 55
    }
})

class WrapperCoins extends React.Component {

    state = {
        loading: false
    }

    componentDidMount() {
        this.setState({ loading: true })
        setTimeout(() => this.setState({ loading: false }), 1000)
    }

    renderCards() {
        return "1234567890".split('').map(card => <CoinCard key={card} />)
    }

    render() {
        const { loading } = this.state
        if (this.state.loading) {
            return (
                <View>
                    <Spinner
                        visible={loading}
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

export default WrapperCoins;