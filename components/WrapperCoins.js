import React from 'react';
import { ActivityIndicator, FlatList } from 'react-native'
import { connect } from 'react-redux';

import FetchCoinData from '../Actions/FetchCoinData'
import CoinCard from './CoinCard';

class WrapperCoins extends React.Component {

    state = {
        start: 1,
        limit: 10
    }

    componentDidMount() {
        this.fetchCoins();
    }

    fetchCoins = () => {
        this.props.FetchCoinData(this.state);
    }

    loadMore = () => {
        this.setState(
            (prevState, nextProps) => ({
                start: prevState.start + prevState.limit
            }),
            () => {
                this.fetchCoins();
            }
        );
    }

    render() {
        const { crypto } = this.props;
        return (
            <FlatList
                data={crypto.data}
                keyExtractor={item => item.id.toString()}
                renderItem={({ item }) => (
                    <CoinCard
                        key={item.id}
                        id={item.id}
                        name={item.name}
                        symbol={item.symbol}
                    />
                )}
                ListFooterComponent={() =>
                    crypto.isFetching
                    ? null
                    : <ActivityIndicator size="large" animating />
                }
                onEndReached={() => this.loadMore()}
                onEndReachedThreshold={0.5}
            />
        )
    }
}

const mapStateToProps = (state) => {
    return {
        crypto: state.crypto
    }
}

export default connect(mapStateToProps, { FetchCoinData })(WrapperCoins)
