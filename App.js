import React from "react";
import {View, Text} from 'react-native'
import { Provider } from "react-redux";
import { NavigationContainer } from "@react-navigation/native";
import configureStore from "./src/redux/Store";
import { PersistGate } from "redux-persist/integration/react";
import { RootNavigation } from "./src/navigation/RootNavigator";

 const {store, persistor} = configureStore();

 const App =() => {
     return(
         <NavigationContainer>
             <Provider store={store}>
                 <PersistGate loading={null} persistor={persistor}>
                     <RootNavigation/>

                 </PersistGate>

             </Provider>
         </NavigationContainer>
     )
 }

export default App;