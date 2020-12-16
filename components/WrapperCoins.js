import React from 'react';
import { ScrollView } from 'react-native'

import CoinCard from './CoinCard';

const styles = {
    contentContainer: {
        paddingBottom: 100,
        paddingTop: 55
    }
}

class WrapperCoins extends React.Component {

    renderCards() {
        return "1234567890".split('').map(card => <CoinCard key={card} />)
    }

    render() {
        return (
            <ScrollView contentContainerStyle={styles.contentContainer}>
                {this.renderCards()}
            </ScrollView>
        )
    }
}

export default WrapperCoins;
