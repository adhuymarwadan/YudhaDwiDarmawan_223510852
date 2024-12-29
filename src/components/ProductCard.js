import React from "react";
import { Card, Text } from "react-native-paper";
import { StyleSheet } from "react-native";

export default function ProductCard({ product, onPress }) {
  return (
    <Card style={styles.card} onPress={onPress}>
      <Card.Cover source={{ uri: product.image }} style={styles.image} />
      <Card.Content>
        <Text style={styles.title}>{product.name}</Text>
        <Text style={styles.price}>Price: {product.price}</Text>
      </Card.Content>
    </Card>
  );
}

const styles = StyleSheet.create({
  card: {
    marginBottom: 16,
    borderRadius: 8,
    overflow: "hidden",
    elevation: 4,
  },
  image: {
    height: 150,
  },
  title: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 8,
  },
  price: {
    fontSize: 16,
    color: "#555",
  },
});
