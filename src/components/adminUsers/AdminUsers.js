import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableContainer from '@material-ui/core/TableContainer';
import TableFooter from '@material-ui/core/TableFooter';
import TablePagination from '@material-ui/core/TablePagination';
import TableRow from '@material-ui/core/TableRow';
import IconButton from '@material-ui/core/IconButton';
import FirstPageIcon from '@material-ui/icons/FirstPage';
import KeyboardArrowLeft from '@material-ui/icons/KeyboardArrowLeft';
import KeyboardArrowRight from '@material-ui/icons/KeyboardArrowRight';
import LastPageIcon from '@material-ui/icons/LastPage';
import TableHead from '@material-ui/core/TableHead';
import { Edit} from '@material-ui/icons';
import Avatar from '../avatar/Avatar';
import axios from "axios";
import AlertDelete from '../alertdelete/Alertdelete';
import { StyledTableCellEmp, StyledTableCell,  StyledTableRow} from '../../styles/adminUser/Userliststiles';
import * as _ from "lodash";
import ListEmployeeStyle from "../../styles/adminUser/ListEmployeStyle";
import SyncAltIcon from '@material-ui/icons/SyncAlt';
import Grid from '@material-ui/core/Grid';
import SwipeableDrawer from "@material-ui/core/SwipeableDrawer";



const useStyles2 = makeStyles({
 
  container: {
    display: 'flex',
  },

  divName: {
    margin: '4% 5%'
  },

});

const useStyles1 = makeStyles((theme) => ({
  root: {
    flexShrink: 0,

  },
}));




TablePaginationActions.propTypes = {
  count: PropTypes.number.isRequired,
  onChangePage: PropTypes.func.isRequired,
  page: PropTypes.number.isRequired,
  rowsPerPage: PropTypes.number.isRequired,
};

function TablePaginationActions(props) {
  const classes = useStyles1();
  const theme = useTheme();
  const {count, page, rowsPerPage, onChangePage } = props;
  const handleFirstPageButtonClick = (event) => {
    onChangePage(event, 0);
  };

  const handleBackButtonClick = (event) => {
    onChangePage(event, page - 1);
  };

  const handleNextButtonClick = (event) => {
    onChangePage(event, page + 1);
  };

  const handleLastPageButtonClick = (event) => {
    onChangePage(event, Math.max(0, Math.ceil(count / rowsPerPage) - 1));
  };
  
  return (
    
    <div className={classes.root}>    
       
      <IconButton
        onClick={handleFirstPageButtonClick}
        disabled={page === 0}
        aria-label="first page"
      >
        {theme.direction === 'rtl' ? <LastPageIcon /> : <FirstPageIcon />}
      </IconButton>
      <IconButton onClick={handleBackButtonClick} disabled={page === 0} aria-label="previous page">
        {theme.direction === 'rtl' ? <KeyboardArrowRight /> : <KeyboardArrowLeft />}
      </IconButton>
      <IconButton
        onClick={handleNextButtonClick}
        disabled={page >= Math.ceil(count / rowsPerPage) - 1}
        aria-label="next page"
      >
        {theme.direction === 'rtl' ? <KeyboardArrowLeft /> : <KeyboardArrowRight />}
      </IconButton>
      <IconButton
        onClick={handleLastPageButtonClick}
        disabled={page >= Math.ceil(count / rowsPerPage) - 1}
        aria-label="last page"
      >
        {theme.direction === 'rtl' ? <FirstPageIcon /> : <LastPageIcon />}
      </IconButton>
      </div>
     
  
    
  );
}



function createData(acciones, usuarios, img, email, rol) {
  return { acciones, usuarios, img, email, rol };
}

const rows = [
  createData('Activo', 'Migel Angel', 'data:image/jpeg;base64,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', 'migelangel@gamil.com', 'Analista'),
  createData('Inactivo', 'Ivan Posada', '', 'ivanposada@gmai.com', 'Analista'),
  createData('Activo', 'Andrea roman', '', 'andrearoman@gmai.com', 'Administrador'),
  createData('Inactivo', 'Silvia Suares', '', 'silviasuares@gmai.com', 'Analista'),
  createData('Activo', 'Andres Silva', '', 'andressilva@gmai.com', 'Analista'),
  createData('Inactivo', 'Carlos Perez', '', 'carlosperez@gmai.com', 'Administrador'),
  createData('Inactivo', 'Claudia Roa', 'data:image/jpeg;base64,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', 'migelangel@gamil.com', 'claudiaroa@gmai.com', 'Analista'),
  createData('Activo', 'Luiz Angel', '', 'luizangel@gmai.com', 'Analista'),
  createData('Inactivo', 'Cristian Nodal', '', 'cristiannodal@gmai.com', 'Administrador'),
  createData('Inactivo', 'Nairo Quintana', '', 'nairoquintana@gmail.com', 'Analista'),
  createData('Activo', 'Primos Roglis', '', 'primosroglis@gmai.com', 'Administrad'),
  createData('Inactivo', 'Ivan Dario', '', 'ivandario@gmai.com', 'Analista'),
  createData('Activo', 'Hernesto Rodriguez', '', 'hernestorodriguez@gmai.com', 'Analista'),
].sort((a, b) => (a.calories < b.calories ? -1 : 1));


