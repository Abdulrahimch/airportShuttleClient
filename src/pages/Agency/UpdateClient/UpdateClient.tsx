import { Grid, Typography } from "@material-ui/core";
import { Client } from "../../../interface/Client";
import AddClientFrom from '../AddClient/AddClientForm/AddClientForm';
import useStyles from "./useStyles";
import { useSnackBar } from '../../../context/useSnackbarContext';
import { patchClient } from "../../../helpers/APICalls/user";

interface Props {
    values: Client,
    handleUpdatedClientSuccess: (rowValue: Client, client: Client) => void
};

const UpdateClient = ({ values, handleUpdatedClientSuccess }: Props): JSX.Element => {
    const { root, title } = useStyles();
    const { updateSnackBarMessage } =  useSnackBar();

    const handleSubmit = (formValues: Client) => {
        const id = values._id;
        patchClient(formValues, id).then((data) => {
            if (data.error) {
                updateSnackBarMessage(data.error.message);
            } else if (data.success){
                handleUpdatedClientSuccess(values, data.success.client);
                updateSnackBarMessage('Client has been updated successfully!');
            } else {
                updateSnackBarMessage('An unexpected error occurred. Please try again !');
            }
        });
    };

    return (
        <>
            <Grid container direction="column" className={root} justify="center">
                    <Typography className={title}>
                        Update Client
                    </Typography>
                <Grid item>
                    <AddClientFrom handleSubmit={handleSubmit} values={values}/>
                </Grid>
            </Grid>
        </>
    )
};

export default UpdateClient;