import * as React from 'react';
import Typography from '@mui/material/Typography';
import SortSelector from './SortSelector';
import SearchBar from './SearchBar';
import { Box } from '@mui/material';
import Card from './Card';


function Dashboard({sidebarWidth}) {

  return (
    <Box className='main' sx={{width: `calc(90% - ${sidebarWidth}px)`, paddingLeft: '100px', paddingTop: '20px'}}>
        <Typography variant='h6'>DevSoc presents...</Typography>
        <Typography variant='h1' fontWeight={'700'} color={'dodgerblue'}>unilectives</Typography>
        <Typography variant='h6' fontWeight={'700'}>Your one-stop shop for UNSW course and elective reviews</Typography>
        <SearchBar/>
        <SortSelector/>
        <Box sx={{display:'flex', flexWrap:'wrap', gap:'50px', marginTop:'50px'}}>
            {courseInfos.map((info, index) => {
                return (
                    <Card key={index} info={info}></Card>
                )
            })}
        </Box>
    </Box>
  )
}

export default Dashboard

const courseInfos = [
    {
      "course_prefix": "COMP",
      "course_code": 1511,
      "course_title": "Programming Fundamentals",
      "average_stars": 4.8,
      "total_reviews": 68,
      "offered_terms": ["Term 1", "Term 2", "Term 3"]
    },
    {
      "course_prefix": "COMP",
      "course_code": 1531,
      "course_title": "Software Engineering Fundamentals",
      "average_stars": 3.9,
      "total_reviews": 47,
      "offered_terms": ["Term 1", "Term 2", "Term 3"]
    },
    {
      "course_prefix": "COMP",
      "course_code": 1521,
      "course_title": "Computer Systems Fundamentals",
      "average_stars": 4,
      "total_reviews": 40,
      "offered_terms": ["Term 1", "Term 2", "Term 3"]
    },
    {
      "course_prefix": "COMP",
      "course_code": 2521,
      "course_title": "Data Structures and Algorithms",
      "average_stars": 4,
      "total_reviews": 36,
      "offered_terms": ["Summer", "Term 1", "Term 2", "Term 3"]
    },
    {
      "course_prefix": "COMP",
      "course_code": 2511,
      "course_title": "Object-Oriented Design & Programming",
      "average_stars": 3,
      "total_reviews": 33,
      "offered_terms": ["Term 1", "Term 2", "Term 3"]
    },
    {
      "course_prefix": "COMP",
      "course_code": 3311,
      "course_title": "Database Systems",
      "average_stars": 4,
      "total_reviews": 33,
      "offered_terms": ["Term 1", "Term 3"]
    },
    {
        "course_prefix": "ANWA",
        "course_code": 1111,
        "course_title": "MY COURSEsdf a",
        "average_stars": 4.6,
        "total_reviews": 11,
        "offered_terms": ["Term 1", "Term 3"]
      }
  
]

