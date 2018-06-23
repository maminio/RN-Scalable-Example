import React, { Component } from 'react';
import { Navigation } from 'react-native-navigation';
import { registerScreens } from 'app/scenes';
import configureStore from 'app/config/store';
import { Provider } from 'react-redux';
import NavigationConfig from 'app/config/Navigation';

const { store } = configureStore();
registerScreens(store, Provider);


const startDefaultLoadingApp = (config) => {
    Navigation.startSingleScreenApp(config);
};

const startTabbarApp = (config) => {
    Navigation.startTabBasedApp(config);
};

const startOnboarding = (config) => {
    Navigation.startSingleScreenApp(config);
};


class Fantastic extends Component {
    constructor(props) {
        super(props);
        this.unSubscribe = store.subscribe(() => this.storeListener());
        this.navConfig = new NavigationConfig();
        this.navConfig.defaultLoading.then((config) => {
            startDefaultLoadingApp(config);
        });
        this.appDidLoadWithLoading = false;
    }

    storeListener() {
        const { boot } = store.getState().app;
        if (!boot.startupLoading && !this.appDidLoadWithLoading) {
            this.appDidLoadWithLoading = true;
            this.unSubscribe();
            this.navConfig.initApp.then((config) => {
                startTabbarApp(config);
            });
        }
    }
}

export default Fantastic;
