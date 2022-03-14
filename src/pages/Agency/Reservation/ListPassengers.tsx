import { List, ListItem, ListItemText, Typography, Divider, Box } from "@material-ui/core";
import useStyles from './useStyles';

interface Props {
    passengers: string [];
}

const ListPassengers = ({ passengers }: Props) => {
    const { passengerRoot, passengerTitle } = useStyles();

    return (
        <>
            <Box className={passengerRoot}>
                <Typography className={passengerTitle}>Passengers</Typography>
                <Divider />
                <List>
                    {passengers.map((passenger, idx) => (
                    <ListItem key={idx}>
                        <ListItemText primary={`${idx + 1} ${passenger}`} />
                    </ListItem>
                    ))}
                </List>
            </Box>
        </>
    )
};

export default ListPassengers;