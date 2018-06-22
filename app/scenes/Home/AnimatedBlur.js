import React, { Component } from 'react';
import { View } from 'react-native';
import { BlurView } from 'react-native-blur';
import AppConfig from 'app/config';
import actions from 'app/actions';
import { connect } from 'react-redux';

class AnimatedBlur extends Component {
    constructor(props) {
        super(props);
        props.status.addListener((value) => {
            if (value.value > 0) {
                this.setState({ status: true });
            }
            else {
                this.setState({ status: false });
            }
        });
        this.state = {
            modalBlur: 10,
            status: false,
        };
        this.shouldClose = false;
    }

    componentWillReceiveProps(nextProps) {
        if (nextProps.appNavigation !== this.props.appNavigation) {
            if (nextProps.appNavigation.length < this.props.appNavigation) {
                this.setState({ status: false });
            }
        }
    }


    render() {
        if (this.state.status) {
            return (
                <View style={{ width: AppConfig.window.width, height: AppConfig.window.height, position: 'absolute', zIndex: 5 }}>
                    <BlurView
                        style={{
                            position: 'absolute',
                            top: 0,
                            left: 0,
                            bottom: 0,
                            right: 0,
                        }}
                        blurType="light"
                        blurAmount={this.state.modalBlur}
                    />
                </View>
            );
        }
        return null;
    }
}


const mapStateToProps = state => ({
    appNavigation: state.navigation.routes,
});

const mapDispatchToProps = {
};

export default connect(mapStateToProps, mapDispatchToProps)(AnimatedBlur);
