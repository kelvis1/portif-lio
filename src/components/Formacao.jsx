import { Box, Typography } from "@mui/material";

export default function Formacao() {
    return (
        <>
            <Box sx={{ mt: 3, textAlign: 'center', p: 2, }}>
                <Typography variant='h7' sx={{ fontWeight: 'bold', mb: 1, }}>
                    Formação Acadêmica
                </Typography>
            </Box>

            <Box sx={{ mt: 3, display: 'flex', justifyContent: 'left', gap: 2, }}>
                <Typography variant='h7' sx={{ maxWidth: '800px', margin: '0 auto', color: 'text.secondary', }}>
                    Bacharel em Ciência da Computação Fev 2025 - Jan 2029 <br /> 
                    Universidade Anhanguera - Polo Tianguá <br />
                    <br />
                    Inglês Intermediário I / II Fev 2024 - Ago 2025 <br />                                                                                 
                    Instituto Federal de Educação, Ciência e Tecnologia, IFCE - Campus Tianguá <br />
                </Typography>
            </Box>
        </>
    );
};

