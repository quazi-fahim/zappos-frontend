import React from 'react';
import { Box, Image, Flex, Button } from '@chakra-ui/react';
import { IoBagHandleOutline } from "react-icons/io5";
import { Link, useNavigate } from 'react-router-dom';

import { useDispatch, useSelector } from 'react-redux';
import { logout } from '../../Redux/signin/action';
import Search from '../Pages/Search';

const Navbar = () => {
  const dispatch = useDispatch();
  const user = useSelector((state) => state.auth.user); // Access user state from Redux

  const handleLogout = () => {
    dispatch(logout()); // Dispatch the logout action to Redux
  };

  return (
    <Box 
      position="fixed"  // Ensures navbar stays fixed at the top
      top={12} 
      left={0}  // Ensure it stays at the left edge
      width="100%"  // Make the navbar span the entire width
      zIndex={10}  // Ensure navbar stays on top of other content
      backgroundColor="white"  // Make sure navbar has a background
      boxShadow="sm"  // Adds subtle shadow for visibility
      padding="0 20px"  // Add padding to avoid content touching the edges
      height="60px"  // Set a fixed height for consistency
      display="flex"  // Use flex layout for positioning child elements
      justifyContent="space-around"
      alignItems="center"  // Vertically center the items in the navbar
      gap="25px"
    >
      {/* Logo */}
      <Link to="/" _hover={{ textDecoration: "none" }}>
        <Box width="80px" height="50px" >
          <Image
            src="https://m.media-amazon.com/images/G/01/Zappos/zapposlogo2025/Finallogo/zappos-logo-2025-header.svg"
            alt="Aquarium Fish Store"
            ml="20px"
            width="100%"
            height="100%"
            objectFit="contain"  // Ensure the logo fits within the box without stretching
          />
        </Box>
      </Link>

      
      <Search/>
   

      {/* Authentication Button */}
      {user ? (
        <Button
          style={{ background: "#E80071", color: "#ffffff" }}
          _hover={{ background: "#E2006F" }}
          onClick={handleLogout}
        >
          Logout
        </Button>
      ) : (
        <Button style={{ background: "#E80071", color: "#ffffff" }} _hover={{ background: "#E2006F" }}>
          <Link _hover={{ textDecoration: "none" }} color={"#ffffff"} to="/signin">Sign in</Link>
        </Button>
      )}
     

      {/* Cart Icon */}
      <Link to="/cart">
        <IoBagHandleOutline size={"30px"} />
      </Link>
    </Box>
  );
};

export default Navbar;
