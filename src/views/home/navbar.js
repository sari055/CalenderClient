// import * as React from 'react';
// import AppBar from '@mui/material/AppBar';
// import Box from '@mui/material/Box';
// import Toolbar from '@mui/material/Toolbar';
// import Typography from '@mui/material/Typography';
// import IconButton from '@mui/material/IconButton';
// import AccountCircle from '@mui/icons-material/AccountCircle';
// import MenuItem from '@mui/material/MenuItem';
// import Menu from '@mui/material/Menu';
// import LogoutIcon from '@mui/icons-material/Logout';
// import ExitToAppIcon from '@mui/icons-material/ExitToApp';
// import ManageAccountsIcon from '@mui/icons-material/ManageAccounts';
// import { logout, logoutUser } from '../../store/actions/auth-actions';
// import { useDispatch, useSelector } from 'react-redux';

// const Navbar = () => {
//   const dispatch = useDispatch();
//   const {user} = useSelector(state => state.user)
//   const [anchorEl, setAnchorEl] = React.useState(null);

//   const pages = ['Family', 'Calendar', 'About'];
//   const settings = ['Settings', 'Logout'];


//   const handleMenu = (event) => {
//     setAnchorEl(event.currentTarget);
//   };

//   const handleClose = () => {
//     setAnchorEl(null);
//   };

//   const handleSettingsClick = () => {
//     //todo...
//     handleClose();
//   }

//   const handleLogout = () => {
//     dispatch(logout());
//     handleClose();
//   }

//   return (
//     <Box sx={{ flexGrow: 1 }}>
//       <AppBar position="static">
//         <Toolbar>
//           <Typography component="a" sx={{ flexGrow: 1 }}>
//             קלנדר
//           </Typography>
//           <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
//             <IconButton
//               aria-label="account of current user"
//               aria-controls="menu-appbar"
//               aria-haspopup="true"
//               onClick={handleMenu}
//               color="inherit"
//             >
//               <AccountCircle/>
//               <div style={{fontSize: '1rem', padding: 'inherit'}}>{user?.firstName}</div> 
//             </IconButton>
//             <Menu
//               sx={{ mt: '45px' }}
//               id="menu-appbar"
//               anchorEl={anchorEl}
//               anchorOrigin={{
//                 vertical: 'top',
//                 horizontal: 'right',
//               }}
//               keepMounted
//               transformOrigin={{
//                 vertical: 'top',
//                 horizontal: 'right',
//               }}
//               open={Boolean(anchorEl)}
//               onClose={handleClose}
//             >
//               <MenuItem onClick={handleSettingsClick} ><ManageAccountsIcon size="small" style={{ minWidth: '40px' }} />  הגדרות  </MenuItem>
//               <MenuItem onClick={handleLogout}><ExitToAppIcon size="small" style={{ minWidth: '40px' }} />  יציאה </MenuItem>
//             </Menu>
//           </Box>
//         </Toolbar>
//       </AppBar>
//     </Box>


//   );
// }

// export default Navbar;


import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import Tooltip from '@mui/material/Tooltip';
import MenuItem from '@mui/material/MenuItem';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import { Link } from 'react-router-dom';
import router from '../../router';
import { useDispatch } from 'react-redux';
import { logout } from '../../store/actions/auth-actions';
import ExitToAppIcon from '@mui/icons-material/ExitToApp';
import ManageAccountsIcon from '@mui/icons-material/ManageAccounts';


function Navbar() {
  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const [anchorElUser, setAnchorElUser] = React.useState(null);
  const dispatch = useDispatch();

  const pages = [
    { name: "calendar", text: 'לוח שנה', link: "/home/calendar" },
    { name: "manage-family", text: 'ניהול צאצאים ', link: "/home/family/settings" },
    {name: "manage-calendar",text:'ניהול לוח',link:"/home/calendar-manage"},
    { name: "about", text: 'אודות', link: "/home/about" }
    
  ];
  
  const settings = [
    { name: 'Settings', text:"הגדרות חשבון", icon:<ManageAccountsIcon size="small" style={{ minWidth: '40px', marginBottom: '-6px' }}/>, action: () => { router.navigate('/home/user-settings') }},
    { name: 'Logout',text: "יציאה", icon:<ExitToAppIcon size="small" style={{ minWidth: '40px', marginBottom: '-6px' }}/>, action: () => { dispatch(logout())} }
  ];

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  return (
    <AppBar position="static">
      <Container>
        <Toolbar disableGutters>
          <CalendarMonthIcon sx={{ display: { xs: 'none', md: 'flex' }, mr: 1 }} />
          <Typography
            variant="h6"
            noWrap
            component="a"
            sx={{
              mr: 6,
              display: { xs: 'none', md: 'flex' },
              fontWeight: 700,
              letterSpacing: '.1rem',
              color: 'inherit',
              textDecoration: 'none',
              marginTop: '-4px'
            }}
          >
            קלנדר
          </Typography>

          <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="inherit"
            >
              <MenuIcon />
            </IconButton>
            {/* <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: 'bottom',
                horizontal: 'left',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'left',
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: { xs: 'block', md: 'none' },
              }}
            >
              {pages.map((page) => (
                <MenuItem key={page.name} onClick={handleCloseNavMenu}>
                  <Typography textAlign="center">{page.name}</Typography>
                </MenuItem>
              ))}
            </Menu> */}
          </Box>
          <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
            {pages.map(({ name, text, link }) => (
              <Button
                key={name}
                onClick={handleCloseNavMenu}
                sx={{ my: 2, color: 'white', display: 'block' }}
                component={Link}
                to={link}
              >
                {text}
                {/* <Link key={name} component={RouterLink} to={link} variant="body2">{text}</Link> */}
              </Button>
            ))}
          </Box>

          <Box sx={{ flexGrow: 0 }}>
            <Tooltip title="Open settings">
              <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                <Avatar alt="user image" src="/static/images/avatar/2.jpg" />
              </IconButton>
            </Tooltip>
            <Menu
              sx={{ mt: '45px' }}
              id="menu-appbar"
              anchorEl={anchorElUser}
              anchorOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              open={Boolean(anchorElUser)}
              onClose={handleCloseUserMenu}
            >
              {settings.map((setting) => (
                <MenuItem key={setting.name} onClick={setting.action}>
                  <Typography textAlign="center"> {setting.icon}{setting.text}</Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
}
export default Navbar;