import { Box, Image, Text, Button, Flex } from "@chakra-ui/react";
import { customTheme } from "./theme";

interface ProductCardProps {
  image: string;
  name: string;
  description: string;
  price: string | number;
  onBuyNow: () => void;
}

const ProductCard: React.FC<ProductCardProps> = ({
  image,
  name,
  description,
  price,
  onBuyNow,
}) => {
  return (
    <Box
      maxW={{ base: "100%", sm: "sm" }} // Responsive width
      borderWidth="1px"
      borderRadius="lg"
      overflow="hidden"
      bg={customTheme.colors.background}
      boxShadow="md"
      cursor="pointer"
      _hover={{
        boxShadow: "lg",
        transform: "scale(1.03)",
        transition: "transform 0.3s ease",
      }}
      p={customTheme.space.lg}
    >
      <Image
        src={image}
        alt={name}
        borderRadius="md"
        objectFit="cover"
        w="100%"
        h="200px"
      />

      <Box mt={customTheme.space.md}>
        <Text fontWeight="bold" fontSize="lg" color={customTheme.colors.text}>
          {name}
        </Text>
        <Text
          mt={customTheme.space.sm}
          color={customTheme.colors.text}
          fontSize="sm"
        >
          {description}
        </Text>
        <Flex justify="space-between" align="center" mt={customTheme.space.md}>
          <Text
            fontWeight="bold"
            fontSize="xl"
            color={customTheme.colors.primary}
          >
            ${price}
          </Text>
          <Button
            bg={customTheme.colors.primary}
            color="white"
            _hover={{ bg: customTheme.colors.secondary }}
            _active={{
              bg: customTheme.colors.secondary,
              transform: "scale(0.95)",
            }}
            onClick={onBuyNow}
            size="sm"
            borderRadius="md"
          >
            Buy Now
          </Button>
        </Flex>
      </Box>
    </Box>
  );
};

export default ProductCard;
