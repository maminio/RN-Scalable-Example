import React from 'react';
import { View } from 'react-native';
// Spinner

export default Component => props =>
    (<View style={{ flex: 1, backgroundColor: 'transparent' }} > <Component {...props} /> </View>);

