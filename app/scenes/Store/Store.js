import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { View } from 'react-native';

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

// Constants

class Store extends Component {
    static componentName = 'Store';
    static propTypes = {
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

    render() {
        return (
            <View />
        );
    }
}

const mapStateToProps = (state) => ({
});

const mapDispatchToProps = {
};

export default connect(mapStateToProps, mapDispatchToProps)(Store);
