import { Box, MenuItem, TextField, Grid, Button } from '@mui/material'
import { useState } from 'react';
import { AncestryChoices } from '../../components/ancestryChoices';
import { ClassChoices } from '../../components/ClassChoices';
import { useHistory } from 'react-router-dom';

const classes = require('../../data/classes.json');
const ancestries = require('../../data/ancestries.json');
const backgrounds = require('../../data/backgrounds.json');

export const Form = ({setCharacter}) => {
  const history = useHistory();
  const [name, setName] = useState('')
  const [ancestry, setAncestry] = useState('');
  const [pcClass, setPCClass] = useState('');
  const [background, setBackground] = useState('');
  const [abilityScores, setAbilityScores] = useState([0, 0, 0, 0, 0, 0]);
  const [ancFeat, setAncFeat] = useState({});
  const [classFeat, setClassFeat] = useState({});

  const handleSubmit = () => {
    const newCharacter = {
      "id": Date.now(),
      "name": name,
      "class": pcClass,
      "ancestry": ancestry,
      "background": background,
      "ability_scores": abilityScores,
      "hit_points": pcClass.hit_points + ancestry.hit_points + abilityScores[2],
      "feats": [ancFeat, classFeat],
      "abilities": pcClass.features.level_1
    }
    setCharacter(newCharacter)
    history.push(`/character/${newCharacter.id}`)
  }

  return (
    <Box component="form" noValidate autoComplete='off' container direction="column" alignItems="center" justifyContent="center">
      <Grid container direction="column" alignItems="center" justifyContent="center">
        <TextField
        label="Name" 
        value={name}
        helperText="Name your character" 
        onChange={e => setName(e.target.value)} 
        sx={{ my: 2, width: "45%" }}
        ></TextField>
        <TextField 
        select 
        label="Ancestry" 
        value={ancestry.name}
        helperText="Please select your ancestry" 
        onChange={e => setAncestry(e.target.value)} 
        sx={{ my: 2, width: "45%" }}
        >
          {ancestries.map((option) => (
            <MenuItem key={option.name} value={option}>
              {option.name}
            </MenuItem>
          ))}
        </TextField>
        {ancestry ? <AncestryChoices ancestry={ancestry} ancFeat={ancFeat} setAncFeat={setAncFeat} /> : null}
        <TextField select label="Class" value={pcClass} helperText="Please select your class" onChange={e => setPCClass(e.target.value)} sx={{ my: 2, width: "45%" }}>
          {classes.map((option) => (
            <MenuItem key={option.name} value={option}>
              {option.name}
            </MenuItem>
          ))}
        </TextField>
        {pcClass ? <ClassChoices pcClass={pcClass} classFeat={classFeat} setClassFeat={setClassFeat} /> : null}
        <TextField select label="Background" value={background} helperText="Please select your background" onChange={e => setBackground(e.target.value)} sx={{ my: 2, width: "45%" }}>
          {backgrounds.map((option) => (
            <MenuItem key={option.name} value={option}>
              {option.name}
            </MenuItem>
          ))}
        </TextField>
        <Button variant='outlined' sx={{ my: 2 }} onClick={handleSubmit}>Create Character</Button>
      </Grid>
    </Box>
  );
}