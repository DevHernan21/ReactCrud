import React, { useState } from 'react'
import ServicesHttp from '../services/ServicesHttp';
import Box from '@material-ui/core/Box';
import FormControl from '@material-ui/core/FormControl';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import Container from '@material-ui/core/Container';
import { makeStyles } from '@material-ui/core/styles';



const useStyles = makeStyles((theme) => ({
    container: {
        marginTop: theme.spacing(2),
    },
}));

function CreateUser() {
    const classes = useStyles();

    const inicioForm = {
        id: null,
        name: '',
        lasName: '',
        age: '',
        email: '',
    };
    const [form, setForm] = useState(inicioForm);
    const [submitted, setSubmitted] = useState(false);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setForm({ ...form, [name]: value });
    };

    const handleSubmit = (e) => {
        var data = {
            name: form.name,
            lastName: form.lastName,
            age: form.age,
            email: form.email
        };
        ServicesHttp.create(data)
            .then(res => {
                setForm({
                    id: res.data.id,
                    name: res.data.name,
                    lastName: res.data.lastName,
                    age: res.data.age,
                    email: res.data.email
                });
                setSubmitted(true);
                console.log(res.data);
            })
            .catch(err => {
                console.log(err);
            });
        e.preventDefault();
    };


    return (
        <div className='submit-form'>
            {submitted ? (
                <div>
                    <h4> User Created Successfully! </h4>
                    <Button variant="contained" color="primary" href="/">
                        Back
                    </Button>

                </div>
            ) : (
                <div>
                    <Container className={classes.container} maxWidth="lg">
                        <Box sx={{ '& > :not(style)': { m: 1 } }}>
                            <form onSubmit={handleSubmit}>
                                <FormControl fullWidth>
                                    <TextField
                                        id="name"
                                        label="Nombre"
                                        name="name"
                                        value={form.name}
                                        onChange={handleChange}
                                        margin="normal"
                                        variant="outlined"
                                        required
                                    />
                                </FormControl>
                                <FormControl fullWidth>
                                    <TextField
                                        id="lastName"
                                        label="Apellido"
                                        name="lastName"
                                        value={form.lastName}
                                        onChange={handleChange}
                                        margin="normal"
                                        variant="outlined"
                                        required
                                    />
                                </FormControl>
                                <FormControl fullWidth>
                                    <TextField
                                        id="age"
                                        label="Edad"
                                        name="age"
                                        value={form.age}
                                        onChange={handleChange}
                                        margin="normal"
                                        variant="outlined"
                                        required
                                    />
                                </FormControl>
                                <FormControl fullWidth>
                                    <TextField
                                        id="email"
                                        label="Email"
                                        name="email"
                                        value={form.email}
                                        onChange={handleChange}
                                        margin="normal"
                                        variant="outlined"
                                        required
                                    />
                                </FormControl>
                                <Box display="flex" justifyContent="flex-end">
                                    <Button variant="contained"  href="/">
                                        Back
                                    </Button>
                                    <Button type="submit" variant="contained" color="primary"
                                        onClick={handleSubmit}
                                    >
                                        Create
                                    </Button>
                                </Box>
                            </form>
                        </Box>
                    </Container>
                </div>
            )}
        </div>
    )
}

export default CreateUser
