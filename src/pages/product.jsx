import React from 'react'
import { Box, Typography,Card,Chip,Container,Grid } from "@mui/material";
import "@fontsource/playfair-display";
import "@fontsource/playfair-display/600.css";
import Srmcoolprime from "../assets/srm-cool-prime.jpeg";
import heroproducts from "../assets/hero-products.jpg";
import srmcoral from "../assets/srmcoral.jpeg";
import srmsignature from "../assets/srmsignature.jpeg";
import srmclassicsheen from "../assets/srmclassicsheen.jpeg";
import srm1ststep from "../assets/srm1step.jpeg";
import srmclassic from "../assets/srmclassic.jpeg";
import srmprimecoat from "../assets/srmprimecoat.jpeg";
import srmdampseal from "../assets/srmdampseal.jpeg";
const products = [
        {
            title: "SRM COOL PRIME",
            finish:"CEMENT PRIMER",
            type:"INTERIOR/EXTERIOR",
            image:Srmcoolprime,
            features:["Excellent Adhesion: Forms a strong bond with cement and plastered surfaces.",
"High Opacity & Whiteness: Ensures better coverage and brightness for topcoats.",

"Alkali Resistant: Protects paint film from alkaline attacks on new walls.",

"Quick Drying: Touch dry in 30–45 minutes and recoat possible in 4–6 hours.",

"Eco-friendly: Low VOC, non-toxic, and easy to clean with water."],
            },
            {
            title: "SRM CORAL",
            finish:"CEMENT PRIMER",
            type:"INTERIOR/EXTERIOR",
            image:srmcoral,
            features:[ "Excellent Adhesion: Forms a strong bond with cement and plastered surfaces.",
"High Opacity & Whiteness: Ensures better coverage and brightness for topcoats.",

"Alkali Resistant: Protects paint film from alkaline attacks on new walls.",

"Quick Drying: Touch dry in 30–45 minutes and recoat possible in 4–6 hours.",

"Eco-friendly: Low VOC, non-toxic, and easy to clean with water."
],
            },
            {
            title: "SRM SIGNATURE",
            finish:"ACRYLIC EMULSION PAINT",
            type:"INTERIOR/EXTERIOR",
            image:srmsignature,
            features:[ "UV & Weather Resistant: Long-lasting color and film protection against sunlight and rain.",
"Anti-Fungal & Anti-Algal: Protects walls from fungus and algae growth in humid areas.",
"High Opacity & Coverage: Excellent hiding even on old and patchy surfaces.",
"Low VOC & Eco-Friendly: Safe for environment and non-toxic.",
"Strong Adhesion & Flexibility: Resists flaking and cracking on cement plaster.",
"Smooth Aesthetic Finish: Provides a neat and uniform appearance."
],
            },
            {
            title: "SRM CLASSIC SHEEN",
            finish:"ACRYLIC EMULSION PAINT",
            type:"INTERIOR",
            image:srmclassicsheen,
            features:[ "Luxurious Soft Sheen Finish: Enhances wall beauty with a subtle glow.",
"High Washability: Stains can be easily wiped clean with a wet cloth.",
"Excellent Film Strength: Strong adhesion prevents peeling or flaking.",
"Superior Opacity & Whiteness: Ensures brilliant coverage and finish.",
"Stain & Fungal Resistance: Keeps walls fresh and clean for years.",
"Low Odor, Low VOC: Safe and eco-friendly for home interiors.",
"Smooth Application: Easy spreading and fast drying."
],
            },
            {
            title: "SRM 1st STEP",
            finish:"ACRYLIC EMULSION PAINT",
            type:"INTERIOR/EXTERIOR",
            image:srm1ststep,
            features:[ "Economical & Value for Money: Optimized formulation for cost-effective performance.",       

"Good Adhesion: Provides sufficient bonding with cement and plaster surfaces.",

"Seals Porosity: Reduces paint absorption and improves topcoat coverage.",          

"Alkali Resistant: Protects the paint film from alkali present in new walls.",  

"Easy Application: Smooth brushing and quick drying.",

"Water Thinnable & Low Odor: Environmentally friendly and easy to clean."

],
            },
            {
            title: "SRM CLASSIC",
            finish:"ACRYLIC EMULSION PAINT",
            type:"INTERIOR",
            image:srmclassic,
            features:[ " Smooth Matte Finish: Elegant look with soft, uniform finish.",
" Excellent Coverage: Covers more area with lesser paint.",
" Good Washability: Withstands mild cleaning and sponging.",
" High Opacity & Whiteness: Ensures brightness and hiding power.",
" Low VOC, Odor-Free: Eco-friendly and safe for home interiors.",
" Strong Adhesion: Excellent bonding to cement and plaster surfaces.",
" Fungal & Alkali Resistant: Resists wall dampness and fungal growth."

],
            },
            {
            title: "SRM PRIME COAT",
            finish:"Water-Based Cement Primer",
            type:"INTERIOR/EXTERIOR",
            image:srmprimecoat,
            features:[ "Excellent Adhesion: Forms a strong bond with cement and plastered surfaces.",

"High Opacity & Whiteness: Ensures better coverage and brightness for topcoats.",

"Alkali Resistant: Protects paint film from alkaline attacks on new walls.",
"Quick Drying: Touch dry in 30–45 minutes and recoat possible in 4–6 hours.",

"Eco-friendly: Low VOC, non-toxic, and easy to clean with water."

],
            },
            {
            title: "SRM DAMPSEAL",
            finish:"EMULSION PROTECTOR",
            type:"INTERIOR/EXTERIOR/ROOF COAT",
            image:srmdampseal,
            features:["Superior Waterproofing:Forms a continuous, flexible film that prevents water ingress on both walls and roofs.",

" Dual Purpose (Interior + Exterior + Terrace):Suitable for all cementitious surfaces — interior damp walls, exterior facades, and terrace slabs.",
"UV & Weather Resistant:Protects against UV rays and heavy rainfall; prevents fading and chalking.",
"Anti-Fungal & Anti-Algal Protection:Prevents blackening and green algae formation in humid climates.",
"Breathable Film:Allows moisture vapor to escape while blocking liquid water penetration.",

"Washable & Durable:Retains strength and color for years; easy to clean.",
"Strong Adhesion:Excellent bonding to cement plaster, concrete, brickwork, and old painted surfaces.",


],
            },
             
        ]
