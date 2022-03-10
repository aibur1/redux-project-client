import * as React from 'react';
import PropTypes from 'prop-types';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import Divider from '@mui/material/Divider';
import Drawer from '@mui/material/Drawer';
import IconButton from '@mui/material/IconButton';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import MailIcon from '@mui/icons-material/Mail';
import MenuIcon from '@mui/icons-material/Menu';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import { Grid } from '@mui/material';
// import MyOrders from './MyOrders/MyOrders';
import { NavLink } from 'react-router-dom';


import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
    useParams,
    useRouteMatch
} from "react-router-dom";

import AddProduct from './AddProduct/AddProduct';
import ManageProducts from './ManageProducts/ManageProducts';
// import MakeAdmin from './MakeAdmin/MakeAdmin';
import MakeAdmin from '../Dashboard/MakeAdmin/MakeAdmin';
import ManageAllOrders from './ManageAllOrders/ManageAllOrders';
import useAuth from '../../hooks/useAuth';
// import { NavLink } from 'react-bootstrap';



const drawerWidth = 250;

function Dashboard(props) {

   
    const { window } = props;
    const { logOut } = useAuth();
    
    const [mobileOpen, setMobileOpen] = React.useState(false);
    let { path, url } = useRouteMatch();
    const { admin } = useAuth();

    const handleDrawerToggle = () => {
        setMobileOpen(!mobileOpen);
    };

    const drawer = (
        <div>
            <Toolbar />
            <Box >
                <NavLink className=" nav" to="/myorders">MyOrders</NavLink>
                <NavLink className=" nav" to="/payment">Payment</NavLink>
                <NavLink className=" nav" to="/review">Review</NavLink>
                {/* <NavLink className=" nav" to="/makeadmin">MakeAdmin</NavLink>
                <NavLink className=" nav" to="/addProduct">AddProduct</NavLink> */}
                <NavLink className=" nav" to="/">Go Home</NavLink>

                
                {admin && <Box>
                    {/* <NavLink className=" nav" to={`${url}`}>Dashboard</NavLink> */}
                    <NavLink className=" nav" to={`${url}/makeAdmin`}>Make Admin</NavLink>
                    <NavLink className=" nav" to={`${url}/manageallorders`}>Manage All Orders</NavLink>
                    <NavLink className=" nav" to={`${url}/manageproducts`}>Manage Products</NavLink>
                    <NavLink className=" nav" to={`${url}/addProduct`}>Add Product</NavLink>
                </Box>}


                <NavLink onClick={logOut} className=" nav" to="/login">logout</NavLink>
            </Box>
            <Divider />
            {/*  <List>
                {['Inbox', 'Starred', 'Send email', 'Drafts'].map((text, index) => (
                    <ListItem button key={text}>
                        <ListItemIcon>
                            {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
                        </ListItemIcon>
                        <ListItemText primary={text} />
                    </ListItem>
                ))}
            </List> */}

        </div>
    );

    const container = window !== undefined ? () => window().document.body : undefined;

    return (
        <Box sx={{ display: 'flex' }}>
            <CssBaseline />
            <AppBar
                position="fixed"
                sx={{
                    width: { sm: `calc(100% - ${drawerWidth}px)` },
                    ml: { sm: `${drawerWidth}px` },
                }}
            >
                <Toolbar>
                    <IconButton
                        color="inherit"
                        aria-label="open drawer"
                        edge="start"
                        onClick={handleDrawerToggle}
                        sx={{ mr: 2, display: { sm: 'none' } }}
                    >
                        <MenuIcon />
                    </IconButton>
                    <Typography variant="h6" noWrap component="div">
                        Dashboard
                    </Typography>
                </Toolbar>
            </AppBar>
            <Box
                component="nav"
                sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 } }}
                aria-label="mailbox folders"
            >

                <Drawer
                    container={container}
                    variant="temporary"
                    open={mobileOpen}
                    onClose={handleDrawerToggle}
                    ModalProps={{
                        keepMounted: true, // Better open performance on mobile.
                    }}
                    sx={{
                        display: { xs: 'block', sm: 'none' },
                        '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
                    }}
                >
                    {drawer}
                </Drawer>
                <Drawer
                    variant="permanent"
                    sx={{
                        display: { xs: 'none', sm: 'block' },
                        '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
                    }}
                    open
                >
                    {drawer}
                </Drawer>
            </Box>
            <Box
                component="main"
                sx={{ flexGrow: 1, p: 3, width: { sm: `calc(100% - ${drawerWidth}px)` } }}
            >
                <Toolbar />
                <Switch>
                    <Route exact path={path}>
                        {/* my orders may be */}
                    </Route>
                    <Route path={`${path}/makeAdmin`}>
                        <MakeAdmin></MakeAdmin>
                    </Route>
                    <Route path={`${path}/manageallorders`}>
                       <ManageAllOrders></ManageAllOrders>
                    </Route>
                    <Route path={`${path}/manageproducts`}>
                        <ManageProducts></ManageProducts>
                    </Route>
                    <Route path={`${path}/addProduct`}>
                        <AddProduct></AddProduct>
                    </Route>
                </Switch>

            </Box>
        </Box>
    );
}

Dashboard.propTypes = {
    /**
     * Injected by the documentation to work in an iframe.
     * You won't need it on your project.
     */
    window: PropTypes.func,
};

export default Dashboard;