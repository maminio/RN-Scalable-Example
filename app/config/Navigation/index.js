import { iconsMap, iconsLoaded } from 'app/assets/TabBarIcons';
import { tabs } from 'app/scenes/index';
import AppStyles from 'app/config/styles/index';

export default class NavigationConfig {

    generateAllTabs() {
        const { navigatorStyle } = this;
        return Object.keys(tabs).map(key => ({
            label: tabs[key].label,
            screen: tabs[key].screen,
            icon: iconsMap[key].icon,
            selectedIcon: iconsMap[key].selectedIcon,
            title: iconsMap[tabs[key].title],
            navigatorStyle,
        }));
    }


    generateTabs() {
        const generatedTabs = this.generateAllTabs();
        return {
            tabs: generatedTabs,
            tabsStyle: {
                tabBarButtonColor: AppStyles.TAB_BAR_ICON,
                tabBarSelectedButtonColor: AppStyles.TAB_BAR_SELECTED_ICON,
                tabBarBackgroundColor: AppStyles.TAB_BAR_COLOR,
                tabBarSelectedLabelColor: AppStyles.TAB_BAR_SELECTED_ICON,
                tabBarTranslucent: true,
                initialTabIndex: 1,

            },
            appStyle: {
                orientation: 'portrait',
                hideBackButtonTitle: true,
                navBarHidden: true,
                screenBackgroundColor: 'transparent',
                modalPresentationStyle: 'overCurrentContext',
            },
            navigatorStyle: {
                modalPresentationStyle: 'overCurrentContext',
                screenBackgroundColor: 'transparent',
            },
        };
    }

    generateSinglePageDefaultLoading() {
        return {
            screen: {
                screen: 'Home',
                title: 'Welcome',
                navigatorStyle: {
                    navBarHidden: true,
                    statusBarHideWithNavBar: true,
                },
                navigatorButtons: {},
            },
            animationType: 'fade',
        };
    }

    generateInitialAppConfig() {
        return {
            screen: {
                screen: 'Registration',
                navigatorStyle: {
                    navBarHidden: true,
                    statusBarHidden: true,
                    statusBarTextColorScheme: 'light',
                },
            },
            animationType: 'fade',
        };
    }


    get initApp() {
        return new Promise((res, rej) => {
            iconsLoaded.then(() => {
                const toPass = this.generateTabs();
                res(toPass);
            }).catch(() => {
                rej();
            });
        });
    }

    get defaultLoading() {
        return new Promise((res, rej) => {
            iconsLoaded.then(() => {
                const toPass = this.generateSinglePageDefaultLoading();
                res(toPass);
            }).catch(() => {
                rej();
            });
        });
    }

    get appInitilizeState() {
        return new Promise((res, rej) => {
            iconsLoaded.then(() => {
                const toPass = this.generateInitialAppConfig();
                res(toPass);
            }).catch(() => {
                rej();
            });
        });
    }
}

