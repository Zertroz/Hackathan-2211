import { Container, Typography } from '@mui/material';
import { useState } from 'react';
import { Form } from './pages/Form';
import { Route } from 'react-router-dom';
import { Display } from './pages/Display';

function App() {
  const [character, setCharacter] = useState({});

  return (
    <Container>
      <Typography 
        variant='h1' 
        sx={{ my: 4, textAlign: "center"}} 
      >
        Pathfinder Character Creator
      </Typography>
      <Route exact path='/' render={() =>
        <Form
          setCharacter={setCharacter}
        >
        </Form>
      } />
      <Route exact path='/character/:id' render={() => 
        <Display character={character}></Display>
      } />
    </Container>
  )
}

export default App;
