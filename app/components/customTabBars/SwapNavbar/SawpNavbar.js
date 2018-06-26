import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { View, Text, TouchableOpacity } from 'react-native';

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

class SwapNavbar extends Component {
    static propTypes = {
        onNextPress: PropTypes.func,
    };

    static defaultProps = {
    };

    render() {
        return (
            <View style={{
                flexDirection: 'row',
                width: (AppConfig.window.width - 40),
            }}
            >
                <View
                    style={{ flex: 1, flexDirection: 'row' }}
                >
                    <View
                        style={{
                            flex: 1,
                            justifyContent: 'center',
                            alignItems: 'flex-start',
                        }}
                    >
                        <Text
                            style={{
                                width: 80,
                                textAlign: 'center',
                                fontSize: 35,
                                color: AppStyle.COLOR_WHITE,
                            }}
                        >
                            {'<'}
                        </Text>
                    </View>
                    <View
                        style={{
                            flex: 1,
                            justifyContent: 'center',
                            alignItems: 'center',
                        }}
                    >
                        <Text
                            style={{
                                textAlign: 'center',
                                fontWeight: '900',
                                color: AppStyle.COLOR_WHITE,
                            }}
                        >
                    SWAP
                        </Text>
                    </View>
                    <View
                        style={{
                            flex: 1,
                            justifyContent: 'center',
                            alignItems: 'flex-end',
                        }}
                    >
                        <TouchableOpacity
                            style={{
                                width: 80,
                                height: 45,
                                backgroundColor: AppStyle.COLOR_GREEN_HOT,
                                borderRadius: 10,
                                justifyContent: 'center',
                                alignItems: 'center',
                            }}
                            onPress={() => {
                                this.props.onNextPress();
                            }}
                        >
                            <Text
                                style={{
                                    textAlign: 'center',
                                    fontWeight: '500',
                                    color: AppStyle.COLOR_WHITE,
                                }}
                            >
                                NEXT
                            </Text>
                        </TouchableOpacity>
                    </View>
                </View>

            </View>
        );
    }
}

export default SwapNavbar;
