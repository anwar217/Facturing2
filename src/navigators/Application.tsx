import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';

import Dashboard from '@/screens/Dashboard';
import { useTheme } from '@/theme';

import type { ApplicationStackParamList } from '@/types/navigation';


const Stack = createStackNavigator<ApplicationStackParamList>();

function ApplicationNavigator() {
	const { variant, navigationTheme } = useTheme();

	return (
		<NavigationContainer theme={navigationTheme}>
			<Stack.Navigator key={variant} screenOptions={{ headerShown: false }}>
				<Stack.Screen name="Startup" component={Dashboard} />
			
			</Stack.Navigator>
		</NavigationContainer>
	);
}

export default ApplicationNavigator;
