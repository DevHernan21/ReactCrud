import React, { useState, useEffect } from 'react';
import ServicesHttp from '../services/ServicesHttp';
import Box from '@material-ui/core/Box';
import FormControl from '@material-ui/core/FormControl';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import Container from '@material-ui/core/Container';
import { makeStyles } from '@material-ui/core/styles';
import { useParams } from 'react-router-dom';

const useStyles = makeStyles((theme) => ({
    container: {
        marginTop: theme.spacing(2),
    },
}));


const UserId = () => {
    const {userid} = useParams();

    const classes = useStyles();

    const initUser = {
        id: null,
        name: '',
        lastName: '',
        age: '',
        email: '',
    };

    const [user, setUser] = useState(initUser);
    const [submitted, setSubmitted] = useState(false);

    const getUserId = async (id) => {
        await ServicesHttp.get(id)
            .then(res => {
                setUser(res.data);
                console.log(res.data);
            })
            .catch(err => {
                console.log(err);
            });
    };

    useEffect(() => {
        const userid = window.location.pathname.split('/')[2];
        getUserId(userid);
    }, [ userid ]);

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setUser({ ...user, [name]: value });
    };

    const updateUser = (e) => {
        ServicesHttp.update(user.id, user)
            .then(res => {
                setUser({ 
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
        <div className='edit-form'>
            {submitted ? (
                <div>
                    <h4> User Updated Successfully! </h4>
                    <Button variant="contained" color="primary" href="/">
                        Back
                    </Button>

                </div>
            ) : (
                <div>
                    <Container className={classes.container} maxWidth="lg">
                        <Box sx={{ '& > :not(style)': { m: 1 } }}>
                            <form onSubmit={updateUser}>
                                <FormControl fullWidth>
                                    <TextField
                                        id="name"
                                        label="Nombre"
                                        name="name"
                                        value={user.name}
                                        onChange={handleInputChange}
                                        margin="normal"
                                        variant="outlined"
                                    />
                                </FormControl>
                                <FormControl fullWidth>
                                    <TextField
                                        id="lastName"
                                        label="Apellido"
                                        name="lastName"
                                        value={user.lastName}
                                        onChange={handleInputChange}
                                        margin="normal"
                                        variant="outlined"
                                    />
                                </FormControl>
                                <FormControl fullWidth>
                                    <TextField
                                        id="age"
                                        label="Edad"
                                        name="age"
                                        value={user.age}
                                        onChange={handleInputChange}
                                        margin="normal"
                                        variant="outlined"
                                    />
                                </FormControl>
                                <FormControl fullWidth>
                                    <TextField
                                        id="email"
                                        label="Email"
                                        name="email"
                                        value={user.email}
                                        onChange={handleInputChange}
                                        margin="normal"
                                        variant="outlined"
                                    />
                                </FormControl>
                                <Box display="flex" justifyContent="flex-end">

                                    <Button variant="contained"  href="/">
                                        Back
                                    </Button>

                                    <Button variant="contained" type='submit' color="primary" onClick={updateUser}>
                                        Update
                                    </Button>
                                </Box>
                            </form>
                        </Box>
                    </Container>
                </div>
            )}
        </div>
    );
};

export default UserId;


