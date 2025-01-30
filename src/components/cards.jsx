import Grid from "@mui/material/Grid";
import { 
  Card, CardContent, CardMedia, CardActions, 
  Button, Typography, Box, IconButton 
} from "@mui/material";
import { useTheme } from '@mui/material/styles';
import SkipPreviousIcon from '@mui/icons-material/SkipPrevious';
import PlayArrowIcon from '@mui/icons-material/PlayArrow';
import SkipNextIcon from '@mui/icons-material/SkipNext';

const cardsData = [
  { title: "Card 1", gridImage: "./public/contemplative-reptile.jpg", listImage: "./public/live-from-space.jpg", description: "Description for card 1" },
  { title: "Card 2", gridImage: "./public/contemplative-reptile.jpg", listImage: "./public/live-from-space.jpg", description: "Description for card 2" },
  { title: "Card 3", gridImage: "./public/contemplative-reptile.jpg", listImage: "./public/live-from-space.jpg", description: "Description for card 3" },
  { title: "Card 4", gridImage: "./public/contemplative-reptile.jpg", listImage: "./public/live-from-space.jpg", description: "Description for card 4" },
  { title: "Card 5", gridImage: "./public/contemplative-reptile.jpg", listImage: "./public/live-from-space.jpg", description: "Description for card 5" },
  { title: "Card 6", gridImage: "./public/contemplative-reptile.jpg", listImage: "./public/live-from-space.jpg", description: "Description for card 6" },
  { title: "Card 7", gridImage: "./public/contemplative-reptile.jpg", listImage: "./public/live-from-space.jpg", description: "Description for card 7" },
  { title: "Card 8", gridImage: "./public/contemplative-reptile.jpg", listImage: "./public/live-from-space.jpg", description: "Description for card 8" },
  { title: "Card 9", gridImage: "./public/contemplative-reptile.jpg", listImage: "./public/live-from-space.jpg", description: "Description for card 9" },
  { title: "Card 10", gridImage: "./public/contemplative-reptile.jpg", listImage: "./public/live-from-space.jpg", description: "Description for card 10" },
];


const Cards = ({ viewMode }) => {
  const theme = useTheme();

  return (

      <Grid 
        container 
        spacing={viewMode === "grid" ? 3 : 2} 
        className="ccccc"
      >
        {cardsData.map((card, index) => (
          viewMode === "grid" ? (
            <Grid item key={index} xs={12} sm={6} md={4} lg={3}>
              <Card 
                sx={{ 
                  maxWidth: "initial", 
                  mx: "auto",
                  transition: "0.3s",
                  backgroundColor: "background.paper",
                  color: "text.primary",
                  "&:hover": { transform: "scale(1.03)" }
                }}
              >

                <CardMedia
                  component="img"
                  height="160"
                  image={viewMode === "grid" ? card.gridImage : card.listImage}
                  alt={card.title}
                />
                <CardContent>
                  <Typography variant="h6" sx={{ fontWeight: "bold" }}>{card.title}</Typography>
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
          ) : (
            <Grid item key={index} xs={12}>
              <Card 
                sx={{ 
                  display: "flex", 
                  alignItems: "center", 
                  flexWrap: "wrap",
                  padding: "8px",
                  gap: "16px",
                  backgroundColor: "background.paper",
                  color: "text.primary",
                  transition: "0.3s",
                  "&:hover": { backgroundColor: "action.hover" }
                }}
              >
                 <CardMedia
                  component="img"
                  sx={{ width: { xs: "100%", sm: 151 }, height: 150, objectFit: "cover" }}
                  image={viewMode === "grid" ? card.gridImage : card.listImage}
                  alt={card.title}
                />

                <Box sx={{ display: "flex", flexDirection: "column", flex: 1 }}>
                  <CardContent>
                    <Typography component="div" variant="h5" sx={{ fontWeight: "bold" }}>
                      {card.title}
                    </Typography>
                    <Typography variant="subtitle1" color="text.secondary" component="div">
                      {card.description}
                    </Typography>
                  </CardContent>
                  <Box sx={{ display: "flex", alignItems: "center", pl: 1, pb: 1 }}>
                    <IconButton aria-label="previous">
                      {theme.direction === "rtl" ? <SkipNextIcon /> : <SkipPreviousIcon />}
                    </IconButton>
                    <IconButton aria-label="play/pause">
                      <PlayArrowIcon sx={{ height: 38, width: 38 }} />
                    </IconButton>
                    <IconButton aria-label="next">
                      {theme.direction === "rtl" ? <SkipPreviousIcon /> : <SkipNextIcon />}
                    </IconButton>
                  </Box>
                </Box>
              </Card>
            </Grid>
          )
        ))}
      </Grid>
 
  );
};

export default Cards;