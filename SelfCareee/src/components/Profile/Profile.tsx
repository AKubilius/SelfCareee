import {
    Box,
    Container,
    createTheme,
    CssBaseline,
    Grid,
    Paper,
    ThemeProvider,
} from "@mui/material";
import { useEffect, useState } from "react";

import { api, authConfig } from "../Api/Api";
import Post from "../Banner/Post";
import React from "react";
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import Typography from '@mui/material/Typography'
import Appointment from "../Appointment/Appointment";

const RecepySets: React.FC = () => {
    const [Appointments, setAppointment] = useState<any[]>([]);
    const theme = createTheme();

    useEffect(() => {
        const getTravelOffers = async () => {
            const { data } = await api.get("/Appointment/user",authConfig);
            setAppointment(data);
        };
        getTravelOffers();
    }, []);

    const img = "https://img.freepik.com/free-photo/profile-confident-stylish-glamour-young-woman-curly-hairstyle-glittering-blouse-turning-camera-smili_1258-135397.jpg?w=1380&t=st=1673556718~exp=1673557318~hmac=b4fe2450878305d96e716a6df4eedc50f55410e1db1cfc3b3054f1c3227031b5"

    return (
        <>
            <ThemeProvider theme={theme}>
                <CssBaseline />
                <Container maxWidth={false}>
                    <main>
                        <Post
                            image={img}
                            imageText="Test"
                            title="Profilis"
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
                                        <Typography  variant='h2'> Uzsakymai </Typography>
                                    </Box>


                                    {Appointments?.map((offer, index) => (
                                        <Appointment
                                            hairsalonName={offer.hairsalonName}
                                            hairdresserName={offer.hairdresserName}
                                            id={offer.id}
                                            appointmentDate={offer.appointmentDate}
                                            comment={offer.comment}
                                            key={index}
                                        />
                                    ))
                                    }


                                </Box> </Paper></Paper>
                    </main>
                </Container>

            </ThemeProvider>
        </>
    );
};

export default RecepySets;