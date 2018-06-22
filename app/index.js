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


// const AppNavigator = createStackNavigator(AppScenes, {
//     headerMode: 'none',
//     cardStyle: {
//         backgroundColor: 'transparent',
//     },
// });
//
// const InitialScene = 'Gallery';


class App extends Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {

    }

    render() {
        this.navigation = addNavigationHelpers({
            dispatch: this.props.dispatch,
            route: this.props.navigation,
            state: this.props.navigation,
        });

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
