import React, { useState } from 'react'
import { Box, Typography,Card,Chip,Container,Grid,Button,Dialog,DialogContent,DialogTitle,IconButton } from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import "@fontsource/playfair-display";
import "@fontsource/playfair-display/600.css";
import srmcoolprime from "../assets/srm-cool-prime.jpg";
import srmcoolprimetin from "../assets/srm-cool-prime-tin.jpg";
import heroproducts from "../assets/hero-products.jpg";
import srmcoral from "../assets/srm-coral.jpg";
import srmsignature from "../assets/srm-signature.jpg";
import srmclassicsheen from "../assets/srm-classic-sheen.jpg";
import srm1ststep from "../assets/srm-1step.jpg";
import srmclassic from "../assets/srm-classic.jpg";
import srmprimecoat from "../assets/srm-prime-coat.jpg";
import srmdampseal from "../assets/srm-damp-seal.jpg";
import srmcoraltin from "../assets/srm-coral-tin.jpg";
import srmsignaturetin from "../assets/srm-signature-tin.jpg";
import srmclassicsheentin from "../assets/srm-classic-sheen-tin.jpg";
import srm1ststeptin from "../assets/srm-dura-coat-tin.jpg";
import srmclassictin from "../assets/srm-classic-tin.jpg";
import srmprimecoattin from "../assets/prime-coat-tin.jpg";
import srmdampsealtin from "../assets/srm-protector-tin.jpg";
const products = [
            {
              title: "SRM COOL PRIME",
              finish:"Cement Primer",
              type:"INTERIOR/EXTERIOR",
              image:srmcoolprime,
              images:srmcoolprimetin,
              features:[
                "Excellent Adhesion: Forms a strong bond with cement and plastered surfaces.",
                "High Opacity & Whiteness: Ensures better coverage and brightness for topcoats.",
                "Alkali Resistant: Protects paint film from alkaline attacks on new walls.",
                "Quick Drying: Touch dry in 30–45 minutes and recoat possible in 4–6 hours.",
                "Eco-friendly: Low VOC, non-toxic, and easy to clean with water."
              ],
              directions:`Before applications of COOL PRIME water thinable interior & Exterior.
                Primer Please ensure that the surface is thoroughly dry. All loose
                and flaking paints must be removed, thin two parts of primer
                with one part of clean water, COOL PRIME can applied of
                Interior & Exterior surfaces. Allow to air dry overnight before
                applying Finishing Coats.` 
            },
            {
              title: "SRM CORAL",
              finish:"Cement Primer",
              type:"INTERIOR/EXTERIOR",
              image:srmcoral,
              images:srmcoraltin,
              features:[ 
                "Excellent Adhesion: Forms a strong bond with cement and plastered surfaces.",
                "High Opacity & Whiteness: Ensures better coverage and brightness for topcoats.",
                "Alkali Resistant: Protects paint film from alkaline attacks on new walls.",
                "Quick Drying: Touch dry in 30–45 minutes and recoat possible in 4–6 hours.",
                "Eco-friendly: Low VOC, non-toxic, and easy to clean with water."
              ],
              directions: `Before applications of CORAL water thinable interior & Exterior
              Primer, Please ensure that the surface is thoroughly dry, all loose and flaking paints 
              must be removed, thin two parts of primer with one part of clean water, CORAL can be 
              applied of Interior & Exterior surfaces. Allow to air dry over night before applying Finishing Coats.`
            },
            {
              title: "SRM SIGNATURE",
              finish:"Acylic Emulsion Paint",
              type:"INTERIOR/EXTERIOR",
              image:srmsignature,
              images:srmsignaturetin,
              features:[ 
                "UV & Weather Resistant: Long-lasting color and film protection against sunlight and rain.",
                "Anti-Fungal & Anti-Algal: Protects walls from fungus and algae growth in humid areas.",
                "High Opacity & Coverage: Excellent hiding even on old and patchy surfaces.",
                "Low VOC & Eco-Friendly: Safe for environment and non-toxic.",
                "Strong Adhesion & Flexibility: Resists flaking and cracking on cement plaster.",
                "Smooth Aesthetic Finish: Provides a neat and uniform appearance."
              ],
              directions: `Surface Prep:  Clean wall. Premove dust, greese amd loose paint.
                Fill cracks with putty and sand smooth.
                Primer: Apply one coat of water base SRM Coolwall primer.
                Dry 6-8 hrs.
                Mixing: Stril well. Dilute with clean water
                Application: Apply to coats. Gap 4-6 hrs between coats
                Drying: Touch dry 30-60 mins. Recoat: 4-6 hrs
                Precautions: Do not apply on damp walls. Avoid direct sunlight.
                Keep container closed. Keep away from children.`
            },
            {
              title: "SRM CLASSIC SHEEN",
              finish:"Acylic Emulsion Paint",
              type:"INTERIOR",
              image:srmclassicsheen,
              images:srmclassicsheentin,
              features:[ 
                "Luxurious Soft Sheen Finish: Enhances wall beauty with a subtle glow.",
                "High Washability: Stains can be easily wiped clean with a wet cloth.",
                "Excellent Film Strength: Strong adhesion prevents peeling or flaking.",
                "Superior Opacity & Whiteness: Ensures brilliant coverage and finish.",
                "Stain & Fungal Resistance: Keeps walls fresh and clean for years.",
                "Low Odor, Low VOC: Safe and eco-friendly for home interiors.",
                "Smooth Application: Easy spreading and fast drying."
              ],
               directions: `Surface Prep:  Clean wall. Premove dust, greese amd loose paint.
                Fill cracks with putty and sand smooth.
                Primer: Apply one coat of water base SRM Coolwall primer.
                Dry 6-8 hrs.
                Mixing: Stril well. Dilute with clean water
                Application: Apply to coats. Gap 4-6 hrs between coats
                Drying: Touch dry 30-60 mins. Recoat: 4-6 hrs
                Precautions: Do not apply on damp walls. Avoid direct sunlight.
                Keep container closed. Keep away from children.`
            },
            {
              title: "SRM 1st STEP",
              finish:"Acylic Emulsion Paint",
              type:"INTERIOR/EXTERIOR",
              image:srm1ststep,
              images:srm1ststeptin,
              features:[ 
                "Economical & Value for Money: Optimized formulation for cost-effective performance.",       
                "Good Adhesion: Provides sufficient bonding with cement and plaster surfaces.",
                "Seals Porosity: Reduces paint absorption and improves topcoat coverage.",          
                "Alkali Resistant: Protects the paint film from alkali present in new walls.", 
                "Easy Application: Smooth brushing and quick drying.",
                "Water Thinnable & Low Odor: Environmentally friendly and easy to clean."
              ],
            },
            {
              title: "SRM CLASSIC",
              finish:"Acylic Emulsion Paint",
              type:"INTERIOR",
              image:srmclassic,
              images:srmclassictin,
              features:[ 
                "Smooth Matte Finish: Elegant look with soft, uniform finish.",
                "Excellent Coverage: Covers more area with lesser paint.",
                "Good Washability: Withstands mild cleaning and sponging.",
                "High Opacity & Whiteness: Ensures brightness and hiding power.",
                "Low VOC, Odor-Free: Eco-friendly and safe for home interiors.",
                "Strong Adhesion: Excellent bonding to cement and plaster surfaces.",
                "Fungal & Alkali Resistant: Resists wall dampness and fungal growth."
              ],
               directions: `Surface Prep:  Clean wall. Premove dust, greese amd loose paint.
                Fill cracks with putty and sand smooth.
                Primer: Apply one coat of water base SRM Coolwall primer.
                Dry 6-8 hrs.
                Mixing: Stril well. Dilute with clean water
                Application: Apply to coats. Gap 4-6 hrs between coats
                Drying: Touch dry 30-60 mins. Recoat: 4-6 hrs
                Precautions: Do not apply on damp walls. Avoid direct sunlight.
                Keep container closed. Keep away from children.`
            },
            {
              title: "SRM PRIME COAT",
              finish:"Water-Based Cement Primer",
              type:"INTERIOR/EXTERIOR",
              image:srmprimecoat,
              images:srmprimecoattin,
              features:[ 
                "Excellent Adhesion: Forms a strong bond with cement and plastered surfaces.",
                "High Opacity & Whiteness: Ensures better coverage and brightness for topcoats.",
                "Alkali Resistant: Protects paint film from alkaline attacks on new walls.",
                "Quick Drying: Touch dry in 30–45 minutes and recoat possible in 4–6 hours.",
                "Eco-friendly: Low VOC, non-toxic, and easy to clean with water."
              ],
                directions: `Before applications of CORAL water thinable interior & Exterior
                  Primer, Please ensure that the surface is thoroughly dry, all loose and flaking paints 
                  must be removed, thin two parts of primer with one part of clean water, CORAL can be 
                  applied of Interior & Exterior surfaces. Allow to air dry over night before applying Finishing Coats.`
            },
            {
              title: "SRM DAMPSEAL",
              finish:"Emulsion Protector",
              type:"INTERIOR/EXTERIOR/ROOF COAT",
              image:srmdampseal,
              images:srmdampsealtin,
              features:[
                "Superior Waterproofing:Forms a continuous, flexible film that prevents water ingress on both walls and roofs.",
                "Dual Purpose (Interior + Exterior + Terrace):Suitable for all cementitious surfaces — interior damp walls, exterior facades, and terrace slabs.",
                "UV & Weather Resistant:Protects against UV rays and heavy rainfall; prevents fading and chalking.",
                "Anti-Fungal & Anti-Algal Protection:Prevents blackening and green algae formation in humid climates.",
                "Breathable Film:Allows moisture vapor to escape while blocking liquid water penetration.",
                "Washable & Durable:Retains strength and color for years; easy to clean.",
                "Strong Adhesion:Excellent bonding to cement plaster, concrete, brickwork, and old painted surfaces.",
              ],
              directions: `Sree Paints Damp Seal PROTECTOR 3 in 1 is a waterproofing coating for Interior, Exterior, Vertical and Horizontal surface like Rooftop floor also a water proofing base coat for Interior Exterior.
                Prepare the surface by deaning with wirebrush and ensure it is free of dust oil, fungus and loose particles.
                All hollow area must be required small cracks of upto 3 mm width or less, should be cleaned and filled with any crack filler.
                Apply two coats of SREE PAINTS DAMP SEAL PROTECTOR 3 in 1 in an interval of 4-6 hours.
                Allow to air dry overnight before applying finished goods
                Ensure that the product is applied on the entire wall, ceiling, roof including parapet wall
                Do not apply during rains or when it is expected to rain.`
            },
             
        ]
