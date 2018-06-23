import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { StyleSheet, View, Animated, Text, TouchableOpacity } from 'react-native';

// Modules
import Icon from 'react-native-vector-icons/Ionicons';

// Actions
// Components
// Helpers

// Config & Styling
import AppConfig from 'app/config';
import AppStyle from 'app/config/styles';

// Local Relatives
import styles from './styles';

// Constants
const IMAGE_CARD_WIDTH = AppConfig.window.width - (AppStyle.PADDING * 2);

class ExpandableCard extends Component {
    static propTypes = {
        animatedImageCard: PropTypes.any,
        onCardPress: PropTypes.func.isRequired,
        photo: PropTypes.number,
        name: PropTypes.string,
        onClosePress: PropTypes.func.isRequired,
    };

    static defaultProps = {
    };

    constructor(props) {
        super(props);
    }

    renderCloseIcon() {
        return (
            <Animated.View
                style={{
                    position: 'absolute',
                    opacity: this.props.animatedImageCard.interpolate({
                        inputRange: [0, 1],
                        outputRange: [0, 1],
                    }),
                    left: AppStyle.PADDING_BIG,
                    top: AppStyle.PADDING_BIG,
                }}
            >
                <Icon
                    name="ios-close-circle"
                    color={AppStyle.COLOR_BLUE_DARK}
                    size={35}
                    reverse
                    onPress={() => {
                        this.props.onClosePress();
                    }}
                />
            </Animated.View>
        );
    }

    render() {
        const { photo, name } = this.props;
        return (
            <View
                style={{
                    backgroundColor: AppStyle.COLOR_WHITE,
                    ...AppConfig.window,
                    justifyContent: 'center',
                    alignItems: 'center',
                }}
            >
                <TouchableOpacity
                    activeOpacity={1}
                    onPress={() => {
                        Animated.spring(this.props.animatedImageCard, {
                            toValue: 1,
                        }).start();
                        this.props.onCardPress(true);
                    }}

                >
                    <Animated.View
                        style={{
                            shadowOffset: { width: 0, height: 10 },
                            shadowOpacity: this.props.animatedImageCard.interpolate({
                                inputRange: [0, 1],
                                outputRange: [1, 0],
                            }),
                            shadowColor: AppStyle.COLOR_BLUE_DARK,
                            shadowRadius: 5,
                            borderWidth: StyleSheet.hairlineWidth,
                            borderColor: AppStyle.COLOR_BLUE_DARK,
                            borderRadius: this.props.animatedImageCard.interpolate({
                                inputRange: [0, 1],
                                outputRange: [20, 0],
                            }),
                            paddingTop: AppStyle.PADDING_BIG * 2,
                            backgroundColor: AppStyle.COLOR_WHITE_TRANSPARENT,
                        }}
                    >
                        <Animated.Image
                            source={photo}
                            style={{
                                width: this.props.animatedImageCard.interpolate({
                                    inputRange: [0, 1],
                                    outputRange: [IMAGE_CARD_WIDTH, AppConfig.window.width],
                                }),
                                height: this.props.animatedImageCard.interpolate({
                                    inputRange: [0, 1],
                                    outputRange: [IMAGE_CARD_WIDTH, AppConfig.window.height],
                                }),
                                zIndex: this.props.animatedImageCard.interpolate({
                                    inputRange: [0, 1],
                                    outputRange: [1, 100],
                                }),
                                borderRadius: this.props.animatedImageCard.interpolate({
                                    inputRange: [0, 1],
                                    outputRange: [20, 0],
                                }),
                            }}
                            resizeMode={'cover'}
                        />
                    </Animated.View>
                </TouchableOpacity>
                <Text
                    style={{
                        top: AppStyle.PADDING_BIG,
                        color: 'black',
                        fontSize: 18,
                    }}
                >
                    {name}
                </Text>
                {this.renderCloseIcon()}
            </View>
        );
    }
}

export default ExpandableCard;
