import { useEffect, useState } from 'react';
import useStyles from './useStyles';
import { format } from 'date-fns';
import { Card, CardMedia, CardContent, Typography, CardActions, Button, Grid } from '@material-ui/core';
import { useLanguage } from '../../../context/useLanguageContext';
import { useHistory } from 'react-router-dom';
import { getStat, getstatInfo } from '../../../helpers/APICalls/agencyReservation';
import { useSnackBar } from '../../../context/useSnackbarContext';
import DataTable from '../../../components/DataTable/DataTable';
import { GetStatApiDataSuccess, GetStatInfoApiDataSuccess } from '../../../interface/agencyReservation';
import { engUnconfirmedResColumns, 
          turkishUnconfirmedResColumns,
          engOwedUsersColumns,
          turkishOwedUsersColumns } from '../../../utils/dictionary/home';

const initStat = {
    owedUsersNumber: 0,
    unconfirmedReservationsNumber: 0
};

const initStatInfo = {
    owedUsers: [],
    unconfirmedReservations: []
};

const AgencyHome = (): JSX.Element => {
    const { root, card, itemContaienr } = useStyles();
    const { language } = useLanguage();
    const [stat, setStat] = useState<GetStatApiDataSuccess>(initStat);
    const [statInfo, setStatInfo] = useState<any>(initStatInfo);
    const { updateSnackBarMessage } = useSnackBar();
    const history = useHistory()
    
    const unconfirmedResColumns = language === 'eng' ? engUnconfirmedResColumns() : turkishUnconfirmedResColumns();
    const owedUsersColumns = language === 'eng' ? engOwedUsersColumns() : turkishOwedUsersColumns();
 
    useEffect(() => {
        getStat().then((data) => {
            if (data.error) {
                console.log(data.error);
                updateSnackBarMessage(data.error);
            } else if (data.success) {
                setStat(data.success);
            } else {
                updateSnackBarMessage('An unexpected error occurred. Please try again !');
            }
        });
    }, []);

    useEffect(() => {
        getstatInfo().then((data) => {
            if (data.error) {
                console.log(data.error);
                updateSnackBarMessage(data.error);
            } else if (data.success) {
                console.log(data.success)
                data.success.unconfirmedReservations.map((reservation, idx) => {
                    reservation.id = idx + 1;
                    reservation.property = reservation.client.propertyName;
                    const date = new Date(reservation.selectedDate);
                    reservation.date = format(date, 'dd-MM-yyyy kk:hh')
                    
                })
                data.success.owedUsers.map((user, idx) => {
                    user.id = idx + 1;
                })
                setStatInfo(data.success);
            } else {
                updateSnackBarMessage('An unexpected error occurred. Please try again !');
            }
        });
    }, [stat]);

    const cards = [
            {
                cardImg: 'https://airportshuttle0.s3.amazonaws.com/airport-shuttle02.jpeg',
                title: language === 'eng' ? 'Unconfirmed Reservations' : 'Onaylanmamış Rezer...',
                content: language === 'eng' ? 'Reservations waiting for confirmation!' : 'Onay bekleyen rezervasyonlar!',
                number: stat.unconfirmedReservationsNumber,
                btnText: 'Show',
                handleClick: () => {history.push('/unconfirmed-reservations')}
            }, {
                cardImg: 'https://airportshuttle0.s3.amazonaws.com/money.jpeg',
                title: language === 'eng' ? 'Debt' : 'Borç',
                content: language === 'eng' ? 'clients owe you money!' : 'Müşterilerin sana borcu var!',
                number: stat.owedUsersNumber,
                btnText: 'Show',
                handleClick: () => {history.push('/debt')}
            }
        ]
    return (
    <>
        <Grid container direction="column" className={root}>
            <Grid item container spacing={3} justifyContent="space-evenly" className={itemContaienr}>
                {cards.map(({ cardImg, title, content, number, btnText, handleClick }) => (
                <Card className={card}>
                    <CardMedia
                        component="img"
                        height="140"
                        image={cardImg}
                        alt="Debt"
                    />
                    <CardContent style={{ backgroundColor:'#2F4F4F' }}>
                        <Typography gutterBottom variant="h5" component="div">
                            {title}
                        </Typography>
                        <Typography variant="body2">
                            {`${number} ${content}`}
                        </Typography>
                    </CardContent>
                </Card>
                ))}
            </Grid>
            <Grid item container justifyContent='flex-end'  alignItems='center'>
                <DataTable rows={statInfo.unconfirmedReservations} columns={unconfirmedResColumns} />
                <DataTable rows={statInfo.owedUsers} columns={owedUsersColumns} />
            </Grid>
        </Grid>
    </>
    );
};

export default AgencyHome;