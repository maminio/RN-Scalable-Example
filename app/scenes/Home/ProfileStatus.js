import React, { Component } from 'react';
import { View, Animated, TouchableOpacity, FlatList } from 'react-native';
import Spacer from 'app/components/Common/Spacer/Spacer';
import Body from 'app/components/Common/Body/Body';
import AppConfig from 'app/config';
import AppStyles from 'app/config/styles';
import { CoinCard } from 'app/components/Cards/ConfigCard';
import BonusCard from 'app/components/Cards/BonusCard';

export default class ProfileStatus extends Component {
    renderRowData(data) {
        return (
            <TouchableOpacity
                onPress={() => {
                    this.props.onCardPress(data.item.screen);
                }}
                activeOpacity={1}
                /* onPressIn={()=>{
                    do some animation
                }} */
            >
                <View

                    style={{
                        width: (AppConfig.window.width) -
                    (AppStyles.PADDING_SMALL * 4),
                        height: (AppConfig.window.width / 2) -
                    (AppStyles.PADDING_SMALL) -
                    (AppStyles.PADDING_SMALL / 2),
                        marginRight: 22,
                        backgroundColor: 'white',
                        borderRadius: 20,
                        justifyContent: 'center',

                    }}
                >
                    <Body center color={AppStyles.COLOR_NAVI_BLUE}>
                        {data.screen}
                    </Body>
                </View>
            </TouchableOpacity>
        );
    }


    renderCoinCard() {
        return (
            <CoinCard
                numberOfCoins={this.props.currentData.currentCoin}
                onPress={() => { this.props.onCardPress('Coins'); }}
            />
        );
    }

    renderBounsCard() {
        return <BonusCard onPress={() => { this.props.onCardPress('ReferFriend'); }} />;
    }


    render() {
        return (
            <View>
                <Spacer vertical={35} />
                <Body fontSize={20} style={{ paddingLeft: AppStyles.PADDING_SMALL }} bold color={'white'}>
                Your status
                </Body>
                <Spacer vertical={5} />
                <View >
                    {this.renderCoinCard()}
                    {/*{this.renderBounsCard()}*/}
                </View>

            </View>
        );
    }
}
