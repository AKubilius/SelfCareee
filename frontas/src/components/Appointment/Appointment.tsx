import {
    Card,
    CardActionArea,
    CardContent,
    CardMedia,
    Grid,
    IconButton,
    Typography,
    Box,
    Button
} from "@mui/material";

import CalendarMonthIcon from "@mui/icons-material/CalendarMonth"
import LocationCityIcon from '@mui/icons-material/LocationCity';
import AppointmentEdit from "./AppointmentEdit";
import ContentCutIcon from '@mui/icons-material/ContentCut';
interface IRecepy {
    hairsalonName: string;
    hairdresserName: string;
    appointmentDate: string;
    comment:string;
    id: number;
}

const onDelete = async (ColId: number) => {
    var token = localStorage.getItem('accessToken');
    const response = await fetch(`https://localhost:7109/Appointment/${ColId}`, {
        headers: {
            'Content-Type': 'application/json',
            Authorization: `Bearer ${sessionStorage.getItem("token")}`
        },
        method: 'DELETE'
    });
    console.log(response);
  };


const Recepy: React.FC<IRecepy> = ({
    hairsalonName,
    hairdresserName,
    appointmentDate,
    comment,
    id
}) => {
    return (
        <>
            <Grid direction="row" container
                sx={{
                    display: 'flex',
                    position: 'relative',
                    alignItems: 'center',
                    justifyContent: 'center',
                    color: 'black',

                }}>

                <Grid item xs={8} >

                    <Typography variant="h5">{hairsalonName}</Typography>
                </Grid>
                <Grid item xs={8}>
                <Typography variant="h5"> {hairdresserName}</Typography>
                    
                </Grid>
                <Grid item xs={8}  ><Typography variant="button">{appointmentDate}</Typography></Grid>
                <Grid item xs={8}  ><Typography variant="h6">{comment}</Typography></Grid>
                <Grid item xs={8}>
                    <AppointmentEdit props={id}></AppointmentEdit>
                </Grid>
                <Grid item xs={8} sx={{ alignItems: 'end'}}>
                    <Button onClick={() => onDelete(id)} sx={{color:'red'}}>Naikinti</Button>
                </Grid>





            </Grid>



        </>

    );
};

export default Recepy;