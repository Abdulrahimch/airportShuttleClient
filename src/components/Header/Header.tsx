import ClientHeader from './ClientHeader/ClientHeader';
import AgencyHeader from './AgencyHeader/AgencyHeader';
import useStyles from './useStyles';
import { useAuth } from '../../context/useAuthContext';
import { AppBar, Box, Toolbar } from '@material-ui/core';
import LanguageTab from './LanguageTab/LanguageTab';


function Header(): JSX.Element {
    const { loggedInUser } = useAuth();
    const classes = useStyles();

    return (
        <Box> 
            <AppBar position="static" className={classes.root}>
                <Toolbar>
                    {!loggedInUser ? null
                    :loggedInUser?.role === 'client' ?
                        <Box>
                            <ClientHeader />  
                        </Box>
                    :
                        <Box>
                            <AgencyHeader />  
                        </Box>
                    }
                </Toolbar>
            </AppBar>
        </Box>
    )
}

export default Header;