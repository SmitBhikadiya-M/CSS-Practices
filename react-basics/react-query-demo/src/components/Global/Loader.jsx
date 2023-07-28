import * as React from 'react';
import CircularProgress from '@mui/material/CircularProgress';
import Box from '@mui/material/Box';
import { LinearProgress } from '@mui/material';
import Backdrop from '@mui/material/Backdrop';

export default function Loader({ varient = 'circular', loading=true }) {

    return (
        <Backdrop
            sx={{ color: '#fff', zIndex: (theme) => theme.zIndex.drawer + 1 }}
            open={loading}
        >
            <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', marginTop: '100px' }}>
                {
                    varient === 'circular' ? <CircularProgress /> : <LinearProgress />
                }
            </Box>
        </Backdrop>
    );
}