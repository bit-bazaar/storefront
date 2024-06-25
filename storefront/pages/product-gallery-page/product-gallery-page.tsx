import { Button } from '@bit-bazaar/design.actions.button';
import { AppBar } from '@bit-bazaar/design.surfaces.app-bar';
import { Toolbar } from '@bit-bazaar/design.layout.toolbar';
import { Typography } from '@bit-bazaar/design.typography.typography';
import { Container } from '@bit-bazaar/design.layout.container';
import { Box } from '@bit-bazaar/design.layout.box';
import {
  Card,
  CardContent,
  CardMedia,
  CardActions,
} from '@bit-bazaar/design.surfaces.card';
import { Grid } from '@bit-bazaar/design.layout.grid';

const products = [
  {
    id: 1,
    name: 'Product 1',
    description: 'This is Product 1',
    image: 'https://via.placeholder.com/150',
  },
  {
    id: 2,
    name: 'Product 2',
    description: 'This is Product 2',
    image: 'https://via.placeholder.com/150',
  },
  {
    id: 3,
    name: 'Product 3',
    description: 'This is Product 3',
    image: 'https://via.placeholder.com/150',
  },
];

export function ProductGalleryPage() {
  return (
    <div>
      {/* Header */}
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6">Products</Typography>
        </Toolbar>
      </AppBar>

      {/* Product Grid */}
      <Container>
        <Grid container spacing={3} sx={{ mt: 2 }}>
          {products.map((product) => (
            <Grid item key={product.id} xs={12} sm={6} md={4}>
              <Card>
                <CardMedia
                  component="img"
                  // @ts-ignore
                  height="140"
                  image={product.image}
                  alt={product.name}
                />
                <CardContent>
                  <Typography gutterBottom variant="h5" component="div">
                    {product.name}
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    {product.description}
                  </Typography>
                </CardContent>
                <CardActions>
                  <Button size="small">View</Button>
                  <Button size="small">Buy</Button>
                </CardActions>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>

      {/* Footer */}
      <Box
        component="footer"
        sx={{ py: 3, textAlign: 'center', mt: 5, bgcolor: 'background.paper' }}
      >
        <Typography variant="body1">&copy; 2024 My Company</Typography>
      </Box>
    </div>
  );
}
