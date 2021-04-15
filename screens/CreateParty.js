import React, { useState } from "react";
import {
  Alert,
  Modal,
  StyleSheet,
  Text,
  Pressable,
  View,
  Button,
} from "react-native";
import { TextInput, TouchableOpacity } from "react-native-gesture-handler";
import Icon from "react-native-vector-icons/FontAwesome";

const CreateParty = ({ opener, setList }) => {
  const [modalVisible, setModalVisible] = useState(false);
  const [party, setParty] = useState({
    title: "",
    description: "",
    image: "",
  });

  const handleClose = () => {
    setModalVisible(!modalVisible);
    setParty({
      title: "",
      description: "",
      image: "",
    });
  };

  const handleSubmit = () => {
    if (party.title && party.description && party.image) {
      setList((prevList) => [...prevList, party]);
      setParty({
        title: "",
        description: "",
        image: "",
      });
      Alert.alert("Success Message:", "A new party is created successfully.");
    } else {
      Alert.alert("Validation Error!", "All fields are compulsory!");
    }
  };
  return (
    <View style={styles.centeredView}>
      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
          Alert.alert("Modal has been closed.");
          setModalVisible(!modalVisible);
        }}
      >
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
            <View style={styles.header}>
              <Text style={{ paddingRight: 40, fontSize: 20 }}>
                Create your own Party
              </Text>
              <Pressable onPress={handleClose}>
                <Icon name="window-close" size={25} />
              </Pressable>
            </View>

            <View style={styles.modalBody}>
              <Text style={styles.label}>Party Title</Text>
              <TextInput
                style={styles.textInput}
                placeholder="Mention your party title here"
                value={party.title}
                onChangeText={(value) => setParty({ ...party, title: value })}
              />
              <Text style={styles.label}>Party ImageURL</Text>
              <TextInput
                style={styles.textInput}
                placeholder="Your party imageURL"
                value={party.image}
                onChangeText={(value) => setParty({ ...party, image: value })}
              />
              <Text style={styles.label}>Party Description</Text>
              <TextInput
                style={styles.textInput}
                placeholder="Your party description goes here"
                value={party.description}
                onChangeText={(value) =>
                  setParty({ ...party, description: value })
                }
              />
              <TouchableOpacity>
                <Button onPress={handleSubmit} title="Upload" />
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </Modal>
      <Text onPress={() => setModalVisible(true)} style={styles.textStyle}>
        {opener}
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  centeredView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 22,
  },
  modalView: {
    margin: 20,
    backgroundColor: "white",
    borderRadius: 20,
    padding: 35,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  button: {
    borderRadius: 20,
    padding: 10,
    elevation: 2,
  },
  buttonClose: {
    backgroundColor: "#2196F3",
  },
  textStyle: {
    color: "white",
    fontWeight: "bold",
    textAlign: "center",
    marginBottom: 15,
  },
  modalText: {
    marginBottom: 15,
    textAlign: "center",
  },

  header: {
    flexDirection: "row",
    alignItems: "center",
    width: "100%",
    paddingBottom: 10,
    borderBottomWidth: 1,
  },
  modalBody: {
    padding: 10,
  },

  label: {
    marginTop: 5,
    color: "#000",
  },

  textInput: {
    paddingVertical: 10,
    color: "black",
    borderBottomWidth: 0.5,
  },
});

export default CreateParty;
