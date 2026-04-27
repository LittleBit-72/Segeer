import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';
import { Home as HomeIcon, BookOpen, User } from 'lucide-react-native';

// Import Screens yang sudah ada
import HomeScreen from './src/screens/Home';
import ArticleScreen from './src/screens/Article';
import ProfileScreen from './src/screens/Profile';
import SettingsScreen from './src/screens/Settings'; // File yang baru dibuat di atas

const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();

// 1. Bottom Tab Navigator (Menu Utama Bawah)
function MainTab() {
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarActiveTintColor: '#2D2D3A',
        tabBarInactiveTintColor: '#888',
        tabBarStyle: { height: 65, paddingBottom: 10, paddingTop: 5 },
        headerShown: true,
      }}
    >
      <Tab.Screen 
        name="Home" 
        component={HomeScreen} 
        options={{
          title: 'Segeer Home',
          tabBarIcon: ({ color }) => <HomeIcon color={color} size={24} />,
        }}
      />
      <Tab.Screen 
        name="Tips" 
        component={ArticleScreen} 
        options={{
          title: 'Tips Tidur',
          tabBarIcon: ({ color }) => <BookOpen color={color} size={24} />,
        }}
      />
      <Tab.Screen 
        name="Profile" 
        component={ProfileScreen} 
        options={{
          title: 'Profil Saya',
          tabBarIcon: ({ color }) => <User color={color} size={24} />,
        }}
      />
    </Tab.Navigator>
  );
}

// 2. Stack Navigator Utama
export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen 
          name="Main" 
          component={MainTab} 
          options={{ headerShown: false }} 
        />
        <Stack.Screen 
          name="Settings" 
          component={SettingsScreen} 
          options={{ title: 'Pengaturan' }} 
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}