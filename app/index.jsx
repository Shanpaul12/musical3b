  import { StatusBar } from 'expo-status-bar';
  import { StyleSheet, Text, View } from 'react-native';
  import { Link } from 'expo-router';
import { ScrollView } from 'react-native-web';

  export default function App() {
    return (
      <View className="flex-1 items-center justify-center">
        <Text className="text-3x1 font-gonzo6">welcome</Text>
        <Link href = "/home" className="text-3x1 font-TRBalloon">Go to Home</Link>
        <StatusBar style="auto" />
      </View>
     
    );
  }

  const styles = StyleSheet.create({
    container: {
      flex: 1,  
      backgroundColor: '#301934',
      alignItems: 'center',
      justifyContent: 'center',
    },
  });
