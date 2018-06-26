import React, { Component } from 'react';
import PropTypes from 'prop-types';
import {
    View,
    Animated,
    TouchableOpacity,
    StyleSheet,
    Text,
} from 'react-native';

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
const IMAGE_CARD_WIDTH = AppConfig.window.width / 4;

class AlbumCard extends Component {
    static propTypes = {
        onCardPress: PropTypes.func,
        photo: PropTypes.any,
        name: PropTypes.string,
    };

    static defaultProps = {
    };

    constructor(props) {
        super(props);
        this.state = {
            animatedImageCard: new Animated.Value(0),
        };
    }

    render() {
        return (
            <View
                style={{
                    justifyContent: 'center',
                    alignItems: 'center',
                }}
            >
                <TouchableOpacity
                    onPress={() => {
                        this.props.onCardPress(true);
                    }}
                >
                    <Animated.View
                        style={{
                            shadowOffset: { width: 0, height: 10 },
                            borderWidth: StyleSheet.hairlineWidth,
                            borderColor: AppStyle.COLOR_BLUE_DARK,
                            borderRadius: this.state.animatedImageCard.interpolate({
                                inputRange: [0, 1],
                                outputRange: [8, 0],
                            }),
                            paddingTop: AppStyle.PADDING_BIG * 2,
                            backgroundColor: AppStyle.COLOR_WHITE_TRANSPARENT,
                        }}
                    >
                        <Animated.Image
                            source={this.props.photo}
                            style={{
                                width: this.state.animatedImageCard.interpolate({
                                    inputRange: [0, 1],
                                    outputRange: [IMAGE_CARD_WIDTH, AppConfig.window.width],
                                }),
                                height: this.state.animatedImageCard.interpolate({
                                    inputRange: [0, 1],
                                    outputRange: [IMAGE_CARD_WIDTH, AppConfig.window.height],
                                }),
                                zIndex: this.state.animatedImageCard.interpolate({
                                    inputRange: [0, 1],
                                    outputRange: [1, 100],
                                }),
                                borderRadius: this.state.animatedImageCard.interpolate({
                                    inputRange: [0, 1],
                                    outputRange: [20, 0],
                                }),

                            }}
                            resizeMode={'cover'}
                        />
                    </Animated.View>
                    <Text
                        style={{
                            top: AppStyle.PADDING_BIG,
                            color: AppStyle.COLOR_WHITE,
                            fontSize: 18,
                        }}
                    >
                        {this.props.name}
                    </Text>
                </TouchableOpacity>

            </View>
        );
    }
}

export default AlbumCard;
