import React from "react";
import { Button, Box, Typography, Stack } from "@mui/material";
import "@fontsource/playfair-display";
import logo from "../assets/logo-blue.png";
import {
  FacebookOutlined,
  Instagram,
  Twitter, 
  LocationOn,
  CallOutlined,
  MailOutlined,
  CopyrightOutlined,
  Home,
  Google
} from "@mui/icons-material";
import { useNavigate } from "react-router-dom";
// Custom Telephone Icon (from Google Fonts)
const TelephoneIcon = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    height={props.size || "22px"}
    viewBox="0 -960 960 960"
    width={props.size || "22px"}
    fill={props.color || "#fad13d"}
    style={{ marginTop: props.mt || "4px" }}
  >
    <path d="M680-200h80v-560h-80v560ZM280-400q17 0 28.5-11.5T320-440q0-17-11.5-28.5T280-480q-17 0-28.5 11.5T240-440q0 17 11.5 28.5T280-400Zm0 120q17 0 28.5-11.5T320-320q0-17-11.5-28.5T280-360q-17 0-28.5 11.5T240-320q0 17 11.5 28.5T280-280Zm-40-240h320v-160H240v160Zm160 120q17 0 28.5-11.5T440-440q0-17-11.5-28.5T400-480q-17 0-28.5 11.5T360-440q0 17 11.5 28.5T400-400Zm0 120q17 0 28.5-11.5T440-320q0-17-11.5-28.5T400-360q-17 0-28.5 11.5T360-320q0 17 11.5 28.5T400-280Zm120-120q17 0 28.5-11.5T560-440q0-17-11.5-28.5T520-480q-17 0-28.5 11.5T480-440q0 17 11.5 28.5T520-400Zm0 120q17 0 28.5-11.5T560-320q0-17-11.5-28.5T520-360q-17 0-28.5 11.5T480-320q0 17 11.5 28.5T520-280Zm80 40v-480H200v480h400Zm80 120q-23 0-40.5-11T611-160H200q-33 0-56.5-23.5T120-240v-480q0-33 23.5-56.5T200-800h411q11-18 28.5-29t40.5-11h80q33 0 56.5 23.5T840-760v560q0 33-23.5 56.5T760-120h-80ZM200-240v-480 480Z" />
  </svg>
);


