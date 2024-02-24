// Acknowledgement to https://mui.com/material-ui/react-app-bar/ : App Bar with Search Field.

import React, { useEffect } from 'react'
import { styled, alpha, ThemeProvider } from '@mui/material/styles';
import Typography from '@mui/material/Typography';
import SearchIcon from '@mui/icons-material/Search';
import InputBase from '@mui/material/InputBase';
import { createTheme } from '@mui/material/styles';
import { green, purple } from '@mui/material/colors';

const Search = styled('div')(({ theme }) => ({
position: 'relative',
color: 'cornflowerblue',
borderRadius: theme.shape.borderRadius,
backgroundColor: alpha(theme.palette.common.white, 0.15),
'&:hover': {
    backgroundColor: alpha(theme.palette.common.white, 0.25),
},
marginLeft: 0,
width: '100%',
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
    color: 'cornflowerblue',
    width: '100%',
    '& .MuiInputBase-input': {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    },
    border: 'solid',
    borderRadius: '5px'
}));


function SearchBar() {
    const [display, setDisplay] = React.useState('none');
    
    useEffect(() => {
        let box = document.getElementById('popup');
        let button = document.getElementById("button");
        button.addEventListener('click', (e) => {
            box.style.display = 'none'
        })
    }, [display])
    
    let showBox = () => {
        let box = document.getElementById('popup');
        box.style.display = 'block';
    }

    
    const hideBox = () => {
        setDisplay('none');
        console.log('lciked to hide')
    }

    // const box = (
    //     <div className='popup' display={'none'}>
    //         <button onClick={hideBox}>Close</button>
    //     </div>
    // )

    return (
        <div className='search' onClick={showBox}>
            <Search>
            <SearchIconWrapper>
                <SearchIcon />
            </SearchIconWrapper>
            <StyledInputBase
                placeholder="Search for a course e.g. COMP1511"
                inputProps={{ 'aria-label': 'search' }}
            />
            </Search>
        </div>
    )
}

export default SearchBar