function Product() {
  return (
    <div>
        <Box
  sx={{
    position: "relative",
    width: "100%",
    height: { xs: "60vh", md: "90vh" },
    overflow: "hidden",
  }}
>
  {/* Background Image */}
  <Box
    component="img"
    src={heroproducts} // replace with your image path
    alt="Premium Products"
    sx={{
      width: "100%",
      height: "100%",
      objectFit: "cover",
    }}
  />

  {/* Dark Overlay */}
  <Box
    sx={{
      position: "absolute",
      inset: 0,
      background:
        "linear-gradient(to right, rgba(3,24,63,0.88), rgba(3,24,63,0.55))",
    }}
  />

  {/* Content */}
  <Box
    sx={{
      position: "absolute",
      inset: 0,
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      justifyContent: "center",
      textAlign: "center",
      px: 2,
    }}
  >
    <Typography
      sx={{
        color: "#fff",
        fontFamily: "Playfair Display",
        fontWeight: 600,
        fontSize: {
          xs: "3rem",
          sm: "4rem",
          md: "6rem",
          lg: "7rem",
        },
        lineHeight: 1.1,
      }}
    >
      Our Premium Products
    </Typography>

    <Typography
      sx={{
        mt: 2,
        color: "#e5e5e5",
        fontSize: {
          xs: "1rem",
          sm: "1.4rem",
          md: "2rem",
        },
        fontWeight: 300,
        fontFamily: "Inter, sans-serif",
      }}
    >
      Discover the perfect paint for every space and purpose
    </Typography>
  </Box>
</Box>
<Container maxWidth="xl" sx={{ py: 8 }}>
</Container>
<div>

</div>
<Container maxWidth="xl" sx={{ py: 8 }}>

        <Grid container spacing={4}>

          {products.map((product, index) => (

            <Grid item xs={12} md={6} lg={4} key={index}>

              <Card
                elevation={0}
                sx={{
                  borderRadius: "24px",
                  overflow: "hidden",
                  border: "1px solid #ddd",
                  height: "100%",
                }}
              >

                {/* ⭐ CHANGED: Product Image */}
                <Box
                  sx={{
                    height: 320,
                    position: "relative",
                    overflow: "hidden",
                  }}
                >
                  <Box
                    component="img"
                    src={product.image}
                    alt={product.title}
                    sx={{
                      width: "100%",
                      height: "100%",
                      objectFit: "contain",
                      transition: "0.4s",
                      "&:hover": {
                        transform: "scale(1.05)",
                      },
                    }}
                  />

                  {/* Overlay */}
                  <Box
                    sx={{
                      position: "absolute",
                      inset: 0,
                      background:
                        "linear-gradient(to top, rgba(0,0,0,0.35), rgba(0,0,0,0.05))",
                    }}
                  />

                  {/* ⭐ CHANGED: Category Chip */}
                  <Chip
                    label={product.type}
                    sx={{
                      position: "absolute",
                      top: 20,
                      right: 20,
                      backgroundColor: "#f6bc1b",
                      color: "#fff",
                      fontWeight: 600,
                      fontSize: "0.9rem",
                    }}
                  />
                </Box>

                {/* Content */}
                <Box sx={{ p: 4 }}>

                  {/* Title */}
                  <Typography
                    sx={{
                      fontFamily: "Playfair Display",
                      fontWeight: 700,
                      color: "#343848",
                      fontSize: {
                        xs: "2rem",
                        md: "2.5rem",
                      },
                    }}
                  >
                    {product.title}
                  </Typography>

                  {/* Finish */}
                  <Typography
                    sx={{
                      mt: 1,
                      color: "#6b7894",
                      fontSize: "1.3rem",
                    }}
                  >
                    Finish: {product.finish}
                  </Typography>

                  {/* ⭐ CHANGED: Features Mapping */}
                  <Box sx={{ mt: 4 }}>

                    {product.features.map((feature, i) => (

                      <Box
                        key={i}
                        sx={{
                          display: "flex",
                          alignItems: "flex-start",
                          mb: 2,
                        }}
                      >

                        {/* Bullet */}
                        <Box
                          sx={{
                            width: 10,
                            height: 10,
                            borderRadius: "50%",
                            backgroundColor: "#f6bc1b",
                            mt: "8px",
                            mr: 2,
                            flexShrink: 0,
                          }}
                        />

                        {/* Feature Text */}
                        <Typography
                          sx={{
                            color: "#3d4453",
                            fontSize: "1rem",
                            lineHeight: 1.8,
                          }}
                        >
                          {feature}
                        </Typography>

                      </Box>

                    ))}

                  </Box>

                </Box>

              </Card>

            </Grid>

          ))}

        </Grid>

      </Container>

    </div>

  )
}

export default Product
