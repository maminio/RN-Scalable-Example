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
        key: 'FANTASTIC',
        debounce: 100,
    },

    // App Details
    appName: 'Fantastic-TestApp',
    appVersion: 'v0.0.1',
    defaultLanguage: 'en',

    // Window Dimensions
    window: {
        width: window.width,
        height: window.height,
    },
};

