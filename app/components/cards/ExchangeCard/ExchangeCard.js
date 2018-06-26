import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { View, Animated, Image } from 'react-native';

// Modules
// Actions
// Components
// Helpers

// Config & Styling
import AppConfig from 'app/config';
import AppStyle from 'app/config/styles';

// Local Relatives
import styles from './styles';

// Constants

class ExchangeCard extends Component {
    static propTypes = {
        itemIndex: PropTypes.number,
        cardWidth: PropTypes.number,
        cardMargin: PropTypes.number,
        scrollX: PropTypes.any,
        cardHeight: PropTypes.number,
        photo: PropTypes.any,
    };

    static defaultProps = {
    };

    constructor(props) {
        super(props);
    }

    render() {
        const { itemIndex, cardWidth, cardMargin, cardHeight } = this.props;
        const scrollViewOffset = (AppConfig.window.width - cardWidth) / 2;
        const cardSize = cardWidth + (cardMargin * 2);
        return (
            <Animated.View
                style={{
                    width: cardWidth,
                    height: cardHeight,
                    borderRadius: 8,
                    backgroundColor: AppStyle.COLOR_WHITE,
                    alignSelf: 'center',
                    justifyContent: 'flex-end',
                    margin: cardMargin,
                    transform: [
                        {
                            scaleX: this.props.scrollX.interpolate({
                                inputRange: [
                                    ((itemIndex - 2) * cardSize) - scrollViewOffset,
                                    ((itemIndex - 1) * cardSize) - scrollViewOffset,
                                    ((itemIndex) * cardSize) - scrollViewOffset,
                                    ((itemIndex + 1) * cardSize) - scrollViewOffset,
                                    ((itemIndex + 2) * cardSize) - scrollViewOffset,
                                ],
                                outputRange: [1, 1, 1.2, 1, 1],
                                extrapolate: 'clamp',
                            }),
                        },
                        {
                            scaleY: this.props.scrollX.interpolate({
                                inputRange: [
                                    ((itemIndex - 2) * cardSize) - scrollViewOffset,
                                    ((itemIndex - 1) * cardSize) - scrollViewOffset,
                                    ((itemIndex) * cardSize) - scrollViewOffset,
                                    ((itemIndex + 1) * cardSize) - scrollViewOffset,
                                    ((itemIndex + 2) * cardSize) - scrollViewOffset,
                                ],
                                outputRange: [1, 1, 1.2, 1, 1],
                                extrapolate: 'clamp',
                            }),
                        },
                    ],
                }}
            >
                <Image
                    source={this.props.photo}
                    style={{ width: cardWidth, height: cardHeight, borderRadius: 8 }}
                />
            </Animated.View>
        );
    }
}

export default ExchangeCard;
