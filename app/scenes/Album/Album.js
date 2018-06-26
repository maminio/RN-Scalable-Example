import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { View } from 'react-native';

// Modules
import { connect } from 'react-redux';

// Actions
// Components
import AlbumCard from 'app/components/cards/AlbumCard/AlbumCard';
// Helpers

// Config & Styling
import AppConfig from 'app/config';
import AppStyle from 'app/config/styles';
import AppAssets from 'app/assets';

// Local Relatives
import styles from './styles';


// Constants


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

];
class Album extends Component {
    static componentName = 'Album';
    static propTypes = {
        navigator: PropTypes.any,

    };

    static defaultProps = {
    };

    constructor(props) {
        super(props);

        this.state = {
        };
    }

    UNSAFE_componentWillMount() {
    }

    componentDidMount() {
    }

    componentWillReceiveProps(/* nextProps */) {
    }

    renderCards() {
        return (
            <View
                style={{
                    flexDirection: 'row',
                    justifyContent: 'space-between',
                    padding: AppStyle.PADDING,
                }}
            >
                {DATA.map((item,index) => (
                    <AlbumCard
                        key={`${index}`}
                        {...item}
                        onCardPress={() => {
                            this.props.navigator.showModal({
                                screen: 'HighlightScreen',
                                passProps: {
                                    onClosePress: () => {
                                        this.props.navigator.dismissModal();
                                    },
                                },
                            });
                        }}
                        onClosePress={() => {
                            this.props.navigator.toggleTabs({
                                to: 'show',
                                animated: true,
                            });
                        }}
                    />
                ))}
            </View>
        );
    }

    render() {
        return (
            <View
                style={{
                    backgroundColor: AppStyle.COLOR_BLUE_DARK,
                    flex: 1,
                    justifyContent: 'center',
                }}
            >
                {this.renderCards()}
            </View>
        );
    }
}

const mapStateToProps = state => ({
});

const mapDispatchToProps = {
};

export default connect(mapStateToProps, mapDispatchToProps)(Album);
