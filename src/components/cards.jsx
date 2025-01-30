
import Grid from "@mui/material/Grid2";
import { Card, CardContent, CardMedia, CardActions, Button, Typography, Container } from "@mui/material";

const cardsData = [
  { title: "Card 1", image: "./public/contemplative-reptile.jpg", description: "Description for card 1" },
  { title: "Card 2", image: "./public/contemplative-reptile.jpg", description: "Description for card 2" },
  { title: "Card 3", image: "./public/contemplative-reptile.jpg", description: "Description for card 3" },
  { title: "Card 4", image: "./public/contemplative-reptile.jpg", description: "Description for card 4" },
  { title: "Card 5", image: "./public/contemplative-reptile.jpg", description: "Description for card 5" },
  { title: "Card 6", image: "./public/contemplative-reptile.jpg", description: "Description for card 6" },
];

const Cards = () => {
  return (
    <Container sx={{padding:"0px !important"}}>
      <Grid container spacing={3}>
        {cardsData.map((card, index) => (
          <Grid item key={index} xs={12} sm={6} md={4} lg={4}>
            <Card sx={{ maxWidth: 345, mx: "auto" }}>
              <CardMedia component="img" height="140" image={card.image} alt={card.title} />
              <CardContent>
                <Typography variant="h6">{card.title}</Typography>
                <Typography variant="body2" color="text.secondary">
                  {card.description}
                </Typography>
              </CardContent>
              <CardActions>
                <Button size="small">Share</Button>
                <Button size="small">Learn More</Button>
              </CardActions>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
};

export default Cards;