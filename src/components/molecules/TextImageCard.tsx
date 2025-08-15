import React from "react";
import { Box, Typography, CardMedia } from "@mui/material";
import { StaticImageData } from "next/image";

type TextImageCardProps = {
  title?: string;
  image: StaticImageData;
  description?: string;
};

/**
 * TextImageCard component.
 *
 * Displays a rectangular card containing:
 * - An image (StaticImageData, e.g., imported asset)
 * - An optional title
 * - An optional description
 */
const TextImageCard: React.FC<TextImageCardProps> = ({
  title,
  image,
  description,
}) => {
  return (
    <Box
      sx={{
        display: "center",
        flexDirection: "column",
        alignItems: "center",
        gap: 2,
        p: 2,
        border: "2px solid #665d5d",
        borderRadius: 2,
        width: "400px",
        height: "150px",
      }}
    >
      <Box>
        <CardMedia
          component="img"
          image={image.src}
          alt={title}
          sx={{ width: "150px", height: "120px" }}
        />
      </Box>
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          flexDirection: "column",
          gap: 2,
        }}
      >
        <Typography variant="h6">{title || ""}</Typography>
        <Typography variant="body1">{description || ""}</Typography>
      </Box>
    </Box>
  );
};

export default TextImageCard;
