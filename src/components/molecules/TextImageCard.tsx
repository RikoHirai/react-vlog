import React from "react";
import { Box, Typography, CardMedia, SxProps } from "@mui/material";
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
        width: "600px",
        height: "250px",
      }}
    >
      <Box sx={{ width: "40%", height: "200px" }}>
        <CardMedia
          component="img"
          image={image.src}
          alt={title}
          sx={{ height: "100%", width: "100%", ml: 4, mt: 1 }}
        />
      </Box>
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          flexDirection: "column",
          gap: 2,
          width: "60%",
          padding: 2,
          overflow: "hidden",
          maxWidth: "60%",
          boxSizing: "border-box",
          minHeight: 0,
          flexShrink: 1,
        }}
      >
        <Typography
          variant="h6"
          sx={{
            fontFamily: "serif",
            fontSize: "1.0rem",
            fontWeight: "bold",
            wordWrap: "break-word",
            overflowWrap: "break-word",
            textOverflow: "ellipsis",
            whiteSpace: "normal",
            overflow: "hidden",
          }}
        >
          {title || ""}
        </Typography>
        <Typography
          variant="body1"
          sx={{
            fontSize: "0.8rem",
            fontFamily: "serif",
            width: "100%",
            maxWidth: "100%",
            wordWrap: "break-word",
            overflowWrap: "break-word",
            textOverflow: "ellipsis",
            whiteSpace: "normal",
            lineHeight: 1.4,
            overflow: "hidden",
            display: "block",
          }}
        >
          {description || ""}
        </Typography>
      </Box>
    </Box>
  );
};

export default TextImageCard;
