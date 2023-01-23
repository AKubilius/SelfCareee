import * as React from 'react';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';

import Box from '@mui/material/Box/Box';

const AppointmentEdit = (props: any) => {
    const token = localStorage.getItem('token');
    const [open, setOpen] = React.useState(false);
    const [comment, setcomment] = React.useState('');


    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    const handleEdit = async () => {
        await addCollection();
        setOpen(false);
    };

    const addCollection = async (): Promise<void> => {
        const appointment = {
            comment: comment,

        };
        const response = await fetch(`https://localhost:7109/Appointment/${props.props}`, {
            headers: {
                'Content-Type': 'application/json',
               
            },
            method: 'PUT',
            body: JSON.stringify(appointment)
        });
        console.log(response);
    };

    return (
        <div>
            <Button sx={{color:'green'}} onClick={handleClickOpen}>
                Koreguoti 
            </Button>
            <Dialog open={open} onClose={handleClose}>
                <DialogTitle>Koreguoti apsilankymą</DialogTitle>
                <DialogContent>
                    <DialogContentText>Koreguokite apsilankymo datą</DialogContentText>
                    <Box
                        component="form"
                        noValidate
                        autoComplete="off"
                        sx={{
                            '& .MuiTextField-root': { m: 1, width: '50ch' }
                        }}
                    >
                        <div>
                            <TextField onChange={(e) => setcomment(e.target.value)} required id="outlined-password-input" label="Komentaras" type="text" />{' '}
                        </div>

                    </Box>
                </DialogContent>
                <DialogActions>
                    <Button onClick={handleClose}>Cancel</Button>
                    <Button onClick={handleEdit}>Save</Button>
                </DialogActions>
            </Dialog>
        </div>
    );
};

export default AppointmentEdit;