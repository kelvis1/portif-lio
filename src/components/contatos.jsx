
import { Box, Chip, Typography } from '@mui/material';



export default function Footer() {

    const links = {
        github: "https://github.com/kelvis1",
        linkedin: "https://www.linkedin.com/in/kelves-rodrigues-28b90b28b/",
    };

    const handleRedirect = (url) => {
        window.open(url, "_blank");
    };

  return (
<>
<Box sx={{ mt: 3, textAlign: 'center', p: 2, }}>
    <Typography variant="h7" sx={{ fontWeight: 'bold', mb: 1, }}>
        Vamos Trabalhar Juntos!
    </Typography>
</Box>

<Box sx={{ mt: 0, textAlign: 'center', p: 2, marginInline: '170px', }}>
    <Typography variant='h7' sx={{ maxWidth: '800px', margin: '0 auto', color: 'text.secondary', }}>
        Estou aberto a novas oportunidades e desafios. Sinta-se à vontade para entrar em contato comigo!
    </Typography>
</Box>

<Box sx={{ mt: 3, display: 'flex', justifyContent: 'center', gap: 2, p: 5, }}>
    
    <Chip 
        label="GitHub"
        variant="outlined"
        sx={{ width: "100px" }}
        clickable
        onClick={() => handleRedirect(links.github)}
    />
    <Chip 
        label="LinkedIn"
        variant="outlined"
        sx={{ width: "100px" }}
        clickable
        onClick={() => handleRedirect(links.linkedin)}
    />
    
</Box>

</>

  );
};

