import { TextField, MenuItem } from "@mui/material"

export const AncestryChoices = ({ancestry, ancFeat, setAncFeat}) => {
  return (
    <div>
      <TextField select label="Ancestry Feat" value={ancFeat} helperText="Please select your ancestry feat" onChange={e => setAncFeat(e.target.value)} sx={{ my: 2, width:"100%" }}>
        {ancestry.feats.level_1.map((option) => (
          <MenuItem key={option.name} value={option}>
            {option.name}
          </MenuItem>
        ))}
      </TextField>
    </div>
  )
}