import { Formik, FieldArray, Field, Form } from 'formik';
import * as Yup from 'yup';
import useStyles from './useStyles';
import { FormValues, FormLabels } from '../../../../interface/Reservation';
import CustomButton from '../../../../components/Button/CustomButton';

import DateFnsUtils from '@date-io/date-fns';

import {
    MuiPickersUtilsProvider,
    DateTimePicker
  } from '@material-ui/pickers';

import { 
        Box, 
        InputLabel, 
        TextField, 
        Grid, 
        Select, 
        MenuItem,  
        FormHelperText } from '@material-ui/core';

const airports = [
    { value: 'IST airport', name: 'Istanbul Airport' }, 
    { value: 'SAW airport', name:'Sabiha Airport' },
 ];
const resorts = [
    { value: 'SultanAhmet', name: 'SultanAhmet' },
    { value: 'Sirkeci', name: 'Sirkeci' },
    { value: 'Taksim', name: 'Taksim' },
    { value: 'Fatih', name: 'Fatih' },
    { value: 'Laleli', name: 'Laleli' }
];

interface Props {
    form: FormLabels,
    handleSubmit: (values: FormValues) => void
    initValues: FormValues;
}

function AddReservationForm({ form, handleSubmit, initValues } : Props): JSX.Element {
    const classes = useStyles();
    const  { type, from, to, pax, property, driverNote, flightNo, selectedDate } = form;

    return (
        <>
            <Box>
                <Formik
                    initialValues={{
                        type: initValues.type,
                        from: initValues.from,
                        to: initValues.to,
                        property: initValues.property,
                        pax: initValues.pax,
                        flightNo: initValues.flightNo,
                        driverNote: initValues.driverNote,
                        selectedDate: initValues.selectedDate,
                        timezone: initValues.timezone,
                        passengers: initValues.passengers,
                    }}
                    validationSchema={Yup.object().shape({ 
                        type: Yup.string().required('This Field is required'),
                        from:  Yup.string().required('This Field is required'),
                        to: Yup.string().required('This Field is required'),
                        property: Yup.string().required('This Field is required'),
                        flightNo: Yup.string().required('This Field is required'),
                        driverNote: Yup.string(),
                        selectedDate: Yup.date().required('This Field is required'),
                        pax: Yup.number().min(1).max(10).default(1),
                    })}
                    onSubmit={(values) => {handleSubmit(values)}}
                >   
                    {({ handleSubmit, handleChange, values, touched, errors, isSubmitting, setFieldValue }) => (
                    <form onSubmit={handleSubmit} className={classes.form} noValidate>
                        <Grid container direction='column' alignItems='center'>
                            <Grid item>
                                <Grid item container className={classes.itemContainer} spacing={4}>
                                    <Grid item>
                                        <InputLabel id="type" className={classes.inputLabel}>
                                            {type}
                                        </InputLabel>
                                        <Select
                                            id="type"
                                            name="type"
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
                                            value={values.type}
                                            onChange={handleChange}
                                            classes={{ select: classes.select }}
                                        >
                                            <MenuItem value={1}>Airport to Resort</MenuItem>
                                            <MenuItem value={2}>Resort to Airport</MenuItem>
                                        </Select>
                                        <FormHelperText error={Boolean(errors.type)}>{errors.type}</FormHelperText>
                                    </Grid>
                                    <Grid item> 
                                        <InputLabel className={classes.inputLabel}>
                                            {pax}
                                        </InputLabel>
                                        <Select
                                            id="pax"
                                            name="pax"
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
                                            value={values.pax}
                                            onChange={handleChange}
                                            classes={{ select: classes.select }}
                                        >
                                            {
                                                Array(10).fill(0).map((_, idx) => (
                                                <MenuItem className={classes.menuItem} value={idx+1}>{idx+1}</MenuItem>
                                            ))}
                                            
                                        </Select>
                                        <FormHelperText error={Boolean(errors.pax)}>{errors.pax}</FormHelperText>
                                    </Grid>
                                </Grid>
                            </Grid>
                            <Grid item >
                                <Grid item container className={classes.itemContainer} spacing={4}>
                                    <Grid item>
                                        <InputLabel className={classes.inputLabel}>
                                            {from}
                                        </InputLabel>
                                        <Select
                                            id="from"
                                            name="from"
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
                                            value={values.from}
                                            onChange={handleChange}
                                            classes={{ select: classes.select }}
                                            >
                                            {values.type === 1 ? airports.map((airport) => (
                                                <MenuItem value={airport.value}>{airport.name}</MenuItem>
                                            )): resorts.map((resort) => (
                                                <MenuItem value={resort.value}>{resort.name}</MenuItem>
                                            ))
                                            }
                                        </Select>
                                        <FormHelperText error={Boolean(errors.from)}>{errors.from}</FormHelperText>
                                    </Grid>
                                    <Grid item>
                                        <InputLabel className={classes.inputLabel}>
                                            {to}
                                        </InputLabel>
                                        <Select
                                            id="to"
                                            name="to"
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
                                            value={values.to}
                                            onChange={handleChange}
                                            classes={{ select: classes.select }}
                                        >
                                            {values.type === 2 ? airports.map((airport) => (
                                                <MenuItem value={airport.value}>{airport.name}</MenuItem>
                                            )): resorts.map((resort) => (
                                                <MenuItem value={resort.value}>{resort.name}</MenuItem>
                                            ))
                                            }
                                        </Select>
                                        <FormHelperText error={Boolean(errors.to)}>{errors.to}</FormHelperText>
                                    </Grid>
                                </Grid>
                            </Grid>
                            <Grid item>
                                <Grid item container className={classes.itemContainer} spacing={6}>
                                    <Grid item>
                                        <InputLabel className={classes.inputLabel}>
                                            {property}
                                        </InputLabel>
                                        <TextField 
                                            id='property'
                                            name='property'
                                            error={Boolean(errors.property)}
                                            helperText={errors.property}
                                            InputProps= {{
                                                classes: { input: classes.inputs },
                                                disableUnderline: true
                                            }}
                                            value={values.property}
                                            onChange={handleChange}
                                            
                                        />
                                    </Grid>
                                    <Grid item>
                                        <InputLabel className={classes.inputLabel}>
                                            {flightNo}
                                        </InputLabel>
                                        <TextField 
                                            id='flightNo'
                                            name='flightNo'
                                            InputProps= {{
                                                classes: { input: classes.inputs },
                                                disableUnderline: true
                                            }}
                                            value={values.flightNo}
                                            onChange={handleChange}
                                            
                                        />
                                    </Grid>
                                </Grid>
                            </Grid>
                            <Grid item>
                                <Grid item container className={classes.itemContainer} spacing={6}>
                                    <MuiPickersUtilsProvider utils={DateFnsUtils}>
                                        <Grid item >
                                            <InputLabel className={classes.inputLabel}>
                                                {selectedDate}
                                            </InputLabel>
                                            <MuiPickersUtilsProvider utils={DateFnsUtils}>
                                                <DateTimePicker
                                                    InputProps= {{
                                                        classes: { input: classes.inputs },
                                                        disableUnderline: true
                                                    }}
                                                    value={values.selectedDate}
                                                    onChange={(date: any) => setFieldValue('selectedDate', date)}
                                            />
                                            </MuiPickersUtilsProvider>
                                        </Grid>
                                    </MuiPickersUtilsProvider>
                                </Grid>
                            </Grid>
                            <Grid item>
                                <InputLabel className={classes.inputLabel}>
                                    {driverNote}
                                </InputLabel>
                                <TextField 
                                    id='driverNote'
                                    name='driverNote'
                                    multiline
                                    rows={4}
                                    InputProps= {{
                                        classes: { input: classes.inputs },
                                        disableUnderline: true
                                    }}
                                    value={values.driverNote}
                                    onChange={handleChange}
                                />
                            </Grid>
                            <Grid item lg={6}>
                                <Grid item container className={classes.itemContainer} spacing={4} >
                                    <FieldArray name="passengers">
                                        {
                                            (fieldArrayProps ) => {
                                                const { form } = fieldArrayProps;
                                                const { values } = form;
                                                const { pax } = values;
                                                let allPassengers = new Array(pax).fill('');
                                                return ( 
                                                    <Form>
                                                        {
                                                            allPassengers.map((passenger: any, index: number) => (
                                                                <Box>
                                                                    <InputLabel className={classes.fieldInputLabel}>
                                                                        passenger {index + 1} full name 
                                                                    </InputLabel>
                                                                    <Field
                                                                        id={`passengers[${index}]`}
                                                                        name={`passengers[${index}]`}
                                                                        className={classes.select}
                                                                        style={{ position: 'relative' }}
                                                                        
                                                                    />
                                                                </Box>
                                                            ))
                                                        }
                                                    </Form>
                                                )   
                                            }
                                        }
                                    </FieldArray>
                                </Grid>
                            </Grid>
                            <Grid item>
                                <CustomButton style="submit" btnText="submit" />
                            </Grid>
                        </Grid>
                    </form>
                    )}
                </Formik>
            </Box>
        </>
    )
}
export default AddReservationForm;
