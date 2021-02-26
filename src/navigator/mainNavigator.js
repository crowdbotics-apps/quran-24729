import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import {createDrawerNavigator} from 'react-navigation-drawer';

import SplashScreen from "../features/SplashScreen";
import SideMenu from './sideMenu';
//@BlueprintImportInsertion
import ArticleList209693Navigator from '../features/ArticleList209693/navigator';
import ArticleList209692Navigator from '../features/ArticleList209692/navigator';
import ArticleList209691Navigator from '../features/ArticleList209691/navigator';

/**
 * new navigators can be imported here
 */

const AppNavigator = {

    //@BlueprintNavigationInsertion
ArticleList209693: { screen: ArticleList209693Navigator },
ArticleList209692: { screen: ArticleList209692Navigator },
ArticleList209691: { screen: ArticleList209691Navigator },

    /** new navigators can be added here */
    SplashScreen: {
      screen: SplashScreen
    }
};

const DrawerAppNavigator = createDrawerNavigator(
  {
    ...AppNavigator,
  },
  {
    contentComponent: SideMenu
  },
);

const AppContainer = createAppContainer(DrawerAppNavigator);

export default AppContainer;
