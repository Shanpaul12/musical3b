// app/screens/Home.js
import { StyleSheet, Text, View, TouchableOpacity, FlatList, Image, ImageBackground } from 'react-native';
import React from 'react';

const playlists = [
  { id: '1', title: 'Chill Vibes', anime: 'assets/icon/chill.jpg' },
  { id: '2', title: 'Top Hits', image: 'assets/icon/faa29254fe66576400bfbc6a35dccaad.gif' },
  { id: '3', title: 'Workout Beats', image: 'assets/icon/unnamed.gif' },
  { id: '4', title: 'Party Mix', image: 'assets/icon/proxy.duckduckgo.webp' },
  { id: '5', title: 'Relaxing Tunes', image: 'assets/icon/sza.jpg' },
  { id: '6', title: 'Classic Rock', image: 'assets/icon/drke.jpg' },
  { id: '7', title: 'Pop Hits', image: 'assets/icon/giphy.gif' },
  { id: '8', title: 'Jazz Essentials', image: 'assets/icon/20-59-43-325_512.webp' },
];

const Home = ({ navigation }) => {
  const handlePlaylistPress = (id, title) => {
    navigation.navigate('Player', { playlistId: id, playlistTitle: title });
  };

  return (
    <ImageBackground 
      source={{ uri: 'assets/icon/anime.jpg' }}
      style={styles.container}
      resizeMode="cover"
    >
      <View style={styles.titleContainer}>
        <Text style={styles.title}></Text>
      </View>
      
      <FlatList
        data={playlists}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <TouchableOpacity 
            style={styles.playlistItem} 
            onPress={() => handlePlaylistPress(item.id, item.title)}
          >
            <Image source={{ uri: item.image }} style={styles.playlistImage} />
            <Text style={styles.playlistText}>{item.title}</Text>
          </TouchableOpacity>
        )}
        horizontal={true}
        contentContainerStyle={styles.playlistContainer}
        showsHorizontalScrollIndicator={false}
      />

      <View style={styles.controls}>
        <TouchableOpacity style={styles.controlButton}>
          <Text style={styles.controlText}>Pause</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.controlButton}>
          <Text style={styles.controlText}>Play</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.controlButton}>
          <Text style={styles.controlText}>Next</Text>
        </TouchableOpacity>
      </View>
    </ImageBackground>
  );
};

export default Home;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    padding: 20,
    backgroundColor: '#fff', // Background color of the box
    borderRadius: 10, // Rounded corners
    elevation: 5, // Android shadow effect
    shadowColor: '#000', // iOS shadow color
    shadowOffset: { width: 0, height: 2 }, // iOS shadow offset
    shadowOpacity: 0.3, // iOS shadow opacity
    shadowRadius: 4, // iOS shadow blur radius
    margin: 10, // Margin around the box
  },
  titleContainer: {
    position: 'absolute',
    top: 50,
    right: 100,
    alignItems: 'flex-end',
  },
  title: {
    fontSize: 32,
    fontWeight: 'bold',
    color: '#FFF',
    textShadowColor: '#E3242B',
    textShadowOffset: { width: 0, height: 0 },
    textShadowRadius: 10,
  },
  playlistContainer: {
    flexGrow: 1,
    justifyContent: 'center',
    paddingVertical: 5,
    paddingHorizontal: 2
  },
  playlistItem: {
    backgroundColor: '#000',
    borderRadius: 10,
    padding: 15,
    marginHorizontal: 10,
    width: 150,
    alignItems: 'center',
  },
  playlistImage: {
    width: '100%',
    height: 100,
    borderRadius: 10,
    marginBottom: 10,
  },
  playlistText: {
    fontSize: 16,
    color: '#FFF',
    textAlign: 'center',
  },
  controls: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginVertical: 20,
    width: '100%',
  },
  controlButton: {
    backgroundColor: '#000',
    borderRadius: 10,
    padding: 10,
    width: 80,
    alignItems: 'center',
  },
  
  controlText: {
    fontSize: 16,
    color: '#FFF',
  },
});