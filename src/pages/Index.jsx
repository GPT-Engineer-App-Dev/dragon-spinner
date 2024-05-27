import { Container, VStack, Image, keyframes } from "@chakra-ui/react";
import { FaDragon } from "react-icons/fa";

const spin = keyframes`
  from { transform: rotate(0deg); }
  to { transform: rotate(360deg); }
`;

const Index = () => {
  return (
    <Container centerContent maxW="container.md" height="100vh" display="flex" flexDirection="column" justifyContent="center" alignItems="center">
      <VStack spacing={4}>
        {Array.from({ length: 10 }).map((_, index) => (
          <Image key={index} src="https://images.unsplash.com/photo-1577493340887-b7bfff550145?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHxkcmFnb258ZW58MHx8fHwxNzE2ODAyNjk0fDA&ixlib=rb-4.0.3&q=80&w=1080" alt="Spinning Dragon" boxSize="150px" animation={`${spin} infinite 4s linear`} />
        ))}
      </VStack>
    </Container>
  );
};

export default Index;
