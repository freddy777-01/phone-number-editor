import {
  HStack,
  Icon,
  VStack,
  DeleteIcon,
  Modal,
  Container,
  FormControl,
  Button,
  Box,
  Text,
  Center,
} from "native-base";
import { StyleSheet, TextInput, SafeAreaView } from "react-native";
import { useState } from "react";
// import { useNavigation } from "@react-navigation/native";

export default function Home(props) {
  const [ShowModal, setShowModal] = useState(false);
  const [userName, setUserName] = useState({ name: "Android" });
  // const navigation = useNavigation();
  return (
    <SafeAreaView>
      <Container py={5}>
        <Modal isOpen={ShowModal} onClose={() => setShowModal(false)}>
          <Modal.Content maxWidth="400px">
            <Modal.CloseButton />
            <Modal.Header>Enter your Name</Modal.Header>
            <Modal.Body>
              <FormControl>
                <FormControl.Label>Name</FormControl.Label>
                <TextInput
                  style={styles.input}
                  placeholder="Enter your name"
                  onChangeText={(text) => setUserName({ name: text })}
                />
              </FormControl>
            </Modal.Body>
            <Modal.Footer>
              <Button
                flex={1}
                onPress={() =>
                  userName.name === "Android"
                    ? alert("Please give me your name")
                    : (props.navigation.navigate("Contacts"),
                      setShowModal(false))
                }
              >
                View Contacts
              </Button>
            </Modal.Footer>
          </Modal.Content>
        </Modal>

        <Box
          style={{
            position: "absolute",
            top: 35,
            left: 30,
          }}
        >
          <Text
            style={{
              textAlign: "center",
              fontSize: 20,
              fontWeight: "bold",
              color: "brown",
            }}
          >
            {userName.name}
          </Text>
        </Box>

        <Center h="100%" w="125%">
          <Button w={200} onPress={() => setShowModal(true)}>
            Start
          </Button>
        </Center>
      </Container>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  input: {
    height: 40,
    borderWidth: 0.5,
    paddingHorizontal: 10,
  },
});
