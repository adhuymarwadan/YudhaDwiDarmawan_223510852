import React from "react";
import { View, StyleSheet } from "react-native";
import { Card, Button, Text, Divider } from "react-native-paper";

export default function DetailScreen({ route, navigation }) {
  const { product } = route.params;

  return (
    <View style={styles.container}>
      <Card style={styles.card}>
        <Card.Cover source={{ uri: product.image }} />
        <Card.Title title={product.name} />
        <Card.Content>
          <Text style={styles.price}>Price: {product.price}</Text>
          <Divider style={styles.divider} />
          <Text style={styles.description}>
            This high-performance VGA card is perfect for gaming, video editing,
            and AI tasks. Built with cutting-edge technology for unparalleled
            performance.
          </Text>
        </Card.Content>
        <Card.Actions>
          <Button
            mode="contained"
            onPress={() => navigation.goBack()}
            style={styles.button}
          >
            Go Back
          </Button>
        </Card.Actions>
      </Card>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: "#f5f5f5",
  },
  card: {
    borderRadius: 8,
    elevation: 4,
  },
  price: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 8,
  },
  divider: {
    marginVertical: 8,
  },
  description: {
    fontSize: 16,
    color: "#555",
  },
  button: {
    backgroundColor: "#6200ee",
    marginTop: 16,
  },
});
