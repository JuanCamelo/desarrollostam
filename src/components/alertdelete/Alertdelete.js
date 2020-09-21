import React, { Fragment } from 'react';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import CloseIcon from '@material-ui/icons/Close';
import DeleteOutlineIcon from '@material-ui/icons/DeleteOutline';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogContent from '@material-ui/core/DialogContent';
import SvgCoffe from '../../assets/images/svgFiles/SvgCoffe'
import DialogTitle from '@material-ui/core/DialogTitle';
import useStyles from '../../styles/alerts/styleAlert'


export default function CustomizedDialogs(props) {
  const classes = useStyles();
  const [open, setOpen] = React.useState(false);  

  const handleClickOpen = (idUser) => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };
  if (props.rolUser === 'Inactivo') {
    return (
      <DeleteOutlineIcon disabled style={{ color: 'C3C0BF' }} />
    )
  } else {
    return (
      <Fragment>
        <DeleteOutlineIcon onClick={() => handleClickOpen(props.nombre)} />
        <Dialog
        disableBackdropClick={true}           
          onClose={handleClose}
          open={open}>
          <CloseIcon onClick={handleClose} className={classes.closeButton} />
          <DialogContent className={classes.root} >
            <div className={classes.Logo}>
              <SvgCoffe>img</SvgCoffe>
            </div>
            <DialogTitle style={{ textAlign:'center' }} id="draggable-dialog-title">
              ¿{props.textTitle}?
            </DialogTitle>
            <DialogContentText id="alert-dialog-slide-description">
              ¿{props.textComentario}/{props.nameUser}?
            </DialogContentText>
          </DialogContent>
          <DialogActions >
            <Button
              className={classes.Butons}
              onClick={handleClose} >
              cancelar
            </Button>
            <Button
              autoFocus
              onClick={handleClose}
              className={classes.Butons} >
              confirmar
            </Button>
          </DialogActions>
        </Dialog>
      </Fragment>
    );
  }
}