const title = "Texto de pregunta";
const Mensage = "Estas seguro que desea eliminar este tablero";

// Esta es mi función para reutilizar `sort`
const sort_lists = (key, list, inverse) =>
  inverse
    ? [...list].sort((b, a) => (a[key] > b[key] ? 1 : a[key] < b[key] ? -1 : 0))
    : [...list].sort((a, b) => (a[key] > b[key] ? 1 : a[key] < b[key] ? -1 : 0))


export default function CustomPaginationActionsTable() {
  const classes = useStyles2();
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(10);
  const emptyRows = rows - Math.min(rowsPerPage, rows.length - page * rowsPerPage);
  const [usersss, setUsers] = React.useState(rows);
  const [columnToSort, setColumnToSort] = React.useState('');
  const [columnToSortL, setColumnToSortL] = React.useState('');
  const [sortDirection, setSortDirection] = React.useState('desc');
  const classesMainPage = ListEmployeeStyle();



  const invertDirect = {
    asc: 'desc',
    desc: 'asc',
  };




  const numerUser = usersss.map(f=> f.acciones).filter(x => x ==='Activo').length;
     

  const handleSort =(columnName)=>{    
    let newSortedList = sort_lists(columnName, usersss)
    if (newSortedList[0] === usersss[0]) newSortedList = sort_lists(columnName, usersss, true)
    setUsers(newSortedList)   
  };
 


  const handleSort1 = (columnName) => {
    let nameSorterp;
     
    if (columnName === 'acciones') {
      nameSorterp = user => user.name.toLowerCase();
      console.log(nameSorterp ,'desdes la tabla')
    }
    else if (columnName === 'usuarios') {
      nameSorterp = user => user.companyemail;
    }

    setColumnToSort([nameSorterp]);
    setColumnToSortL(columnName);
    setSortDirection(columnToSortL === columnName ? invertDirect[sortDirection] : 'asc')

  }





  React.useEffect(() => {
    (async () => {

      axios
        .get(
          `${process.env.REACT_APP_GATEWAY_END_POINT}/adclient`,

        )
        .then((response) => {
          const result = response.data.body;
          setUsers(result);
        })
        .catch((error) => {

          console.log("error " + error);
        });

    })();

  }, []);





  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };


  return (
    <React.Fragment>
     <SwipeableDrawer>
      <TableContainer>
        <Table>        
          <TableHead>   
            <TableRow>           
              <StyledTableCellEmp key={"rol-acciones"} style={{ width: "18%" }}>
                <div
                  className={classesMainPage.imgOrder}
                  onClick={() => handleSort("acciones")}                 
                >
                  <span>Acciones</span>
                  {columnToSortL === "acciones" ? (
                    sortDirection === "asc" ? (
                      <SyncAltIcon
                        style={{
                          cursor: 'pointer',
                          width: "18px",
                          transform: "rotate(90deg)",
                          margin: "2%",
                        }}
                      />
                    ) : (
                      <SyncAltIcon
                        style={{
                          cursor: 'pointer',
                          width: "18px",
                          transform: "rotate(90deg)",
                          margin: "2%",
                        }}
                      />
                    )
                  ) : (
                    <SyncAltIcon
                      style={{
                        cursor: 'pointer',
                        width: "18px",
                        transform: "rotate(90deg)",
                        margin: "2%",
                      }}
                    />
                  )}
                </div>
              </StyledTableCellEmp>
              <StyledTableCellEmp
                key={"nombre-usuarios"}
                style={{ width: "30%" }}
              >
                <div
                  className={classesMainPage.imgOrder}
                  onClick={() => handleSort("usuarios")}
                >
                  <span>Usuarios</span>
                  {columnToSortL === "usuarios" ? (
                    sortDirection === "asc" ? (
                      <SyncAltIcon
                        style={{
                          cursor: 'pointer',
                          width: "18px",
                          transform: "rotate(90deg)",
                          margin: "2%",
                        }}
                      />
                    ) : (
                      <SyncAltIcon
                        style={{
                          cursor: 'pointer',
                          width: "18px",
                          transform: "rotate(90deg)",
                          margin: "2%",
                        }}
                      />
                    )
                  ) : (
                    <SyncAltIcon
                      style={{
                        cursor: 'pointer',
                        width: "18px",
                        transform: "rotate(90deg)",
                        margin: "2%",
                      }}
                    />
                  )}
                </div>
              </StyledTableCellEmp>
              <StyledTableCellEmp
                key={"email-usuarios"}
                style={{ width: "35%" }}
              >
                <div
                  className={classesMainPage.imgOrder}
                  onClick={() => handleSort("email")}
                >
                  <span>Email</span>
                  {columnToSortL === "email" ? (
                    sortDirection === "asc" ? (
                      <SyncAltIcon
                        style={{
                          cursor: 'pointer',
                          width: "18px",
                          transform: "rotate(90deg)",
                          margin: "2%",
                        }}
                      />
                    ) : (
                      <SyncAltIcon
                        style={{
                          cursor: 'pointer',
                          width: "18px",
                          transform: "rotate(90deg)",
                          margin: "2%",
                        }}
                      />
                    )
                  ) : (
                    <SyncAltIcon
                      style={{
                        cursor: 'pointer',
                        width: "18px",
                        transform: "rotate(90deg)",
                        margin: "2%",
                      }}
                    />
                  )}
                </div>
              </StyledTableCellEmp>
              <StyledTableCellEmp key={"rol-usuarios"} style={{ width: "20%" }}>
                <div
                  className={classesMainPage.imgOrder}
                  onClick={() => handleSort("rol")}
                >
                  <span>Rol Usuario</span>
                  {columnToSortL === "rol" ? (
                    sortDirection === "asc" ? (
                      <SyncAltIcon
                        style={{
                          cursor: 'pointer',
                          width: "11%",
                          transform: "rotate(90deg)",
                          margin: "2%",
                        }}
                      />
                    ) : (
                      <SyncAltIcon
                        style={{
                          cursor: 'pointer',
                          width: "11%",
                          transform: "rotate(90deg)",
                          margin: "2%",
                        }}
                      />
                    )
                  ) : (
                    <SyncAltIcon
                      style={{
                        cursor: 'pointer',
                        width: "11%",
                        transform: "rotate(90deg)",
                        margin: "2%",
                      }}
                    />
                  )}
                </div>
              </StyledTableCellEmp>
              <StyledTableCellEmp
                key={"accion-empleado"}
                style={{ width: "20%" }}
              >
                <span>Acciones</span>
              </StyledTableCellEmp>
            </TableRow>
          </TableHead>

          <TableBody>
            {(rowsPerPage > 0
              ? _.orderBy(usersss, columnToSort, sortDirection).slice(
                  page * rowsPerPage,
                  page * rowsPerPage + rowsPerPage
                )
              : _.orderBy(usersss, columnToSort, sortDirection)
            ).map((row) => (
              <StyledTableRow key={row.usuarios}>
                <StyledTableCell>{row.acciones}</StyledTableCell>
                <StyledTableCell>
                  <div className={classes.container}>
                    <div>
                      <Avatar userAvatar={row.usuarios} imgavatar={row.img} />
                    </div>
                    <div className={classes.divName}>{row.usuarios}</div>
                  </div>
                </StyledTableCell>
                <StyledTableCell>{row.email}</StyledTableCell>
                <StyledTableCell>{row.rol}</StyledTableCell>
                <StyledTableCell>
                  <AlertDelete
                    rolUser={row.acciones}
                    textTitle={title}
                    textComentario={Mensage}
                    nameUser={row.usuarios}
                  />
                  &nbsp;&nbsp;&nbsp;
                  <Edit />
                </StyledTableCell>
              </StyledTableRow>
            ))}
            {emptyRows > 0 && (
              <TableRow style={{ height: 1 * emptyRows }}>
                <StyledTableCell colSpan={6} />
              </TableRow>
            )}
          </TableBody>
            
        </Table>
      </TableContainer>
      <Grid container spacing={3}>
        <Grid  item xs={6}>
          {numerUser} Usuarios activos
        </Grid>
        <Grid item xs={6} >        
        <TablePagination                          
                  style={{ backgroundColor: "#f9f9f9" }}
                  labelRowsPerPage='Filas'
                  rowsPerPageOptions={[10, 25, { label: "ALL", value: -1 }]}
                  count={rows.length}
                  rowsPerPage={rowsPerPage}
                  page={page}
                  SelectProps={{
                    inputProps: { "aria-label": "Rows per page" },
                    native: true,
                  }}
                  onChangePage={handleChangePage}
                  onChangeRowsPerPage={handleChangeRowsPerPage}
                  ActionsComponent={TablePaginationActions}
              /> 

        
        </Grid>
      </Grid>
      </SwipeableDrawer>
    </React.Fragment>
  );
}



  