import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { View, Animated } from 'react-native';

// Modules
import { connect } from 'react-redux';
import Video from 'react-native-video';
import Icon from 'react-native-vector-icons/Ionicons';

// Actions
// Components
// Helpers

// Config & Styling
import AppConfig from 'app/config';
import AppStyle from 'app/config/styles';
import AppAssets from 'app/assets';
// Local Relatives
import styles from './styles';

// Constants

class HighlightScreen extends Component {
    static componentName = 'HighlightScreen';
    static propTypes = {
        onClosePress: PropTypes.func,
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

    renderVideo() {
        return (
            <Video
                source={AppAssets.video} // Can be a URL or a local file.
                ref={(ref) => {
                    this.player = ref;
                }}
                style={{
                    width: AppConfig.window.width / 2,
                    height: AppConfig.window.height / 2,
                    backgroundColor: 'transparent',
                    borderRadius: 10,
                }}
                resizeMode={'cover'}
            />
        );
    }

    renderCloseIcon() {
        return (
            <Animated.View
                style={{
                    position: 'absolute',
                    opacity: 1,
                    left: AppStyle.PADDING_BIG,
                    top: AppStyle.PADDING_BIG,
                }}
            >
                <Icon
                    name="ios-close-circle"
                    color={AppStyle.COLOR_WHITE}
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
        return (
            <View style={{ backgroundColor: AppStyle.COLOR_BLUE, flex: 1, justifyContent: 'center', alignItems: 'center' }} >
                {this.renderVideo()}
                {this.renderCloseIcon()}
            </View>
        );
    }
}

const mapStateToProps = state => ({
});

const mapDispatchToProps = {
};

export default connect(mapStateToProps, mapDispatchToProps)(HighlightScreen);
