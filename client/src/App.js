import './App.css';
import { AppBar, Container, Grid, Grow, Typography } from '@material-ui/core';
import Journal from './assets/journal.svg';
import Posts from './components/Posts/Posts';
import Form from './components/Form/Form';

function App() {
  return (
    <Container maxWidth="lg">
      <AppBar position="static" color="inherit">
        <Typography variant="h2" align="center"></Typography>
        <img src={Journal} alt="Journal" height="60" />
      </AppBar>
      <Grow in>
        <Container>
          <Grid container justify="space-between" alignItems="stretch" spacing={3}>
            <Grid item xs={12} sm={7}>
              <Posts />
            </Grid>
            <Grid item xs={12} sm={4}>
              <Form />
            </Grid>
          </Grid>
        </Container>
      </Grow>
    </Container>
  );
}

export default App;
