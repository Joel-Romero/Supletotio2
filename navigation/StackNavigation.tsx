import { createStackNavigator } from '@react-navigation/stack';
import Screen1 from '../sr/screen/Screen1';
import { Screen2 } from '../sr/screen/Screen2';
import { Screen3 } from '../sr/screen/Screen3';

const Stack = createStackNavigator();

export function StackNavigation() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Screen1" component={Screen1} />
      <Stack.Screen name="Screen2" component={Screen2} />
      <Stack.Screen name="Screen3" component={Screen3} />
      
    </Stack.Navigator>
  );
}