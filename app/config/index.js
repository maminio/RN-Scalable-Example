import {
    Platform,
    Dimensions,
    NativeModules,
} from 'react-native';

const window = Dimensions.get('window');


export default {
    isAndroid: Platform.OS === 'android',
    isIphoneX: NativeModules.DeviceInfo.isIPhoneX_deprecated,
    isDev: true,

    persistStore: {
        key: 'FANTASTEC',
        debounce: 100,
    },

    // App Details
    appName: 'Fantastec-TestApp',
    appVersion: 'v0.0.1',
    defaultLanguage: 'en',

    // Window Dimensions
    window: {
        width: window.width,
        height: window.height,
    },
};

