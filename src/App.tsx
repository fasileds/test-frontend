import { Box, Grid } from "@chakra-ui/react";
import ProductCard from "./ProductCard";

function App() {
  const products = [
    {
      id: 1,
      image:
        "https://plus.unsplash.com/premium_photo-1664392147011-2a720f214e01?q=80&w=1478&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      name: "Sample Product 1",
      description: "This is a sample product description.",
      price: "29.99",
    },
    {
      id: 2,
      image:
        "https://images.unsplash.com/photo-1556228578-f9707385e031?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      name: "Sample Product 2",
      description: "A short description for product 2.",
      price: "49.99",
    },
    {
      id: 3,
      image:
        "https://plus.unsplash.com/premium_photo-1670537994863-5ad53a3214e0?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      name: "Sample Product 3",
      description: "This product is highly recommended.",
      price: "19.99",
    },
    {
      id: 4,
      image:
        "https://images.unsplash.com/photo-1541643600914-78b084683601?q=80&w=1408&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      name: "Sample Product 4",
      description: "Best choice for daily needs.",
      price: "99.99",
    },
  ];

  const handleBuyNow = (productName: any) => {
    console.log(`Buy Now clicked for: ${productName}`);
  };

  return (
    <Box p="20px" bg="#F7FAFC" minH="100vh">
      <Grid
        templateColumns={{
          base: "1fr",
          sm: "repeat(2, 1fr)",
          lg: "repeat(3, 1fr)",
        }}
        gap="15px"
      >
        {products.map((product) => (
          <ProductCard
            key={product.id}
            image={product.image}
            name={product.name}
            description={product.description}
            price={product.price}
            onBuyNow={() => handleBuyNow(product.name)}
          />
        ))}
      </Grid>
    </Box>
  );
}

export default App;
