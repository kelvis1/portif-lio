
import { Box, Card, CardContent, CardMedia, Typography, Chip, Grid, Divider } from "@mui/material";


const cardData = [
  {
    title: "Money Track",
    description: "Aplicação web moderna com foco em performance e responsividade.",
    chips: ["React", "Node.js", "MongoDB"],
    image: "https://wallpapers.com/images/hd/4k-programming-background-kphsfn7i11jhkmyr.jpg",
    chipss: ["GitHub", "Demonstração"],
  },
  {
    title: "Projeto Ambula",
    description: "App mobile desenvolvido com React Native e integração API.",
    chips: ["React Native", "API REST", "Firebase"],
    image: "https://speckyboy.com/wp-content/uploads/2022/11/css-learn-thumb.jpg",
    chipss: ["GitHub", "Demonstração"],
  },
  {
    title: "Portfólio",
    description: "Dashboard com visualização de dados em tempo real.",
    chips: ["Next.js", "Chart.js", "TailwindCSS"],
    image: "https://tse1.mm.bing.net/th/id/OIP.FIKjDLcauk-LBxCtuXc6lQHaEK?w=1366&h=768&rs=1&pid=ImgDetMain&o=7&rm=3",
    chipss: ["GitHub", "Demonstração"],
  },
];

export default function CardSection() {
  return (
    <Box
      sx={{
        mt: 10,
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        gap: 5,
      }}
    >

      <Box sx={{ mt: 0, display: "flex", flexDirection: "column", alignItems: "center", }}></Box>

      <Grid container spacing={4} justifyContent="center" maxWidth="1000px">
        {cardData.map((card, index) => (
          <Grid item xs={12} sm={6} md={4} key={index}>
            <Card
              sx={{
                maxWidth: 300,
                mx: "auto",
                transition: "0.3s",
                "&:hover": { transform: "scale(1.05)", boxShadow: 5 }
              }}
            >
              <CardMedia
                component="img"
                height="200"
                image={card.image}
                alt={card.title}
              />
              <CardContent>
                <Typography variant="h6" fontWeight="bold" gutterBottom>
                  {card.title}
                </Typography>
                <Typography variant="body2" color="text.secondary" gutterBottom>
                  {card.description}
                </Typography>

                <Box sx={{ display: "flex", gap: 1, flexWrap: "wrap", mt: 1 }}>
                  {card.chips.map((chip, chipIndex) => (
                    <Chip key={chipIndex} label={chip} variant="outlined" />
                  ))}
                </Box>

                <Box sx={{ display: "flex", gap: 1, flexWrap: "wrap", mt: 1 }}>
                  {card.chipss && card.chipss.map((chip, chipIndex) => (
                    <Chip key={chipIndex} label={chip}  />
                  ))}
                </Box>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Box>

    

  );
}
