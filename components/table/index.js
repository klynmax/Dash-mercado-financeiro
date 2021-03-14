import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TablePagination from '@material-ui/core/TablePagination';
import TableRow from '@material-ui/core/TableRow';

// const columns = [
//   { id: 'name', label: 'Nome', minWidth: 200 },
//   { id: 'type', label: 'Tipo', minWidth: 60 },
//   {
//     id: 'subproject',
//     label: 'Subprojeto',
//     minWidth: 170,
//     //align: 'right',
//     //format: (value) => value.toLocaleString('en-US'),
//   },
//   {
//     id: 'macroarea',
//     label: 'Macroárea',
//     minWidth: 170,
//     //align: 'right',
//     //format: (value) => value.toLocaleString('en-US'),
//   },
//   {
//     id: 'date',
//     label: 'Data/Hora',
//     minWidth: 170,
//     //align: 'right',
//     //format: (value) => value.toFixed(2),
//   },
// ];

function createData(name, code, population, size) {
  const density = population / size;
  return { name, code, population, size, density };
}

const useStyles = makeStyles({
  root: {
    width: '100%',
  },
  container: {
    maxHeight: 440,
  },
});

const rows = [
    {
        name: "EPI-MONIT001",
        type: "Continuo",
        subproject: "Detecção de EPI",
        macroarea: "Turbina 1",
        date: "06/01 - 14:00"
    },
    {
        name: "EBJ-MONIT001",
        type: "Por demanda",
        subproject: "Movimentação de objetos pesados",
        macroarea: "Turbina 1",
        date: "06/01 - 14:00"
    },
    {
        name: "EPI-MONIT001",
        type: "Continuo",
        subproject: "Detecção de EPI",
        macroarea: "Turbina 1",
        date: "06/01 - 14:00"
    },
    {
        name: "EBJ-MONIT001",
        type: "Por demanda",
        subproject: "Movimentação de objetos pesados",
        macroarea: "Turbina 1",
        date: "06/01 - 14:00"
    },
    {
        name: "EPI-MONIT001",
        type: "Continuo",
        subproject: "Detecção de EPI",
        macroarea: "Turbina 1",
        date: "06/01 - 14:00"
    },
]

export default function StickyHeadTable(props) {
  const { result, columns } = props 
  const classes = useStyles();
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(10);

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };

  const sortModel = [
    { field: 'id', sort: 'desc'}
  ];

  return (
    <Paper className={classes.root}>
      <TableContainer className={classes.container}>
        <Table stickyHeader aria-label="sticky table">
          <TableHead>
            <TableRow>
              { columns != '' ? columns.map((column) => (
                <TableCell
                  key={column.id}
                  align={column.align}
                  style={{ minWidth: column.minWidth }}
                >
                  {column.label}
                </TableCell>
              ))
              :
              ('')
            }
            </TableRow>
          </TableHead>
          <TableBody>
            {rows.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage).map((row) => {
              return (
                <TableRow hover role="checkbox" tabIndex={-1} key={row.code}>
                  {columns.map((column) => {
                    const value = row[column.id];
                    return (
                      <TableCell key={column.id} align={column.align} >
                        {column.format && typeof value === 'number' ? column.format(value) : value}
                      </TableCell>
                    );
                  })}
                </TableRow>
              );
            })}
          </TableBody>
        </Table>
      </TableContainer>
      <TablePagination
        rowsPerPageOptions={[10, 25, 100]}
        component="div"
        count={rows.length}
        rowsPerPage={rowsPerPage}
        page={page}
        onChangePage={handleChangePage}
        onChangeRowsPerPage={handleChangeRowsPerPage}
        labelRowsPerPage={"Resultado por página"}
      />
    </Paper>
  );
}