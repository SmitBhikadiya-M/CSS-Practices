import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { useNavigate } from 'react-router-dom'; 

export default function BasicCard({title, body, postId, cardMinWidth=275}) {

  const navigate = useNavigate();

  return (
    <Card sx={{ minWidth: cardMinWidth, margin: 5 }}>
      <CardContent>
        <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
          Title
        </Typography>
        <Typography variant="h5" component="div">
         {title}
        </Typography>
        <Typography variant="body2">
          {body}
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small" onClick={()=>navigate(`${postId}`)}>Read More</Button>
      </CardActions>
    </Card>
  );
}