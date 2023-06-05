import { Container, Typography, Grid, Box } from "@mui/material"

export const Display = ({character}) => {
  const abilities = character.abilities.map(ability => (
    <div key={ability.name}>
      <Typography variant="h4">{ability.name}</Typography>
      <Typography>{ability.description}</Typography>
    </div>
  ))

  const feats = character.feats.map(feat => (
    <div key={feat.name}>
      <Typography variant="h4">{feat.name}</Typography>
      <Typography variant="h6">{feat.source} Feat</Typography>
      <Typography>{feat.description}</Typography>
    </div>
  ))

  const abScores = character.ability_scores.map(abScore => (
    <Box sx={{ width: "8vh", height: "8vh", bgcolor: "lightgray"}}alignItems="center" justifyContent="center">+{abScore}</Box>
  ))

  return (
    <Grid component="div" container direction="column" alignItems="center" justifyContent="center">
      <Typography variant="h2">{character.name}</Typography>
      <Grid component="div" container direction="row" alignItems="center" justifyContent="center">
        <Typography sx={{ mx: 2 }}>{character.class.name}</Typography>
        <Typography sx={{ mx: 2 }}>{character.ancestry.name}</Typography>
        <Typography sx={{ mx: 2 }}>{character.background.name}</Typography>
      </Grid>
      <Typography>HP: {character.hit_points}</Typography>
      <Typography>Ability Scores</Typography>
      <Grid container direction="row" justifyContent="space-evenly" sx={{ my: 2 }}>
        {abScores}

      </Grid>
      <Grid container direction="row" justifyContent="center">
        <Box sx={{ mx: 2, width: '45%', 'textAlign': "center", bgcolor: 'lightgrey'}}>
          <Typography variant="h3">Abilities</Typography>
          {abilities}
        </Box>
        <Box sx={{ mx: 2, width: '45%', 'textAlign': "center", bgcolor: 'lightgrey'}}>
          <Typography variant="h3">Feats</Typography>
          {feats}
        </Box>
      </Grid>
    </Grid>
  )
}