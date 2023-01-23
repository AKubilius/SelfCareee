import {
    Box,
    Container,
    createTheme,
    CssBaseline,
    Grid,
    Paper,
    ThemeProvider,
    Typography,
} from "@mui/material";
import { useEffect, useState } from "react";
import { api, authConfig } from "../Api/Api";
import Post from "../Banner/Post";
import Hairsalon from "./Hairsalon";
import Button from "@mui/material/Button";
import { useParams } from "react-router-dom";
import CreateAppointment from "../Appointment/CreateAppointment";

const Salon: React.FC = () => {
    const [Salon, setTravelOffers] = useState<any[]>([]);
    const [imageUrl, setimage] = useState<string>();
    const [name, setName] = useState<string>();
    const theme = createTheme();
    const { id } = useParams();

    useEffect(() => {
        const getTravelOffers = async () => {
            const { data } = await api.get("/Hairsalon/");
            setTravelOffers(data);
        };

        getTravelOffers();
    }, []);

    useEffect(() => {
        const getimage = async () => {
            const { data } = await api.get(`/Hairsalon/image/${id}`);
            setimage(data);
        };

        getimage();
    }, []);

    useEffect(() => {
        const getName = async () => {
            const { data } = await api.get(`/Hairsalon/name/${id}`);
            setName(data);
        };

        getName();
    }, []);

    const namea: string = name !== undefined ? name : '';
    const url: string = imageUrl !== undefined ? imageUrl : '';
    return (
        <>
            <ThemeProvider theme={theme}>
                <CssBaseline />
                <Container maxWidth={false}>
                    <main>
                        <Post
                            image={url}
                            imageText="meow"
                            title={namea}
                        />
                        <Paper elevation={0} sx={{
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                        }}>
                            <Paper
                                sx={{
                                    position: "relative",
                                    backgroundColor: "grey.200",
                                    color: "#fff",
                                    mb: 4,
                                    backgroundSize: "cover",
                                    height: "350px",
                                    width: "75%"

                                }}
                            >
                                <Box display="grid" gridTemplateColumns="repeat(3, 1fr)" gap={2} >
                                    <Box gridColumn="span 12" sx={{
                                        display: 'flex',
                                        position: 'relative',
                                        alignItems: 'center',
                                        justifyContent: 'center',
                                        color: 'black'
                                    }}>
                                        <Typography variant='h3'> Kirpyklos Informacija </Typography>
                                    </Box>
                                    <CreateAppointment/>
                                </Box>
                            </Paper>
                        </Paper>
                    </main>
                </Container>
            </ThemeProvider>
            <Box component="span" sx={{ p: 2 }}>

            </Box>
        </>
    );
};

export default Salon;