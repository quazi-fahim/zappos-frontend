import React, { useState, useEffect } from "react";
import axios from "axios";

// import { useNavigate } from "react-router-dom";
import { Box, Input, Text, Spinner, List, ListItem } from "@chakra-ui/react";


const Search = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  // const navigate = useNavigate(); // Initialize the navigate hook

  // Debounce logic
  const useDebounce = (value, delay) => {
    const [debouncedValue, setDebouncedValue] = useState(value);

    useEffect(() => {
      const handler = setTimeout(() => setDebouncedValue(value), delay);
      return () => clearTimeout(handler); // Cleanup
    }, [value, delay]);

    return debouncedValue;
  };

  const debouncedSearchQuery = useDebounce(searchQuery, 500);

  // Fetch products from backend
  const fetchProducts = async (query) => {
    try {
      setLoading(true);
      const response = await axios.get("/products", {
        params: { search: query },
      });
      setProducts(response.data.products);
      setError(null); // Clear previous errors
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    if (debouncedSearchQuery) {
      fetchProducts(debouncedSearchQuery);
    } else {
      setProducts([]); // Clear products if search query is empty
    }
  }, [debouncedSearchQuery]);

  // Handle product click to navigate to the detail page
  // const handleProductClick = (productId) => {
  //   navigate(`/product/${productId}`); // Navigate to product detail page
  // };

  return (
    <Box mt={4} position="relative"w="50%">
      {/* Search Input */}
      <Input
        placeholder="Search products..."
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
        size="lg"
        mb="4"
      />

      {/* Loading Spinner */}
      {loading && (
        <Box textAlign="center" mt="4">
          <Spinner size="lg" />
          <Text mt="2">Loading...</Text>
        </Box>
      )}

      {/* Error Message */}
      {error && (
        <Text color="red.500" mt="4">
          {error}
        </Text>
      )}

      {/* Products List (Dropdown-style) */}
      {!loading && products.length > 0 && (
        <Box
          position="absolute"
          top="60px"
          left="0"
          width="100%"
          bg="white"
          boxShadow="md"
          borderRadius="md"
          zIndex="10"
        >
          <List spacing={2} p={2}>
            {products.map((product) => (
              <ListItem
                key={product._id}
                p={2}
                _hover={{ bg: "gray.100", cursor: "pointer" }}
                // onClick={() => handleProductClick(product._id)}
              >
                {product.name}
              </ListItem>
            ))}
          </List>
        </Box>
      )}

      {/* No Products Found Message */}
      {!loading && products.length === 0 && searchQuery && !error && (
        <Text mt="4" color="gray.500">
          No products found. Try a different search.
        </Text>
      )}
    </Box>
  );
};

export default Search;
