import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Avatar from "@material-ui/core/Avatar";

import Badge from "@material-ui/core/Badge";

const useStyles = makeStyles((theme) => ({
  root: {
    "& span": {
      right: "2%",
      padding: "0",
      backgroundColor: "#ffffff",
    },
  },
}));

export default function FallbackAvatars(props) {
  const classes = useStyles();
  const nombres = props.userAvatar;
  const initials = Array.prototype.map
    .call(nombres.split(" "), function (x) {
      return x.substring(0, 1).toUpperCase();
    })
    .join("");

  if ((props.imgavatar == null) | (props.imgavatar === "")) {
    return (
      <div className={classes.root}>
        <Badge
          color="secondary"
          anchorOrigin={{
            vertical: "bottom",
            horizontal: "right",
          }}
        >
          <Avatar className={classes.avatarHeader}>{initials}</Avatar>
        </Badge>
      </div>
    );
  } else {
    return (
      <div className={classes.root}>
        <Badge
          color="secondary"
          anchorOrigin={{
            vertical: "bottom",
            horizontal: "right",
          }}
        >
          <Avatar alt="Remy Sharp" src={props.imgavatar} />
        </Badge>
      </div>
    );
  }
}
