import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from "@react-navigation/native";
import TermsScreen from "../screens/Terms.Screen";
import SelectAnimalsScreen from "../screens/SelectAnimals.Screen";
import AttentionScreen from "../screens/Attention.Screen";
import ClickAnimalScreen from "../screens/ClickAnimal.Screen";
import GameLevel1Screen from "../screens/GameLevel1Screen";
import GameLevel2Screen from "../screens/GameLevel2Screen";
import GameLevel3Screen from "../screens/GameLevel3Screen";
import ReportSummaryScreen from "../screens/ReportSummary.Screen";
import ReportSummaryScreen2 from "../screens/ReportSummary.Screen2";
import WellDoneScreen from "../screens/WellDone.Screen";
import SelectSimilarAnimalScreen from "../screens/SelectSimilarAnimal.Screen";
import TopBottomAnimalScreen from "../screens/TopBottomAnimal.Screen";

const RootRoutes = () => {
  const Stack = createStackNavigator();
  return (
    <NavigationContainer independent={true}>
      <Stack.Navigator
        shifting="true"
        screenOptions={() => ({
          headerShown: false,
          gestureEnabled: true,
          cardOverlayEnabled: false,
          gestureDirection: "horizontal",
        })}
      >
        <Stack.Screen name="TermsScreen" component={TermsScreen} />
        <Stack.Screen name="SelectAnimalsScreen" component={SelectAnimalsScreen} />
        <Stack.Screen name="AttentionScreen" component={AttentionScreen} /> 
        <Stack.Screen name="ClickAnimalScreen" component={ClickAnimalScreen} /> 
        <Stack.Screen name="GameLevel1Screen" component={GameLevel1Screen} />
        <Stack.Screen name="GameLevel2Screen" component={GameLevel2Screen} />
        <Stack.Screen name="GameLevel3Screen" component={GameLevel3Screen} />
        <Stack.Screen name="ReportSummaryScreen" component={ReportSummaryScreen} />
        <Stack.Screen name="ReportSummaryScreen2" component={ReportSummaryScreen2} />
        <Stack.Screen name="WellDoneScreen" component={WellDoneScreen} />
        <Stack.Screen name="SelectSimilarAnimalScreen" component={SelectSimilarAnimalScreen} />
        <Stack.Screen name="TopBottomAnimalScreen" component={TopBottomAnimalScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};
export default RootRoutes;
