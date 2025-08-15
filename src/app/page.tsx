import TextImageCard from "@/components/molecules/TextImageCard";
import SamplePicture from "../assets/pictures/nathan-dumlao-zUNs99PGDg0-unsplash.jpg";
import { Box } from "@mui/material";

export default function Home() {
  return (
    <Box sx={{ display: "flex", justifyContent: "center" }}>
      <TextImageCard
        title="Title"
        image={SamplePicture}
        description="Description"
      />
    </Box>
  );
}
