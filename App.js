import { StatusBar } from "expo-status-bar";
import {
  NativeBaseProvider,
  Box,
  Container,
  Text,
  Heading,
  Center,
  FlatList,
  Button,
  Modal,
  FormControl,
  Input,
  Stack,
  SearchIcon
} from "native-base";
import { useState } from "react";
import { StyleSheet, View ,TextInput} from "react-native";
import { NavigationContainer,useNavigation } from "@react-navigation/native";
import ContactList from "./components/ContactList";
import Home from "./components/Home";
import SearchContact from "./components/SearchContact";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

const stack = createNativeStackNavigator()

export default function App() {
  // const navigation = useNavigation();
  return (
    <NativeBaseProvider>
      <StatusBar backgroundColor="green" color="white"/>
    <NavigationContainer>
    <stack.Navigator initialRouteName="Search">
      <stack.Screen name="Home" component={Home} options={{title:"Welcome"}}  />
      <stack.Screen name="Contacts" component={ContactList} options={({navigation})=>(
        {
          headerRight:()=>(
          <Button leftIcon={<SearchIcon color="coolGray.400" />} variant="outline" borderRadius={50} _text={{color:"coolGray.400"}} colorScheme="amber.600" onPress={()=>navigation.navigate("Search")}>Search</Button>
          )
          })}/>
      <stack.Screen name="Search" component={SearchContact}/>
    </stack.Navigator>
    </NavigationContainer>
    </NativeBaseProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  input:{
    height:40,
    borderWidth:0.5,
    paddingHorizontal:10
  }
});
