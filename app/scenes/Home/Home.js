import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { View } from 'react-native';

// Modules
import { connect } from 'react-redux';

// Actions
// Components
import ScrollableGallery from 'app/views/ScrollableGallery/ScrollableGallery';

// Helpers

// Config & Styling & Assets
import AppConfig from 'app/config';
import AppStyles from 'app/config/styles';
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

class Home extends Component {
    static componentName = 'Home';
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

    renderPhotoScroller() {
        return (
            <ScrollableGallery
                data={DATA}
                onCardPress={() => {
                    this.props.navigator.toggleTabs({
                        to: 'hidden',
                        animated: true,
                    });
                }}
                onClosePress={() => {
                    this.props.navigator.toggleTabs({
                        to: 'show',
                        animated: true,
                    });
                }}
            />
        );
    }

    render() {
        return (
            <View style={{ flex: 1, backgroundColor: AppStyles.COLOR_BLUE_DARK }}>
                {this.renderPhotoScroller()}
            </View>
        );
    }
}

const mapStateToProps = state => ({
});

const mapDispatchToProps = {
};

export default connect(mapStateToProps, mapDispatchToProps)(Home);
