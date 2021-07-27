import { 
  Typography,
  AppBar,
  Button,
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
import useStyles from './styles';


const cards = [1,2,3,4,5,6,7,8,9];

function App() {
  const classes = useStyles();
  return (
    <>
      <CssBaseline /> {/* Default styling for Material UI */}
      {/* Nav Bar  */}
      <AppBar position='relative'>
        <Toolbar>
          <PhotoCamera className={classes.icon}/>
          <Typography variant='h6'>
            Photo Album
          </Typography>
        </Toolbar>
      </AppBar>

      {/* Main */}
      <main>
        <div className={classes.container}>
          <Container maxWidth='sm'>
            <Typography variant='h2' align='center' color='textPrimary' gutterBottom>
              Photo Album
            </Typography>
            <Typography variant='h5' align='center' color='textSecondary' paragraph>
              Hello everyone, this is a photo album and I'm trying to make this sentence as long as possible so we can see how it looks on the screen.
            </Typography>
            <div className={classes.buttons}>
              <Grid container spacing={2} justifyContent="center">
                <Grid item>
                  <Button variant='contained' color='primary'>
                    See my photos
                  </Button>
                </Grid>
                <Grid item>
                  <Button variant='outlined' color='primary'>
                    Secondary Action
                  </Button>
                </Grid>
              </Grid>
            </div>
          </Container>
        </div>

        {/* Cards */}
        <Container className={classes.cardGrid} maxWidth='md'>
          <Grid container spacing={2} justifyContent="center">
          {cards.map((key) => (
            <Grid item key={key} xs={12} sm={6} md={4}>
              <Card className={classes.card}>
                <CardMedia 
                  className={classes.cardMedia}
                  image='https://source.unsplash.com/random'
                  title="image title"
                />
                <CardContent className={classes.cardContent}>
                  <Typography variant='h5' gutterBottom>
                    Heading
                  </Typography>
                  <Typography>
                  Hello everyone, this is a photo album and I'm trying to make this sentence as long as possible so we can see how it looks on the screen.
                  </Typography>
                </CardContent>
                <CardActions>
                  <Button size='small' color='primary'>View</Button>
                  <Button size='small' color='primary'>Edit</Button>
                </CardActions>
              </Card>
            </Grid>
          ))}            
          </Grid>
        </Container>    
      </main>
      <footer className={classes.footer}>
        <Typography variant='h6' align='center' gutterBottom>Footer</Typography>
        <Typography variant='subtitle1' align='center' color='textSecondary'>Something here to give the footer a purpose</Typography>
      </footer>
    </>
  );
}

export default App;
