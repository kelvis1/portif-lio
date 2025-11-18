
import { Box, Chip, Typography } from '@mui/material';



export default function Footer() {

    const handleClick = () => {
        console.log('Clicado!');
    }

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
    <Chip label="E-mail" variant="outlined" onClick={handleClick} sx={{ width: "100px" }} />
    <Chip label="GitHub" variant="outlined" onClick={handleClick} sx={{ width: "100px" }} />
    <Chip label="LinkedIn" variant="outlined" onClick={handleClick} sx={{ width: "100px" }} />
</Box>

</>

  );
};

