import { Box, Typography } from "@mui/material";

export default function final() {
    return (
        <Box sx={{ mt: 3, display: 'flex', justifyContent: 'center', gap: 2, p: 5 }}>
            <Typography variant="h7" sx={{ maxWidth: '800px', margin: '0 auto', color: 'text.secondary', }}>
                © 2025 Portfolio. Feito com React & Tailwind CSS
            </Typography>
        </Box>

    );
};