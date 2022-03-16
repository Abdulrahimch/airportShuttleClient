import useStyles from './useStyles';
import { Link } from 'react-router-dom';
import { Tabs, Tab, Grid, SwipeableDrawer, ListItemText, ListItem, List, IconButton } from '@material-ui/core';
import { tabsDictionary } from '../../../utils/dictionary';
import { useLanguage } from '../../../context/useLanguageContext';
import LanguageTab from '../LanguageTab/LanguageTab';
import Profile from '../Profile/Profile';
import { useState } from 'react';
import MenuIcon from '@material-ui/icons/Menu';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import theme from '../../Theme';

const { englishTabs,  turkishTabs } = tabsDictionary;


function ClientHeader(): JSX.Element {
    const classes = useStyles();
    const { language } = useLanguage();
    const [openDrawer, setOpenDrawer] = useState<boolean>(false);
    const matches = useMediaQuery(theme.breakpoints.down('md'));


    let tabs = [];
        // { label: 'new reservation', to: '/new-reservation' },
        // { label: 'reservations', to: '/reservation' },
        // { label: 'payments', to: '/payment' }
    
    function tabFormation() {
        if (language === 'tr') tabs = turkishTabs;
        else tabs = englishTabs;
        return tabs.map(({ label, to }, idx) => (
            <Tab
                key={idx}
                label={label}
                component={Link}
                to={to}
                className={classes.tabs}
            />
        ));
    };

    const handleClick = () => {
        setOpenDrawer(false);
    }

    const drawer = (
        <>
            <SwipeableDrawer 
                open={openDrawer} 
                onClose={() => {setOpenDrawer(false)}} 
                onOpen={() => {setOpenDrawer(true)}}
                classes={{paper: classes.drawer}}
            >
            <div className={classes.toolbarMargin} />  
            <List disablePadding>
                <ListItem 
                    onClick={handleClick}
                    component={Link}
                    to={'/new-reservation'}

                    divider button 
                >
                    <ListItemText disableTypography>{language === 'eng' ? 'New Reservation' : 'Yeni Rezervasyon'}</ListItemText>
                </ListItem>
                <ListItem 
                    onClick={handleClick} 
                    divider button
                    component={Link}
                    to={'/reservation'}
                >   
                    <ListItemText disableTypography>{language === 'eng' ? 'Reservations' : 'Rezervasyonlar'}</ListItemText>
                </ListItem>
                <ListItem 
                    onClick={handleClick} 
                    divider button
                    component={Link}
                    to={'/payment'}
                >
                    <ListItemText disableTypography>{language === 'eng' ? 'Payments' : 'Finans'}</ListItemText>
                </ListItem>
            </List>    
            </SwipeableDrawer>
            <IconButton className={classes.drawerIcon} onClick={() => {setOpenDrawer(!openDrawer)}} disableRipple>
                <MenuIcon className={classes.drawerIconMenu} />
            </IconButton>
        </>
    )

    return (
        <Grid container className={classes.root}>
            <Grid item >
                {matches ? drawer : <Tabs
                    aria-label="wrapped label tabs example"
                    TabIndicatorProps={{
                        style: {
                            display: "none",
                        },
                    }}
                >
                    {tabFormation()}
                </Tabs>}
            </Grid>
            <Grid item className={classes.gridItem}>
                <Grid container>
                    <LanguageTab />
                    <Profile />
                </Grid>
            </Grid>
        </Grid>
    )
}

export default ClientHeader;