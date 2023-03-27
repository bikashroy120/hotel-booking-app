import React from 'react'
import  DataTable, { createTheme } from 'react-data-table-component';

const DataTableCommon = ({columns,data}) => {

    createTheme('solarized', {
        text: {
          primary: '#fff',
          secondary: 'gray',
        },
        background: {
          default: 'transparent',
        },
        context: {
          background: '#cb4b16',
          text: '#FFFFFF',
        },
        divider: {
          default: 'gray',
        },
        action: {
          button: 'rgba(0,0,0,.54)',
          hover: 'rgba(0,0,0,.08)',
          disabled: 'rgba(0,0,0,.12)',
        },
      }, 'dark');

      const customStyles = {
        rows: {
            style: {
                minHeight: '72px', // override the row height
            },
        },
        headCells: {
            style: {
                paddingLeft: '20px', // override the cell padding for head cells
                paddingRight: '20px',
                background:"",
                fontSize:"20px"
            },
        },
        cells: {
            style: {
                paddingLeft: '20px', // override the cell padding for data cells
                paddingRight: '20px',
                fontSize:"17px"
            },
        },
    };


  return (
    <div>
        <DataTable
            columns={columns}
            data={data}
            theme="solarized"
            customStyles={customStyles}
            pagination
            highlightOnHover
        />
    </div>
  )
}

export default DataTableCommon