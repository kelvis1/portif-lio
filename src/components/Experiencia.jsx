import { Box, Typography } from "@mui/material";

export default function Experiencia() {

    return (
        <>

            <Box sx={{ mt: 3, textAlign: 'center', p: 2, }}>
                <Typography variant="h7" sx={{ fontWeight: 'bold', mb: 1, }}>
                    Experiência Profissional
                </Typography>
            </Box>

            <Box sx={{ mt: 3, display: 'flex', justifyContent: 'left', gap: 2, }}>
                <Typography variant='h7' sx={{ maxWidth: '800px', margin: '0 auto', color: 'text.secondary', }}>
                    Ambula - Estagiário em Desenvolvimento Front-end  Remoto | Mar 2025 - Jun 2025 <br />
                    ● Desenvolvimento e manutenção de aplicações web/mobile com foco em experiência do
                    usuário. <br />
                    ● Utilização de Flutter Flow  em aplicações reais. <br />
                    ● Participação em reuniões de sprint e revisões de código em ambiente colaborativo ágil. <br />
                    <br />
                    Freelancer - Designer de Artes Digitais Remoto | 2024 - 2025 <br />
                    ●  Criação de artes digitais personalizadas para redes sociais e materiais gráficos. <br />
                </Typography>
            </Box>
        </>
    );
};