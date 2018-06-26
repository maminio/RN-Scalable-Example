import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Image, View, Animated, Text } from 'react-native';

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

class SwapCard extends Component {
    static propTypes = {
        cardWidth: PropTypes.number,
        cardHeight: PropTypes.number,
        textAnimated: PropTypes.any,
        name: PropTypes.string,
        photo: PropTypes.any,
    };

    static defaultProps = {
    };


    render() {
        const { cardWidth, cardHeight, name, textAnimated } = this.props;

        return (
            <Animated.View
                style={{
                    width: cardWidth,
                    height: cardHeight,
                    shadowOffset: { width: 0, height: 1 },
                    shadowOpacity: 0.5,
                    shadowColor: AppStyle.COLOR_WHITE,
                    shadowRadius: 1,
                    backgroundColor: AppStyle.COLOR_GRAY_BLUE,
                    borderRadius: 8,
                }}
            >
                <View>
                    <Image
                        source={this.props.photo}
                        style={{ width: cardWidth, height: cardHeight, borderRadius: 8 }}
                    />
                </View>
                <Animated.Text
                    style={{
                        textAlign: 'center',
                        color: AppStyle.COLOR_WHITE,
                        padding: AppStyle.PADDING_TINY,
                        opacity: textAnimated.interpolate({
                            inputRange: [0, 0.1, 0.8, 1],
                            outputRange: [1, 0, 0, 1],
                        }),
                    }}
                >
                    {name}
                </Animated.Text>
            </Animated.View>
        );
    }
}

export default SwapCard;
