import React from "react";
import { Box, Typography, Button, Rating } from "@mui/material";
import { Link } from "react-router-dom";
import GetQuoteButton from "../Components/GetQuoteButton";
import heroImg from "../assets/hero-home.jpg";
import "@fontsource/playfair-display";
import "@fontsource/playfair-display/600.css";
import { Shield, Palette, CheckCircle2, Leaf } from "lucide-react";


function Home() {
  return (
    <Box sx={{ width: "100%", overflow: "hidden" }}>
      <Box sx={{ 
          position: "relative", 
          width: "100%", 
          height: "100vh", 
          backgroundImage: `url(${heroImg})`, 
          backgroundSize: "cover", 
          backgroundPosition: "center",
        }}
      >
        <Box sx={{ position: "absolute", inset: 0, background: "linear-gradient(to right, rgba(12, 33, 59, 0.9), rgba(20,50,90,0.7))",}}/>

        <Box
          sx={{
            position: "absolute",
            inset: 0,
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            height: "105%",
            px: { xs: 4, md: 12},
          }}
        >
          <Typography
            variant="h2"
            className="fade-in-up"
            sx={{
              fontFamily: "Playfair Display",
              fontWeight: 700,
              fontSize: { xs: "3rem", md: "4rem" },
              color: "rgb(250, 251, 252)",
              lineHeight: 1.2,
              textAlign: "center",
              mb: 2,
            }}
          >
            Colouring Dreams with <br />
            <span style={{ color: "#f4c449" }}>Quality & Trust</span>
          </Typography>

          <Typography
            variant="h6"
            className="fade-in-up"
            sx={{  
              width: "100%",
              margin: "0 auto",
              color: "#fff",
              textAlign: "center",
              mb: 4,
              lineHeight: 1.4,
            }}
          >
            Premium interior and exterior paints for homes, offices, and <br />
            industrial spaces.
          </Typography>

          <Box sx={{ display: "flex", gap: 2, justifyContent:"center" }}>
            <Button
              component={Link}
              to="/products"
              className="enlarge-on-load"
              sx={{
                fontWeight: 500,
                fontSize: "0.875rem",
                textTransform: "none",
                borderRadius: "10px",
                backgroundColor: "#fad13d",
                color: "#132847",
                px: 3,
                py: 1.5,
                "&:hover": { backgroundColor: "#f4c449" },
              }}
            >
              Explore Products
            </Button>
          </Box>         
        </Box>
      </Box>
      {/* --------- Why Choose Section --------- */}
      <Box sx={{  minHeight: "90vh",background: "linear-gradient(180deg, #f7f7f7b2, #edf0e3cb)", pt: 4, pb: 9}}>
        <Typography
          variant="h3"
          sx={{
            textAlign: "center",
            mt: 9,
            fontFamily: "Playfair Display",
            fontWeight: 700,
            fontSize: { xs: "3rem", md: "3rem" },
            color: "#3c3c41ff",
            mb: 1.5,
          }}
        >
          Why Choose Sree Paints
        </Typography>
        <Typography
            variant="h6"
            sx={{  
              width: "100%",
              margin: "0 auto",
              color: "#76788fff",
              textAlign: "center",
              mb: 4,
              lineHeight: 1.4,
            }}
          >
            Experience the perfect blend of quality, durability, and aesthetics
        </Typography>

        <Box
          sx={{
            mt: 8,
            display: "flex",
            flexWrap: "wrap",
            gap: { xs: 3.6, md: 5 },
            justifyContent: "center",
            px: { xs: 1, md: 1 },
        
          }}
        >
        {[
          {
            icon: <Shield size={32} />,
            title: "Durability",
            desc: "Long-lasting protection that withstands time and weather",
          },
          {
            icon: <Palette size={32} />,
            title: "Smooth Finish",
            desc: "Professional-grade application for flawless walls",
          },
          {
            icon: <CheckCircle2 size={32} />,
            title: "Long-lasting Colors",
            desc: "Vibrant colors that stay fresh for years",
          },
          {
            icon: <Leaf size={32} />,
            title: "Eco-Friendly",
            desc: "Safe for your family and the environment",
          },
        ].map((item, index) => (
          <Box
            key={index}
            sx={{
              width: { xs:"100%", sm:"45%", md: "22%" },
              background: "#fff",
              borderRadius: "14px",
              boxShadow: "0 4px 20px rgba(0,0,0,0.08)",
              p: { xs: 4, md: 5 },
              textAlign: "center",
              position: "relative",
              "&:hover .iconCircle": { transform: "scale(1.25)" },
            }}
          >
            {/* ICON CIRCLE */}
            <Box
              className="iconCircle"
              sx={{
                width: "60px",
                height: "60px",
                margin: "0 auto 15px",
                mb: 3,
                borderRadius: "50%",
                background: "linear-gradient(to bottom, hsl(220,70%,20%), hsl(220,60%,30%))",
                display: "flex",
                color: "#fff",
                alignItems: "center",
                justifyContent: "center",
                transition: "transform 0.3s ease",
              }}
            >
              {item.icon}
            </Box>
            <Typography variant="h6" sx={{ fontFamily: "Playfair Display", fontWeight: 700, mb: 1.5, color: "#3c3c41ff" }}>
              {item.title}
            </Typography>
            <Typography
              variant="body2"
              sx={{ fontSize: { xs: "16px", md: "15.5px" }, color: "#76788fff", lineHeight: 1.5, width:"105%" }}
            >
              {item.desc}
            </Typography>
          </Box>

        ))}
      </Box>
      </Box>

      {/* --------- Testimonials Section --------- */}
      
       <Box sx={{  minHeight: "90vh",pt: 4, pb: 9, backgroundColor: "#eeece871"}}>
        <Typography
          variant="h3"
          sx={{
            textAlign: "center",
            mt: 6,
            fontFamily: "Playfair Display",
            fontWeight: 700,
            fontSize: { xs: "3rem", md: "3rem" },
            color: "#3c3c41ff",
            mb: 1.5,
          }}
        >
          What Our Customers Say
        </Typography>
        <Typography
            variant="h6"
            sx={{  
              width: "100%",
              margin: "0 auto",
              color: "#76788fff",
              textAlign: "center",
              mb: 4,
              lineHeight: 1.4,
            }}
          >
            Trusted by hundreds of satisfied customers across Kanyakumari
        </Typography>
        <Box
          sx={{
            mt: 8,
            display: "flex",
            flexWrap: "wrap",
            gap: 5,
            justifyContent: "left",
            px: { xs: 5, md: 3 },
            width: { xs: "100%", sm: "190%",md: "140%" }
          }}
        >
        {[
          {
            rating: 5,
            name: "Rajesh Kumar",
            desc: `"Sree Paints transformed our home beautifully. The quality is outstanding and colors are still vibrant after 3 years!"`,
            location: "Nagercoil"
          },
          {
            rating: 4.5,
            name: "Arunachalam",
            desc: `"Professional quality paint at reasonable prices. The smooth finish exceeded our expectations. Highly recommended!"`,
            location: "Kanyakumari"
          },
          {
            rating: 5,
            name: "Neelakandan",
            desc: `"We used Sree Paints for our office space. Eco-friendly, durable, and the coverage is excellent. Very satisfied!"`,
            location: "Nagercoil"
          },
        ].map((item, index) => (
          <Box
            key={index}
            sx={{
              width: { xs: "100%", sm: "50%", md: "22%" },
              background: "#fff",
              border: "1px solid #d3d3d3",
              borderRadius: "14px",
              boxShadow: "0 4px 20px rgba(0,0,0,0.08)",
              p: 3,
              textAlign: "center",
              position: "relative",
            }}
          >
            <Rating
              value={item.rating}
              precision={0.5}
              readOnly
              sx={{ mb: 2, display: "flex",textAlign: "left" }}
            />

            <Typography
              variant="body2"
              sx={{ mb:2,fontStyle:"italic", textAlign:"left", fontSize: { xs: "15px", md: "15.5px" }, color: "#76788fff", lineHeight: 1.5, width:"100%" }}
            >
              {item.desc}
            </Typography>
             <Typography variant="h6" sx={{ textAlign:"left", fontFamily: "Playfair Display", fontWeight: 700, color: "#3c3c41ff" }}>
              {item.name}
            </Typography>
            <Typography variant="h6" sx={{ textAlign:"left",fontSize: { xs: "15px", md: "15.5px" } ,color: "#76788fff" }}>
              {item.location}
            </Typography>
          </Box>

        ))}
      </Box>
      </Box>

      
       {/* --------- Testimonials Section --------- */}
      
      <Box
        sx={{
           minHeight: { xs: "62vh", md: "55vh" }, 
           background: "linear-gradient(to bottom, hsl(220,70%,20%), hsl(220,60%,30%))",
           color: "#fff",
           pt: 5,
        }}
      >
         <Typography
          variant="h3"
          sx={{
            textAlign: "center",
            mt: 6,
            fontFamily: "Playfair Display",
            fontWeight: 700,
            fontSize: { xs: "3rem", md: "3rem" },
            color: "#fff",
            mb: 1.5,
          }}
        >
          Ready to Transform Your Space?
        </Typography>
         <Typography
            variant="h6"
            sx={{  
              width: "100%",
              margin: "0 auto",
              color: "#fff",
              textAlign: "center",
              mb: 4,
              lineHeight: 1.4,
            }}
          >
            Get in touch with us today for a free consultation and quote
        </Typography>
        <GetQuoteButton variantType="center" />

      </Box>


      
    </Box>
  );
}

export default Home;