function Product() {
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [openDialog, setOpenDialog] = useState(false);
  const [dialogType, setDialogType] = useState("features");

  const handleOpenDialog = (product, type) => {
    setSelectedProduct(product);
    setDialogType(type);
    setOpenDialog(true);
  };

  const handleCloseDialog = () => {
    setOpenDialog(false);
    setSelectedProduct(null);
  };

  return (
    <div>
        <Box sx={{ width: "100%", overflow: "hidden" }}>
          {/* Background Image */}
          <Box
            sx={{
                position: "relative", 
                width: "100%", 
                height: "65vh", 
                backgroundImage: `url(${heroproducts})`, 
                backgroundSize: "cover", 
                backgroundPosition: "center",
            }}
          >
            <Box sx={{ position: "absolute", inset: 0, background: "linear-gradient(to right, rgba(12, 33, 59, 0.9), rgba(20,50,90,0.7))",}}/>

            <Box sx={{
                position: "absolute",
                inset: 0,
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                height: "100%",
                px: { xs: 4, md: 12},
              }}
            >
              <Typography
                variant="h1"
                className="fade-in-up"
                sx={{
                        textAlign: "center",
                        mt: 15,
                        fontFamily: "Playfair Display",
                        fontWeight: 600,
                        fontSize: { xs: "3rem", md: "4rem" },
                        lineHeight: 1.2,
                        color: "#fff",
                        mb: 2,
                    }}
              >
                Our Premium Products
              </Typography>
              <Typography
                className="fade-in-up"
                sx={{
                  width: { xs: "80%", md: "60%" },
                  margin: "0 auto",
                  color: "#fff",
                  textAlign: "center",
                  mb: 4,
                  lineHeight: 1.4,
                  fontSize: { xs: "1rem", md: "1.3rem" },
                }}
              >
                Discover the perfect paint for every space and purpose
              </Typography>
            </Box>
          </Box>
        </Box>
        <Container maxWidth="xl" sx={{ mt: 8, mb: 12 }}></Container>

        <Box sx={{ px: { xs: "2px", md: "3px" },}}>

          <Grid 
          container 
          spacing={5} 
          justifyContent="center"
          sx={{
              px: { xs: 2, md: 1 },
          }}>
          {products.map((product, index) => (
            <Grid item xs={12} md={6} key={index}>
              <Card
                elevation={0}
                sx={{
                  width: "100%",
                  maxWidth: { xs: "100%", sm: "600px", md: "550px" },

                  mx: "auto",

                  p: { xs: 3, md: 5 },

                  borderRadius: "15px",
                  overflow: "hidden",
                  border: "1px solid rgba(0,0,0,0.08)",

                  transition: "all 0.4s ease",

                  background:
                    "linear-gradient(to bottom, #ffffff, #fafafa)",

                  "&:hover": {
                    transform: "translateY(-10px)",
                    boxShadow: "0 20px 40px rgba(0,0,0,0.12)",
                  },
                }}
              >
                {/* Image Section */}
                <Box
                  sx={{
                    height: 260,
                    position: "relative",
                    overflow: "hidden",
                    background:
                      "linear-gradient(to bottom right, #f8f8f8, #ececec)",
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
                      transition: "0.5s ease",
                      p: 3,
                      "&:hover": {
                        transform: "scale(1.08)",
                      },
                    }}
                  />

                  {/* Overlay */}
                  <Box
                    sx={{
                      position: "absolute",
                      inset: 0,
                      background:
                        "linear-gradient(to top, rgba(0,0,0,0.45), rgba(0,0,0,0))",
                      opacity: 0,
                      transition: "0.4s",
                      ".MuiCard-root:hover &": {
                        opacity: 1,
                      },
                    }}
                  />

                  {/* Type Badge */}
                  <Chip
                    label={product.type}
                    sx={{
                      position: "absolute",
                      top: 16,
                      right: 16,
                      background:
                        "linear-gradient(to right, #f6bc1b, #e0a800)",
                      color: "#fff",
                      fontWeight: 600,
                      fontSize: "0.75rem",
                      letterSpacing: "0.5px",
                      boxShadow: "0 4px 12px rgba(246,188,27,0.4)",
                    }}
                  />
                </Box>

                {/* Content */}
                <Box
                  sx={{
                    p: 4,
                    display: "flex",
                    flexDirection: "column",
                    height: "calc(100% - 260px)",
                  }}
                >
                  {/* Title */}
                  <Typography
                    sx={{
                      fontFamily: "Playfair Display",
                      fontWeight: 700,
                      color: "#1e293b",
                      fontSize: {xs: "1.6rem", md: "1.6rem"},
                      mb: 1,
                      lineHeight: 1.2,
                      textAlign: "center",
                    }}
                  >
                    {product.title}
                  </Typography>

                  {/* Finish */}
                  <Typography
                    sx={{
                      color: "#64748b",
                      fontSize: {xs: "1rem", md: "1.2rem"},
                      mb: 3,
                      fontWeight: 500,
                      textAlign: "center",
                    }}
                  >
                    Finish: {product.finish}
                  </Typography>

                  {/* Button */}
                  <Box
                    sx={{
                      display: "flex",
                      gap: 1.5,
                      mt: 4,
                    }}
                  >
                    <Button
                      variant="contained"
                      onClick={() => handleOpenDialog(product, "features")}
                      sx={{
                        flex: 1,
                        background:
                          "linear-gradient(to right, #f6bc1b, #e0a800)",
                        color: "#132847",
                        fontWeight: 500,
                        textTransform: "none",
                        py: 1.3,
                        px: { xs: 2, sm: 1.5, md: 2.5 },
                        borderRadius: "14px",
                        fontSize: { xs: "0.78rem", sm: "0.9rem", md: "1rem" },
                        whiteSpace: "nowrap",
                        minWidth: 0,
                        boxShadow: "0 8px 20px rgba(246,188,27,0.35)",
                        transition: "0.3s ease",

                        "&:hover": {
                          background:
                            "linear-gradient(to right, #e0a800, #c99200)",
                          transform: "translateY(-2px)",
                          boxShadow: "0 12px 24px rgba(246,188,27,0.45)",
                        },
                      }}
                    >
                      View Product
                    </Button>

                    <Button
  variant="contained"
   onClick={() => handleOpenDialog(product, "directions")}
  sx={{
    flex: 1,
    background:
      "linear-gradient(to right, #132847, #1d3d6b)",
    color: "#fff",
    fontWeight: 500,
    textTransform: "none",
    py: 1.3,
    px: { xs: 2.5, sm: 1.5, md: 2.5 },
    fontSize: { xs: "0.78rem", sm: "0.9rem", md: "1rem" },
    borderRadius: "14px",
    whiteSpace: "nowrap",
    minWidth: 0,
    boxShadow: "0 8px 20px rgba(19,40,71,0.25)",
    transition: "0.3s ease",

    "&:hover": {
      background:
        "linear-gradient(to right, #0f213d, #17345d)",
      transform: "translateY(-2px)",
      boxShadow: "0 12px 24px rgba(19,40,71,0.35)",
    },
  }}
>
  Directions to Use
</Button>
                  </Box>
                </Box>
              </Card>
            </Grid>
            ))}
          </Grid>
        </Box>

      {/* Product Details Dialog */}
      <Dialog
  open={openDialog}
  onClose={handleCloseDialog}
  maxWidth={false}
  fullWidth
  sx={{
    "& .MuiDialog-paper": {
      width: { xs: "92%", sm: "85%", md: "78%" },
      height: { xs: "74vh", md: "78vh" },

      maxWidth: "1100px",

      marginTop: { xs: "90px", md: "100px" },
      marginBottom: { xs: "30px", md: "40px" },
      overflow: "hidden",

      borderRadius: { xs: "18px", md: "24px" },

      backgroundColor: "#111827",
      position: "relative",
    },

    "& .MuiBackdrop-root": {
      backgroundColor: "rgba(0,0,0,0.72)",
    },
  }}
>
 {selectedProduct && (
  <Box
    sx={{
      position: "relative",
      width: "100%",
      height: "100%",
      overflow: "hidden",
      borderRadius: { xs: "18px", md: "24px" },
    }}
  >
    {/* BACKGROUND IMAGE */}
    <Box
      sx={{
        position: "absolute",
        inset: 0,

        backgroundImage: `url(${selectedProduct.image})`,
      //  backgroundColor: "#fff",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    />

    {/* DARK OVERLAY */}
    <Box
      sx={{
        position: "absolute",
        inset: 0,
        background:
          "linear-gradient(to top, rgba(0,0,0,0.96) 0%, rgba(0,0,0,0.82) 45%, rgba(0,0,0,0.55) 100%)",
        zIndex: 1,
      }}
    />

    {/* SCROLLABLE CONTENT */}
    <Box
      sx={{
        position: "relative",
        zIndex: 2,

        width: "100%",
        height: "100%",

        overflowY: "auto",

        "&::-webkit-scrollbar": {
          width: "8px",
        },

        "&::-webkit-scrollbar-thumb": {
          background: "#f6bc1b",
          borderRadius: "10px",
        },
      }}
    >
      {/* CLOSE BUTTON */}
      <IconButton
        onClick={handleCloseDialog}
        sx={{
          position: "sticky",
          top: 16,
          ml: "auto",
          mr: 2,

          display: "flex",

          zIndex: 9999,

          width: { xs: 40, md: 46 },
          height: { xs: 40, md: 46 },

          backgroundColor: "rgba(0,0,0,0.55)",
          backdropFilter: "blur(10px)",

          color: "#fff",

          "&:hover": {
            backgroundColor: "rgba(0,0,0,0.75)",
          },
        }}
      >
        <CloseIcon />
      </IconButton>

      {/* CONTENT */}
      <Box
        sx={{
          px: { xs: 3, sm: 4, md: 6 },
          pb: { xs: 5, md: 7 },
          pt: 1,
          color: "#fff",
        }}
      >
        {/* TITLE */}
        <Typography
          sx={{
            fontFamily: "Playfair Display",
            fontWeight: 400,
            fontSize: { xs: "2rem", sm: "2.5rem", md: "3.5rem" },
            color: "#fff",
            mb: 2,
            lineHeight: 1.1,
          }}
        >
          {selectedProduct.title}
        </Typography>

        {/* FINISH + TYPE */}
        <Box
          sx={{
            display: "flex",
            flexWrap: "wrap",
            gap: 2,
            mb: 4,
          }}
        >
          <Typography
            sx={{
              color: "#f6bc1b",
              fontSize: { xs: "0.95rem", md: "1.1rem" },
              fontWeight: 500,
            }}
          >
            Finish: {selectedProduct.finish}
          </Typography>

          <Typography
            sx={{
              color: "#f6bc1b",
              fontSize: { xs: "0.95rem", md: "1.1rem" },
              fontWeight: 500,
            }}
          >
            Type: {selectedProduct.type}
          </Typography>
        </Box>

        {dialogType === "features" && (
  <>
    <Typography
      sx={{
        fontFamily: "Playfair Display",
        fontWeight: 600,
        fontSize: { xs: "1.5rem", md: "1.8rem" },
        color: "#f6bc1b",
        mb: 3,
      }}
    >
      Key Features
    </Typography>

    <Grid container spacing={3}>
      {selectedProduct.features.map((feature, i) => (
        <Grid item xs={12} md={6} key={i}>
          <Box
            sx={{
              display: "flex",
              alignItems: "flex-start",
              gap: 2,
            }}
          >
            <Box
              sx={{
                width: 10,
                height: 10,
                borderRadius: "50%",
                backgroundColor: "#f6bc1b",
                mt: "8px",
                flexShrink: 0,
              }}
            />

            <Typography
              sx={{
                color: "#fff",
                fontSize: { xs: "0.95rem", md: "1rem" },
                lineHeight: 1.7,
              }}
            >
              {feature}
            </Typography>
          </Box>
        </Grid>
      ))}
    </Grid>
  </>
)}

{dialogType === "directions" && (
  <Box sx={{ mt: 2 }}>
    <Typography
      sx={{
        fontFamily: "Playfair Display",
        fontWeight: 600,
        fontSize: { xs: "1.5rem", md: "1.8rem" },
        color: "#f6bc1b",
        mb: 3,
      }}
    >
      Directions for Use
    </Typography>

    <Box
      sx={{
        background: "rgba(255,255,255,0.06)",
        border: "1px solid rgba(255,255,255,0.08)",
        borderRadius: "18px",
        p: { xs: 2.5, md: 4 },
        backdropFilter: "blur(8px)",
      }}
    >
      <Typography
        sx={{
          color: "#fff",
          lineHeight: 1.9,
          fontSize: { xs: "0.92rem", md: "1rem" },
          whiteSpace: "pre-line",
        }}
      >
        {selectedProduct.directions || "Directions not available."}
      </Typography>
    </Box>
  </Box>
)}
      </Box>
    </Box>
  </Box>
)}
</Dialog>
    </div>

  )
}

export default Product
