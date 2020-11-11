import React from 'react';
import useStyles from '../../styles/Register/Register'
import InputBase from '@material-ui/core/InputBase';
import Button from '@material-ui/core/Button';
import VisibilityIcon from '@material-ui/icons/Visibility';
import IconButton from '@material-ui/core/IconButton';
import InputAdornment from '@material-ui/core/InputAdornment';
import Visibility from '@material-ui/icons/Visibility';
import VisibilityOff from '@material-ui/icons/VisibilityOff';
import Sgv5 from '../../assets/images/svgFiles/SvgRegister/SgvRegister';
import SvgHoling from '../../assets/images/svgFiles/SvgRegister/SvgHolling';
import SvgIcon1 from '../../assets/images/svgFiles/SvgRegister/SvgIcon1';
import SgvCircle from '../../assets/images/svgFiles/SvgRegister/SvgCircule';
import SgvLogo from '../../assets/images/svgFiles/SvgLogo';
import Grid from '@material-ui/core/Grid';
import SaveIcon from '@material-ui/icons/Save';



export default function CustomizedInputs() {
  const classes = useStyles();

  const [values, setValues] = React.useState({
    password: "",
    showPassword: false
  });

  const handleChange = prop => event => {
    setValues({ ...values, [prop]: event.target.value });
  };

  const handleClickShowPassword = () => {
    setValues({ ...values, showPassword: !values.showPassword });
  };


  const handleMouseDownPassword = event => {
    event.preventDefault();
  };

  return (
    <React.Fragment>

      <div className={classes.root}>
        <Grid container spacing={3}>
          <Grid item xs={4}>
            <div className={classes.Circulo1}>
              <SgvCircle color={'#50D1B6'} />
            </div>
            <div>
              <SvgHoling />
            </div>
            <div className={classes.svgIcon1} >
              <SvgIcon1 />
            </div>


          </Grid>
          <Grid item xs={4}>
            <div>
              <SgvLogo />
            </div>
            <form className={classes.root} noValidate>
              <div>
                <h4 className={classes.title}>Registrate</h4>
                <p className={classes.p}>¡Ingresa tus datos para empezar!</p>
              </div>

              <InputBase
                className={classes.margin}
                inputProps={{ 'aria-label': 'naked' }}
                placeholder="Nombre de la empresa"
              />
              <InputBase
                className={classes.margin}
                inputProps={{ 'aria-label': 'naked' }}
                placeholder="Nombre de completo"
              />
              <InputBase
                className={classes.margin}
                inputProps={{ 'aria-label': 'naked' }}
                placeholder="Correo electronico"
              />
              <InputBase
                className={classes.margin}
                inputProps={{ 'aria-label': 'naked' }}
                placeholder="contraseña"
                type={values.showPassword ? "text" : "password"}
                value={values.password}
                onChange={handleChange("password")}
                endAdornment={
                  <InputAdornment position="end">
                    <IconButton
                      aria-label="toggle password visibility"
                      onClick={handleClickShowPassword}
                      onMouseDown={handleMouseDownPassword}
                      edge="end"
                    >
                      {values.showPassword ? <Visibility /> : <VisibilityOff />}
                    </IconButton>
                  </InputAdornment>
                }
              >
                <VisibilityIcon />
              </InputBase>

              <Button className={classes.Button} variant="contained" color="secondary">
                Registrate
              </Button>
            </form>
            <div className={classes.Sgv5}>
              <Sgv5 />
            </div>
          </Grid>
          <Grid item xs={4}>
            <div className={classes.Circulo2}>
              <SgvCircle color={'#00808E'} />
            </div>
            <div>
              <Button
                variant="contained"
                size="small"
                className={classes.buttonAyuda}
               // startIcon={<SaveIcon />}
              >
                Ayuda
             </Button>
            </div>
          </Grid>
        </Grid>
      </div>



























    </React.Fragment>
  );
}