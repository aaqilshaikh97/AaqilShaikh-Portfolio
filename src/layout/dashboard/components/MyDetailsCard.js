import React from "react";
import Aaqil from "../../../assets/media/aaqil.png";
import Box from "@mui/material/Box";
import AkButton from "../../../components/AkButton";

function MyDetailsCard() {
  return (
    <>
      <Box
        style={{
          width: "90%",
        }}
      >
        <Box>
          <img
            style={{
              height: "100%",
              width: "100%",
              background: "#303030",
              objectFit: "cover",
              borderRadius: "12px 12px 0 0 ",
              transition: "transform 0.3s ease",
              transform: "scale(1)",
            }}
            src={Aaqil}
            alt="Aaqil"
            className="card-image"
            onMouseOver={(e) =>
              (e.currentTarget.style.transform = "scale(1.1)")
            }
            onMouseOut={(e) => (e.currentTarget.style.transform = "scale(1)")}
          />
        </Box>
        <Box m={1}>
          <AkButton size="small" color="#303030" variant="contained">
            Web Developer
          </AkButton>
        </Box>
      </Box>
    </>
  );
}

export default MyDetailsCard;
