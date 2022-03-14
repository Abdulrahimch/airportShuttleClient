import { Form, Formik } from "formik";
import * as Yup from 'yup';
import useStyles from "./useStyles";
import { Grid, InputLabel, TextField, Select, MenuItem, Typography } from '@material-ui/core';
import CustomButton from "../../../../components/Button/CustomButton";
import { Client } from '../../../../interface/Client';
import { useLanguage } from "../../../../context/useLanguageContext";
import { addClientFormlanguage } from '../../../../utils/dictionary';

interface Props {
    handleSubmit: (inputs: Client) => void;
    values: Client
}

function AddClientForm( { handleSubmit, values } : Props): JSX.Element {
    const classes = useStyles();
    const { language } = useLanguage();

    const { firstName, lastName, email, propertyName, businessType, address, istCostTitle, sawCostTitle } =  
        language === 'tr' ? addClientFormlanguage.turkish : addClientFormlanguage.eng;


    return (
       <>
        <Formik
            initialValues={{
                email: values.email,
                firstName: values.firstName,
                lastName: values.lastName,
                businessType: values.businessType,
                address: values.address,
                role: 'client',
                propertyName: values.propertyName,
                IstAirportMaxFourPaxCost: values.IstAirportMaxFourPaxCost,
                IstAirportMaxSixPaxCost: values.IstAirportMaxSixPaxCost,
                IstAirportMaxTenPaxCost: values.IstAirportMaxTenPaxCost,
                SawAirportMaxFourPaxCost: values.SawAirportMaxFourPaxCost,
                SawAirportMaxSixPaxCost: values.SawAirportMaxSixPaxCost,
                SawAirportMaxTenPaxCost: values.SawAirportMaxTenPaxCost,
            }}
            validationSchema={Yup.object().shape({
                email: Yup.string().email('Invalid Email Address').required('Please Enter Email Address'),
                firstName: Yup.string().required('This field can not be blank'),
                lastName: Yup.string().required('This field can not be blank'),
                propertyName: Yup.string().required('This field can not be blank'),
                address: Yup.string().required('This field can not be blank'),
                role: Yup.string(),
                businessType: Yup.string().required('This field can not be blank'),
                IstAirportMaxFourPaxCost: Yup.number().min(0).required('Please enter the cost for (1 - 4) Pax'),
                IstAirportMaxSixPaxCost: Yup.number().min(0).required('Please enter the cost for (4 - 6) Pax'),
                IstAirportMaxTenPaxCost: Yup.number().min(0).required('Please enter the cost for (6 - 10) Pax'),
                SawAirportMaxFourPaxCost: Yup.number().min(0).required('Please enter the cost for (1 - 4) Pax'),
                SawAirportMaxSixPaxCost: Yup.number().min(0).required('Please enter the cost for (4 - 6) Pax'),
                SawAirportMaxTenPaxCost: Yup.number().min(0).required('Please enter the cost for (6 - 10) Pax'),
            })} 
            onSubmit={(values) => {handleSubmit(values)}}

        >
            {({ handleSubmit, handleChange, values, touched, errors, isSubmitting }) => (
                <Form onSubmit={handleSubmit} className={classes.form} noValidate>
                    <Grid container direction="column" spacing={2}>
                        <Grid item container justify="space-evenly">
                            <Grid item>
                                <InputLabel className={classes.label}>
                                    {firstName}
                                </InputLabel>
                                <TextField
                                    id="firstName"
                                    name="firstName"
                                    value={values.firstName}
                                    onChange={handleChange}
                                    error={Boolean(errors.firstName)}
                                    helperText={errors.firstName}
                                    InputProps={{
                                        classes: { input: classes.inputs },
                                        disableUnderline: true
                                    }}
                                />
                            </Grid>
                            <Grid item>
                                <InputLabel className={classes.label}>
                                    {lastName}
                                </InputLabel>
                                <TextField
                                    id="lastName"
                                    name="lastName"
                                    value={values.lastName}
                                    onChange={handleChange}
                                    error={Boolean(errors.lastName)}
                                    helperText={errors.lastName}
                                    InputProps={{
                                        classes: { input: classes.inputs },
                                        disableUnderline: true
                                    }} 
                                />
                            </Grid>
                        </Grid>
                        <Grid item container justify="space-evenly">
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
                                    {businessType}
                                </InputLabel>
                                <Select
                                    id="businessType"
                                    name="businessType"
                                    autoWidth
                                    MenuProps={{
                                        anchorOrigin: {
                                            vertical: "bottom",
                                            horizontal: "left"
                                        },
                                        transformOrigin: {
                                            vertical: "top",
                                            horizontal: "left"
                                        },
                                        getContentAnchorEl: null
                                    }}
                                    value={values.businessType}
                                    onChange={handleChange}
                                    classes={{ select: classes.select }}
                                >
                                    <MenuItem value={'hotel'}>Hotel</MenuItem>
                                    <MenuItem value={'restaurant'}>Restaurant</MenuItem>
                                    <MenuItem value={'other'}>Other</MenuItem>
                                </Select>
                            </Grid>
                        </Grid>
                        <Grid item container justify="space-evenly">
                        <Grid item>
                                <InputLabel className={classes.label}>
                                        {propertyName}
                                </InputLabel>
                                <TextField
                                    id="propertyName"
                                    name="propertyName"
                                    value={values.propertyName}
                                    onChange={handleChange}
                                    error={Boolean(errors.propertyName)}
                                    fullWidth
                                    helperText={errors.propertyName}
                                    InputProps={{
                                        classes: { input: classes.inputs },
                                        disableUnderline: true
                                    }}
                                />
                            </Grid>
                            <Grid item>
                                <InputLabel className={classes.label}>
                                        {address}
                                </InputLabel>
                                <TextField
                                    id="address"
                                    name="address"
                                    value={values.address}
                                    onChange={handleChange}
                                    error={Boolean(errors.address)}
                                    fullWidth
                                    helperText={errors.address}
                                    InputProps={{
                                        classes: { input: classes.inputs },
                                        disableUnderline: true
                                    }}
                                />
                            </Grid>
                        </Grid>
                        <Typography align="center" className={classes.typography}>
                            {istCostTitle}
                        </Typography>
                        <Grid item container justify="space-evenly">
                            <Grid item xs={2} sm={2} md={2} lg={2}>
                                <InputLabel className={classes.label}>
                                     (1-4) pax
                                </InputLabel>
                                <TextField
                                    id="IstAirportMaxFourPaxCost"
                                    name="IstAirportMaxFourPaxCost"
                                    value={values.IstAirportMaxFourPaxCost}
                                    onChange={handleChange}
                                    error={Boolean(errors.IstAirportMaxFourPaxCost)}
                                    helperText={errors.IstAirportMaxFourPaxCost}
                                    InputProps={{
                                        classes: { input: classes.inputs },
                                        disableUnderline: true
                                    }}
                                />
                            </Grid>
                            <Grid item xs={2} sm={2} md={2} lg={2}>
                                <InputLabel className={classes.label}>
                                    (4-6) pax
                                </InputLabel>
                                <TextField
                                    id="IstAirportMaxSixPaxCost"
                                    name="IstAirportMaxSixPaxCost"
                                    value={values.IstAirportMaxSixPaxCost}
                                    onChange={handleChange}
                                    error={Boolean(errors.IstAirportMaxSixPaxCost)}
                                    helperText={errors.IstAirportMaxSixPaxCost}
                                    InputProps={{
                                        classes: { input: classes.inputs },
                                        disableUnderline: true
                                    }}
                                />
                            </Grid>
                            <Grid item xs={2} sm={2} md={2} lg={2}>
                                <InputLabel className={classes.label}>
                                    (6-10) pax
                                </InputLabel>
                                <TextField
                                    id="IstAirportMaxTenPaxCost"
                                    name="IstAirportMaxTenPaxCost"
                                    value={values.IstAirportMaxTenPaxCost}
                                    onChange={handleChange}
                                    error={Boolean(errors.IstAirportMaxTenPaxCost)}
                                    helperText={errors.IstAirportMaxTenPaxCost}
                                    InputProps={{
                                        classes: { input: classes.inputs },
                                        disableUnderline: true
                                    }}
                                />
                            </Grid>
                        </Grid>
                        <Typography align="center" className={classes.typography}>
                            {sawCostTitle}
                        </Typography>
                        <Grid item container justify="space-evenly">
                            <Grid item xs={2} sm={2} md={2} lg={2}>
                                <InputLabel className={classes.label}>
                                     (1-4) pax
                                </InputLabel>
                                <TextField
                                    id="SawAirportMaxFourPaxCost"
                                    name="SawAirportMaxFourPaxCost"
                                    value={values.SawAirportMaxFourPaxCost}
                                    onChange={handleChange}
                                    error={Boolean(errors.SawAirportMaxFourPaxCost)}
                                    helperText={errors.SawAirportMaxFourPaxCost}
                                    InputProps={{
                                        classes: { input: classes.inputs },
                                        disableUnderline: true
                                    }}
                                />
                            </Grid>
                            <Grid item xs={2} sm={2} md={2} lg={2}>
                                <InputLabel className={classes.label}>
                                    (4-6) pax
                                </InputLabel>
                                <TextField
                                    id="SawAirportMaxSixPaxCost"
                                    name="SawAirportMaxSixPaxCost"
                                    value={values.SawAirportMaxSixPaxCost}
                                    onChange={handleChange}
                                    error={Boolean(errors.SawAirportMaxSixPaxCost)}
                                    helperText={errors.SawAirportMaxSixPaxCost}
                                    InputProps={{
                                        classes: { input: classes.inputs },
                                        disableUnderline: true
                                    }}
                                />
                            </Grid>
                            <Grid item xs={2} sm={2} md={2} lg={2}>
                                <InputLabel className={classes.label}>
                                    (6-10) pax
                                </InputLabel>
                                <TextField
                                    id="SawAirportMaxTenPaxCost"
                                    name="SawAirportMaxTenPaxCost"
                                    value={values.SawAirportMaxTenPaxCost}
                                    onChange={handleChange}
                                    error={Boolean(errors.SawAirportMaxTenPaxCost)}
                                    helperText={errors.SawAirportMaxTenPaxCost}
                                    InputProps={{
                                        classes: { input: classes.inputs },
                                        disableUnderline: true
                                    }}
                                />
                            </Grid>
                        </Grid>
                        <Grid item container justifyContent='center'>
                            <CustomButton style="submit" btnText='submit'/>
                        </Grid>
                    </Grid>
                </Form> 
            )}
        </Formik>
       </>
    )
};

export default AddClientForm;

