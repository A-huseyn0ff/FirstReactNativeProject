// import React, { useRef } from 'react';
// import { View, Text, StyleSheet, Image, Dimensions, Animated, TouchableOpacity } from 'react-native';
// import Swiper from 'react-native-swiper';

// const OnboardingScreen = () => {
//   const fadeAnim = useRef(new Animated.Value(0)).current;

//   const fadeIn = () => {
//     Animated.timing(fadeAnim, {
//       toValue: 1,
//       duration: 500,
//       useNativeDriver: true,
//     }).start();
//   };

//   const fadeOut = () => {
//     Animated.timing(fadeAnim, {
//       toValue: 1,
//       duration: 500,
//       useNativeDriver: true,
//     }).start();
//   };

//   const handleIndexChanged = () => {
//     fadeIn();
//     setTimeout(fadeOut, 1000); // Fade out after 1 second
//   };

//   return (
//     <View style={styles.container}>
//       <Swiper
//         style={styles.wrapper}
//         showsButtons={false}
//         loop={false}
//         onIndexChanged={handleIndexChanged}
//       >
//         <View style={styles.slide}>
//           <Animated.Image
//             source={require('./assets/R.jpg')}
//             style={[styles.image, { opacity: fadeAnim }]}
//           />
//           <Text style={styles.text}>Welcome to Our App!</Text>
//           <Text style={styles.subtext}>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</Text>
//         </View>
//         <View style={styles.slide}>
//           <Animated.Image
//             source={require('./assets/FAQ.png')}
//             style={[styles.image, { opacity: fadeAnim }]}
//           />
//           <Text style={styles.text}>Discover Amazing Features</Text>
//           <Text style={styles.subtext}>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</Text>
//         </View>
//         <View style={styles.slide}>
//           <Animated.Image
//             source={require('./assets/Lets-Get-Started.png')}
//             style={[styles.image, { opacity: fadeAnim }]}
//           />
//           <Text style={styles.text}>Get Started Now!</Text>
//           <Text style={styles.subtext}>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</Text>
//         </View>
//       </Swiper>
//       {/* <View style={styles.buttonContainer}>
//         <TouchableOpacity style={styles.button}>
//           <Text style={styles.buttonText}>Next</Text>
//         </TouchableOpacity>
//         <TouchableOpacity style={styles.button}>
//           <Text style={styles.buttonText}>Finish</Text>
//         </TouchableOpacity>
//       </View> */}
//     </View>
//   );
// };

// const { width } = Dimensions.get('window');
// const imageWidth = width * 0.7;

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//   },
//   wrapper: {},
//   slide: {
//     flex: 1,
//     justifyContent: 'center',
//     alignItems: 'center',
//     backgroundColor: '#fff',
//   },
//   image: {
//     width: imageWidth,
//     height: imageWidth,
//     marginBottom: 20,
//     resizeMode: 'contain',
//   },
//   text: {
//     fontSize: 24,
//     color: '#333',
//     fontWeight: 'bold',
//     marginBottom: 10,
//   },
//   subtext: {
//     fontSize: 16,
//     color: '#666',
//     textAlign: 'center',
//     paddingHorizontal: 20,
//   },
//   buttonContainer: {
//     flexDirection: 'row',
//     justifyContent: 'space-between',
//     paddingHorizontal: 20,
//     paddingBottom: 20,
//   },
//   button: {
//     backgroundColor: '#007bff',
//     paddingVertical: 10,
//     paddingHorizontal: 20,
//     borderRadius: 5,
//   },
//   buttonText: {
//     color: '#fff',
//     fontSize: 18,
//     fontWeight: 'bold',
//   },
// });

// export default OnboardingScreen;


import React, { useRef } from 'react';
import { View, Text, StyleSheet, Image, Dimensions, Animated, TouchableOpacity } from 'react-native';
import Swiper from 'react-native-swiper';

import { useNavigation } from '@react-navigation/native';

const OnboardingScreen = ({navigation}) => {
  const fadeAnim = useRef(new Animated.Value(0)).current;
// const navigation=useNavigation()
  const fadeIn = () => {
    Animated.timing(fadeAnim, {
      toValue: 1,
      duration: 500,
      useNativeDriver: true,
    }).start();
  };

  const fadeOut = () => {
    Animated.timing(fadeAnim, {
      toValue: 1,
      duration: 500,
      useNativeDriver: true,
    }).start();
  };

  const handleIndexChanged = (index) => {
    fadeIn(); // Fade in whenever slide changes
    if (index === 2) {
      setTimeout(fadeOut, 1000); // Fade out after 1 second if it's the last slide
    }
  };

  const gotoHome = () => {
    navigation.navigate('Home'); // Assuming 'Home' is the name of the screen component
  };

  return (
    <View style={styles.container}>
      <Swiper
        style={styles.wrapper}
        showsButtons={false}
        loop={false}
        onIndexChanged={handleIndexChanged}
      >
        <View style={styles.slide}>
          <Animated.Image
            source={require('./assets/R.jpg')}
            style={[styles.image, { opacity: fadeAnim }]}
          />
          <Text style={styles.text}>Welcome to Our App!</Text>
          <Text style={styles.subtext}>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</Text>
        </View>
        <View style={styles.slide}>
          <Animated.Image
            source={require('./assets/FAQ.png')}
            style={[styles.image, { opacity: fadeAnim }]}
          />
          <Text style={styles.text}>Discover Amazing Features</Text>
          <Text style={styles.subtext}>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</Text>
        </View>
        <View style={styles.slide}>
          <Animated.Image
            source={require('./assets/Lets-Get-Started.png')}
            style={[styles.image, { opacity: fadeAnim }]}
          />
          <Text style={styles.text}>Get Started Now!</Text>
          <Text style={styles.subtext}>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</Text>
          
          <TouchableOpacity style={styles.startButton} onPress={()=>gotoHome()}>
            <Text style={styles.startButtonText}>Start</Text>
          </TouchableOpacity>
          
        </View>
      </Swiper>
    </View>
  );
};

const { width } = Dimensions.get('window');
const imageWidth = width * 0.7;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  wrapper: {},
  slide: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
  },
  image: {
    width: imageWidth,
    height: imageWidth,
    marginBottom: 20,
    resizeMode: 'contain',
  },
  text: {
    fontSize: 24,
    color: '#333',
    fontWeight: 'bold',
    marginBottom: 10,
  },
  subtext: {
    fontSize: 16,
    color: '#666',
    textAlign: 'center',
    paddingHorizontal: 20,
  },
  startButton: {
    position: 'absolute',
    bottom: 20,
    right: 20,
    backgroundColor: '#007bff',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 5,
  },
  startButtonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
  },
});

export default OnboardingScreen;
