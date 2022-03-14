import { Form, Formik } from "formik";
import * as Yup from 'yup';
import useStyles from "./useStyles";
import { Grid, InputLabel, TextField, Select, MenuItem, Typography } from '@material-ui/core';
import CustomButton from "../../../../components/Button/CustomButton";
import { Driver } from '../../../../interface/Driver';
import { useLanguage } from "../../../../context/useLanguageContext";

const engDriverForm = {
    name: 'Name',
    phoneNumber: 'Cep',
    email: 'Email',
    carNumber: 'Vehicle No'
};

const turkishDriverForm = {
    name: 'Isim',
    phoneNumber: 'Cep',
    email: 'Email',
    carNumber: 'Araç No'
};

interface Props {
    handleSubmit: (inputs: Driver) => void;
    initValues: Driver
}

function AddClientForm( { handleSubmit, initValues } : Props): JSX.Element {
    const classes = useStyles();
    const { language } = useLanguage();
    const { name, phoneNumber, email, carNumber } = language === 'tr' ? turkishDriverForm : engDriverForm

    return (
       <>
        <Formik
            initialValues={{
                email: initValues.email,
                name: initValues.name,
                phoneNumber: initValues.phoneNumber,
                carNumber: initValues.carNumber
            }}
            validationSchema={Yup.object().shape({
                email: Yup.string().email('Invalid Email Address').required('Please Enter Email Address'),
                name: Yup.string().required('This field can not be blank'),
                phoneNumber: Yup.number().required('This field can not be blank'),
                carNumber: Yup.string().required('This field can not be blank'),
            })} 
            onSubmit={(values) => {handleSubmit(values)}}

        >
            {({ handleSubmit, handleChange, values, touched, errors, isSubmitting }) => (
                <Form onSubmit={handleSubmit} className={classes.form} noValidate>
                    <Grid container direction="column" spacing={2}>
                        <Grid item container justify="space-evenly" spacing={2}>
                            <Grid item>
                                <InputLabel className={classes.label}>
                                    {name}
                                </InputLabel>
                                <TextField
                                    id="name"
                                    name="name"
                                    value={values.name}
                                    onChange={handleChange}
                                    error={Boolean(errors.name)}
                                    helperText={errors.name}
                                    InputProps={{
                                        classes: { input: classes.inputs },
                                        disableUnderline: true
                                    }}
                                />
                            </Grid>
                            <Grid item>
                                <InputLabel className={classes.label}>
                                    {phoneNumber}
                                </InputLabel>
                                <TextField
                                    id="phoneNumber"
                                    name="phoneNumber"
                                    value={values.phoneNumber}
                                    onChange={handleChange}
                                    error={Boolean(errors.phoneNumber)}
                                    helperText={Boolean(errors.phoneNumber) ? 'please enter a valid number': null}
                                    InputProps={{
                                        classes: { input: classes.inputs },
                                        disableUnderline: true
                                    }} 
                                />
                            </Grid>
                        </Grid>
                        <Grid item container justify="space-evenly" spacing={2}>
                        <Grid item>
                                <InputLabel className={classes.label}>
                                    {email}
                                </InputLabel>
                                <TextField
                                    id="email"
                                    name="email"
                                    value={values.email}
                                    onChange={handleChange}
                                    error={Boolean(errors.email)}
                                    helperText={errors.email}
                                    InputProps={{
                                        classes: { input: classes.inputs },
                                        disableUnderline: true
                                    }}
                                />
                            </Grid>
                            <Grid item>
                                <InputLabel className={classes.label}>
                                    {carNumber}
                                </InputLabel>
                                <TextField
                                    id="carNumber"
                                    name="carNumber"
                                    value={values.carNumber}
                                    onChange={handleChange}
                                    error={Boolean(errors.carNumber)}
                                    helperText={errors.carNumber}
                                    InputProps={{
                                        classes: { input: classes.inputs },
                                        disableUnderline: true
                                    }}
                                />
                            </Grid>
                        </Grid>
                        <Grid item container justifyContent='center'>
                            <CustomButton btnText='submit' style="submit" />
                        </Grid>
                    </Grid>
                </Form> 
            )}
        </Formik>
       </>
    )
};

export default AddClientForm;

