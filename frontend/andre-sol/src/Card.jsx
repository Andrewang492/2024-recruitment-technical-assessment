import { Box, Paper, Rating, Stack, Typography } from '@mui/material'
import React from 'react'

function Card({info}) {
    let {course_prefix, course_code, course_title, average_stars, total_reviews, offered_terms} = info;
    // console.log(info)
    const [value, setValue] = React.useState(parseFloat(average_stars));
    const ratingObj = (
        <Box>
            <Rating sx={{color: 'rgb(198, 173, 250)', fontSize: '2.5rem'}} name="read-only" value={value} precision={0.2}  readOnly />
            <Typography variant='body2'>{`${total_reviews} reviews`}</Typography>
        </Box>
    )

    return (
    <Paper elevation={6} className='elective-card' sx={{padding:'10px', borderRadius:'15px'}}>
        <Stack direction='row' justifyContent={'space-between'}>
            <Typography fontWeight={700} fontSize={'2rem'}>{`${course_prefix}${course_code}`}</Typography>
            {ratingObj}
        </Stack>
        <Box sx={{height:'100px'}}>
            <Typography variant='body1'>{course_title}</Typography>
        </Box>
        <Stack direction='row' spacing={2}>
            {
                offered_terms.map((term, index) => {
                return (
                <div className='term' key={index}>
                    <Typography variant='body2'>{term}</Typography>
                </div>
                )
            })}

        </Stack>
    </Paper>
    )
}

export default Card