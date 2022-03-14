import useStyles from './useStyles';
import { DataGrid, GridColumns, GridRowData, GridToolbar } from '@material-ui/data-grid';
import { Box } from '@material-ui/core';
import { useState } from 'react';
import clsx from 'clsx';

interface Props {  
    rows: GridRowData[];
    columns: GridColumns;
}
export default function DataTable({ rows, columns }: Props): JSX.Element {
    const { root, row, columnHeader } = useStyles();
    
    return (
      <Box className={root}>
        <DataGrid
            components={{ Toolbar: GridToolbar }}
            rows={rows}
            columns={columns}
            pageSize={10}
            rowHeight={100}
            disableSelectionOnClick
            disableColumnMenu={true}
            disableDensitySelector={true}
            getRowClassName={(params) => `${clsx(row, params.row.status)}`}
            classes={{ columnHeader: columnHeader }}
        />
      </Box>
    );
  }
