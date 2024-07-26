import React from 'react';
import { Box, Card, CardContent, Typography, Grid } from '@mui/material';

interface Movie {
  name: string;
  rating: string;
  Language: string;
}

const movieList: Movie[] = [
  { name: "Harry Potter", rating: "U", Language: "English" },
  { name: "John Wick", rating: "U", Language: "English" },
  { name: "RockStar", rating: "U", Language: "English" },
  { name: "Animal", rating: "U", Language: "English" },
];

const MoviePage: React.FC = () => {
  return (
    <Box sx={{ flexGrow: 1, padding: 2 }}>
      <Grid container spacing={2}>
        {movieList.map((movie, index) => (
          <Grid item xs={12} sm={6} md={4} lg={3} key={index}>
            <Card>
              <CardContent>
                <Typography variant="h6" component="div">
                  {movie.name}
                </Typography>
                <Typography color="text.secondary">
                  Rating: {movie.rating}
                </Typography>
                <Typography color="text.secondary">
                  Language: {movie.Language}
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default MoviePage;