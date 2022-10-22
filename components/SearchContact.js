import { useNavigation } from "@react-navigation/native";
import { Container, Text, Box, Input, Center, SearchIcon } from "native-base";
import { SafeAreaView, StyleSheet, TextInput } from "react-native";

export default function SearchContact(props) {
  // const navigation = useNavigation();
  return (
    <Box safeAreaX>
      <Center>
        <Container px={5}>
          <Box py={2}>
            <TextInput
              size="md"
              placeholder="Find contact"
              width="100%"
              style={styles.Input}
            />
          </Box>
        </Container>
      </Center>
    </Box>
  );
}
const styles = StyleSheet.create({
  Input: {
    borderRadius: 50,
    borderWidth: 1,
    paddingHorizontal: 5,
    width: 200,
  },
});
