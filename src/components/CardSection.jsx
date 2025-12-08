import { useState } from "react";
import {
  Box,
  Card,
  CardContent,
  CardMedia,
  Typography,
  Chip,
  Grid,
  Modal,
  Fade,
  Backdrop,
} from "@mui/material";

const cardData = [
  {
    title: "Product Price",
    description: "Sistema de precificação dinâmica para supermercado.",
    fullDescription:
      `O Product Price é uma aplicação completa de precificação dinâmica na hora de fazer compras no supermercado.
      
      O sistema permite que o usuário adicione produtos ao carrinho, ao mesmo tempo na vida real e calcule automaticamente o preço total com base
      na quantidade e no preço de cada item.
      O projeto foi desenvolvido com foco na forma de facilitar em gereciar o valor que o usuário irá pagar ao final das compras, otimizando tempo
      e evitando erros de cálculo.`,
    chips: ["React", "Node.js", "SQLite", "MUI", "Vercel", "HTML", "CSS"],
    image: "/Sprite-0002.png",
    actions: [
      { label: "GitHub", type: "url", url: "https://github.com/kelvis1/product-price/tree/master" },
      { label: "Resumo", type: "resumo" },
      { label: "Demonstração", type: "url", url: "https://product-price-front.vercel.app/"},
    ],
  },
  {
    title: "Projeto Ambula",
    description: "Ambula foi um aplicativo base de chamada de veiculos de emergência.",
    fullDescription: "Ambula foi um aplicativo base de chamada de veiculos de emergência, desenvolvido durante um teste técnico para uma vaga de estagio",
    chips: ["React Native", "API REST", "Firebase", "HTML", "CSS"],
    image: "/mapa.png",
    actions: [
      { label: "GitHub", type: "url", url: "https://github.com/kelvis1/projeto-ambula" },
      { label: "Resumo", type: "resumo" },
    ],
  },
  {
    title: "Portfólio",
    description: "Meu portfólio pessoal desenvolvido para apresentar meus projetos.",
    fullDescription: "Meu portfólio pessoal desenvolvido para apresentar meus projetos e habilidades como desenvolvedor web.",
    chips: ["React", "JavaScript", "MUI", "HTML", "CSS", "Vercel"],
    image: "/portifolio.png",
    actions: [
      { label: "GitHub", type: "url", url: "https://github.com/seu-repo-3" },
      { label: "Resumo", type: "resumo" },
    ],
  },
  {
    title: "MoneyPlus",
    description: "Projeto em desenvolvimento",
    fullDescription: "Meu projeto de finanças definitivo, nele pretendo colocar uma boa organização na distribuição do dinheiro do usuario!",
    chips: ["React", "JavaScript", "HTML", "CSS", "Node.js", "Express"],
    image: "/moneyplus.png",
    actions: [
      {label: "Github-front", type: "url", url: "https://github.com/kelvis1/MoneyPlus-front"},
      {label: "Github-back", type: "url", url: "https://github.com/kelvis1/MoneyPlus-back"},
      {label: "Resumo", type: "resumo" },
      { label: "Demonstração", type: "url", url: "https://money-plus-front.vercel.app/"},
    ],
  },
];

export default function CardSection() {
  const [open, setOpen] = useState(false);
  const [modalInfo, setModalInfo] = useState({ title: "", description: "" });

  const handleOpenResumo = (card) => {
    setModalInfo({ title: card.title, description: card.fullDescription || card.description, });
    setOpen(true);
  };

  const handleClose = () => setOpen(false);

  return (
    <>
      <Box
        sx={{
          mt: 10,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          gap: 5,
        }}
      >
        <Grid container spacing={4} justifyContent="center" maxWidth="1000px">
          {cardData.map((card, index) => (
            <Grid item xs={12} sm={6} md={4} key={index}>
              <Card
                sx={{
                  maxWidth: 300,
                  mx: "auto",
                  transition: "0.3s",
                  "&:hover": { transform: "scale(1.05)", boxShadow: 5 },
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

                
                  <Box sx={{ display: "flex", gap: 1, flexWrap: "wrap", mt: 2 }}>
                    {card.actions.map((action, i) => (
                      <Chip
                        key={i}
                        label={action.label}
                        clickable
                        sx={{ bgcolor: action.type === "url" ? "#000" : "#9e9e9e", color: "#fff",
                           fontWeight: "bold", "&:hover": { bgcolor: action.type === "url" ? "#333" : "#bdbdbd",}, }}
                        onClick={() =>
                          action.type === "url"
                            ? window.open(action.url, "_blank")
                            : handleOpenResumo(card)
                        }
                      />
                    ))}
                  </Box>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Box>

      <Modal
        open={open}
        onClose={handleClose}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{ timeout: 400 }}
      >
        <Fade in={open}>
          <Box
            sx={{
              position: "absolute",
              top: "50%",
              left: "50%",
              transform: "translate(-50%, -50%)",
              width: 400,
              bgcolor: "background.paper",
              borderRadius: 2,
              boxShadow: 24,
              p: 4,
            }}
          >
            <Typography variant="h6" fontWeight="bold">
              {modalInfo.title}
            </Typography>

            <Typography sx={{ mt: 2 }}>{modalInfo.description}</Typography>
          </Box>
        </Fade>
      </Modal>
    </>
  );
}