function Footer() {
  const history = useNavigate();
  const year = new Date().getFullYear();

  return (
    //Comments im entering for your understanding bro
    
    <Box
      component="footer"
      sx={{
        backgroundColor: "#132847", 
        color: "#fff",
        position: "relative",
        px: { xs: 3, sm: 6, md: 10 }, // horizontal padding responsive
        py: { xs: 6, md: 8 }, // vertical padding responsive
      }}
    >
      {/* --------- Column 1: Header --------- */}
      <Box
        sx={{
          
          display: "grid",
          gridTemplateColumns: { xs: "1fr", md: "2fr 1fr 1fr 1fr" }, // 4 columns on md+: left is wider on full screens 
          gap: { xs: 3, md: 6 }, 
          alignItems: "start",
        }}
      >
        
        <Box>
         
          <Box sx={{ display: "flex", alignItems: "center", gap: 2 }}>
            
            <Button
              disabled
              sx={{
                backgroundColor: "#F4C04C",
                color: "#1E2A47",
                fontWeight: "700",
                borderRadius: "14px",
                minWidth: { xs: 48, sm: 60 },
                minHeight: { xs: 48, sm: 60 },
                fontSize: { xs: 18, sm: 24 },
                boxShadow: "0 0 8px 2px rgba(244,192,76,0.18)", 
                textTransform: "none",
                "&.Mui-disabled": {
                  backgroundColor: "#F4C04C",
                  color: "#1E2A47",
                },
              }}
            >
              <img src={logo} alt="Logo" 
                  style={{ width: "33px", height: "33px", objectFit :"contain" }} 
              />
            </Button>

            <Typography
              variant="h4"
              sx={{
                fontFamily: "Playfair Display",
                fontWeight: 700,
                color: "#FFFFFF",
                fontSize: { xs: 20, sm: 28 },
              }}
            >
              Sree Paints
            </Typography>
          </Box>

         
          <Typography
            sx={{
              color: "#e9eef7",
              mt: 2,
              maxWidth: { xs: "100%", md: 420 }, 
              lineHeight: 1.6,
            }}
          >
            Colouring Dreams with Quality & Trust. Premium paints for every space.
          </Typography>

          
          <Box sx={{ mt: 3 }}>
           <Stack direction="row" spacing={2}>
              {[
                { icon: <Google />, onClick: () => window.open("https://share.google/jP0Fsw4GDaykFHZMa", "_blank") },
                { icon: <Instagram />, onClick: () => {} },

              ].map((item, i) => (
                <Button
                  key={i}
                  onClick={item.onClick}
                  sx={{
                    backgroundColor: "rgba(255,255,255,0.06)",
                    color: "#fff",
                    borderRadius: "50%",
                    minWidth: { xs: 44, sm: 48 },
                    minHeight: { xs: 44, sm: 48 },
                    display: "inline-flex",
                    alignItems: "center",
                    justifyContent: "center",
                    boxShadow: "none",
                    "&:hover": {
                      backgroundColor: "#fad13d",
                      color: "#fff",
                    },
                  }}
                >
                  {item.icon}
                </Button>
              ))}
            </Stack>
          </Box>
        </Box>

        {/* --------- Column 2: Quick Links --------- */}
        <Box>
          <Typography
            variant="h6"
            sx={{
              fontFamily: "Playfair Display",
              fontWeight: 700,
              mb: 2,
              fontSize: { xs: 20, sm: 22 },
            }}
          >
            Quick Links
          </Typography>

          <Stack spacing={1.5}>
            {["Home", "Products", "About Us"].map((text) => (
              <Typography
                key={text}
                sx={{
                  cursor: "pointer",
                  color: "#dbe6f6",
                  fontSize: { xs: 15, sm: 16 },
                  "&:hover": { color: "#fad13d" },
                }}
                onClick={() => {
                  if (text === "Home") {
                    history("/");
                    window.scrollTo({ top: 0, behavior: "smooth" });
                  } else if (text === "Products") {
                    history("/products");
                    window.scrollTo({ top: 0, behavior: "smooth" });
                  }  else if (text === "About Us") {
                    history("/about-us");
                    window.scrollTo({ top: 0, behavior: "smooth" });
                  }
                }}
              >
                {text}
              </Typography>
            ))}
          </Stack>
        </Box>

        {/* --------- Column 3: Products --------- */}
        <Box>
          <Typography
            variant="h6"
            sx={{
              fontFamily: "Playfair Display",
              fontWeight: 700,
              mb: 2,
              fontSize: { xs: 20, sm: 22 },
            }}
          >
            Products
          </Typography>

          <Stack spacing={1.5}>
            {["Interior Paints", "Exterior Paints", "Primers", "Textures"].map(
              (text) => (
                <Typography
                  key={text}
                  sx={{
                    color: "#dbe6f6",
                    fontSize: { xs: 15, sm: 16 },
                  }}
                >
                  {text}
                </Typography>
              )
            )}
          </Stack>
        </Box>

        {/* --------- Column 4: Contact Us --------- */}
        <Box>
          <Typography
            variant="h6"
            sx={{
              fontFamily: "Playfair Display",
              fontWeight: 700,
              mb: 2,
              fontSize: { xs: 20, sm: 22 },
              ml:{lg:2,xl:3}
            }}
          >
            Contact Us
          </Typography>

          <Stack spacing={2} sx={{ mt: 1 }}>
            <Box sx={{ display: "flex", gap: 1.5, alignItems: "center" }}>
              <LocationOn sx={{ color: "#fad13d", mt: "6px" }} />
              <Typography sx={{ color: "#dbe6f6", lineHeight: 1.6 }}>
                5/128A, Puthugramam Road, Chadayankulam,
Thiruppathisaram Post, Nagercoil - 629 901
              </Typography>
            </Box>

            <Box sx={{ display: "flex", gap: 1.5, alignItems: "center" }}>
              <CallOutlined sx={{ color: "#fad13d" }} />
              <Typography sx={{ color: "#dbe6f6" }}>+91 98650 65511  </Typography>
            </Box>
            <Box sx={{ display: "flex", gap: 1.5, alignItems: "center" }}>
              <TelephoneIcon sx={{ color: "#fad13d" }} />
              <Typography sx={{ color: "#dbe6f6" }}> 04652 - 291348</Typography>
            </Box>

            <Box sx={{ display: "flex", gap: 1.5, alignItems: "center" }}>
              <MailOutlined sx={{ color: "#fad13d" }} />
              <Typography sx={{ color: "#dbe6f6" }}>sreepaints2000@gmail.com</Typography>
            </Box>
          </Stack>
        </Box>
      </Box>

      

      {/* 5) Divider: full width, soft white*/}
      <Box
        sx={{
          borderBottom: "1px solid rgba(255,255,255,0.08)",
          width: "100%",
          mt: { xs: 5, md: 8 },
        }}
      />

      {/* 6) Copyright row centered horizontally below divider */}
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          py: 3,
        }}
      >
        <Typography sx={{ color: "#aeb9c9" ,display:"inline-flex", alignItems:"center"}}>
          <CopyrightOutlined fontSize="small" sx={{ mr: 1 }} />
          {year} Sree Paints. All rights reserved.
        </Typography>
      </Box>
    </Box>
  );
}

export default Footer;
