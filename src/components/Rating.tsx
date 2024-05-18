import { Box, Button, Grid } from "@mui/material";
import FileUploader from "./FileUploader"
import Paper from '@mui/material/Paper';
import React, { useEffect, useState } from 'react';
import { styled } from '@mui/material/styles';


const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  }));

const Rating = () => {
    const [data, setData] = useState([]);
    useEffect(() => {
        fetch('/bed-list.json')
          .then(response => response.json())
          .then(json => setData(json.departments))
          .catch(error => console.error('Error fetching JSON:', error));
     }, []);
    return (
        <Box
            sx={{
                display: 'flex',
                flexWrap: 'wrap',
            
            }}
            > 
        <Paper sx={{ minWidth: '100%', padding: '10px' }} elevation={3}>
            <Grid container>
                <Grid xs={12}>
                    <Box sx={{minWidth: '100%', textAlign: 'left',fontWeight: 'bolder'  }}>
                        Occupancy List
                    </Box>
                </Grid>
                <Grid xs={6}>
                    <FileUploader/>
                </Grid>
                <Grid xs={6}>
                    <Button>Submit</Button>
                </Grid>

            </Grid>
        </Paper>
     
        {data.map(function(dep : any) {
            return (
                <>
                {dep.wards.map(function(ward : any){
                    return (
                        <Paper sx={{ minWidth: '100%', padding: '10px' }} elevation={3}>
                            <Grid container>
                                <Grid xs={12}>
                                    <Box sx={{minWidth: '100%', textAlign: 'left',fontWeight: 'bolder'  }}>
                                        {dep.department} - {ward.ward}
                                    </Box>
                                </Grid>
                                <Grid xs={12}>
                                    {
                                        ward.beds.map(function(bed : any){
                                            return (
                                                <Button>{bed.bed}

                                                </Button>
                                            )
                                        })   
                                    }
                                </Grid>
                            </Grid>
                        </Paper>
                    )
                })}
                </>
            )
        })}

        </Box>      
        
    )
}

export default Rating;