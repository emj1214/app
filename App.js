import { StatusBar } from 'expo-status-bar';
import React, { useState } from "react";
import { StyleSheet, Text, View, Button } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

const Stack = createStackNavigator();

function HomeScreen({ navigation }) {
  return (
    <View style={styles.background}>
      <Text style={styles.heading}>Business Test Prep!</Text>
      <Text style={styles.description}>Welcome! Here you can find test prep material for the Future Business Leaders of America (FBLA).   </Text>
      <Button style={styles.button}
        onPress={() => 
          navigation.navigate('About')
        }
        title="About"
        style={styles.button}
        />
      <Button style={styles.button}
        onPress={() => 
          navigation.navigate('Competitive Events')
        }
        title="Competitive Events"
        style={styles.button}
      />
      <StatusBar style="auto" />
      <View style={styles.space}></View>
    </View>
  );
}

function AboutScreen() {
  return (
    <View style={styles.background}>
      <Text style={styles.description}>
        Created by: Emma Johnson
        {"\n"}{"\n"}
        I'll edit this later too
        {"\n"}{"\n"}
        This app was not built by FBLA-PBL and is not directly affiliated with the organization. Emma Johnson is a former FBLA member who has attended NLC18, NLC19, and the first NLE (NLC20).
        {"\n"}{"\n"}
        The website was created to help students prepare for their local, state, and national conferences/competitions. Good luck to all!
      </Text>
      <StatusBar style="auto" />
    </View>
  );
}

function CompEvsScreen({ navigation }) {
  return (
    <View style={styles.background}>
      <Text style={styles.description}>
        Select a competitive event to begin
      </Text>
      <Button style={styles.button}
        onPress={() => 
          navigation.navigate('test 1')
        }
        title="test 1"
        style={styles.button}
      />
      <StatusBar style="auto" />
      <View style={styles.space}></View>
    </View>
  );
}

function test1Screen({}) {
  const [isSelected, setSelection] = useState(false);
  return (
    <View style={styles.background}>
      <Text style={styles.description}>
        Select a competitive event to begin
      </Text>
      <Button style={styles.button}
        onPress={() => 
          navigation.navigate('test 1')
        }
        title="test 1"
        style={styles.button}
      />
      <StatusBar style="auto" />
      <View style={styles.space}></View>
    </View>
  );
}

////

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="About" component={AboutScreen} />
        <Stack.Screen name="Competitive Events" component={CompEvsScreen} />
        <Stack.Screen name="test 1" component={test1Screen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;

////

const styles = StyleSheet.create({
  background: {
    backgroundColor: 'white',
    flex: 1,
    alignItems: 'center',
    justifyContent: 'space-evenly',
    padding: 24,
  },
  heading: {
    flex: 1,
    margin: 'auto',
    alignItems: 'center',
    textAlign: 'center',
    justifyContent: 'center',
    paddingTop: 48,
    fontSize: 36,
  },
  button: {
    flex: 1,
    margin: 'auto',
    alignItems: 'center',
    textAlign: 'center',
    justifyContent: 'center',
  },
  description: {
    flex: 1,
    margin: 'auto',
    alignItems: 'center',
    textAlign: 'center',
    justifyContent: 'center',
    fontSize: 18,
  },
  space: {
    flex: 1,
  },
});