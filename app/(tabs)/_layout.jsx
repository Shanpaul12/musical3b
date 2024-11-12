import { View, StyleSheet } from 'react-native';
import { Tabs } from 'expo-router';
import Ionicons from 'react-native-vector-icons/Ionicons';


const TabIcon = ({ name, color }) => {
  return (
    <View style={styles.iconContainer}>
      <Ionicons
        name={name}
        size={24}  
        color={color}  
      />
    </View>
  );
};

const TabLayout = () => {
  return (
    <Tabs>
      <Tabs.Screen
        name="home"
        options={{
          title: 'Home',
          headerShown: false,
          tabBarIcon: ({ color }) => (
            <TabIcon
              name="home" 
              color={color}
            />
          ),
        }}
      />

      <Tabs.Screen
        name="create"
        options={{
          title: 'Create',
          headerShown: false,
          tabBarIcon: ({ color }) => (
            <TabIcon
              name="add"  
              color={color}
            />
          ),
        }}
      />

      <Tabs.Screen
        name="profile"
        options={{
          title: 'Profile',
          headerShown: false,
          tabBarIcon: ({ color }) => (
            <TabIcon
              name="person"  
              color={color}
            />
          ),
        }}
      />

      <Tabs.Screen
        name="bookmark"
        options={{
          title: 'Bookmark',
          headerShown: false,
          tabBarIcon: ({ color }) => (
            <TabIcon
              name="bookmark"  
              color={color}
            />
            
          ),
        }}
      />
      
      
    </Tabs>
    
  );
};

const styles = StyleSheet.create({
  iconContainer: {
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default TabLayout;