import { Box, Input, Button, useToast } from "@chakra-ui/react";
import { useState } from "react";

const SearchBox = ({ onSearch }) => {
  const [input, setInput] = useState("");
  const toast = useToast();

  const handleSearch = () => {
    if (!input.trim()) {
      toast({
        title: "Please enter a search term.",
        status: "warning",
        duration: 2000,
        isClosable: true,
      });
      return;
    }
    onSearch(input);
  };

  return (
    <Box my={4}>
      <Input placeholder="Search for dragons..." value={input} onChange={(e) => setInput(e.target.value)} mr={2} />
      <Button onClick={handleSearch} colorScheme="blue">
        Search
      </Button>
    </Box>
  );
};

export default SearchBox;
