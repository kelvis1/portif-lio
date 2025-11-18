import { Chip, Divider, Typography } from "@mui/material";
import Skills from "./Skills";
import Box from '@mui/material/Box';
import CardSection from "./CardSection";
import Footer from "./contatos";
import Experiencia from "./Experiencia";
import Formacao from "./Formacao";


export default function Body() {



    const scrollToProjects = () => {
        document.getElementById("projetos").scrollIntoView({ behavior: "smooth" });
    };

    const scrollToContact = () => {
        document.getElementById("contato").scrollIntoView({ behavior: "smooth" });
    };


    return (

        <Box
            sx={{
                width: "100%",
                minHeight: "100vh",
                bgcolor: "#f4f6f9"
            }}
        >

            <>
                <Box sx={{ mt: 8, display: 'flex', justifyContent: 'center', }}>
                    <Chip label="Desenvolvedor Full Stack"
                        sx={{ fontSize: '1rem', padding: '10px 6px' }} />
                </Box>

                <Box sx={{ mt: 0, textAlign: 'center', p: 2, }}>
                    <Typography variant="h7" sx={{ fontWeight: 'bold', mb: 1, }}>
                        Construindo Aplicações Web Modernas
                    </Typography>
                </Box>
                <Box id="sobre" sx={{ mt: 0, textAlign: 'center', p: 2, marginInline: '170px', }}>
                    <Typography variant="h7" sx={{ maxWidth: '800px', margin: '0 auto', color: 'text.secondary', }}>
                        Desenvolvedor de software apaixonado, especializado na criação de aplicações escaláveis e centradas no usuário com tecnologias de ponta. Do conceito à implementação, transformo ideias em realidade com código limpo e design intuitivo.
                    </Typography>
                </Box>

                <Box sx={{ mt: 3, display: 'flex', justifyContent: 'center', gap: 2, }}>
                    <Chip label="Meus Projetos" onClick={scrollToProjects} />
                    <Chip label="Entre em contato" variant="outlined" onClick={scrollToContact} />

                </Box>

                <Box sx={{ mt: 20, textAlign: 'left', marginInline: 15, p: 2, }}>
                    <Typography variant="h7" sx={{ fontWeight: 'bold', mb: 1, }}>
                        Sobre Mim
                    </Typography>
                </Box>

                <Box sx={{ mt: 0, textAlign: 'left', marginInline: 15, p: 2, }}>
                    <Typography variant="h7" sx={{ maxWidth: '800px', color: 'text.secondary', }}>
                        Desenvolvedor front-end com experiência prática em projetos web e mobile, focado em interfaces
                        funcionais e intuitivas. Atuei como estagiário em desenvolvimento de aplicações utilizando
                        tecnologias como React, JavaScript e PHP. Tenho conhecimento em boas práticas de UI/UX e estou
                        em constante evolução, ampliando habilidades no back-end com foco em PHP e Docker. Possuo perfil
                        proativo, colaborativo e voltado para resultados.
                    </Typography>
                </Box>

                <Divider id="experiencia" sx={{ my: 6 }} />
                    <Experiencia />
                
                <Divider  sx={{ my: 6 }} />   
                    <Formacao />

                <Divider  id="projetos" sx={{ my: 6 }} />

                <Box sx={{ mt: 3, textAlign: 'Center', p: 2, }}>
                    <Typography variant="h7" sx={{ fontWeight: 'bold', mb: 1, }}>
                        Meus Projetos
                    </Typography>
                </Box>

                <Box sx={{ mt: 0, textAlign: 'center', p: 2, marginInline: '170px', }}>
                    <Typography variant="h7" sx={{ maxWidth: '800px', margin: '0 auto', color: 'text.secondary', }}>
                        Uma seleção dos meus trabalhos recentes demonstrando abordagens de resolução de problemas
                    </Typography>
                </Box>

                <Box>
                    <CardSection />
                </Box>

                <Divider id="skills" sx={{ my: 6 }} />

                <Box sx={{ mt: 3, textAlign: 'Center', p: 2, }}>
                    <Typography variant="h7" sx={{ fontWeight: 'bold', mb: 1, }}>
                        Minhas Skills
                    </Typography>
                </Box>

                <Box sx={{ mt: 0, textAlign: 'center', p: 2, marginInline: '170px', }}>
                    <Typography variant="h7" sx={{ maxWidth: '800px', margin: '0 auto', color: 'text.secondary', }}>
                        Tecnologias e ferramentas que utilizo em meus projetos
                    </Typography>
                </Box>

                <Skills />

                <Box>
                    <Divider id="contato" sx={{ my: 6 }} />
                </Box>

                <Footer />

            </>
        </Box>
    );
};