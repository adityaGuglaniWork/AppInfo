import { Text, StyleSheet, View } from 'react-native';

export default function AppInfoItem({ label, value }) {
    return (
        <View style={styles.container}>
            <Text style={styles.label}>{label}</Text>
            <Text>{value}</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    label: {
        fontWeight: "bold"
    },
    container: {
        marginTop: 10
    }
});