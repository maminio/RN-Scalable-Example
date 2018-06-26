import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Animated, FlatList, View, PanResponder } from 'react-native';

// Modules
// Actions
// Components
import ExchangeCard from 'app/components/cards/ExchangeCard/ExchangeCard';

// Helpers

// Config & Styling
import AppConfig from 'app/config';
import AppStyle from 'app/config/styles';

// Local Relatives
import styles from './styles';


// Constants
const CARDS_MARGIN = 12;
const CARD_WIDTH = (AppConfig.window.width / 2);
const CARD_HEIGHT = (AppConfig.window.height / 2);
const CARD_OFFSET = (AppConfig.window.width - CARD_WIDTH) / 2;
const FLAT_LIST_INTERVAL = CARD_WIDTH + (CARDS_MARGIN * 2);

// key extractor
const keyExtractor = (item, index) => `MarketScroller${index}`;


const AnimatedFlatList = Animated.createAnimatedComponent(FlatList);

class MarketScroller extends Component {
    static propTypes = {
        onCardPress: PropTypes.func,
        scrollX: PropTypes.any,
    };

    static defaultProps = {
    };

    constructor(props) {
        super(props);

        const scrollX = props.scrollX;

        this.state = {
            scrollX,
        };
    }



    renderItem({ item, index }) {
        return (
            <ExchangeCard
                {...item}
                itemIndex={index}
                cardWidth={CARD_WIDTH}
                cardHeight={CARD_HEIGHT}
                onCardPress={() => {
                    this.props.onCardPress(true);
                }}
                cardMargin={CARDS_MARGIN}
                scrollX={this.state.scrollX}
            />
        );
    }


    renderCardFlatList() {
        return (
            <View style={{ flex: 1}}>
                <FlatList
                    horizontal
                    data={this.props.data}
                    renderItem={item => this.renderItem(item)}
                    keyExtractor={keyExtractor}
                    decelerationRate={'fast'}
                    snapToAlignment={'center'}
                    showsHorizontalScrollIndicator={false}
                    // getItemLayout={this.getItemLayout}
                    snapToInterval={FLAT_LIST_INTERVAL}
                    scrollEventThrottle={1}
                    onScroll={
                        Animated.event([{ nativeEvent: { contentOffset: { x: this.state.scrollX } } }], {
                            listener: () => {
                            },
                        })
                    }
                    contentOffset={{ x: -CARD_OFFSET, y: 0 }}
                    contentInset={{
                        top: 0,
                        left: CARD_OFFSET,
                        bottom: 0,
                        right: CARD_OFFSET,
                    }}
                />
            </View>

        );
    }

    render() {
        return (
            <View style={{ justifyContent: 'center', flex: 1 }}>
                {this.renderCardFlatList()}
            </View>
        );
    }
}

export default MarketScroller;
