import React from "react";
import { Box, Typography, Button, Card, Grid, Rating, TextField, Alert } from "@mui/material";
import { Link } from "react-router-dom";
import "@fontsource/playfair-display";
import "@fontsource/playfair-display/600.css";
import { useState } from "react";

import { PeopleAltOutlined, RemoveRedEyeOutlined, TrackChanges, WorkspacePremiumOutlined } from "@mui/icons-material";

function About() {

    const [rating, setRating] = useState(0);
    const [review, setReview] = useState("");
    const [error, setError] = useState("");
    const [success, setSuccess] = useState(false);

    const handleSubmitReview = () => {
      setError("");
      setSuccess(false);

      if (rating === 0 || !review.trim()) {
        setError("Please fill both rating and review to submit");
        setTimeout(() => setError(""), 3000);
        return;
      } 
      setSuccess(true);
      setTimeout(() => {
        setRating(0);
        setReview("");
        setSuccess(false);
      }, 3000);
    };

    return (    
        <Box sx={{ width: "100vw", overflow: "hidden" }}>
             <Box
                sx={{
                minHeight: { xs: "67vh", md: "62vh" }, 
                background: "linear-gradient(to bottom, hsl(220,70%,20%), hsl(220,60%,30%))",
                color: "#fff",
                pt: 5,
                }}
            >
                <Typography
                variant="h3"
                className="fade-in-up"
                sx={{
                    textAlign: "center",
                    mt: 15,
                    fontFamily: "Playfair Display",
                    fontWeight: 600,
                    fontSize: { xs: "3rem", md: "3rem" },
                    color: "#fff",
                    mb: 3.5,
                }}
                >
                   About Sree Paints
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
                    fontSize: { xs: "1rem", md: "1.1rem" },
                    }}
                >
                  For over two decades, Sree Paints has been the trusted name in premium quality paints, bringing color and life to thousands of homes, offices, and industrial spaces across India.
                </Typography>

            </Box>
            <Box
                sx={{
                    py: { xs: 12, md: 9 },
                    px: { xs: 2, md: 12 },
                    textAlign: "center",
                    background: "#eeece871",
                    width: { xs: "105vw", md: "100vw" },
                    minHeight: "100vh"
                }}>
                <Typography variant="h4"
                    sx={{
                        fontFamily: "Playfair Display",
                        fontWeight: 600,
                        color: "#1E2a47",
                        mb:{ xs: "2.5rem", md: "2rem" },
                        width: { xs: "95%", md: "98%" },
                    }}>
                    Our Story
                </Typography>
                <Box
                    sx={{
                        width: { xs: "100vw", md: "65vw" },
                        margin: "0 auto",
                        textAlign: "center",
                    }}>
                    <Typography
                        sx={{
                            color: "#83868bff",
                            fontSize: { xs: "1.2rem", md: "1.1rem" },
                            lineHeight: { xs: "1.6", md: "1.8" },
                            mb: 3,
                            fontWeight: 500,
                            justifyContent: "left",
                            alignItems: "center",
                            textAlign: { xs: "left", md: "justify" },
                            width: { xs: "91%", md: "97%" },
                        }}>Founded with a vision to provide high-quality, affordable paints to every
                        Indian household, Sree Paints began its journey in a small manufacturing
                        unit. What started as a family business has now grown into one of the most
                        trusted paint brands in the country.

                    </Typography>
                    <Typography
                        variant="body1"
                        sx={{
                            color: "#83868bff",
                            fontSize: { xs: "1.2rem", md: "1.1rem" },
                            lineHeight: { xs: "1.6", md: "1.8" },
                            mb: 3,
                            textAlign: { xs: "left", md: "justify" },
                            width: { xs: "95%", md: "98%" },
                        }}
                    >
                        Our commitment to quality and innovation has driven us to constantly improve
                        our formulations. We invest heavily in research and development to ensure
                        our products not only meet but exceed international quality standards while
                        remaining environmentally responsible.
                    </Typography>

                    {/* 🔹 Paragraph 3 */}
                    <Typography
                        variant="body1"
                        sx={{
                            color: "#83868bff",
                            fontSize: { xs: "1.2rem", md: "1.1rem" },
                            lineHeight: { xs: "1.6", md: "1.8" },
                            textAlign: { xs: "left", md: "justify" },
                            justifyContent: "left",
                            alignItems: "left",
                            width: { xs: "95%", md: "97%" },
                            mb: { xs: 20, md: 15 },
                        }}
                    >
                        Today, Sree Paints is proud to serve residential, commercial, and industrial
                        clients with a comprehensive range of products designed for every painting
                        need. Our success is built on the trust of our customers and the dedication
                        of our team.
                    </Typography>
                </Box>
                <Box sx={{ px: { xs: "1px", md: "3px" },}}>
                  <Grid
                  container
                  spacing={3}
                  justifyContent="center"  
                  sx={{
                      px: { xs: 0, md: 1 },
                      textAlign: "left",
                  }}>
                    <Grid item xs={12} md={6}>
                        <Card
                            elevation={0}
                            sx={{
                                ml: { xs:0, sm:-6, md: 8, lg: 0 }, 
                                p: { xs: 5, md: 5 },
                                borderRadius: "15px",
                                backgroundColor: "#ffffff",
                                width: { xs: "93.5%", sm: "600px", md:"550px" },
                                height: { xs: "100%", md: "100%" },
                                boxShadow: "0 4px 15px rgba(0,0,0,0.05)",
                                transition: "transform 0.3s ease, box-shadow 0.3s ease",
                                "&:hover": {
                                    transform: "translateY(-4px)",
                                    boxShadow: "0 8px 25px rgba(0,0,0,0.08)",
                                },
                            }}>

                          <Box
                                sx={{
                                    width: "63px",
                                    height: "63px",
                                    mb: 3,
                                    borderRadius: "50%",
                                    background: "linear-gradient(to bottom, hsl(220,70%,20%), hsl(220,60%,30%))",
                                    display: "flex",
                                    color: "#fff",
                                    alignItems: "center",
                                    justifyContent: "center",
                                }}
                            >
                              <Typography sx={{ fontSize: 50, color: "#fff" }}><TrackChanges sx={{ fontSize: 35 }} /></Typography>
                            </Box>
                            <Typography
                                sx={{
                                    fontFamily: "Playfair Display",
                                    fontWeight: 700,
                                    fontSize: {xs: "1.9rem", md: "2rem"},
                                    color: "#1E2A47",
                                    mb: 1.5,
                                }}
                            >
                                Our Mission
                            </Typography>
                            <Typography
                                sx={{
                                    width: {xs: "100%"},
                                    fontSize: {xs: "1.1rem", md: "1.05rem"},
                                    color: "#83868bff",
                                    lineHeight: {xs: 1.7, md: 1.8},
                                }}
                            >
                                To provide premium quality, eco-friendly paints that transform spaces
                                while maintaining affordability and sustainability. We strive to be
                                the first choice for homeowners and professionals who value quality
                                and trust.
                            </Typography>
                        </Card>
                    </Grid>
                    <Grid item xs={12} md={6}>
                      <Card 
                          elevation={0}
                          sx={{ 
                              ml: { xs:0, sm:-6, md: 8, lg: 0 }, 
                              p: { xs: 5, md: 5 },
                              borderRadius: "15px",
                              backgroundColor: "#ffffff",
                              width: { xs: "93.5%", sm: "600px", md:"550px"},
                              height: { xs: "100%", md: "100%" },
                              boxShadow: "0 4px 15px rgba(0,0,0,0.05)",
                              transition: "transform 0.3s ease, box-shadow 0.3s ease",
                              "&:hover": {
                                  transform: "translateY(-4px)",
                                  boxShadow: "0 8px 25px rgba(0,0,0,0.08)",
                              },
                          }}>

                          <Box
                              sx={{
                                  width: "63px",
                                  height: "63px",
                                  mb: 3,
                                  borderRadius: "50%",
                                  backgroundColor: "#F4C04C",
                                  display: "flex",
                                  color: "#fff",
                                  alignItems: "center",
                                  justifyContent: "center",
                              }}
                          >
                            <Typography sx={{ fontSize: 49, color: "#fff" }}><RemoveRedEyeOutlined sx={{ fontSize: 35, color: "#173369" }} /></Typography>
                          </Box>
                          <Typography
                              sx={{
                                  fontFamily: "Playfair Display",
                                  fontWeight: 700,
                                  fontSize: {xs: "1.9rem", md: "2rem"},
                                  color: "#1E2A47",
                                  mb: 1.5,
                              }}
                          >
                              Our Vision
                          </Typography>
                          <Typography
                              sx={{
                                  width: {xs: "100%"},
                                  fontSize: {xs: "1.1rem", md: "1.05rem"},
                                  color: "#83868bff",
                                  lineHeight: {xs: 1.7, md: 1.8},
                              }}
                          >
                              To be recognized as India's most trusted and innovative paint brand, setting new standards in quality, sustainability, and customer satisfaction. We envision a future where every wall tells a story of excellence.
                          </Typography>
                      </Card>
                    </Grid>
                  </Grid>
                </Box>
            </Box>
           
            <Box sx={{  minHeight: "90vh", background: "#fffbf571", pt: 4, pb: 9}}>
              <Typography
                variant="h3"
                sx={{
                          mt: 6,
                          fontSize: "2.5rem",
                          textAlign: "center",
                          fontFamily: "Playfair Display",
                          fontWeight: 600,
                          color: "#1E2a47",
                          mb:{ xs: "1rem", md: "1rem" },
                          width: { xs: "95%", md: "98%" },
                          width: "100%"
                    }}
              >
                Our Core Values
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
                  The principles that guide everything we do
              </Typography>

              <Box
                sx={{
                  mt: 8,
                  display: "flex",
                  flexWrap: "wrap",
                  gap: { xs: 4, md: 4 },
                  justifyContent: "center",
                  px: { xs: 2, md: 1 },
                  width: "100%"
                }}
              >
              {[
                {
                  icon: <WorkspacePremiumOutlined size={32} />,
                  title: "Quality Excellence",
                  desc: "We never compromise on quality. Every batch is rigorously tested to meet international standards.",
                },
                {
                  icon: <PeopleAltOutlined size={32} />,
                  title: "Customer Trust",
                  desc: "Building lasting relationships through transparency, reliability, and exceptional service.",
                },
                {
                  icon: <RemoveRedEyeOutlined size={32} />,
                  title: "Innovation",
                  desc: "Continuously improving our formulas with latest technology and eco-friendly solutions.",
                },
              ].map((item, index) => (
                <Box
                  key={index}
                  sx={{
                    width: { xs:"100%", sm:"600px", md: "27%" },
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
                  <Typography variant="h5" sx={{ fontFamily: "Playfair Display", fontWeight: 700, mb: 2.5, color: "#3c3c41ff" }}>
                    {item.title}
                  </Typography>
                  <Typography
                    variant="body2"
                    sx={{ fontSize: { xs: "16px", md: "16px" }, color: "#76788fff", lineHeight: 1.67, width:"100%" }}
                  >
                    {item.desc}
                  </Typography>
                </Box>

              ))}
            </Box>
            </Box>

            <Box
              sx={{
                mt: 8,
                p: { xs: 3, md: 5 },
                width: { xs: "100%", md: "70%" },
                margin: "0 auto",
                textAlign: "center"
              }}
            >
              <Typography
                sx={{
                  fontWeight: 700,
                  fontSize: "1.7rem",
                  mb: 2.5,
                  color: "#1E2A47",
                  fontFamily: "Playfair Display",
                }}
              >
                Share Your Review
              </Typography>

              <Box sx={{ display: "flex", mb: 3, justifyContent: "center" }}>
                <Rating
                  name="user-rating"
                  size="large"
                  value={rating}
                  onChange={(event, newValue) => {
                    setRating(newValue);
                    setError("");
                  }}
                />
              </Box>
              <TextField
                variant="outlined"
                multiline
                minRows={4}
                fullWidth
                placeholder="Write your review..."
                value={review}
                onChange={(e) => {
                  setReview(e.target.value);
                  setError("");
                }}
                sx={{
                  mb: 3,
                  "& .MuiOutlinedInput-root": {
                    borderRadius: "12px",
                    "&:hover .MuiOutlinedInput-notchedOutline": {
                      borderColor: "#8a8c91ff !important",
                    },
                    "&.Mui-focused .MuiOutlinedInput-notchedOutline": {
                      borderColor: "#e5e8eeff !important",
                    },
                  },
                  "& .MuiOutlinedInput-notchedOutline": {
                    borderColor: "#c9cdd6ff",
                  },
                }}
              />

              {error && (
                <Alert severity="error" sx={{ mb: 3, borderRadius: "12px" }}>
                  {error}
                </Alert>
              )}

              {success && (
                <Alert severity="success" sx={{ mb: 3, borderRadius: "12px" }}>
                  Thanks! Your review is now received.
                </Alert>
              )}

              {/* SUBMIT BUTTON */}
              <Box sx={{ textAlign: "center" }}>
                <Button
                  variant="contained"
                  onClick={handleSubmitReview}
                  sx={{
                    backgroundColor: "#fad13d",
                    color: "#132847",
                    px: 5,
                    py: 1.3,
                    fontWeight: 500,
                    fontSize: "0.875rem",
                    textTransform: "none",
                    borderRadius: "10px",
                    "&:hover": { backgroundColor: "#f4c449" },
                  }}
                >
                  Submit Review
                </Button>
              </Box>
            </Box>
            
            <Box
              sx={{
                py: { xs: 6, md: 8 },
                background: "linear-gradient(to bottom, hsl(220,70%,20%), hsl(220,60%,30%))",
                color: "#fff",
                textAlign: "center",
              }}>
                <Grid
                container
                spacing = {{ xs: 5, md: 13}}
                justifyContent="center"
                alignItems="center"
                sx={{ mb:0, px: { xs: 3, md: 10 } }}
              >
                <Grid item xs={12} sm={6} md={3}>
                  <Typography
                    variant="h3"
                    sx={{
                      color: "#F4C04C", // golden yellow
                      fontWeight: 700,
                      fontSize: { xs: "2.5rem", md: "3rem" },
                      mb: 1,
                      fontFamily: "Playfair Display",
                    }}
                  >
                    20+
                  </Typography>
                  <Typography
                    variant="h6"
                    sx={{
                      fontWeight: 400,
                      color: "#dbe6f6",
                      fontSize: { xs: "1rem", md: "1.1rem" },
                    }}
                  >
                    Years of Excellence
                  </Typography>
                </Grid>
                <Grid item xs={12} sm={6} md={3}>
                  <Typography
                    variant="h3"
                    sx={{
                      color: "#F4C04C",
                      fontWeight: 700,
                      fontSize: { xs: "2.5rem", md: "3rem" },
                      mb: 1,
                      fontFamily: "Playfair Display",
                    }}
                  >
                    50,000+
                  </Typography>
                  <Typography
                    variant="h6"
                    sx={{
                      fontWeight: 400,
                      color: "#dbe6f6",
                      fontSize: { xs: "1rem", md: "1.1rem" },
                    }}
                  >
                    Happy Customers
                  </Typography>
                </Grid>
                <Grid item xs={12} sm={6} md={3}>
                  <Typography
                    variant="h3"
                    sx={{
                      color: "#F4C04C",
                      fontWeight: 700,
                      fontSize: { xs: "2.5rem", md: "3rem" },
                      mb: 1,
                      fontFamily: "Playfair Display",
                    }}
                  >15+
                  </Typography>
                  <Typography
                    variant="h6"
                    sx={{
                      fontWeight: 400,
                      color: "#dbe6f6",
                      fontSize: { xs: "1rem", md: "1.1rem" },
                    }}
                  >
                    Product Categories
                  </Typography>
                </Grid>
              </Grid>
            </Box>
        </Box>
    );
}

export default About;