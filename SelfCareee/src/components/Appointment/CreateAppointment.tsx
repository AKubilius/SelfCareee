import * as React from 'react';
import dayjs, { Dayjs } from 'dayjs';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import Box from '@mui/material/Box/Box';
import MenuItem from '@mui/material/MenuItem/MenuItem';
import InputLabel from '@mui/material/InputLabel/InputLabel';
import Select from '@mui/material/Select/Select';
import { useParams } from 'react-router-dom';
import { DateTimePicker } from '@mui/x-date-pickers/DateTimePicker';
import DatePick from '../Form/DatePick';
import { api } from '../Api/Api';

const AddCollectionDialog = () => {
    const token = localStorage.getItem('token');
    const [open, setOpen] = React.useState(false);
    const [name, setName] = React.useState('');
    const [comment, setComment] = React.useState('');
    const [hairdresserName, setHairdresserName] = React.useState('');
    const [clientName, setClientName] = React.useState('');

    const [arrivalDate, setArrivalDate] = React.useState<Date | null>(null);
    
    const [value, setValue] = React.useState<Dayjs | null>(
        dayjs('2014-08-18T21:11:54'),
      );

      React.useEffect(() => {
        const getName = async () => {
            const { data } = await api.get(`/Hairsalon/name/${id}`);
            setName(data);
        };

        getName();
    }, []);

    const namea: string = name !== undefined ? name : '';

      const handleChange = (newValue: Dayjs | null) => {
        setValue(newValue);
      };

    const { id } = useParams();
    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    const handleAdd = async () => {
        await addCollection();
        setOpen(false);
    };

    const addCollection = async (): Promise<void> => {

        const recepy = {
            hairsalonName: namea,
            comment: comment,
            hairdresserName:hairdresserName,
            appointmentDate:arrivalDate,
            clientName:clientName
        };
        const response = await fetch(`https://localhost:7109/Appointment`, {
            headers: {
                'Content-Type': 'application/json',
                Authorization: `Bearer ${sessionStorage.getItem("token")}`
            },
            method: 'POST',
            body: JSON.stringify(recepy)
        });
        console.log(response);
        console.log(recepy);

    };

    return (
        <div style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
        }}>


            <Button variant="outlined" onClick={handleClickOpen}>
                Užsakyti paslaugą
            </Button>
            <Dialog open={open} onClose={handleClose}>
                <DialogTitle>Užsakymas</DialogTitle>
                <DialogContent>
                    <DialogContentText>Suveskite duomenis</DialogContentText>
                    <Box
                        component="form"
                        noValidate
                        autoComplete="off"
                        sx={{
                            '& .MuiTextField-root': { m: 1, width: '50ch' }
                        }}
                    >
                        <div>
                            <TextField onChange={(e) => setHairdresserName(e.target.value)} required id="outlined-password-input" label="Kirpėjo vardas" type="text" />{' '}
                        </div>
                        <div>
                            <TextField onChange={(e) => setClientName(e.target.value)} required id="outlined-password-input" label="Vardas" type="text" />{' '}
                        </div>

                        <div>
                            <TextField onChange={(e) => setComment(e.target.value)} required id="outlined-password-input" label="Komentaras" type="text" />
                        </div>
                        
                        <DatePick
          label="Atvykimo data"
          value={arrivalDate}
          onChange={(newDate) => setArrivalDate(newDate)}
        />


                    </Box>
                </DialogContent>
                <DialogActions>
                    <Button onClick={handleClose}>Atšaukti</Button>
                    <Button onClick={handleAdd}>Pridėti</Button>
                </DialogActions>
            </Dialog>
        </div>
    );
};

export default AddCollectionDialog;