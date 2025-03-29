import React, { useState, useEffect } from "react";
import { Box, Text, IconButton, Flex } from "@chakra-ui/react";
import { motion, AnimatePresence } from "framer-motion";

const Slider1 = () => {
  const messages = [
    "Running & Training Guide - Shop the Guide",
    "New to Sale: Save on Spring Styles - Shop Now",
    "Top 10 Running Shoes for 2025 - Shop Now"
  ];

  const [index, setIndex] = useState(0);
  const [direction, setDirection] = useState(1); // 1 for right, -1 for left

  useEffect(() => {
    const interval = setInterval(() => {
      handleNext();
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  const handleNext = () => {
    setDirection(1);
    setIndex((prevIndex) => (prevIndex + 1) % messages.length);
  };

  const handlePrev = () => {
    setDirection(-1);
    setIndex((prevIndex) => (prevIndex - 1 + messages.length) % messages.length);
  };

  return (
    <Box
      display="flex"
      alignItems="center"
      justifyContent="center"
      width="100%"
      bg="blue.500"
      color="white"
      p={3}
      position="relative"
    >
      {/* Left Arrow */}
      <IconButton
        onClick={handlePrev}
        position="absolute"
        left="10px"
        bg="transparent"
        color="white"
       
        _hover={{ bg: "blue.600" }}
        aria-label="Previous message"
      />

      {/* Text Animation */}
      <Flex overflow="hidden" width="100%" justifyContent="center">
        <AnimatePresence mode="wait">
          <motion.div
            key={index}
            initial={{ x: direction * 100, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            exit={{ x: -direction * 100, opacity: 0 }}
            transition={{ duration: 0.5 }}
            style={{ textAlign: "center", width: "100%" }}
          >
            <Text fontSize={{ base: "14px", md: "18px", lg: "20px" }} fontWeight="bold">
              {messages[index]}
            </Text>
          </motion.div>
        </AnimatePresence>
      </Flex>

      {/* Right Arrow */}
      <IconButton
        onClick={handleNext}
        position="absolute"
        right="10px"
        bg="transparent"
        color="white"
        
        _hover={{ bg: "blue.600" }}
        aria-label="Next message"
      />
    </Box>
  );
};

export default Slider1;
