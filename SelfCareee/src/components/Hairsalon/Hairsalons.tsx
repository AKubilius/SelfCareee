import {
    Box,
    Container,
    createTheme,
    CssBaseline,
    Grid,
    ThemeProvider,
  } from "@mui/material";
  import { useEffect, useState } from "react";
  import {api,authConfig} from "../Api/Api";
  import Post from "../Banner/Post";
  import Hairsalon from "./Hairsalon";
import Button from "@mui/material/Button";
  
  const Recepies: React.FC = () => {
    const [Recepies, setTravelOffers] = useState<any[]>([]);
    const theme = createTheme();
  
    useEffect(() => {
      const getTravelOffers = async () => {
        const { data } = await api.get("/Hairsalon");
        setTravelOffers(data);
      };
  
      getTravelOffers();
    }, []);
    const images = ["https://img.freepik.com/free-photo/modern-beauty-salon-interior_23-2148910541.jpg?w=1380&t=st=1673586308~exp=1673586908~hmac=6eecb9fe89e774b32e8a0136404f4b7ed1f85d8a2b3596b66a4c8d40070e6f54",
     "https://img.freepik.com/free-photo/woman-getting-her-hair-done-beauty-salon_23-2149167406.jpg?w=1380&t=st=1673587603~exp=1673588203~hmac=2041f9bdc13623a1a32bde7bd7126a83aeeeab896c1e94722f5d6978812f3fa0",
      3, 4, 5];
      const imga = "https://img.freepik.com/free-photo/modern-beauty-salon-interior_23-2148910541.jpg?w=1380&t=st=1673586308~exp=1673586908~hmac=6eecb9fe89e774b32e8a0136404f4b7ed1f85d8a2b3596b66a4c8d40070e6f54"
const img = "https://img.freepik.com/free-vector/women-beauty-salon-flat-vector-illustration-hairdresser-doing-hairstyle-girl-while-she-looking-mirror-manicurist-sitting-painting-clients-nails-beauty-interior-concept_74855-23249.jpg?w=1380&t=st=1673586333~exp=1673586933~hmac=f5ee168bc8efec31917be58c7800781c04ac785d3fe48dc52cae412b2a46ddac"

    return (
        <>
          <ThemeProvider theme={theme}>
            <CssBaseline />
            <Container maxWidth={false}>
              <main>
                <Post
                  image={img}
                  imageText="meow"
                  title="Kirpyklos"
                />
                <Box sx={{ flexGrow: 1 }}>
                  <Grid container spacing={2}>
                    <Grid item xs={1}>
                      
                    </Grid>
                    <Grid item xs={10}>
                      <Grid container spacing={4}>
                        {Recepies?.map((offer, index) => (
                          <Hairsalon
                            name={offer.name}
                            adress={offer.adress}
                            image={offer.imageUrl}
                            workingHours={offer.workingHours}
                            key={index}
                            id={offer.id} />
                        ))
                        }
                      </Grid>
                    </Grid>
                  </Grid>
                </Box>
              </main>
            </Container>
          </ThemeProvider>
          <Box component="span" sx={{ p: 2 }}>
      
    </Box>
        </>
      );
    };
    
    export default Recepies;