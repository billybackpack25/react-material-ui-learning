import { 
  Typography,
  AppBar,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  CssBaseline,
  Grid,
  Toolbar,
  Container
} from '@material-ui/core';

// https://material-ui.com/components/icons/
// https://material-ui.com/components/material-icons/#material-icons
import {PhotoCamera} from '@material-ui/icons';


function App() {
  return (
    <>
      <CssBaseline /> {/* Default styling for Material UI */}
      <AppBar position='relative'>
        <Toolbar>
          <PhotoCamera/>
          <Typography variant='h6'>
            Photo Album
          </Typography>
        </Toolbar>
      </AppBar>
    </>
  );
}

export default App;
