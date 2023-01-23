import * as React from 'react';
import { styled, alpha } from '@mui/material/styles';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import InputBase from '@mui/material/InputBase';
import MenuIcon from '@mui/icons-material/Menu';
import SearchIcon from '@mui/icons-material/Search';
import Button from '@mui/material/Button'
import { Stack } from '@mui/system'
import RestaurantIcon from '@mui/icons-material/Restaurant'
import LoginIcon from '@mui/icons-material/Login';
import DiamondIcon from '@mui/icons-material/Diamond';
import Tooltip from '@mui/material/Tooltip';
import Menu from '@mui/material/Menu';
import Avatar from '@mui/material/Avatar';
import MenuItem from '@mui/material/MenuItem';


const Search = styled('div')(({ theme }) => ({
  position: 'relative',
  borderRadius: theme.shape.borderRadius,
  backgroundColor: alpha(theme.palette.common.white, 0.15),
  '&:hover': {
    backgroundColor: alpha(theme.palette.common.white, 0.25),
  },
  marginLeft: 0,
  width: '100%',
  [theme.breakpoints.up('sm')]: {
    marginLeft: theme.spacing(1),
    width: 'auto',
  },
}));

const SearchIconWrapper = styled('div')(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: '100%',
  position: 'absolute',
  pointerEvents: 'none',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: 'inherit',
  '& .MuiInputBase-input': {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create('width'),
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      width: '12ch',
      '&:focus': {
        width: '20ch',
      },
    },
  },
}));

const settings = ['Profile', 'Logout'];

export default function SearchAppBar() {
  const [anchorElNav, setAnchorElNav] = React.useState<null | HTMLElement>(null);
  const [anchorElUser, setAnchorElUser] = React.useState<null | HTMLElement>(null);

  const handleOpenNavMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElNav(event.currentTarget);

  };
  const handleOpenUserMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);

  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);

  };

  const Logout = (e: any): void => {
    e.preventDefault();
    localStorage.removeItem("name");
    window.location.href = "/";
  };

  const name = sessionStorage.getItem("name");

  
    return (
      <AppBar position='static' sx={{ bgcolor: '#9e9e9e' }}>
        <Toolbar>
          <IconButton href='/' size='large' edge='start' aria-label='logo'>
            <DiamondIcon />
          </IconButton>
          <Typography variant='h6' component='div'  >
            SelfCare
          </Typography>
          <Stack direction='row' spacing={2} sx={{ flexGrow: 1 }}>

            <Button color='inherit' href='/hairsalon'>Kirpyklos</Button>

            <Button color='inherit'  >Paslaugos</Button>
            
          </Stack>
          <Search sx={{margin:1}}>
              <SearchIconWrapper>
                <SearchIcon />
              </SearchIconWrapper>
              <StyledInputBase
                placeholder="Search…"
                inputProps={{ 'aria-label': 'search' }}
              />
            </Search>
          {name ? (


            <Box sx={{ flexGrow: 0 }}>
              
              <Tooltip title="Open settings">
                <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                  <Avatar alt="Remy Sharp" src="/static/images/avatar/2.jpg" />
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

                <MenuItem onClick={handleCloseUserMenu}>
                  <Button href='/profile'>Profile</Button>
                </MenuItem>
                <MenuItem onClick={handleCloseUserMenu}>
                  <Button onClick={(e) => {
                    e.preventDefault();
                    sessionStorage.clear();
                    window.location.href = "/";
                  }} >Logout</Button>
                </MenuItem>

              </Menu>
            </Box>
          ) : (<>
            
            <LoginIcon />
            <Button color="inherit" href="/login">
              Prisijungti
            </Button>
            <Button color="inherit" href="/register">
              Registruotis
            </Button>
          </>
          )}
        </Toolbar>
      </AppBar>
    );
  }