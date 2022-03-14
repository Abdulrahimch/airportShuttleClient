import { Box, Grid, Paper, Typography } from '@material-ui/core';
import {  useEffect, useRef, useState } from 'react';
import useStyles from './useStyles';
import AddReservationForm from './AddReservationForm/AddReservationForm';
import { useHistory } from 'react-router-dom';
import { NewReservationDictionary } from '../../../utils/dictionary';
import { Page, FormValues } from '../../../interface/Reservation';
import { postReservation } from '../../../helpers/APICalls/reservation';
import { useSnackBar } from '../../../context/useSnackbarContext';
import { useLanguage } from '../../../context/useLanguageContext';

const { turkishPage, engPage } = NewReservationDictionary;

function AddReservation(): JSX.Element {
    const classes = useStyles();
    const [page, setPage] = useState<Page>({title: '', form: engPage.form});
    const history = useHistory();
    const { updateSnackBarMessage } = useSnackBar();
    const { language } = useLanguage();
    const initValues = useRef(
        {
            type: 0,
            from: 0,
            to: 0,
            property: '',
            pax: 0,
            flightNo: '',
            driverNote: '',
            selectedDate: new Date(),
            timezone: 0,
            passengers: []
        }
    );

    const handleSubmit = (values: FormValues) => {
        postReservation(values).then((data) => {
            if (data.error){
                updateSnackBarMessage(data.error.message);
            } else if (data.success){
                updateSnackBarMessage('reservation has been created successfully');
            } else {
                updateSnackBarMessage('An unexpected error occurred. Please try again !');
            }
        })
    };

    useEffect(() => { 
        if (language === 'tr') {
            setPage(turkishPage); 
        } else setPage(engPage);
    }, [history, language])

    return (
        <>
            <Grid container component={Paper} className={classes.root} alignItems='center'>
                <Grid item xs={12} sm={12} md={12} lg={12} >
                    <Box
                        display="flex"
                        flexDirection="column"
                        minHeight="100vh"
                    >
                        <Box>
                            <Typography variant="h2" color="primary" className={classes.title}>
                                { page.title} 
                            </Typography>
                            <AddReservationForm form={page.form} handleSubmit={handleSubmit} initValues={initValues.current}/>
                        </Box>
                    </Box>
                </Grid>
            </Grid>
        </>
    )
}

export default AddReservation;