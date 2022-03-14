import useStyles from './useStyles';
import { Link } from 'react-router-dom';
import { Tabs, Tab, Grid } from '@material-ui/core';
import { tabsDictionary } from '../../../utils/dictionary';
import { useLanguage } from '../../../context/useLanguageContext';
import LanguageTab from '../LanguageTab/LanguageTab';
import Profile from '../Profile/Profile';

const { englishTabs,  turkishTabs } = tabsDictionary;


function ClientHeader(): JSX.Element {
    const classes = useStyles();
    const { language } = useLanguage();
    let tabs = [];
    
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

    return (
        <Grid container className={classes.root}>
            <Grid item>
                <Tabs
                    aria-label="wrapped label tabs example"
                    TabIndicatorProps={{
                        style: {
                            display: "none",
                        },
                    }}
                >
                    {tabFormation()}
                </Tabs>
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