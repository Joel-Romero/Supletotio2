module.exports = function(api) {
  api.cache(true);
  return {
    presets: ['babel-preset-expo'],
  };
};



{/*import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import Screen1 from '../screens/Screen1';
import Screen2 from '../screens/Screen2';
import Screen3 from '../screens/Screen3';

const Stack = createStackNavigator();

export default function AppNavigator() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Screen1">
        <Stack.Screen name="Screen1" component={Screen1} />
        <Stack.Screen name="Screen2" component={Screen2} />
        <Stack.Screen name="Screen3" component={Screen3} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
import React from 'react';
import { View, Button, Text } from 'react-native';
import { CommonActions, useNavigation } from '@react-navigation/native';

export default function Screen1() {
  const navigation = useNavigation();

  return (
    <View>
      <Text>Pantalla de Inicio</Text>
      <Button title="Ver Productos" onPress={() => navigation.dispatch( CommonActions.navigate({name:'Screen2'}))} />
      <Button title="Contador" onPress={() => navigation.dispatch( CommonActions.navigate({name:'Screen3'}))} />
    </View>
  );
}*/}