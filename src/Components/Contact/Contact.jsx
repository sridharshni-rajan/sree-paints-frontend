import { Typography, Card, TextField, Button, Box, Grid ,Dialog,DialogTitle,DialogActions} from '@mui/material'
import React,{useState} from 'react'
import emailjs from "emailjs-com"
import { LocationOn, CallOutlined, MailOutlined, WhatsApp, ChatBubbleOutline } from "@mui/icons-material";

function Contact() {
    const [customerName, setcustomerName] = useState('');
    const [customerphoneNumber, setcustomerphonenumber] = useState('');
    const [customeremailaddress, setcustomeremailaddress] = useState('');
    const [customermessage, setcustomermessage] = useState('');
    const [errors, setErrors] = useState({
    name: false,
    phone: false,
    email: false,
    message: false,
  });
  const [helperTexts, setHelperTexts] = useState({
    name: "",
    phone: "",
    email: "",
    message: "",
  });

  // 🔥 CHANGED - Added dialog state
  const [openDialog, setOpenDialog] = useState(false);
  const handlecustomermessage = async() => {
    const newErrors = {
      name:
        customerName.trim() === "" ||
        !/^[A-Za-z\s]+$/.test(customerName.trim()), // only letters and spaces
      phone:
        customerphoneNumber.trim() === "" ||
        !/^\d{10}$/.test(customerphoneNumber.trim()), // must be 10 digits
      email:
        customeremailaddress.trim() === "" ||
        !/^[A-Za-z0-9._%+-]+@gmail\.com$/i.test(
          customeremailaddress.trim()
        ), // must end with @gmail.com
      message: customermessage.trim() === "",
    };

    const newHelperTexts = {
      name:
        newErrors.name && customerName.trim() === ""
          ? "Name is required."
          : newErrors.name
          ? "Only alphabets are allowed."
          : "",
      phone:
        newErrors.phone && customerphoneNumber.trim() === ""
          ? "Phone number is required."
          : newErrors.phone
          ? "Must be a valid 10-digit number."
          : "",
      email:
        newErrors.email && customeremailaddress.trim() === ""
          ? "Email is required."
          : newErrors.email
          ? "Enter a valid Gmail address."
          : "",
      message:
        newErrors.message && customermessage.trim() === ""
          ? "Message cannot be empty."
          : "",
    };

    setErrors(newErrors);
    setHelperTexts(newHelperTexts);

    // 🔥 STOP if invalid
    if (Object.values(newErrors).includes(true)) return;
    
    try {
        const SERVICE_ID="service_sn3aa0i";
        const TEMPLATE_ID="template_sazvi2l";
        const PUBLIC_KEY="5850xTYSOBA53zNkI"
         
        const templateParams = {
          customer_name: customerName,
          phone_number: customerphoneNumber,
          customer_email: customeremailaddress,
          message: customermessage,
        };
    
        const response = await emailjs.send(
          SERVICE_ID,
          TEMPLATE_ID,
          templateParams,
          PUBLIC_KEY
        );
        console.log(templateParams)
    
        console.log("Email successfully sent!", response.status, response.text);
        setOpenDialog(true); // 🔥 Open success dialog
        setcustomerName("");
    setcustomerphonenumber("");
    setcustomeremailaddress("");
    setcustomermessage("");
    setErrors({ name: false, phone: false, email: false, message: false });
    setHelperTexts({ name: "", phone: "", email: "", message: "" });

      }
      catch (error) {
    console.error("❌ Email sending failed:", error);
    alert("Oops! Something went wrong. Please try again later.");
  }

    };
            

    return (
        
        <div>
            <Dialog open={openDialog} onClose={() => setOpenDialog(false)}>
        <DialogTitle>✅ Message Sent Successfully!</DialogTitle>
        <DialogActions>
          <Button onClick={() => setOpenDialog(false)} autoFocus>
            OK
          </Button>
        </DialogActions>
      </Dialog>
            {/*-Get In Touch-*/}
            <Card
                sx={{
                    backgroundColor: "#173369",
                    mb: 6,
                    py: 6,
                    textAlign: "center",
                    borderRadius: 0,
                     mt: { xs: 10, md: 12 },
                }}
            >
                <Typography
                    variant="h2"
                    className="fade-in-up"
                    sx={{
                        color: "#fff",
                        fontFamily: "Playfair Display",
                        fontWeight: "bold",
                        mb: 2,
                    }}
                >
                    Get In Touch
                </Typography>
                <Typography
                    variant="h6"
                    sx={{
                        color: "#d3d7e2",
                        fontFamily: "Inter, sans-serif",
                        lineHeight: 1.6,
                        maxWidth: "900px",
                        mx: "auto",
                        fontWeight: 400,
                    }}
                >
                    Have questions? We're here to help. Reach out to us and we'll respond as
                    soon as possible.
                </Typography>
            </Card>

            <Grid container spacing={4} sx={{ px: { xs: 2, sm: 6, md: 12 }, pb: 5, justifyContent: "center" }}>
                {/* 💬 Left Column - Form (takes 6 columns on md+, full width on xs) */}
                <Grid item xs={12} md={6} >
                    <Card
                        variant="outlined"
                        sx={{
                            p: 10,
                            borderRadius: "14px",
                            boxShadow: "0px 4px 10px rgba(0,0,0,0.05)",
                            mb: 3,
                            py: 4,
                            width: '100%',
                            display:'block'
                        }}
                    >
                        
                        <Typography
                            variant="h4"
                            sx={{
                                fontFamily: "Playfair Display, serif",
                                fontWeight: 700,
                                color: "#2f3342",
                                letterSpacing: 0.5,
                                mb: 2,
                                ml: "-9.5%", 
                            }}
                            gutterBottom
                        >
                            Send Us a Message
                        </Typography>

                        {/* 1 - Name */}
                        <Typography
                            variant="subtitle1"
                            sx={{
                                fontWeight: 500,
                                color: "#444b59",
                                mb: 0.8,
                                mt:2,
                                ml: "-9.5%", 
                            }}
                        >
                            Your Name
                        </Typography>
                        <TextField
                            placeholder="Enter your name"
                            required
                            variant="outlined"
                            value={customerName}
                            error={errors.name}
                            helperText={errors.name? helperTexts.name : ""}
                            onChange={(e)=>{setcustomerName(e.target.value);
                                if (/^[A-Za-z\s]+$/.test(e.target.value.trim()))
                  setErrors((prev) => ({ ...prev, name: false }));
    }}
                            
                            fullWidth
                            InputProps={{
                                sx: {
                                    width: "115%", // 💬 makes it 5% wider visually
    ml: "-9.5%",
                                    borderRadius: "12px",
                                    backgroundColor: "#fcfaf8",
                                    "& .MuiOutlinedInput-notchedOutline": {
                                      borderColor: errors.name ? "red" : "#e3e1da",

                                    },
                                    "&:hover .MuiOutlinedInput-notchedOutline": {
                                        borderColor: "#d6d3cc",
                                    },
                                    "&.Mui-focused .MuiOutlinedInput-notchedOutline": {
                                        borderColor: "#c5c2bb",
                                    },
                                    "& input::placeholder": {
                                        color: "#717a8a",
                                        opacity: 1,
                                    },
                                },
                            }}
                        />

                        {/* 2 - Phone Number */}
                        <Typography
                            variant="subtitle1"
                            sx={{
                                fontWeight: 500,
                                color: "#444b59",
                                mb: 0.8,
                                mt: 2, 
                                ml: "-9.5%", // 💬 Added margin-top for spacing between fields
                            }}
                        >
                            Phone Number
                        </Typography>
                        <TextField
                            placeholder="+91 XXXXX XXXXX"
                            variant="outlined"
                            value={customerphoneNumber}
                            error={errors.phone}
                            helperText={errors.phone? helperTexts.phone : ""}
                            
                            fullWidth
                            onChange={(e)=>{
                                const val = e.target.value.replace(/\D/g, ""); // 🔥 allow only digits
                                setcustomerphonenumber(val);
                               if (/^\d{10}$/.test(val)) setErrors((prev) => ({ ...prev, phone: false }));
    }
                            }
                            InputProps={{
                                sx: {width: "115%", // 💬 makes it 5% wider visually
    ml: "-9.5%",
                                    borderRadius: "12px",
                                    backgroundColor: "#fcfaf8",
                                    "& .MuiOutlinedInput-notchedOutline": {
                                        borderColor: errors.phone ? "red" : "#e3e1da",

                                    },
                                    "&:hover .MuiOutlinedInput-notchedOutline": {
                                        borderColor: "#d6d3cc",
                                    },
                                    "&.Mui-focused .MuiOutlinedInput-notchedOutline": {
                                        borderColor: "#c5c2bb",
                                    },
                                    "& input::placeholder": {
                                        color: "#717a8a",
                                        opacity: 1,
                                    },
                                },
                            }}
                        />

                        {/* 3 - Email Address */}
                        <Typography
                            variant="subtitle1"
                            sx={{
                                fontWeight: 500,
                                color: "#444b59",
                                mb: 0.8,
                                mt: 2,
                                ml: "-9.5%", 
                            }}
                        >
                            Email Address
                        </Typography>
                        <TextField
                            placeholder="your@gmail.com"
                            variant="outlined"
                            fullWidth
                            value={customeremailaddress}
                            error={errors.email}
                            helperText={errors.email? helperTexts.email : ""}
                            onChange={(e)=>{setcustomeremailaddress(e.target.value);
                                if (/^[A-Za-z0-9._%+-]+@gmail\.com$/i.test(e.target.value.trim())) {
                  setErrors((prev) => ({ ...prev, email: false })); // 🔥 clears red when valid Gmail
                }
    }

                            }
                            InputProps={{
                                sx: {width: "115%", // 💬 makes it 5% wider visually
    ml: "-9.5%",
                                    borderRadius: "12px",
                                    backgroundColor: "#fcfaf8",
                                    "& .MuiOutlinedInput-notchedOutline": {
                                        borderColor: errors.email ? "red" : "#e3e1da",

                                    },
                                    "&:hover .MuiOutlinedInput-notchedOutline": {
                                        borderColor: "#d6d3cc",
                                    },
                                    "&.Mui-focused .MuiOutlinedInput-notchedOutline": {
                                        borderColor: "#c5c2bb",
                                    },
                                    "& input::placeholder": {
                                        color: "#717a8a",
                                        opacity: 1,
                                    },
                                },
                            }}
                        />

                        {/* 4 - Message */}
                        <Typography
                            variant="subtitle1"
                            sx={{
                                fontWeight: 500,
                                color: "#444b59",
                                mb: 0.8,
                                mt: 2,
                                ml: "-9.5%", 
                            }}
                        >
                            Your Message
                        </Typography>
                        <TextField
                            placeholder="Tell us about your requirement..."
                            variant="outlined"
                            fullWidth
                            multiline
                            value={customermessage}
                            error={errors.message}
                            helperText={errors.message? helperTexts.message : ""}
                            onChange={(e)=>{
                                setcustomermessage(e.target.value);
                                if (e.target.value.trim() !== "") {
      // ✅ Clear red border when field filled
      setErrors((prev) => ({ ...prev, message: false }));
    }

                            }}
                            rows={4}
                            InputProps={{
                                sx: {width: "115%", // 💬 makes it 5% wider visually
    ml: "-9.5%",
                                    borderRadius: "12px",
                                    backgroundColor: "#fcfaf8",
                                    "& .MuiOutlinedInput-notchedOutline": {
                                        borderColor: errors.message ? "red" : "#e3e1da",

                                    },
                                    "&:hover .MuiOutlinedInput-notchedOutline": {
                                        borderColor: "#d6d3cc",
                                    },
                                    "&.Mui-focused .MuiOutlinedInput-notchedOutline": {
                                        borderColor: "#c5c2bb",
                                    },
                                    "& textarea::placeholder": {
                                        color: "#717a8a",
                                        opacity: 1,
                                    },
                                },
                            }}
                        />
                        
                        

                        {/* Send Button */}
                        <Button
                            variant="contained"
                            sx={{
                                background: "linear-gradient(90deg, #F5C242 0%, #ECB744 100%)",
                                color: "white",
                                borderRadius: "16px",
                                textTransform: "none",
                                fontSize: "16px",
                                fontWeight: 500,
                                padding: "12px 0",
                                width: "100%",
                                boxShadow: "0px 4px 15px rgba(245, 194, 66, 0.4)",
                                mt: 3, // 💬 Added margin-top for spacing
                                "&:hover": {
                                    background: "linear-gradient(90deg, #F2B832 0%, #E3A73A 100%)",
                                    boxShadow: "0px 6px 20px rgba(245, 194, 66, 0.5)",
                                },
                            }}
                            onClick={handlecustomermessage}
                        >
                            Send Message
                        </Button>
                    </Card>
                </Grid>

                {/* 💬 Right Column - Contact Info */}
                <Grid item xs={15} md={8} >
                    <Box sx={{ display: "flex", flexDirection: "column", gap: 4.5, width: '100%' }}>
                        {/* 💬 Visit Our Store */}
                        <Card
                            variant="outlined"
                            sx={{
                                borderRadius: "16px",
                                p: 3,
                                display: "flex",
                                alignItems: "center",
                                gap: 2.5,
                                boxShadow: "0px 2px 10px rgba(0,0,0,0.05)",
                                backgroundColor: "#fffdfa",
                                border: "1px solid #eee9e2",
                            }}
                            onClick={() =>
    window.open(
      "https://maps.app.goo.gl/YFWX1cpLkCfNboMu6?g_st=iw",
      "_blank" // 💬 Opens in new tab
    )
  } 
                        >
                            <Box
                                sx={{
                                    width: 60,
                                    height: 60,
                                    borderRadius: "50%",
                                    background: "linear-gradient(180deg, #1E2A78 0%, #12205A 100%)",
                                    display: "flex",
                                    alignItems: "center",
                                    justifyContent: "center",
                                    boxShadow: "0px 6px 20px rgba(18, 32, 90, 0.3)",
                                    flexShrink: 0,
                                }}
                            >
                                <LocationOn sx={{ color: "#fff", fontSize: 30 }} />
                            </Box>
                            <Box>
                                <Typography
                                    variant="h6"
                                    sx={{
                                        fontFamily: "Playfair Display, serif",
                                        fontWeight: "bold",
                                        color: "#343741",
                                    }}
                                >
                                    Visit Our Store
                                </Typography>
                                <Typography
                                    variant="body1"
                                    sx={{
                                        color: "#5e616a",
                                        mt: 0.5,
                                        fontFamily: "Inter, sans-serif",
                                    }}
                                >
                                    5/128A, Puthugramam Road, Chadayankulam,
                                    <br />
                                    Thiruppathisaram Post, Nagercoil - 629 901.
                                </Typography>
                            </Box>
                        </Card>

                        {/* 💬 Call Us */}
                        <Card
                            variant="outlined"
                            sx={{
                                borderRadius: "16px",
                                p: 3,
                                display: "flex",
                                alignItems: "center",
                                gap: 2.5,
                                boxShadow: "0px 2px 10px rgba(0,0,0,0.05)",
                                backgroundColor: "#fffdfa",
                                border: "1px solid #eee9e2",
                            }}
                            onClick={()=>(window.location.href="tel:+919865065511")}
                        >
                            <Box
                                sx={{
                                    width: 60,
                                    height: 60,
                                    borderRadius: "50%",
                                    background: "linear-gradient(180deg, #1E2A78 0%, #12205A 100%)",
                                    display: "flex",
                                    alignItems: "center",
                                    justifyContent: "center",
                                    boxShadow: "0px 6px 20px rgba(18, 32, 90, 0.3)",
                                    flexShrink: 0,
                                }}
                            >
                                <CallOutlined sx={{ color: "#fff", fontSize: 30 }}  />
                            </Box>
                            <Box>
                                <Typography
                                    variant="h6"
                                    sx={{
                                        fontFamily: "Playfair Display, serif",
                                        fontWeight: "bold",
                                        color: "#343741",
                                    }}
                                >
                                    Call Us
                                </Typography>
                                <Typography
                                    variant="body1"
                                    sx={{
                                        color: "#5e616a",
                                        mt: 0.5,
                                        fontFamily: "Inter, sans-serif",
                                    }}
                                >
                                    +91 98650 65511
                                    <br />
                                    <Typography
                                        component="span"
                                        sx={{
                                            color: "#a0a0a0",
                                            fontFamily: "Inter, sans-serif",
                                        }}
                                    >
                                        Mon - Sat : 9:30AM - 6:00PM
                                    </Typography>
                                </Typography>
                            </Box>
                        </Card>

                        {/* 💬 Email Us */}
                        <Card
                            variant="outlined"
                            sx={{
                                borderRadius: "16px",
                                p: 3,
                                display: "flex",
                                alignItems: "center",
                                gap: 2.5,
                                boxShadow: "0px 2px 10px rgba(0,0,0,0.05)",
                                backgroundColor: "#fffdfa",
                                border: "1px solid #eee9e2",
                            }}
                            onClick={()=>window.open("mailto:sreepaints2000@gmail.com")}
                        >
                            
                            <Box
                                sx={{
                                    width: 60,
                                    height: 60,
                                    borderRadius: "50%",
                                    background: "linear-gradient(180deg, #1E2A78 0%, #12205A 100%)",
                                    display: "flex",
                                    alignItems: "center",
                                    justifyContent: "center",
                                    boxShadow: "0px 6px 20px rgba(18, 32, 90, 0.3)",
                                    flexShrink: 0,
                                }}
                            >
                                <MailOutlined sx={{ color: "#fff", fontSize: 30 }} />
                            </Box>
                            <Box>
                                <Typography
                                    variant="h6"
                                    sx={{
                                        fontFamily: "Playfair Display, serif",
                                        fontWeight: "bold",
                                        color: "#343741",
                                    }}
                                >
                                    Email Us
                                </Typography>
                                <Typography
                                    variant="body1"
                                    sx={{
                                        color: "#5e616a",
                                        mt: 0.5,
                                        fontFamily: "Inter, sans-serif",
                                    }}
                                >
                                    sreepaints2000@gmail.com
                                    <br />
                                    <Typography
                                        component="span"
                                        sx={{
                                            color: "#a0a0a0",
                                            fontFamily: "Inter, sans-serif",
                                        }}
                                    >
                                        We'll respond within 24 hours
                                    </Typography>
                                </Typography>
                            </Box>
                        </Card>
                        <Card
                            variant="outlined"
                            sx={{
                                borderRadius: "16px",
                                p: 3,
                                display: "flex",
                                alignItems: "center",
                                gap: 2.5,
                                boxShadow: "0px 2px 10px rgba(0,0,0,0.05)",
                                backgroundColor: "#f5f9f1ff",
                                border: "1px solid #d7f3c5ff",
                            }}
                        >
                            <Box
                                sx={{
                                    width: 60,
                                    height: 60,
                                    borderRadius: "50%",
                                    background: "linear-gradient(180deg, #16a349 0%, #16a349 100%)",
                                    display: "flex",
                                    alignItems: "center",
                                    justifyContent: "center",
                                    boxShadow: "0px 6px 20px rgba(18, 32, 90, 0.3)",
                                    flexShrink: 0,
                                }}
                            >
                                <WhatsApp sx={{ color: "#fff", fontSize: 30 }} />
                            </Box>
                            <Box>
                                <Typography
                                    variant="h6"
                                    sx={{
                                        fontFamily: "Playfair Display, serif",
                                        fontWeight: "bold",
                                        color: "#45634dff",
                                        
                                    }}
                                >
                                    Chat on WhatsApp
                                </Typography>
                                <Typography
                                    variant="body1"
                                    sx={{
                                        color: "#7fa68aff",
                                        mt: 0.5,
                                        fontFamily: "Inter, sans-serif",
                                    }}
                                >
                                    Get instant support from our team


                                </Typography>

                                <br/>
                            <Button sx={{ backgroundColor: '#16a349', color: '#fff', borderRadius: '10px' ,fontFamily: "Playfair Display, serif",textTransform: "none",px:3}}  onClick={()=>window.open("https://wa.me/919865065511?text=Hi%20Sree%20Paints%2C%20I%20need%20assistance!")}>Start Chat</Button>
                            </Box>

                        </Card>
                    </Box>
                </Grid>
            </Grid>

        </div>
    )
}

export default Contact