import { Container, VStack, Image, keyframes, useToast } from "@chakra-ui/react";
import SearchBox from "../components/SearchBox";
import { useState } from "react";

const spin = keyframes`
  from { transform: rotate(0deg); }
  to { transform: rotate(360deg); }
`;

const Index = () => {
  const [images, setImages] = useState([]);
  const toast = useToast();

  const fetchImages = async (query) => {
    try {
      const response = await fetch(`https://api.giphy.com/v1/gifs/search?api_key=YOUR_API_KEY&q=${query}&limit=10&offset=0&rating=g&lang=en`);
      const data = await response.json();
      setImages(data.data.map((img) => img.images.fixed_height.url));
    } catch (error) {
      toast({
        title: "Failed to fetch images.",
        description: "There was an error while fetching images from Giphy.",
        status: "error",
        duration: 2000,
        isClosable: true,
      });
    }
  };

  return (
    <Container centerContent maxW="container.md" height="100vh" display="flex" flexDirection="column" justifyContent="center" alignItems="center">
      <SearchBox onSearch={fetchImages} />
      <VStack spacing={4}>
        {images.map((src, index) => (
          <Image key={index} src={src} alt="Spinning Dragon" boxSize="150px" animation={`${spin} infinite 4s linear`} />
        ))}
      </VStack>
    </Container>
  );
};

export default Index;
