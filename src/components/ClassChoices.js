import { TextField, MenuItem } from "@mui/material"

export const ClassChoices = ({pcClass, classFeat, setClassFeat}) => {

  return (
    <TextField select label="Ancestry Feat" value={classFeat} helperText="Please select your ancestry feat" onChange={e => setClassFeat(e.target.value)} sx={{ my: 2}}>
      {pcClass.feats.level_1.map((option) => (
        <MenuItem key={option.name} value={option}>
          {option.name}
        </MenuItem>
      ))}
    </TextField>
  )
}