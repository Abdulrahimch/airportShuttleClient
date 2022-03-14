import { Formik } from "formik";
import { Grid, InputLabel, Select, MenuItem, FormHelperText, TextField } from '@material-ui/core';
import * as Yup from 'yup';
import useStyles from "./useStyles";
import CustomButton from '../../../../../components/Button/CustomButton';
import { Payment } from '../../../../../interface/AgencyPayment';

const currencies = [
    {
        value: 'TL',
        label: 'TL',
    },
    {
      value: 'USD',
      label: '$',
    },
    {
      value: 'EUR',
      label: '€',
    },
  ];

interface Props {
    form: {
        type: string;
        paid: string;
        currency: string;
        note: string;
        exchangeRate: string;
        paidInTL: string;
    },
    handleSubmit: (inputs: Payment) => void;
    clientId: string;
};

function AddPaymentForm({ form, handleSubmit, clientId }: Props): JSX.Element {
    const { type, note, paid, currency, exchangeRate, paidInTL } = form;

    const classes = useStyles();

    return (
        <>
            <Formik
                initialValues={{
                    clientId: clientId, 
                    type: '',
                    paid: 0,
                    currency: 'TL',
                    exchangeRate: 0,
                    paidInTL: 0,
                    note: ''
                 }}
                 validationSchema={Yup.object().shape({ 
                    type: Yup.string().required('This Field is required'),
                    paid: Yup.number().min(1).default(0),
                    currency: Yup.string().required('This Field is required'),
                    exchangeRate: Yup.number().min(1).default(1),
                    paidInTL: Yup.number().min(1).default(1),
                    note: Yup.string(),                    
                })}
                onSubmit={(values) => {handleSubmit(values)}}
            >
                {({ handleSubmit, handleChange, values, touched, errors, isSubmitting, }) => (
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
                                            <MenuItem value={'cash'}>cash</MenuItem>
                                            <MenuItem value={'credit card'}>credit card</MenuItem>
                                        </Select>
                                        <FormHelperText error={Boolean(errors.type)}>{errors.type}</FormHelperText>
                                    </Grid>
                                    <Grid item>
                                        <InputLabel className={classes.inputLabel}>
                                            {note}
                                        </InputLabel>
                                        <TextField 
                                            id='note'
                                            name='note'
                                            error={Boolean(errors.note)}
                                            helperText={errors.note}
                                            InputProps= {{
                                                classes: { input: classes.inputs },
                                                disableUnderline: true
                                            }}
                                            value={values.note}
                                            onChange={handleChange}
                                            
                                        />
                                    </Grid>
                                </Grid>
                            </Grid>
                            <Grid item >
                                <Grid item container className={classes.itemContainer} spacing={4}>
                                    <Grid item>
                                        <InputLabel className={classes.inputLabel}>
                                            {paid}
                                        </InputLabel>
                                        <TextField 
                                            id='paid'
                                            name='paid'
                                            error={Boolean(errors.paid)}
                                            helperText={errors.paid}
                                            InputProps= {{
                                                classes: { input: classes.inputs },
                                                disableUnderline: true
                                            }}
                                            value={values.paid}
                                            onChange={handleChange}
                                            
                                        />
                                    </Grid>
                                    <Grid item>
                                        <InputLabel className={classes.inputLabel}>
                                            {currency}
                                        </InputLabel>
                                        <Select
                                            id="currency"
                                            name="currency"
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
                                            value={values.currency}
                                            onChange={handleChange}
                                            classes={{ select: classes.select }}
                                        >
                                            {currencies.map(({ value, label }) => (
                                                <MenuItem key={label} value={value}>{label}</MenuItem>
                                            ))}
                                        </Select>
                                        <FormHelperText error={Boolean(errors.currency)}>{errors.currency}</FormHelperText>
                                    </Grid>
                                </Grid>
                                <Grid item container className={classes.itemContainer} spacing={4}>
                                    <Grid item>
                                        <InputLabel className={classes.inputLabel}>
                                            {exchangeRate}
                                        </InputLabel>
                                        <TextField 
                                            id='exchangeRate'
                                            name='exchangeRate'
                                            error={Boolean(errors.exchangeRate)}
                                            helperText={errors.exchangeRate}
                                            InputProps= {{
                                                classes: { input: classes.inputs },
                                                disableUnderline: true
                                            }}
                                            value={values.currency === 'TL' ?  values.exchangeRate = 1 : values.exchangeRate}
                                            onChange={handleChange}
                                            
                                        />
                                    </Grid>
                                    <Grid item>
                                        <InputLabel className={classes.inputLabel}>
                                            {paidInTL}
                                        </InputLabel>
                                        <TextField 
                                            id='paidInTL'
                                            name='paidInTL'
                                            error={Boolean(errors.paidInTL)}
                                            helperText={errors.paidInTL}
                                            InputProps= {{
                                                classes: { input: classes.inputs },
                                                disableUnderline: true
                                            }}
                                            value={values.paidInTL = values.paid * values.exchangeRate}
                                            onChange={handleChange}
                                        />
                                    </Grid>
                                </Grid>
                                <Grid item>
                                    <CustomButton style="submit" btnText="submit" />
                                </Grid>
                            </Grid>
                        </Grid>
                    </form>
                )}

            </Formik>
        </>
    )
}
export default AddPaymentForm;