import {
  Box,
  Center,
  Container,
  Heading,
  Text,
  VStack,
  HStack,
  Pressable,
  FlatList,
  Flex,
} from "native-base";
import * as Contacts from "expo-contacts";
import { useEffect, useState } from "react";
// import { Pressable } from "react-native";

export default function ContactList(props) {
  let nums = [1, 2, 3, 4];
  const [contacts, setContacts] = useState([]);
  useEffect(() => {
    (async () => {
      const { status } = await Contacts.requestPermissionsAsync();
      if (status === "granted") {
        const { data } = await Contacts.getContactsAsync({
          fields: [Contacts.Fields.PhoneNumbers],
        });
        if (data.length > 0) {
          const Contact = data[0];
          // console.log(data);
          setContacts(data);
        }
      }
    })();
  }, []);
  return (
    <>
      <Box bg={"amber.400"}>
        <Center>
          <Heading>My Contact List</Heading>
        </Center>
      </Box>
      <Box>
        <FlatList
          data={contacts}
          renderItem={({ item }) => {
            return (
              <Pressable
                shadow={2}
                my={1}
                h={10}
                onPress={() => alert(item.name)}
              >
                <Flex direction="row" py={2}>
                  <Text pl={5} flexGrow={1}>
                    {item.firstName ? (
                      item.name
                    ) : (
                      <Text color="red.300">Name Not Set</Text>
                    )}
                  </Text>
                </Flex>

                {/* {item.phoneNumbers
                  ? item.phoneNumbers.map((obj) => {
                      return (
                        <VStack space={1}>
                          <Text>{obj.number}</Text>
                        </VStack>
                      );
                    })
                  : ""} */}
              </Pressable>
            );
          }}
        />
      </Box>
    </>
  );
}
