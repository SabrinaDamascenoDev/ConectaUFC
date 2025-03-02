import { StatusBar } from 'expo-status-bar';
import { StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { useFonts } from 'expo-font';
import { Poppins_400Regular, Poppins_700Bold, Poppins_200ExtraLight, Poppins_100Thin, Poppins_300Light } from '@expo-google-fonts/poppins';
import { JuliusSansOne_400Regular } from "@expo-google-fonts/julius-sans-one";

// Importando pages
import Home from './src/pages/home';
import InicialPage from './src/pages/inicialPage';
import Login from './src/pages/Login';

const Stack = createNativeStackNavigator();

export default function App() {
  const [fontsLoaded] = useFonts({
    Poppins_400Regular,
    Poppins_700Bold,
    Poppins_100Thin,
    Poppins_200ExtraLight,
    Poppins_300Light,
    JuliusSansOne_400Regular
});

  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName='Inicial'>
        <Stack.Screen name="Inicial" component={InicialPage} options={{ headerShown: false }}/>
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="Login" component={Login}  options={{headerShown: false}} />
      </Stack.Navigator>
      
      <StatusBar style="auto" />
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f8f8f8',
  }
});
