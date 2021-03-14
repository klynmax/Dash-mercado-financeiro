// import React from 'react';
// import { makeStyles } from '@material-ui/core/styles';
// import Card from '@material-ui/core/Card';
// import CardActions from '@material-ui/core/CardActions';
// import CardContent from '@material-ui/core/CardContent';
// import Button from '@material-ui/core/Button';
// import Typography from '@material-ui/core/Typography';
// import { ThemeProvider } from '@material-ui/styles';
// import { createMuiTheme } from "@material-ui/core/styles";
// import styled, { keyframes, css } from "styled-components";
// import CardHeader from '@material-ui/core/CardHeader';

// import Box from '@material-ui/core/Box';
// import { BsGraphUp } from "react-icons/bs";

// const useStyles = makeStyles({
//   root: {
//     minWidth: 270,
//     height: 90
//   },
//   bullet: {
//     display: 'inline-block',
//     margin: '0 2px',
//     transform: 'scale(0.8)',
//   },
//   title: {
//     fontSize: 18,
//   },
//   pos: {
//     marginBottom: 12,
//   },
//   value: {
//     fontSize: 12,
//   }
// });

// const theme = createMuiTheme({
//     palette: {
//       primary: {
//         main: '#81d4fa'
//       },
//       secondary: {
//         main: '#263238',
//       },
//     },
//   });


// export default function SimpleCard(props) {
//   const classes = useStyles();
//   const bull = <span className={classes.bullet}>•</span>;

//   const { title, value, icon } = props

//   return (
//     <ThemeProvider theme={theme}>
//     <Card className={classes.root} elevation={5} >
//     <CardHeader>teste</CardHeader>
//       <CardContent /*style={{backgroundColor: "#e3f2fd"}}*/ >
//         <Typography className={classes.title} color="primary" gutterBottom style={{marginLeft: 100}} >
//           <b>{title}</b>
//         </Typography>
//         <Typography variant="h6" component="h2" style={{marginLeft: 100}} >
//           { value}
//         </Typography>
//       </CardContent>
//     </Card>
//     </ThemeProvider>
//   );
// }

import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardHeader from "@material-ui/core/CardHeader";
import Avatar from "@material-ui/core/Avatar";
import IconButton from "@material-ui/core/IconButton";
import FavoriteIcon from "@material-ui/icons/Favorite";
import Typography from '@material-ui/core/Typography';

import { ThemeProvider } from '@material-ui/styles';
import { createMuiTheme } from "@material-ui/core/styles";

import { BsGraphUp } from "react-icons/bs";

const useStyles = makeStyles({
  root: {
    minWidth: 270
    //maxWidth: 345
  },
  icon: {
    marginLeft: 10
  },
  title: {
        fontSize: 18,
        marginLeft: 20
      },
  value: {
    marginLeft: 20
  }
});

const theme = createMuiTheme({
    palette: {
      primary: {
        main: '#81d4fa'
      },
      secondary: {
        main: '#263238',
      },
      green: {
        main: '#4caf50'
      },
      red: {
        main: '#f44336'
      },
      blueGrey: {
        main: '#607d8b'
      }
    },
  });

export default function ImgMediaCard(props) {
  const classes = useStyles();
  const { title, value, icon } = props

  return (
    <ThemeProvider theme={theme}>
      <Card className={classes.root}>
        <CardHeader
          avatar={icon}
          // action={
          //   <IconButton aria-label="settings">
          //     <FavoriteIcon />
          //   </IconButton>
          // }
          title={ <Typography className={classes.title} color="primary" >{title}</Typography> }
          subheader={ <Typography className={classes.value} variant="h6" component="h2" >{value}</Typography> }
        />
      </Card>
    </ThemeProvider>
  );
}