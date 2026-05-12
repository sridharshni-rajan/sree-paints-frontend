import { Button } from "@mui/material";
import { Link } from "react-router-dom";

function GetQuoteButton({ variantType = "desktop", onClick }) {
  return (
    <Button
      component={Link}
      to="/contact"
      onClick={onClick}
      sx={{
        fontWeight: 500,
        fontSize: "0.875rem",
        textTransform: "none",
        borderRadius: "10px",
        backgroundColor: "#fad13d",
        color: "#132847",
        "&:hover": { backgroundColor: "#f4c449" },

        ...(variantType === "desktop" && { display: { xs: "none", md: "inline-flex" }, px: 2, }),
        ...(variantType === "mobile" && { mt: 2, mx: 3, py: 1.5, }),
        ...(variantType === "center" && { width:200 ,display: "flex", mx: "auto", py: 1.5 })     
      }}
    >
      {variantType === "center" ? "Get Free Quote" : "Get Quote"}
    </Button>
  );
}

export default GetQuoteButton;
