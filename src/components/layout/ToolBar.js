import React, { useState, useRef } from "react";
import Logo from "../../assets/images/svgFiles/SvgLogo";
import { Link } from "react-router-dom";
import HomePageStyles from "../../styles/home/HomePageStyles";

import AppBar from "@material-ui/core/AppBar";
import Avatar from "@material-ui/core/Avatar";
import Badge from "@material-ui/core/Badge";
import IconButton from "@material-ui/core/IconButton";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import Toolbar from "@material-ui/core/Toolbar";


import SvgHome from "../../assets/images/svgFiles/SvgHome";
import SvgStar from "../../assets/images/svgFiles/SvgStar";
import SvgUser from "../../assets/images/svgFiles/SvgUser";
import SvgServer from "../../assets/images/svgFiles/SvgServer";
import SvgShare from "../../assets/images/svgFiles/SvgShare";
import SvgChart from "../../assets/images/svgFiles/SvgChart";
import SvgSettings from "../../assets/images/svgFiles/SvgSettings";
import SvgMessage from "../../assets/images/svgFiles/SvgMessage";
import SvgNotification from "../../assets/images/svgFiles/SvgNotification";

function ToolBar(props) {
    const classes = HomePageStyles();
    const [arrowBoard, setArrowBoard] = useState(false)
    const [arrowAccount, setArrowAccount] = useState(false)
    const [arrowUser, setArrowUser] = useState(false)
    const [arrowCampaing, setArrowCampaing] = useState(false)
    const [arrowAdmin, setArrowAdmin] = useState(false)
    const [arrowStatics, setArrowStatics] = useState(false)
    const [arrowSettings, setArrowSettings] = useState(false)
  

    function switchArrow (board,acc,use,camp,adm,stat,sett) {
        board === null ? setArrowBoard(false):setArrowBoard(true);
        acc === null ? setArrowAccount(false):setArrowAccount(true);
        use === null ? setArrowUser(false):setArrowUser(true);  
        camp === null ? setArrowCampaing(false):setArrowCampaing(true);  
        adm === null ? setArrowAdmin(false):setArrowAdmin(true);  
        stat === null ? setArrowStatics(false):setArrowStatics(true);  
        sett === null ? setArrowSettings(false):setArrowSettings(true);  
      }


      const handleArrowBoard = () => {
        switchArrow("turnOn",null,null,null,null,null,null)
      };
      const handleArrowAccount = () => {
        switchArrow(null,"turnOn",null,null,null,null,null)
      };
      const handleArrowUser = () => {
        switchArrow(null,null,"turnOn",null,null,null,null)
      };
      const handleArrowCampaing = () => {
        switchArrow(null,null,null,"turnOn",null,null,null)
      };
      const handleArrowAdm = () => {
        switchArrow(null,null,null,null,"turnOn",null,null)
      };
      const handleArrowStatics = () => {
        switchArrow(null,null,null,null,null,"turnOn",null)
      };
      const handleArrowSettings = () => {
        switchArrow(null,null,null,null,null,null,"turnOn")
      };


      const drawer = (
        <div className={classes.drawer}>
          <List>
            
            <Link to={"/homepage"} style={{ textDecoration: 'none' }}>
              <ListItem button onClick= {handleArrowBoard}>
                <ListItemIcon className={arrowBoard ? classes.leftIconC : classes.leftIcon}>
                  <SvgHome />
                </ListItemIcon>
                { arrowBoard ?     
                <ListItemIcon className={classes.rightIcon}>
                <div className={classes.line4}></div>
              </ListItemIcon> : null
                }
              </ListItem>
            </Link>
    
            <Link to={"/Register"} style={{ textDecoration: 'none' }}>
              <ListItem  button onClick= {handleArrowAccount} >
                <ListItemIcon className={arrowAccount ? classes.leftIconC : classes.leftIcon}>
                  <SvgStar />
                </ListItemIcon>
                { arrowAccount ?     
                <ListItemIcon className={classes.rightIcon}>
                <div className={classes.line4}></div>
              </ListItemIcon> : null
                }
              </ListItem>
            </Link>
    
            <Link to={"/users"} style={{ textDecoration: 'none' }}>
              <ListItem button onClick= {handleArrowUser}>
                <ListItemIcon className={arrowUser ? classes.leftIconC : classes.leftIcon}>
                  <SvgUser />
                </ListItemIcon>
                { arrowUser ?     
                <ListItemIcon className={classes.rightIcon}>
                <div className={classes.line4}></div>
              </ListItemIcon> : null
                }
              </ListItem>
            </Link>
    
            <Link to={"/homepage"} style={{ textDecoration: 'none' }}>
              <ListItem button onClick= {handleArrowCampaing}>
                <ListItemIcon className={arrowCampaing ? classes.leftIconC : classes.leftIcon}>
                  <SvgServer />
                </ListItemIcon>

                { arrowCampaing ?     
                <ListItemIcon className={classes.rightIcon}>
                <div className={classes.line4}></div>
              </ListItemIcon> : null
                }
                  </ListItem>
            </Link>
    
            <Link to={"/homepage"} style={{ textDecoration: 'none' }}>
              <ListItem button onClick= {handleArrowAdm}>
                <ListItemIcon className={arrowAdmin ? classes.leftIconC : classes.leftIcon}>
                  <SvgShare />
                </ListItemIcon>
                { arrowAdmin ?     
                <ListItemIcon className={classes.rightIcon}>
                <div className={classes.line4}></div>
              </ListItemIcon> : null
                } 
              </ListItem>
            </Link>
    
            <Link to={"/homepage"} style={{ textDecoration: 'none' }}>
              <ListItem button onClick= {handleArrowStatics}>
                <ListItemIcon className={arrowStatics ? classes.leftIconC : classes.leftIcon}>
                  <SvgChart />
                </ListItemIcon>
                { arrowStatics ?     
                <ListItemIcon className={classes.rightIcon}>
                <div className={classes.line4}></div>
              </ListItemIcon> : null
                } 
              </ListItem>
            </Link>
            
            <Link to={"/homepage"} style={{ textDecoration: 'none' }}>
              <ListItem button onClick= {handleArrowSettings}>
                <ListItemIcon className={arrowSettings ? classes.leftIconC : classes.leftIcon}>
                  <SvgSettings />
                </ListItemIcon>
                { arrowSettings ?     
                <ListItemIcon className={classes.rightIcon}>
                <div className={classes.line4}></div>
              </ListItemIcon> : null
                } 
              </ListItem>
            </Link>

          </List>
        </div>
      );
    
      return (
        <div className={classes.root}>
          
          <AppBar position="fixed" className={classes.appBar} elevation={1}>
            <Toolbar className={classes.toolbar}>
            <div className={classes.divIconHeader}>
                <Logo />
              </div>
              <div className={classes.line}></div>
              <div className= {classes.divMesagge}>
              <IconButton> 
                <SvgMessage />
                </IconButton>
                </div>
                <div className= {classes.divText}>
                <p>
                  ¿Qué nos falta?
                </p>
                </div>
                <div className={classes.line2}></div>

              <div className={classes.divTextHeader}>
                <p className={classes.helloHeader}>
                 <span> {"Yenny Cardenas"} </span> | {"Administrador"}
                </p>
                </div>
    
              <div className={classes.divAvatarHeader}>
                <IconButton>
                  <Badge
                    color="secondary"
                    anchorOrigin={{
                      vertical: "bottom",
                      horizontal: "right",
                    }}
                   
                  >
                    <Avatar className={classes.avatarHeader}>{"YC"}</Avatar>
                  </Badge>
                </IconButton>
              </div>

              <div className={classes.line3}></div>
              <div className={classes.divNot}>
              <IconButton> 
                <SvgNotification/>
                </IconButton>
              </div>
            </Toolbar>
          </AppBar>
          <nav className={classes.drawerT}></nav>
          {drawer}
        </div>
      );
  
}

export default ToolBar;
