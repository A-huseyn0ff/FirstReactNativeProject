

// import React, { useState, useEffect } from 'react';
// import { View, Text, StyleSheet, Button } from 'react-native';
// import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
// import { NavigationContainer } from '@react-navigation/native';
// import Ionicons from 'react-native-vector-icons/Ionicons';
//  // Import your OnboardingScreen component
// import Todo from './Todo';
// import Home from './Home';
// import Shop from './Shop';
// import OnboardingScreen from './onboardingscreen';


// const Tab = createBottomTabNavigator();

// function AppNavigator() {
//   const [showOnboarding, setShowOnboarding] = useState(true);

//   useEffect(() => {
//     // Check if user has seen onboarding before
//     // You can implement logic to check this using AsyncStorage or some other method
//     // For this example, I'll use a simple boolean value stored in state
//     const hasSeenOnboarding = false; // Replace this with your actual logic

//     if (hasSeenOnboarding) {
//       setShowOnboarding(false);
//     }
//   }, []);

//   const handleOnboardingComplete = () => {
//     // Mark onboarding as completed
//     // You can store this information using AsyncStorage or some other method
//     // For this example, I'll just update the state
//     setShowOnboarding(false);
//   };

//   if (showOnboarding) {
//     return <NavigationContainer>
//   <OnboardingScreen onComplete={handleOnboardingComplete} />
//   </NavigationContainer>;
//   }

//   return (
//     <NavigationContainer>
//       <Tab.Navigator
//         screenOptions={({ route }) => ({
//           tabBarIcon: ({ focused, color, size }) => {
//             let iconName;

//             if (route.name === 'TodoList') {
//               iconName = focused ? 'list' : 'list-outline';
//             } else if (route.name === 'Home') {
//               iconName = focused ? 'home' : 'home-outline';
//             } else if (route.name === 'Shop') {
//               iconName = focused ? 'cart' : 'cart-outline';
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
//         <Tab.Screen name="Shop" component={Shop} />
//       </Tab.Navigator>
//     </NavigationContainer>
//   );
// }

// export default AppNavigator;
import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer, useNavigation } from '@react-navigation/native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Todo from './Todo';
import Home from './Home';
import Shop from './Shop';
import OnboardingScreen from './onboardingscreen';


const Tab = createBottomTabNavigator();

function AppNavigator() {
  const [showOnboarding, setShowOnboarding] = useState(true);

  useEffect(() => {
    // Check if user has seen onboarding before
    // You can implement logic to check this using AsyncStorage or some other method
    // For this example, I'll use a simple boolean value stored in state
    const hasSeenOnboarding = false; // Replace this with your actual logic

    if (hasSeenOnboarding) {
      setShowOnboarding(false);
    }
  }, []);

  const handleOnboardingComplete = () => {
    // Mark onboarding as completed
    // You can store this information using AsyncStorage or some other method
    // For this example, I'll just update the state
    setShowOnboarding(false);
  };

  if (showOnboarding) {
    return (
     
        <OnboardingScreen onComplete={handleOnboardingComplete} />
      
    );
  }

  return (
 
      <Tab.Navigator
        screenOptions={({ route }) => ({
          tabBarIcon: ({ focused, color, size }) => {
            let iconName;

            if (route.name === 'TodoList') {
              iconName = focused ? 'list' : 'list-outline';
            } else if (route.name === 'Home') {
              iconName = focused ? 'home' : 'home-outline';
            } else if (route.name === 'Shop') {
              iconName = focused ? 'cart' : 'cart-outline';
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
    
  );
}

export default AppNavigator;

