import { StyleSheet, Text, View, Image, FlatList, TouchableOpacity, ImageBackground } from 'react-native';
import React from 'react';

const Profile = () => {
  // Sample data for favorite tracks
  const favoriteTracks = [
    { id: '1', title: 'Song One' },
    { id: '2', title: 'Song Two' },
    { id: '3', title: 'Song Three' },
    { id: '4', title: 'Song Four' },
  ];

  const renderTrack = ({ item }) => (
    <View style={styles.trackItem}>
      <Text style={styles.trackTitle}>{item.title}</Text>
      <TouchableOpacity style={styles.playButton}>
        <Text style={styles.buttonText}>Play</Text>
      </TouchableOpacity>
    </View>
  );

  return (
    <ImageBackground 
      source={{ uri: 'assets/icon/sza.jpg' }} // Replace with your background image URL or require()
      style={styles.container}
      resizeMode="cover" // Ensures the image covers the entire area
    >
      <View style={styles.profileContainer}>
        <Image 
          source={{ uri: 'assets/icon/drke.jpg' }} 
          style={styles.profileImage} 
        />
        <View style={styles.profileDetails}>
       
          <Text style={styles.userName}>Shanex</Text>
          <Text style={styles.userEmail}>shanex@gmail.com</Text>
        </View>
      </View>
      
      <Text style={styles.sectionTitle}>Favorite Tracks</Text> 
      <FlatList 
        data={favoriteTracks}
        renderItem={renderTrack}
        keyExtractor={item => item.id}
        style={styles.trackList}
      />
    </ImageBackground>
  );
};

export default Profile;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: '#f0f0f0', // Background color for the profile container
  },
  profileContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-end', // Align to the right
    marginTop: 20,
  },
  profileImage: {
    width: 100,
    height: 100,
    borderRadius: 50,
    marginRight: 10, // Space between image and text
  },
  profileDetails: {
    alignItems: 'flex-start', // Align text to start
  },
  title: {
    fontSize: 32,
    fontWeight: 'bold',
    color: '#000', // Changed to black
    textShadowColor: 'rgba(255, 255, 0, 0.8)', // Yellow glow
    textShadowOffset: { width: 0, height: 0 },
    textShadowRadius: 10,
  },
  userName: {
    fontSize: 24,
    fontWeight: '600',
    color: '#000', // Changed to black
    marginTop: 8,
    textShadowColor: 'rgba(255, 255, 0, 0.8)', // Yellow glow
    textShadowOffset: { width: 0, height: 0 },
    textShadowRadius: 5,
  },
  userEmail: {
    fontSize: 18,
    color: '#000', // Changed to black
    marginBottom: 20,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#000', // Changed to black
    marginTop: 20,
    alignSelf: 'flex-start',
    textShadowColor: 'rgba(255, 255, 0, 0.8)', // Yellow glow
    textShadowOffset: { width: 0, height: 0 },
    textShadowRadius: 5,
  },
  trackList: {
    width: '100%',
    marginTop: 10,
  },
  trackItem: {
    backgroundColor: '#000', // Black background for tracks
    padding: 15,
    borderRadius: 12, // Rounded corners
    marginVertical: 8,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    shadowColor: '#000', // Shadow for iOS
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.3,
    shadowRadius: 4,
    elevation: 5, // Shadow for Android
  },
  trackTitle: {
    color: '#fff',
    fontSize: 18,
  },
  playButton: {
    backgroundColor: '#466D1D',
    paddingVertical: 5,
    paddingHorizontal: 10,
    borderRadius: 5,
  },
  buttonText: {
    color: '#fff',
    fontWeight: 'bold',
  },
});