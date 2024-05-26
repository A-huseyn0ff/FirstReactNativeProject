// import { createStackNavigator } from '@react-navigation/stack';
// import { NavigationContainer } from '@react-navigation/native';
// import React from 'react';

//  // Create this screen component if needed
// import Todo from './Todo';
// import Home from './Home';

// const Tab = createBottomTabNavigator();

// function AppNavigator() {
//   return (
//     <NavigationContainer>
//       <Tab.Navigator
//         screenOptions={({ route }) => ({
//           tabBarIcon: ({ focused, color, size }) => {
//             let iconName;

//             if (route.name === 'TodoList') {
//               iconName = focused ? 'list' : 'list-outline';
//             } else if (route.name === 'Home') {
//               iconName = focused ? '' : 'add-circle-outline';
//             }

//             return <Ionicons name={iconName} size={size} color={color} />;
//           },
//         })}
//         tabBarOptions={{
//           activeTintColor: 'blue',
//           inactiveTintColor: 'gray',
//         }}>
//         <Tab.Screen name="TodoList" component={Todo} />
//         <Tab.Screen name="Home" component={Home} />
//         {/* Add more screens here if needed */}
//       </Tab.Navigator>
//     </NavigationContainer>
//   );
// }

// const Stack = createStackNavigator();

// function AppNavigator() {
//   return (
//     <NavigationContainer>
//       <Stack.Navigator initialRouteName="TodoList">
//         <Stack.Screen name="Todo" component={Todo} />
//         <Stack.Screen name="Home" component={Home} />
//       </Stack.Navigator>
//     </NavigationContainer>
//   );
// }

// export default AppNavigator;
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import React from 'react';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Todo from './Todo';
import Home from './Home';
import Shop from './Shop'; // Import the Shop component

const Tab = createBottomTabNavigator();
// import { createDrawerNavigator } from '@react-navigation/drawer';
// const Drawer = createDrawerNavigator();
function AppNavigator() {
  
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={({ route }) => ({
          tabBarIcon: ({ focused, color, size }) => {
            let iconName;

            if (route.name === 'TodoList') {
              iconName = focused ? 'list' : 'list-outline';
            } else if (route.name === 'Home') {
              iconName = focused ? 'home' : 'home-outline'; // Changed icon name
            } else if (route.name === 'Shop') {
              iconName = focused ? 'cart' : 'cart-outline'; // Icon for Shop screen
            }

            return <Ionicons name={iconName} size={size} color={color} />;
          },
        })}
        tabBarOptions={{
          activeTintColor: 'blue',
          inactiveTintColor: 'gray',
        }}>
        <Tab.Screen name="TodoList" component={Todo} />
        <Tab.Screen name="Home" component={Home} />
        <Tab.Screen name="Shop" component={Shop} /> 
      </Tab.Navigator>
    </NavigationContainer>
  );
}

export default AppNavigator;

