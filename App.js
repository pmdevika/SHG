import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import home from './components/home';
import login from './components/login';
import createjoin from './components/createjoin'
import attendance from './components/attendence';
import unit from './components/unit';
import dashboard from './components/dashboard'
import editprofile from './components/editprofile';
import members from "./components/members"
import feed from "./components/feed"
import sendinvitation from "./components/sendinvitation"
const Stack = createNativeStackNavigator();

const MyStack = () => {
  return (
    
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="home"
          component={home}
          options={{title: ' '}}
        />
        <Stack.Screen name="login" component={login} options={{title:''}}/>
        <Stack.Screen name="createjoin" component={createjoin} options={{title:''}}/>
        <Stack.Screen name="attendance" component={attendance} options={{title:''}}/>
        <Stack.Screen name='unit' component={unit} options={{title:''}}/>
        <Stack.Screen name='dashboard' component={dashboard} options={{title:''}}/>
        <Stack.Screen name='editprofile' component={editprofile} options={{title:''}}/>
        <Stack.Screen name='members' component={members} options={{title:''}}/>
        <Stack.Screen name='sendinvitation' component={sendinvitation} options={{title:''}}/>
        <Stack.Screen name='feed' component={feed} options={{title:''}}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
};
export default MyStack