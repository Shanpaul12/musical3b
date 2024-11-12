import { StyleSheet, Text, View, FlatList, TouchableOpacity, Image } from 'react-native';
import React from 'react';

const Bookmark = () => {
  // Sample data for bookmarks
  const bookmarks = [
    { id: '1', title: 'Bookmark One' },
    { id: '2', title: 'Bookmark Two' },
    { id: '3', title: 'Bookmark Three' },
    { id: '4', title: 'Bookmark Four' },
  ];

  const renderBookmark = ({ item }) => (
    <TouchableOpacity style={styles.bookmarkItem}>
      <Text style={styles.bookmarkTitle}>{item.title}</Text>
    </TouchableOpacity>
  );

  return (
    <View style={styles.container}>
      <Image 
        source={{ uri: 'https://example.com/path/to/your/image.jpg' }} // Replace with your image URL
        style={styles.headerImage}
      />
      <Text style={styles.title}>Bookmarks</Text>
      <FlatList 
        data={bookmarks}
        renderItem={renderBookmark}
        keyExtractor={item => item.id}
        style={styles.bookmarkList}
      />
    </View>
  );
};

export default Bookmark;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    padding: 20,
    backgroundColor: '#000', // Set background color to black
  },
  headerImage: {
    width: '100%', // Full width
    height: 200, // Adjust height as needed
    borderRadius: 10, // Optional: rounded corners
    marginBottom: 20, // Space between image and title
  },
  title: {
    fontSize: 30,
    fontWeight: 'bold',
    color: '#ffffff',  
    marginBottom: 20,
    textAlign: 'center',
  },
  bookmarkList: {
    width: '100%',
  },
  bookmarkItem: {
    backgroundColor: '#4A6B4E',
    padding: 15,
    borderRadius: 12,
    marginVertical: 10,
    width: '100%',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.5,
    elevation: 5, // Adds shadow effect for Android
  },
  bookmarkTitle: {
    color: '#ffffff',
    fontSize: 18,
    fontWeight: '600',
    textAlign: 'center',
  },
});