import * as React from 'react';
import { styled } from '@mui/material/styles';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import Stack from '@mui/material/Stack';
import Box from '@mui/material/Box';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Collapse from '@mui/material/Collapse';
import Avatar from '@mui/material/Avatar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import { red } from '@mui/material/colors';
import FavoriteIcon from '@mui/icons-material/Favorite';
import ShareIcon from '@mui/icons-material/Share';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import MoreVertIcon from '@mui/icons-material/MoreVert';

const ExpandMore = styled((props) => {
  const { expand, ...other } = props;
  return <IconButton {...other} />;
})(({ theme, expand }) => ({
  transform: !expand ? 'rotate(0deg)' : 'rotate(180deg)',
  marginLeft: 'auto',
  transition: theme.transitions.create('transform', {
    duration: theme.transitions.duration.shortest,
  }),
}));

export default function DropDownMenu() {
  const [expanded, setExpanded] = React.useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  return (
    <Card sx={{ maxWidth: '100%' }}>
      <CardActions disableSpacing>
        <Typography>Описание на продукта</Typography>

        <ExpandMore
          expand={expanded}
          onClick={handleExpandClick}
          aria-expanded={expanded}
          aria-label="show more"
        >
          <ExpandMoreIcon />
        </ExpandMore>
      </CardActions>
      <Collapse in={expanded} timeout="auto" unmountOnExit>
        <CardContent>
          <Stack
            direction="row"
            justifyContent="space-between"
            alignItems="space-between"
            spacing={2}
          >
            <Stack spacing={2} sx={{ flex: 1, fontSize: 13 }}>
              <Box>Материал</Box>
              <Box>Цвят</Box>
              <Box>Колекция</Box>
              <Box>Код </Box>
              <Box>Кройка</Box>
              <Box>Марка</Box>
            </Stack>
            <Stack spacing={2} sx={{ flex: 1, fontSize: 13 }}>
              <Box>100% вискоза</Box>
              <Box>Черен</Box>
              <Box>Лято 2016</Box>
              <Box>ICE2WCU01 </Box>
              <Box>Relaxed </Box>
              <Box>Bumba</Box>
            </Stack>
          </Stack>
        </CardContent>
      </Collapse>
    </Card>
  );
}
