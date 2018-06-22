import React, { Component } from 'react';
import PropType from 'prop-types';
import { View } from 'react-native';


// Modules
import { Provider, connect } from 'react-redux';
import { createStackNavigator } from 'react-navigation';
// AppScenes
import AppScenes from 'app/scenes';
// Redux-Store
import configureStore from 'app/config/store';


class App extends Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {

    }

    render() {
        return (
            <View
                style={{ flex: 1, backgroundColor: 'white' }}
            >
            </View>
        );
    }
}
const mapStateToProps = state => ({
});

const mapDispatchToProps = {
};


const AppCompose = connect(mapStateToProps, mapDispatchToProps)(App);


class Fantastic extends Component {
    constructor(props) {
        super(props);
        const { store } = configureStore();
        this.state = {
            store,
        };
    }

    render() {
        return (
            <Provider store={this.state.store}>
                <AppCompose />
            </Provider>
        );
    }
}

export default Fantastic;
