
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from '../screens/HomeScreen';
import AddTripScreen from '../screens/AddTripScreen';
import TripExpensesScreen from '../screens/TripExpensesScreen';
import AddExpenseScreen from '../screens/AddExpenseScreen';
import WelcomScreen from '../screens/WelcomScreen';
import SignInScreen from '../screens/SignInScreen';
import SignUpScreen from '../screens/SignUpScreen';


const Stack = createNativeStackNavigator();

export default function AppNavigation() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName='Welcom'  >
        <Stack.Screen options={{ headerShown: false}} name="Welcom" component={WelcomScreen} />
        <Stack.Screen options={{ headerShown: false}} name="Home" component={HomeScreen} />
        <Stack.Screen options={{ headerShown: false,presentation:'modal'}} name="SignIn" component={SignInScreen} />
        <Stack.Screen options={{ headerShown: false,presentation:'modal'}} name="SignUp" component={SignUpScreen} />
        <Stack.Screen options={{ headerShown: false}} name="AddTrip" component={AddTripScreen} />
        <Stack.Screen options={{ headerShown: false}} name="TripExpenses" component={TripExpensesScreen} />
        <Stack.Screen options={{ headerShown: false}} name="AddTripExpenses" component={AddExpenseScreen} />

      </Stack.Navigator>
    </NavigationContainer>
  );
}