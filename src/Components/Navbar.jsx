import React, { useState, useEffect  } from "react";
import { AppBar, Toolbar, Typography, Button, IconButton, Drawer, List, ListItem, Box } from "@mui/material";
import { Link, useLocation } from "react-router-dom";
import CloseIcon from "@mui/icons-material/Close";
import MenuIcon from "@mui/icons-material/Menu";
import "@fontsource/playfair-display/600.css";
import GetQuoteButton from "./GetQuoteButton";
import logo from "../assets/logo.png"; 

function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  const isHome = location.pathname === "/";

  const menuItems = [
    { label: "Home", path: "/" },
    { label: "About Us", path: "/about-us" },
    { label: "Products", path: "/products" },
   // { label: "Color Gallery", path: "/color-gallery" },
    { label: "Contact", path: "/contact" },
  ];

  useEffect(() => {
    const handleResize = () => window.innerWidth >= 768 && setOpen(false);
    const handleScroll = () => setScrolled(window.scrollY > 10);
    
    window.addEventListener("resize", handleResize);
    window.addEventListener("scroll", handleScroll);
    
    return () => {
      window.removeEventListener("resize", handleResize);
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <>
      <AppBar
        position="fixed"
        sx={{
          backgroundColor: isHome && !scrolled && !open ? "transparent" : "hsl(0,0%,100%)",
          boxShadow: "none",
          transition: "0.3s",
          zIndex:2000
        }}
      >
        <Toolbar sx={{ px: 3, display: "flex", minHeight: { xs: 80, md: 80 }, justifyContent: "space-between"}}>

          {/* LOGO */}
          <Box sx={{ display: "flex", alignItems: "center", gap: 2 }}>
            <Button
                component={Link}
                to="/"
                onClick={() => {
                  if (!open) window.scrollTo({ top: 0, behavior: "smooth" });
                }}
                sx={{
                color: "#fff",
                fontWeight: "700",
                borderRadius: "14px",
                minWidth: { xs: 48, sm: 60 },
                minHeight: { xs: 20, sm: 60 },
                fontSize: { xs: 18, sm: 24 },
                boxShadow: "0 0 8px 2px rgba(244,192,76,0.18)", 
                background: "linear-gradient(to bottom, hsl(220,70%,20%), hsl(220,60%,30%))",
              }}
            >
              <img src={logo} alt="Logo" 
                style={{ width: "33px", height: "33px", objectFit: "contain" }} 
              />
            </Button>
            <Typography
              sx={{
                fontFamily: "Playfair Display",
                fontWeight: 600,
                fontSize: { xs: 20, sm: 30 },
                color: isHome && !scrolled && !open ? "#fff" : "#132847",
                textDecoration: "none",
                transition: "color 0.3s ease",
              }}
            >
              Sree Paints
            </Typography>
          </Box>

          {/* MENU - DESKTOP */}
          <Box sx={{ display: { xs: "none", md: "flex" }, gap: 2, alignItems: "center" }}>
            {menuItems.map((item) => {
              const isActive = location.pathname ===  item.path;
              return (
              <Button
                key={item.label}
                component={Link}
                to={item.path}
                sx={{
                  fontFamily: "'Inter', sans-serif",
                  fontWeight: 500,
                  fontSize: "0.875rem",
                  color: isHome && !scrolled ? "#fff" : "#132847",
                  textTransform: "none",
                  position: "relative",
                  "&:hover": isHome ? { color: "#fad13d" } : { color: "#132847"},
                  "&::after": isActive
                  ? {
                            content: '""',
                            position: "absolute",
                            bottom: -4,
                             width: "100%",
                            height: "0.25rem",
                            backgroundColor: "hsl(220,70%,20%)",
                            }
                        : {},
                }}
              >
                {item.label}
              </Button>
            );
            })} 
            <GetQuoteButton variantType="desktop" />           
          </Box>

          {/* MENU ICON - MOBILE */}
          <IconButton sx={{ display: { xs: "flex", md: "none" }, "&:hover": { color: "#132847" }, color: isHome && !scrolled && open ? "#132847" : "#132847",zIndex: 3000, }} disableRipple 
            onClick={() => setOpen(!open)}>
            {open ? <CloseIcon /> : <MenuIcon />}
          </IconButton>
        </Toolbar>
      </AppBar>

      {/* MOBILE DRAWER */}
      <Drawer anchor="right" open={open} onClose={() => setOpen(false)} hideBackdrop PaperProps={{
            sx: {
            backgroundColor: "#fff", 
            width: "100%",
            height: "60%",
            marginTop: "80px",
            boxShadow: "none", 
            },
        }}>
        <List sx={{  display: "flex", flexDirection: "column", gap: 1  }}>
          {menuItems.map((item) => (
            <ListItem onClick={() => setOpen(false)}
              key={item.label}
              component={Link}
              to={item.path}
              sx={{mx: 3, px: 2, py: 1.8, borderRadius: "10px", color: "#132847", width: "93%","&:hover": { backgroundColor: "#dfd9d9ff"}, fontFamily: "'Inter', sans-serif", }}
            >
              {item.label}
            </ListItem>
          ))}
          <GetQuoteButton variantType="mobile" onClick={() => setOpen(false)} />
        </List>
      </Drawer>
    </>
  );
}

export default Navbar;
