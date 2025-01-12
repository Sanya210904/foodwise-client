import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {bottomTabsRoutes} from '../../model/constants/routeList';
import {styles} from './styles';
import BottomBarLink from '../BottomTabLink/BottomTabLink';

const BottomTab = createBottomTabNavigator();

const BottomTabs = () => {
  return (
    <BottomTab.Navigator
      initialRouteName="home"
      screenOptions={({route}) => ({
        headerShown: false,
        tabBarShowLabel: false,
        tabBarStyle: styles.navigation,

        tabBarIcon: ({}) => {
          const iconWidth = 40;
          const iconHeight = 40;

          const foundRoute = bottomTabsRoutes.find(
            currentRoute => route.name === currentRoute.name,
          );
          if (!foundRoute) {
            console.log('Cannot find route');
            const RouteIcon = bottomTabsRoutes[0].icon;
            return <RouteIcon width={iconWidth} height={iconHeight} />;
          }

          const RouteIcon = foundRoute.icon;
          return <RouteIcon width={iconWidth} height={iconHeight} />;
        },
      })}>
      {bottomTabsRoutes.map(route => (
        <BottomTab.Screen
          key={route.name}
          name={route.name}
          component={route.component}
          options={{
            tabBarButton: props => (
              <BottomBarLink title={route.title} {...props} />
            ),
          }}
        />
      ))}
    </BottomTab.Navigator>
  );
};

export default BottomTabs;
