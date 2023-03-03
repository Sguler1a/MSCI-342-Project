import React, {useEffect, useState} from 'react'
import {useParams} from 'react-router-dom'
import { Stack } from '@mui/system'
import { Card, CardContent, Typography, Collapse, IconButton, Button, TextField, FormControl, InputLabel, MenuItem,Select,Box} from '@mui/material'
import { SelectChangeEvent } from '@mui/material/Select';

const courseInfo = {
  courseCode: 250,
  programCode: "ME",
  title: "Thermodynamics 1",
  importantDates: [],
  description: "The engineering science of energy. The scope and limitations of thermodynamics.",
  professor: "Roydon Fraser"
}

export default function CourseNotes() {
  const [courseName,setCourseName] = useState(courseInfo.programCode + " " + courseInfo.courseCode);
  const [userNotes, setUserNotes] = useState("");
  const [course, setUserCourse] = useState(courseInfo.title);
  const [courseNotes, setCourseNotes] = useState("");
 

const handleChange = (event) => {
  setCourseName(event.target.value);
  console.log(courseNotes)
};
  return (
    
    <div>
      <Box
  m={1} //margin
  display="inline"
  justifyContent="flex-start"
  alignItems="flex-start"
>

    <h1>
        Course Notes and Information 
    </h1>
    <h2>
      {courseName}
    </h2>
    <h2>
      {courseInfo.title}
    </h2>
    <h2>
      {courseInfo.professor}
    </h2>
    <h2>
      {courseInfo.description}
    </h2>
    <FormControl fullWidth>
  <InputLabel id="Select Class">Class</InputLabel>
  <Select
    labelId="class-select-label"
    id="class-select"
    value={courseName}
    label="Class"
    onChange= {handleChange}
  >
    <MenuItem value={"ME 100"}>Thermodynamics</MenuItem>
    <MenuItem value={"Math 100"}>Calculus 2</MenuItem>
    <MenuItem value={"PHYS 100"}>Physics for Engineers</MenuItem>
  </Select>
</FormControl>
<TextField
          id="outlined-multiline-static"
          label= "Dynamic"
          multiline
          rows={4}
          defaultValue="type your notes here"
          variant="outlined"
          fullWidth
          onChange={(newValue) => {setUserNotes(newValue.target.value); console.log(userNotes);}}
    />
  </Box>

  </div> 
  )
}
