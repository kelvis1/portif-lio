
import { Box, Card, CardContent, Typography, Chip, Grid } from "@mui/material";
import CodeIcon from "@mui/icons-material/Code"; 
import StorageIcon from "@mui/icons-material/Storage"; 
import ApiIcon from "@mui/icons-material/Api"; 

const skillsData = [
  {
    title: "Frontend",
    icon: <CodeIcon sx={{ fontSize: 30 }} />,
    chips: ["React", "Next.js", "JavaScript", "HTML", "CSS", "Material UI", "TailwindCSS"],
  },
  {
    title: "Backend",
    icon: <ApiIcon sx={{ fontSize: 30 }} />,
    chips: ["Node.js", "Express", "REST API", "JWT", "WebSockets"],
  },
  {
    title: "Database",
    icon: <StorageIcon sx={{ fontSize: 30 }} />,
    chips: ["MongoDB", "MySQL", "PostgreSQL", "Prisma", "Mongoose"],
  },
];

export default function Skills() {
  return (
    <Box
      sx={{
        mt: 8,
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        gap: 5,
      }}
    >

      <Grid container spacing={4} justifyContent="center" maxWidth="1000px">
        {skillsData.map((skill, index) => (
          <Grid item xs={12} sm={6} md={4} key={index}>
            <Card
              elevation={3}
              sx={{
                p: 1,
                textAlign: "center",
                transition: "0.3s",
                "&:hover": { transform: "translateY(-8px)", boxShadow: 5 },
              }}
            >
              <CardContent>
                <Box sx={{ mb: 1 }}>{skill.icon}</Box>

                <Typography variant="h6" fontWeight="bold" gutterBottom>
                  {skill.title}
                </Typography>

                <Box
                  sx={{
                    display: "flex",
                    gap: 1,
                    flexWrap: "wrap",
                    justifyContent: "center",
                  }}
                >
                  {skill.chips.map((chip, chipIndex) => (
                    <Chip key={chipIndex} label={chip} variant="outlined" />
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
