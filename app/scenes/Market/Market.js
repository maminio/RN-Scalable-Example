import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { View, Animated } from 'react-native';

// Modules
import { connect } from 'react-redux';

// Actions
// Components
// Helpers

// Config & Styling
import AppConfig from 'app/config';
import AppStyle from 'app/config/styles';

// Local Relatives
import styles from './styles';
import MarketScroller from 'app/views/MarketScroller/MarketScroller';
import AppAssets from 'app/assets';

// Constants
const CARDS_MARGIN = 12;
const CARD_WIDTH = (AppConfig.window.width / 2);
const CARD_HEIGHT = (AppConfig.window.height / 2);
const CARD_OFFSET = (AppConfig.window.width - CARD_WIDTH) / 2;
const FLAT_LIST_INTERVAL = CARD_WIDTH + (CARDS_MARGIN * 2);

const DATA = [
    {
        name: 'Kun Agero',
        photo: AppAssets.player1,
    },
    {
        name: 'Kun Agero',
        photo: AppAssets.player2,
    },
    {
        name: 'Kun Agero',
        photo: AppAssets.player2,
    },
    {
        name: 'Kun Agero',
        photo: AppAssets.player2,
    },
    {
        name: 'Kun Agero',
        photo: AppAssets.player2,
    },
    {
        name: 'Kun Agero',
        photo: AppAssets.player2,
    },

];

const calculateIndex = scrollX => Math.floor((scrollX._value + CARD_OFFSET) / (CARD_WIDTH + (CARDS_MARGIN * 2)));

class Market extends Component {
    static componentName = 'Market';
    static propTypes = {
    };

    static defaultProps = {
    };

    constructor(props) {
        super(props);

        const scrollX = new Animated.Value(0);
        props.navigator.toggleNavBar({
            to: 'show',
            animated: false,
        });
        props.navigator.setTitle({ title: 'SWAP' });

        props.navigator.setStyle({
            navBarBackgroundColor: AppStyle.COLOR_BLUE_DARK,
            navBarCustomView: 'SwapNavbar',
            navBarCustomViewInitialProps: {
                onNextPress: () => {
                    this.props.navigator.push({
                        screen: 'SwapCardScene',
                        animated: true,
                        animationType: 'slide',
                        title: 'SWAP',
                        backButtonHidden: false,
                        passProps: {
                            item: DATA[calculateIndex(scrollX)],
                        },
                        navigatorStyle: {
                            tabBarHidden: true,
                            navBarHidden: false,
                            navBarBackgroundColor: AppStyle.COLOR_BLUE_DARK,
                            navBarTextColor: AppStyle.COLOR_WHITE,
                            navBarButtonColor: AppStyle.COLOR_WHITE,
                        },
                    });
                },
            },


        });

        this.state = {
            scrollX,
        };
    }

    UNSAFE_componentWillMount() {

    }

    componentDidMount() {
    }

    componentWillReceiveProps(/* nextProps */) {
    }


    render() {
        return (
            <View style={{ flex: 1, backgroundColor: AppStyle.COLOR_BLUE_DARK }}>
                <MarketScroller
                    data={DATA}
                    scrollX={this.state.scrollX}
                />
            </View>
        );
    }
}

const mapStateToProps = state => ({
});

const mapDispatchToProps = {
};

export default connect(mapStateToProps, mapDispatchToProps)(Market);
