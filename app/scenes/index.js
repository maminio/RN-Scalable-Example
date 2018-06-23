import React from 'react';
import { Navigation } from 'react-native-navigation';
import { icons as TabIcons } from 'app/assets/TabBarIcons'

import AppWrapper from './AppWrapper';
import Home from './Home';
import Album from './Album';
import Market from './Market';
import Spares from './Spares';
import Store from './Store';


const scenes = {
    Home: {
        screen: Home,
    },
    Album: {
        screen: Album,
    },
    Market: {
        screen: Market,
    },
    Spares: {
        screen: Spares,
    },
    Store: {
        screen: Store,
    },
};


export const tabs = {
    Home: {
        label: 'Home',
        screen: 'Home',
        ...TabIcons.Home,
    },
    Album: {
        label: 'Album',
        screen: 'Album',
        ...TabIcons.Album,
    },
    Market: {
        label: 'Market',
        screen: 'Market',
        ...TabIcons.Album,
    },
    Spares: {
        label: 'Spares',
        screen: 'Spares',
        ...TabIcons.Album,
    },
    Store: {
        label: 'Store',
        screen: 'Store',
        ...TabIcons.Album,
    },
};


export function registerScreens(store, Provider) {
    Object.keys(scenes).forEach((scene) => {
        Navigation.registerComponent(scene, () => AppWrapper(scenes[scene].screen), store, Provider);
    });
}

