import { Box, Button, Grid } from "@mui/material";
import FileUploader from "./FileUploader"
import Paper from '@mui/material/Paper';
import React, { useEffect, useState } from 'react';
import { styled } from '@mui/material/styles';
import DATA from './bed-list';


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
        console.log('Fetching Bed list');
        setData(DATA);
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
     
        {DATA.map(function(dep) {
            return (
                <>
                {dep.wards.map(function(ward){
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
                                        ward.beds.map(function(b){
                                            return (
                                                <Button>{b.bed}

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