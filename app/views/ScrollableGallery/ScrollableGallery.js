import React, { Component } from 'react';
import PropTypes from 'prop-types';
import {
    FlatList,
    View,
    Animated,
} from 'react-native';

// Modules
// Actions
// Components
import ExpandableCard from 'app/components/cards/ExpandableCard/ExpandableCard';

// Helpers

// Config & Styling
import AppConfig from 'app/config';
import AppStyle from 'app/config/styles';

// Local Relatives
import styles from './styles';

// Constants


// Static methods

const keyExtractor = (item, index) => `ScrollableGallery${index}`;

class ScrollableGallery extends Component {
    static propTypes = {
        data: PropTypes.array.isRequired,
        onCardPress: PropTypes.func.isRequired,
        onClosePress: PropTypes.func.isRequired,
    };

    static defaultProps = {
    };

    constructor(props) {
        super(props);
        this.state = {
            scrollX: new Animated.Value(0),
            animatedImageCard: new Animated.Value(0),
        };
    }

    renderItem({ item }) {
        return (
            <ExpandableCard
                {...item}
                animatedImageCard={this.state.animatedImageCard}
                onCardPress={() => {
                    this.props.onCardPress(true);
                }}
                onClosePress={() => {
                    this.props.onClosePress();
                    Animated.spring(this.state.animatedImageCard, {
                        toValue: 0,
                    }).start();
                }}
            />
        );
    }


    render() {
        return (
            <View style={{ ...AppConfig.window }}>
                <FlatList
                    horizontal
                    data={this.props.data}
                    renderItem={item => this.renderItem(item)}
                    keyExtractor={keyExtractor}
                    snapToAlignment={'center'}
                    showsHorizontalScrollIndicator={false}
                    pagingEnabled
                    scrollEventThrottle={1}
                    onScroll={
                        Animated.event(
                            [{ nativeEvent: { contentOffset: { x: this.state.scrollX } } }])
                    }
                />
            </View>
        );
    }
}

export default ScrollableGallery;
