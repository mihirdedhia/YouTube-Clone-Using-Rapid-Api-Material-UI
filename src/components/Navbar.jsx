import { Stack, Typography } from '@mui/material'
import { Link } from 'react-router-dom';

import { logo } from '../utils/constants'
import SearchBar from './SearchBar';

const Navbar = () => (
  <Stack
    direction="row"
    alignItems="center"
    sx={{ position: "sticky", background: "#000", top: 0, justifyContent: "space-between", p: { xs: 1, sm: 2 } }}
  >
    <Link to="/" style={{ display: "flex", alignItems: "center" }}>
      <img src={logo} alt="logo" height={45} />
      <Typography
        className='logo-name'
        variant='h6'
        fontWeight="bold"
        sx={{
          color: "white",
          ml: { sm: 1 }
        }}
      >
        Vidverse
      </Typography>
    </Link>
    <SearchBar />
  </Stack>
)

export default Navbar