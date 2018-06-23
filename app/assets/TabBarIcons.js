import { PixelRatio } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';

const navIconSize = (__DEV__ === false && Platform.OS === 'android') ? PixelRatio.getPixelSizeForLayoutSize(30) : 30; // eslint-disable-line
const replaceSuffixPattern = /--(active|big|small|very-big)/g;

const icons = {
    Home: {
        icon: 'ios-football',
        selectedIcon: 'ios-football',
        size: navIconSize,
    },
    Album: {
        icon: 'ios-albums',
        selectedIcon: 'ios-albums',
        size: navIconSize,
    },
    Market: {
        icon: 'ios-git-compare',
        selectedIcon: 'ios-git-compare',
        size: navIconSize,
    },
    Spares: {
        icon: 'ios-qr-scanner',
        selectedIcon: 'ios-qr-scanner',
        size: navIconSize,
    },
    Store: {
        icon: 'ios-cart',
        selectedIcon: 'ios-cart',
        size: navIconSize,
    },
};

const loadIcon = (iconName, iconSize, tabName, selected) => new Promise((res, rej) => {
    Ionicons.getImageSource(
        iconName.replace(replaceSuffixPattern, ''),
        iconSize,
    ).then(loadedIcon => res({ tabName, [selected]: loadedIcon })).catch(err => rej(err));
});

const iconsMap = {};
const iconsLoaded = new Promise((resolve, reject) => {
    const iconsToLoad = [];
    Object.keys(icons).map((tabName) => {
        iconsToLoad.push(loadIcon(icons[tabName].icon, icons[tabName].size, tabName, 'icon'));
        iconsToLoad.push(loadIcon(icons[tabName].selectedIcon, icons[tabName].size, tabName, 'selectedIcon'));
    });
    Promise.all(iconsToLoad).then((sources) => {
        sources.forEach((tabConfig) => {
            iconsMap[tabConfig.tabName] = { ...iconsMap[tabConfig.tabName], ...tabConfig };
        });
        resolve(true);
    }).catch(err => console.error('Icons load error', err));
});

export {
    iconsMap,
    iconsLoaded,
    icons,
};
