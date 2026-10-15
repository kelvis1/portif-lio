import { Box, Typography } from "@mui/material";

export default function final() {
    return (
        <Box sx={{ mt: 3, display: 'flex', justifyContent: 'center', gap: 2, p: 5,
         backgroundColor: '#0f0f0f', }}>
            <Typography variant="h7" sx={{ maxWidth: '800px', margin: '0 auto', color: 'white', }}>
                © 2025 Portfolio. Feito por Kelves Rodrigues.
            </Typography>
        </Box>

    );
};