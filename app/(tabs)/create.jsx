import { StyleSheet, Text, View, TextInput, TouchableOpacity, Image } from 'react-native';
import React, { useState } from 'react';

const Create = () => {
  const [playlistName, setPlaylistName] = useState('');
  const [songName, setSongName] = useState('');

  const handleCreatePlaylist = () => {
    // Handle playlist creation logic here
    console.log(`Creating playlist: ${playlistName} with song: ${songName}`);
  };

  return (
    <View style={styles.container}>
      {/* Image that covers the entire screen */}
      <Image 
        source={{ uri: 'assets/icon/1_aU4XSfnXPCsmm_-9JsK93g.gif' }} // Replace with your image URL or use require() for local images
        style={styles.image}
        resizeMode="cover" // Ensures the image covers the area
      />

      <View style={styles.overlay}>
        <Text style={styles.title}>Create Playlist</Text>

        <TextInput
          style={styles.input}
          placeholder="Playlist Name"
          value={playlistName}
          onChangeText={setPlaylistName}
          placeholderTextColor="#FFF" // Optional: color for placeholder text
        />

        <TextInput
          style={styles.input}
          placeholder="Song Name"
          value={songName}
          onChangeText={setSongName}
          placeholderTextColor="#FFF" // Optional: color for placeholder text
        />

        <TouchableOpacity style={styles.button} onPress={handleCreatePlaylist}>
          <Text style={styles.buttonText}>Create</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Create;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000', // Set the background color to black
    alignItems: 'center',
    justifyContent: 'center',
  },
  image: {
    position: 'absolute', // Position it absolutely
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
  },
  overlay: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 16,
    backgroundColor: 'rgba(0, 0, 0, 0.5)', // Semi-transparent overlay for better text visibility
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#FFF7D1',
    marginBottom: 20,
    textShadowColor: 'rgba(227, 36, 43, 0.8)', // Red glow
    textShadowOffset: { width: 0, height: 0 },
    textShadowRadius: 10,
  },
  input: {
    width: '100%',
    padding: 12,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: '#FFF', // Set a white border
    backgroundColor: 'rgba(255, 255, 255, 0.2)', // Lightly tinted background for inputs
    marginBottom: 15,
  },
  button: {
    backgroundColor: '#E3242B', // Set button color
    borderRadius: 10,
    padding: 12,
    alignItems: 'center',
    width: '100%',
    shadowColor: '#E3242B', // Shadow for button glow
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.5,
    shadowRadius: 5,
    elevation: 5, // Android elevation for shadow
  },
  buttonText: {
    color: '#FFF',
    fontWeight: 'bold',
    fontSize: 16,
    textShadowColor: 'rgba(227, 36, 43, 0.8)', // Red glow for button text
    textShadowOffset: { width: 0, height: 0 },
    textShadowRadius: 5,
  },
});