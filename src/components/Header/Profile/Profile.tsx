import { Menu, MenuItem } from "@material-ui/core";
import IconButton from "@material-ui/core/IconButton";
import PersonIcon from '@material-ui/icons/Person';
import { useState } from "react";
import useStyles from "./useStyles";
import { useAuth } from '../../../context/useAuthContext';
import { useLanguage } from '../../../context/useLanguageContext';
import CustomDialog from "../../CustomDialog/CustomDialog";
import ChangePassword from "../ChangePassword/ChangePassword";


const Profile = (): JSX.Element => {
    const [anchorEl, setAnchorEl] = useState(null);
    const [open, setOpen] = useState(false);
    const [openDialog, setOpenDialog] = useState(false);
    const { menu, menuItem, root, tabStyle } = useStyles();
    const { logout } = useAuth();
    const { language } = useLanguage();
    
    const handleClick = (e: any) => {
        setAnchorEl(e.currentTarget);
        setOpen(true);
    }

    const handleClose = () => {
        setAnchorEl(null);
        setOpen(false);
    }

    const handleLogout = () => {
        logout();
    };

    const handleDialogClose = () => {
        setOpenDialog(!openDialog);
    }

    return (
        <>
            <IconButton aria-label="fingerprint" onClick={handleClick}>
                <PersonIcon />
            </IconButton>
            <Menu 
                id="simple-menu"
                anchorEl={anchorEl} 
                open={open} 
                onClose={handleClose}
                classes={{paper: menu}}
                MenuListProps={{onMouseLeave: handleClose}}
                elevation={0}
            >
                <MenuItem classes={{root: menuItem}} onClick={() => {setOpenDialog(true)}} >{ language === 'eng' ? 'Change Password' : 'Şifre Değiştir ' }</MenuItem>
                <MenuItem classes={{root: menuItem}}  onClick={handleLogout}>{ language === 'eng' ? 'Logout' : 'Çikiş' }</MenuItem>
            </Menu>
            <CustomDialog open={openDialog} onClose={handleDialogClose}>
                <ChangePassword handleDialogClose={handleDialogClose}/>
            </CustomDialog>
    </>
    )
}

export default Profile;