import TextImageCard from "@/components/molecules/TextImageCard";
import SamplePicture from "../assets/pictures/nathan-dumlao-zUNs99PGDg0-unsplash.jpg";
import { Box } from "@mui/material";
import { StyledEngineProvider } from "@mui/material/styles";
import Header from "@/components/molecules/Header";

export default function Home() {
  return (
    <StyledEngineProvider enableCssLayer>
      <Header />
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          width: "100%",
        }}
      >
        <TextImageCard
          title="Just visited a trendy café in LDN! 🌿"
          image={SamplePicture}
          description="Just visited a trendy café in town! Cozy vibes, latte art perfection, and soft jazz playing in the background. The pastries were fresh and delicious, making it the perfect chill spot."
        />
      </Box>
      {/* TODO: Enable marginTop */}
      <Box sx={{ height: 25 }} />
      <Box sx={{ display: "flex", justifyContent: "center" }}>
        <TextImageCard
          title="Just visited a trendy café in LDN! 🌿"
          image={SamplePicture}
          description="Just visited a trendy café in town! Cozy vibes, latte art perfection, and soft jazz playing in the background. The pastries were fresh and delicious, making it the perfect chill spot."
        />
      </Box>
    </StyledEngineProvider>
  );
}
