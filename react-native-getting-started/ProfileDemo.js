import {View, Text, StyleSheet} from 'react-native';

export default function ProfileDemo() {
    return (
        <View style={styles.container}>
            <Text style={styles.header}>Name:</Text>
            <Text>Jimmy Lumaad</Text>
            <Text style={styles.header}>Age:</Text>
            <Text>21</Text>
            <Text style={styles.header}>Course & Section:</Text>
            <Text>BSIS 3-A</Text>
            <Text style={styles.header}>Favorite Hobby:</Text>
            <Text>Watching funny videos</Text>
            <Text style={styles.header}>Pet Peeves:</Text>
            <View style={styles.containPeeves}>
                <Text>1. People who does not do their best</Text>
                <Text>2. People who makes others wait for a long time</Text>
                <Text>3. People who assigns a call time but does not follow through</Text>
            </View>
        </View>
        
    );
}

const styles = StyleSheet.create({
        container: {
            flex: 1,
            justifyContent: 'center',
            alignItems: 'center',
        },
        header: {
            fontSize: 20,
            fontWeight: 'bold',
            marginTop: 20,
        },
        containPeeves: {
            alignContent: 'center',
            justifyContent: 'center', 
            flexDirection: 'column',
        }
    });