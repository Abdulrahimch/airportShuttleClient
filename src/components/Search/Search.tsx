import { Grid, InputLabel } from '@material-ui/core';
import { useEffect, useState } from 'react';
import CustomButton from '../Button/CustomButton';
import useStyles from './useStyles';
import DateFnsUtils from '@date-io/date-fns';
import {
    MuiPickersUtilsProvider,
    DatePicker
  } from '@material-ui/pickers';

interface Props {
    from: Date;
    to: Date;
    setFrom: (from: Date) => void;
    setTo: (to: Date) => void;
    invokeUseEffect: () => void
};

const Search = ({ from, to, setFrom, setTo, invokeUseEffect }: Props): JSX.Element => {
    const { itemContainer,  inputLabel, inputs } = useStyles();

    const onSearchClick = () => {
        invokeUseEffect();
    };

    return (
        <>
            <Grid item container className={itemContainer} spacing={6} justifyContent='center'>
                <MuiPickersUtilsProvider utils={DateFnsUtils}>
                    <Grid item >
                        <InputLabel className={inputLabel}>
                            From
                        </InputLabel>
                        <MuiPickersUtilsProvider utils={DateFnsUtils}>
                            <DatePicker
                                InputProps= {{
                                    classes: { input: inputs },
                                    disableUnderline: true
                                }}
                                value={from}
                                onChange={(date: any) => setFrom(date)}
                        />
                        </MuiPickersUtilsProvider>
                    </Grid>
                    <Grid item >
                        <InputLabel className={inputLabel}>
                            to
                        </InputLabel>
                        <MuiPickersUtilsProvider utils={DateFnsUtils}>
                            <DatePicker
                                InputProps= {{
                                    classes: { input: inputs },
                                    disableUnderline: true
                                }}
                                value={to}
                                onChange={(date: any) => setTo(date) }
                        />
                        </MuiPickersUtilsProvider>
                        <CustomButton btnText='Search' style='searchButton' onClick={onSearchClick} />
                    </Grid>
                </MuiPickersUtilsProvider>
            </Grid>
        </>
    );
};

export default Search;