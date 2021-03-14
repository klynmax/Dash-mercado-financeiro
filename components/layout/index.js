import React from 'react';
import Link from 'next/link';
import PropTypes from 'prop-types';
import AppBar from '@material-ui/core/AppBar';
import CssBaseline from '@material-ui/core/CssBaseline';
import Divider from '@material-ui/core/Divider';
import Drawer from '@material-ui/core/Drawer';
import Hidden from '@material-ui/core/Hidden';
import IconButton from '@material-ui/core/IconButton';
import InboxIcon from '@material-ui/icons/MoveToInbox';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import MailIcon from '@material-ui/icons/Mail';
import MenuIcon from '@material-ui/icons/Menu';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import DashboardIcon from '@material-ui/icons/Dashboard';
import NotificationsIcon from '@material-ui/icons/Notifications';
import VideocamIcon from '@material-ui/icons/Videocam';
import ApartmentIcon from '@material-ui/icons/Apartment';
import AssignmentTurnedInIcon from '@material-ui/icons/AssignmentTurnedIn';
import BookIcon from '@material-ui/icons/Book';
import MenuItem from '@material-ui/core/MenuItem';
import Avatar from '@material-ui/core/Avatar';
import ExitToAppIcon from '@material-ui/icons/ExitToApp';
import { createMuiTheme } from "@material-ui/core/styles";
import blue from '@material-ui/core/colors/blue';
import red from '@material-ui/core/colors/red';
import { ThemeProvider } from '@material-ui/styles';
import { BiDollarCircle } from 'react-icons/bi'

import * as constants from './../../config/constants';

const drawerWidth = 240;

const theme = createMuiTheme({
  palette: {
    primary: {
      main: '#212121'
    },
    secondary: {
      main: '#263238',
    },
  },
});

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
  },
  drawer: {
    [theme.breakpoints.up('sm')]: {
      width: drawerWidth,
      flexShrink: 0,
    },
  },
  appBar: {
    zIndex: theme.zIndex.drawer + 1,
    // [theme.breakpoints.up('sm')]: {
    //   width: `calc(100% - ${drawerWidth}px)`,
    //   //marginLeft: drawerWidth,
    //   alignItems: 'flex-end',
    // },
  },
  avatar: {
    marginRight: 10
  },
  menuButton: {
    marginRight: theme.spacing(2),
    [theme.breakpoints.up('sm')]: {
      display: 'none',
    },
  },
  // necessary for content to be below app bar
  toolbar: theme.mixins.toolbar,
  drawerPaper: {
    width: drawerWidth,
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing(3),
  },
  userName: {
    marginRight: 10
  },
}));

function ResponsiveDrawer(props) {
  const { window, modulo } = props;
  const classes = useStyles();
  //const theme = useTheme();
  const [mobileOpen, setMobileOpen] = React.useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const drawer = (
    <div >
      <div className={classes.toolbar} />
        <List >
            <ListItem button>
                <ListItemIcon>
                    {/* <DashboardIcon /> */}
                    <BiDollarCircle  style={{width: 30, height: 30}}/>
                </ListItemIcon>
                <Link href='/dolar'>
                    <MenuItem>{constants.DOLAR}</MenuItem> 
                </Link>
            </ListItem>
            <ListItem button>
                <ListItemIcon>
                    <NotificationsIcon />
                </ListItemIcon>
                <Link href="/alerts">
                    <MenuItem>{constants.ALERTS}</MenuItem>
                </Link>
            </ListItem>
            <ListItem button>
                <ListItemIcon>
                    <VideocamIcon />
                </ListItemIcon>
                <Link href="/cameras">
                    <MenuItem>{constants.CAMERA}</MenuItem>
                </Link>
            </ListItem>
            <ListItem button>
                <ListItemIcon>
                    <ApartmentIcon />
                </ListItemIcon>
                <Link href="/environments">
                    <MenuItem>{constants.ENVIRONMENTS}</MenuItem>
                </Link>
            </ListItem>
            <ListItem button>
                <ListItemIcon>
                    <AssignmentTurnedInIcon />
                </ListItemIcon>
                <Link href="/monitoring/list">
                    <MenuItem>{constants.MONITORING}</MenuItem>
                </Link>
            </ListItem>
            <ListItem button>
                <ListItemIcon>
                    <BookIcon />
                </ListItemIcon>
                <Link href="/reports">
                    <MenuItem>{constants.REPORT}</MenuItem>
                </Link> 
            </ListItem>
        </List>
    </div>
  );

  const container = window !== undefined ? () => window().document.body : undefined;

  return (
    <ThemeProvider theme={theme}>
    <div className={classes.root}>
      <CssBaseline />
      <AppBar position="fixed" className={classes.appBar} color="secondary" >
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            className={classes.menuButton}
          >
            <MenuIcon />
          </IconButton>
        </Toolbar>
      </AppBar>
      <nav className={classes.drawer} aria-label="mailbox folders">
        {/* The implementation can be swapped with js to avoid SEO duplication of links. */}
        <Hidden smUp implementation="css" >
          <Drawer
            container={container}
            variant="temporary"
            anchor={theme.direction === 'rtl' ? 'right' : 'left'}
            open={mobileOpen}
            onClose={handleDrawerToggle}
            classes={{
              paper: classes.drawerPaper,
            }}
            ModalProps={{
              keepMounted: true, // Better open performance on mobile.
            }}
          >
            {drawer}
          </Drawer>
        </Hidden>
        <Hidden xsDown implementation="css">
          <Drawer
            classes={{
              paper: classes.drawerPaper,
            }}
            variant="permanent"
            open
          >
            {drawer}
          </Drawer>
        </Hidden>
      </nav>
      <main className={classes.content}>
        <div className={classes.toolbar} />
        {props.children}
      </main>
    </div>
    </ThemeProvider>
  );
}

ResponsiveDrawer.propTypes = {
  /**
   * Injected by the documentation to work in an iframe.
   * You won't need it on your project.
   */
  window: PropTypes.func,
};

export default ResponsiveDrawer;