import React, { Component } from 'react';
import { View, Animated, TouchableOpacity } from 'react-native';
import ConfigCard from 'app/components/Cards/ConfigCard/ConfigCard';

import AppConfig from 'app/config';
import AppStyles from 'app/config/styles';
import Body from 'app/components/Common/Body/Body';
import Spacer from 'app/components/Common/Spacer/Spacer';
import { AgeSelectCard, GenderCard, DateCard, MutualFriendCard } from 'app/components/Cards/SquareSmallCard';
import TimeDayCard from 'app/components/Cards/TimeDayCard/TimeDayCard';

const CONFIG_VISIBLE_SMALL = ['AgeSelect', 'GenderSelection', 'DateSelection', 'MutualFriends'];
const CONFIG_VISIBLE_BIG = ['Time', 'Mutual Friends'];

export default class DatingConfigs extends Component {
    constructor(props) {
        super(props);

        this.state = {
            smallCardSizeTransform: [], /* new Animated.Value(0), */
        };
        this.smallCardSizeTransform = [];
        this.bigCardSizeTransform = [];
    }


    render() {
        return (
            <View>
                <Spacer vertical={35} />
                <Body fontSize={22} style={{ paddingLeft: AppStyles.PADDING_SMALL }} bold color={'white'}>
                    You’re looking for…
                </Body>
                {/* <Spacer vertical={5}/> */}
                <View style={{ flexDirection: 'row', flexWrap: 'wrap', justifyContent: 'space-between', padding: AppStyles.PADDING_SMALL }}>
                    <AgeSelectCard
                        currentData={this.props.currentData.agePreference}
                        onPress={() => {
                            this.props.onCardPress('AgeSelect');
                        }}
                    />
                    <GenderCard
                        currentData
                        onPress={() => {
                            this.props.onCardPress('GenderSelection');
                        }}
                        gender={this.props.currentData.preferredGender}
                    />
                    <DateCard
                        onPress={() => {
                            this.props.onCardPress('DateSelection');
                        }}
                        dateType={this.props.currentData.dateType}
                    />
                    <TimeDayCard
                        currentData={this.props.currentData.timeOfDay}
                        onPress={() => {
                            this.props.onCardPress('TimeSelection');
                        }}
                    />
                    {/* <MutualFriendCard
                        currentData={this.props.currentData.mutualFriendRange}
                        onPress={() => {
                            this.props.onCardPress('MutualFriendsConfig');
                        }}
                    /> */}
                </View>

            </View>
        );
    }
}
