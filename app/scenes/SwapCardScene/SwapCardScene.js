import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { View, Animated, TouchableOpacity, Text } from 'react-native';

// Modules
import { connect } from 'react-redux';

// Actions
// Components
import SwapCard from 'app/components/cards/SwapCard/SwapCard';

// Helpers

// Config & Styling
import AppConfig from 'app/config';
import AppStyle from 'app/config/styles';
import AppAssets from 'app/assets';

// Local Relatives
import styles from './styles';

// Constants
const CARD_WIDTH = (AppConfig.window.width * 0.4);
const CARD_HEIGHT = (AppConfig.window.height / 3);
const CARD_CENTER_HEIGHT = (AppConfig.window.height / 2) - CARD_HEIGHT;
class SwapCardScene extends Component {
    static componentName = 'SwapCardScene';
    static propTypes = {
        navigator: PropTypes.any,
        item: PropTypes.object,
    };

    static defaultProps = {
    };

    constructor(props) {
        super(props);
        this.state = {
            cardStart: new Animated.Value(0),
        };
    }

    UNSAFE_componentWillMount() {
    }

    componentDidMount() {
        Animated.timing(this.state.cardStart, {
            toValue: 1,
            duration: 5000,
        }).start();
    }

    componentWillReceiveProps(/* nextProps */) {
    }

    renderCardStart() {
        return (
            <Animated.View
                style={{
                    position: 'absolute',
                    top: CARD_CENTER_HEIGHT,
                    left: this.state.cardStart.interpolate({
                        inputRange: [0, 0.5, 1],
                        outputRange: [AppStyle.PADDING, AppConfig.window.width - CARD_WIDTH, AppStyle.PADDING],
                    }),
                    transform: [
                        {
                            scaleY: this.state.cardStart.interpolate({
                                inputRange: [0, 0.25, 0.5, 0.75, 1],
                                outputRange: [1, 0.8, 0.9, 1.25, 1],
                            }),
                        },
                        {
                            scaleX: this.state.cardStart.interpolate({
                                inputRange: [0, 0.25, 0.5, 0.75, 1],
                                outputRange: [1, 0.8, 0.9, 1.25, 1],
                            }),
                        },
                    ],
                    zIndex: this.state.cardStart.interpolate({
                        inputRange: [0, 0.25, 0.5, 1],
                        outputRange: [3, 1, 2, 3],
                    }),
                }}
            >
                <SwapCard
                    {...this.props.item}
                    cardWidth={CARD_WIDTH}
                    cardHeight={CARD_HEIGHT}
                    textAnimated={this.state.cardStart}

                />
            </Animated.View>
        );
    }

    renderCardEnd() {
        return (
            <Animated.View
                style={{
                    position: 'absolute',
                    top: CARD_CENTER_HEIGHT,
                    right: this.state.cardStart.interpolate({
                        inputRange: [0, 0.5, 1],
                        outputRange: [AppStyle.PADDING, AppConfig.window.width - CARD_WIDTH, AppStyle.PADDING],
                    }),
                    transform: [
                        {
                            scaleY: this.state.cardStart.interpolate({
                                inputRange: [0, 0.25, 0.5, 0.75, 1],
                                outputRange: [1, 1.5, 1, 0.75, 1],
                            }),
                        },
                        {
                            scaleX: this.state.cardStart.interpolate({
                                inputRange: [0, 0.25, 0.5, 0.75, 1],
                                outputRange: [1, 1.5, 1, 0.75, 1],
                            }),
                        },
                    ],
                    zIndex: this.state.cardStart.interpolate({
                        inputRange: [0, 0.25, 0.5, 1],
                        outputRange: [2, 3, 2, 1],
                    }),
                }}
            >
                <SwapCard
                    photo={AppAssets.player3}
                    name={'AMIN MORADI'}
                    cardWidth={CARD_WIDTH}
                    cardHeight={CARD_HEIGHT}
                    textAnimated={this.state.cardStart}
                />
            </Animated.View>
        );
    }

    renderConfirmButton() {
        return (
            <TouchableOpacity
                style={{
                    width: AppConfig.window.width - (AppStyle.PADDING_TINY * 2),
                    height: AppStyle.BUTTON_SIZE,
                    backgroundColor: AppStyle.COLOR_GREEN_HOT,
                    alignSelf: 'center',
                    borderRadius: 5,
                    marginBottom: AppStyle.PADDING,
                    justifyContent: 'center',
                    alignItems: 'center',
                }}
                onPress={() => {
                    this.props.navigator.pop();
                }}
            >
                <Text
                    style={{
                        color: AppStyle.COLOR_WHITE,
                        fontWeight: '900',
                        textAlign: 'center',
                    }}
                >
              Confirm Swap
                </Text>
            </TouchableOpacity>
        );
    }

    render() {
        return (
            <View style={{ flex: 1, backgroundColor: AppStyle.COLOR_BLUE, justifyContent: 'flex-end' }}>
                {this.renderCardStart()}
                {this.renderCardEnd()}
                {this.renderConfirmButton()}
            </View>
        );
    }
}

const mapStateToProps = (state, own) => {
    console.log('own', own);
    return {};
};

const mapDispatchToProps = {
};

export default connect(mapStateToProps, mapDispatchToProps)(SwapCardScene);
