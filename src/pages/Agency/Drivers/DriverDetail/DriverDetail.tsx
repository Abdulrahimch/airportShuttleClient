import { Grid, Avatar, Typography } from "@material-ui/core";
import { Driver } from "../../../../interface/Driver";
import useStyles from './useStyles';

interface Props {
    driver: Driver;
};

const DriverDetail = ({ driver }: Props): JSX.Element => {
    const { root, avatar, title } = useStyles();

    return (
        <>
            <Grid container direction='column' className={root} justifyContent="center" alignItems="center">
                <Grid item>
                    <Avatar className={avatar} src={driver.img} />
                </Grid>
                    <Typography className={title}>{`${driver.name}`}</Typography>
                    <Typography variant="body2">{`Cep: ${driver.phoneNumber}`}</Typography>
                    <Typography variant="body2">{`Car No: ${driver.carNumber}`}</Typography>
            </Grid>
        </>
    )
};

export default DriverDetail;