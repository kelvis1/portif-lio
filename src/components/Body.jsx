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
              <Box 
                sx={{
                    padding: 2,
                    mt: 8,
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    paddingInline: 10,
                    gap: 4
                }}
                >
                    <Box sx={{ maxWidth: '700px' }}>
                        <Chip
                            label="Desenvolvedor Full Stack"
                            sx={{ fontSize: "1rem", padding: "10px 6px", mb: 2 }}
                        />
                        <Typography
                            variant="h5"
                            sx={{ fontWeight: "bold", mb: 2 }}
                        >
                            Sobre Mim
                        </Typography>

                        <Typography
                            sx={{ color: "text.secondary" }}
                        >
                            Desenvolvedor de software apaixonado, especializado na criação de
                            aplicações escaláveis e centradas no usuário com tecnologias de ponta.
                            Do conceito à implementação, transformo ideias em realidade com código
                            limpo e design intuitivo.
                        </Typography>
                    </Box>

                    <Box
                        sx={{
                            
                            width: 320,
                            height: 320,
                            borderRadius: "10%",
                            overflow: "hidden",
                            
                        }}
                    >
                        <img 
                            src="/minhafoto.jpeg"
                            alt="Minha Foto"
                            style={{ width: '100%', height: '100%', objectFit: 'cover', }}
                        />
                    </Box>
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