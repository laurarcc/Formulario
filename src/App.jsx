import React, {useState} from 'react'
import './App.css'
import {
    Button,
    Checkbox, Container, Dialog, DialogActions, DialogContent, DialogTitle,
    Divider,
    FormControl, FormControlLabel, FormGroup,
    FormLabel,
    InputLabel, MenuItem,
    Radio,
    RadioGroup, Rating, Select,
    TextField,
    Typography
} from "@mui/material";

import Grid from "@mui/material/Grid2"


function App() {
    const [data, setData] = useState({name: '', surName: '', age: '', gender: '', program: '', star: ''});
    const [open, setOpen] = React.useState(false);

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(data)
    }

    const handleName = (e) => {
        setData({
            ...data,
            name: e.target.value
        })
    }

    const handleSurName = (e) => {
        setData({
            ...data,
            surName: e.target.value
        })
    }

    const handleAge = (e) => {
        setData({
            ...data,
            age: e.target.value
        })
    }

    const handleGender = (e) => {
        setData({
            ...data,
            gender: e.target.value
        })
    }

    const handleProgram = (e) => {
        setData({
            ...data,
            program: e.target.value
        })
    }

    const handleStar = (e) => {
        setData({
            ...data,
            star: e.target.value
        })
    }

    const resetForm = () => {
        setData({
            name: '', surName: '', age: '', gender: '', program: '', star: ''
        })
    }

    const handleClickOpen = () => {
        setOpen(true);
    }

    const handleClickClose = () => {
        setOpen(false);
    }


    return (
        <>
            <Container>
                <Typography variant='h4' color={'#f99db8'} sx={{mt: 2, mb: 2}}>Formulario</Typography>
                <Grid container spacing={2}>
                    <Grid size={5}>
                        <TextField
                            required
                            label="Nombre"
                            variant='outlined'
                            fullWidth
                            value={data.name}
                            onChange={handleName}
                        />
                    </Grid>
                    <Grid size={5}>
                        <TextField
                            required
                            label="Apellido"
                            variant='outlined'
                            fullWidth
                            value={data.surName}
                            onChange={handleSurName}
                        />
                    </Grid>
                    <Grid size={2}>
                        <TextField
                            required
                            label="Edad"
                            variant='outlined'
                            fullWidth
                            value={data.age}
                            onChange={handleAge}
                            type={'number'}
                        />
                    </Grid>

                    <Grid size={5}>
                        <FormControl>
                            <FormLabel>Género</FormLabel>
                            <RadioGroup row aria-labelledby={'radioButton'} name={'rowRadioButton'} required
                                        onChange={handleGender}>
                                <FormControlLabel  value="female" control={<Radio/>} onChange={handleGender}
                                                  label="Femenino"/>
                                <FormControlLabel value="male" control={<Radio/>} onChange={handleGender}
                                                  label="Masculino"/>
                                <FormControlLabel value="other" control={<Radio/>} onChange={handleGender}
                                                  label="Otro"/>
                            </RadioGroup>
                        </FormControl>
                    </Grid>

                    <Grid size={7}>
                        <FormControl fullWidth>
                            <InputLabel>Lenguaje de programación favorito</InputLabel>
                            <Select label='Lenguaje de Programación favorito' onChange={handleProgram}
                                    variant={'filled'} required>
                                <MenuItem value="Python">Python</MenuItem>
                                <MenuItem value="Java">Java</MenuItem>
                                <MenuItem value="JavaScript">JavaScript</MenuItem>
                            </Select>
                        </FormControl>
                    </Grid>

                </Grid>
                <Divider/>
                <FormGroup row>
                    Puntua esta encuesta<Rating value={data.star} onChange={handleStar} precision={0.5}/>
                </FormGroup>
                <FormGroup row>
                    <FormControlLabel control={<Checkbox Checkbox {...data} color="secondary"/>}
                                      label={"He leido los terminos y condiciones"} labelPlacement={"end"}/>
                </FormGroup>

                <Grid size={{xs: 6, md: 6}} container spacing={2} class={'botonCentro'}>
                    <Button type={"submit"} variant='outlined' class={'buttonEnviar'} onClick={handleClickOpen}>Enviar</Button>
                    <Dialog open={open} onClose={handleClickClose}>
                        <DialogTitle>Holi</DialogTitle>
                        <DialogContent>Buenos Dias</DialogContent>
                        <DialogActions>
                            <Button onClick={handleClickClose} class={'buttonEnviar'}>No</Button>
                            <Button onClick={handleClickClose} autoFocus class={'buttonEnviar'}> Si </Button>
                        </DialogActions>
                    </Dialog>
                    <Button type={"submit"} variant='outlined' onClick={resetForm} class={'buttonEnviar'}>Limpiar</Button>
                    <Grid>
                    </Grid>
                </Grid>
            </Container>
        </>
    )
}

export default App
