import { Box, InputLabel, TextField, Typography, Divider } from "@material-ui/core";
import { useState } from "react";
import CustomButton from "../../Button/CustomButton";
import useStyles from './useStyles';
import { changePasswordApi } from '../../../helpers/APICalls/login';
import { useSnackBar } from "../../../context/useSnackbarContext";
import { useLanguage } from "../../../context/useLanguageContext";

interface Props {
    handleDialogClose: () => void;
}

const ChangePassword = ({ handleDialogClose }: Props): JSX.Element => {
    const { root, title, inputs, label } = useStyles();
    const [oldPassword, setOldPassword] = useState('');
    const [newPassword, setNewPassword] = useState('');
    const { updateSnackBarMessage } = useSnackBar();
    const { language } = useLanguage();
    
    const changePassword = (passwordType: string, event: any) => {
        switch(passwordType) {
            case 'oldPassword':
                setOldPassword(event.target.value);
                break;
            case 'newPassword':
                setNewPassword(event.target.value);
                break;
            }
    }

    const handleSubmit = ()  => {
        const passwordInputs = { oldPassword, newPassword };
        changePasswordApi(passwordInputs).then((data) => {
            if (data.error) {
                updateSnackBarMessage(data.error);
            } else if (data.success) {
                updateSnackBarMessage('Password has been updated successfully');
                handleDialogClose();
            } else {
                updateSnackBarMessage('An unexpected error occurred. Please try again !');
            }
        }) 
    };

    return (
        <Box className={root}>
            <Typography className={title}>
                { language === 'eng' ? 'Change Password' : 'Şifre Değiştir ' }
            </Typography>
            <InputLabel>
                { language === 'eng' ? 'Old Password' : 'Eski Şifre' }
            </InputLabel>
            <TextField
                type={"password"}                
                value={oldPassword}
                onChange={(event) => {changePassword('oldPassword', event)}}
                InputProps={{
                            classes: { input: inputs },
                            disableUnderline: true
                }}                
            />
            <InputLabel>
                { language === 'eng' ? 'New Password' : 'Yeni Şifre' }
            </InputLabel>
            <TextField
                type="password"
                value={newPassword}
                onChange={(event) => {changePassword('newPassword', event)}}
                InputProps={{
                            classes: { input: inputs },
                            disableUnderline: true
                }}
            />
            <Box />
                <CustomButton style='submit' btnText='Submit' onClick={handleSubmit} />
        </Box>
    )
};

export default ChangePassword;