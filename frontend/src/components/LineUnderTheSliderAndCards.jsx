import React from 'react';
import Stack from '@mui/material/Stack';
import { Colors } from './styles/theme';
import { Link } from 'react-router-dom';

import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import Divider from '@mui/material/Divider';
import Box from '@mui/material/Box';
import EmailOutlinedIcon from '@mui/icons-material/EmailOutlined';
import HealthAndSafetyOutlinedIcon from '@mui/icons-material/HealthAndSafetyOutlined';
import LocalShippingOutlinedIcon from '@mui/icons-material/LocalShippingOutlined';
import GroupsOutlinedIcon from '@mui/icons-material/GroupsOutlined';
import HighQualityOutlinedIcon from '@mui/icons-material/HighQualityOutlined';

const LineUnderTheSliderAndCards = () => {
  return (
    <Container spacing={2} sx={{ pt: 7, pb: 7 }}>
      <Divider />
      <Stack sx={{ height: 35 }}></Stack>
      <Stack
        direction="row"
        justifyContent="space-between"
        alignItems="center"
        spacing={2}
      >
        {/* first stack */}
        <Stack direction="row" spacing={3}>
          <Stack alignItems="center" justifyContent="center">
            <Stack>
              <Link to="/products/man" style={{ textDecoration: 'none' }}>
                <EmailOutlinedIcon color="secondary" />
              </Link>
            </Stack>
          </Stack>

          <Stack direction="column">
            <Link to="/products/man" style={{ textDecoration: 'none' }}>
              <Box>
                <Typography variant="body2" color={Colors.dark}>
                  КОНТАКТ
                </Typography>
              </Box>
              <Box>
                <Typography variant="body2" color="text.secondary">
                  IHSAN@BG
                </Typography>
              </Box>
            </Link>
          </Stack>
        </Stack>

        {/* second */}
        <Stack direction="row" spacing={3}>
          <Stack alignItems="center" justifyContent="center">
            <Stack>
              <Link to="/products/man" style={{ textDecoration: 'none' }}>
                <HealthAndSafetyOutlinedIcon color="secondary" />
              </Link>
            </Stack>
          </Stack>

          <Stack direction="column">
            <Link to="/products/man" style={{ textDecoration: 'none' }}>
              <Box>
                <Typography variant="body2" color={Colors.dark}>
                  БЕЗОПАСНО
                </Typography>
              </Box>
              <Box>
                <Typography variant="body2" color="text.secondary">
                  ПЪТУВАНЕ
                </Typography>
              </Box>
            </Link>
          </Stack>
        </Stack>
        <Stack direction="row" spacing={3}>
          <Stack alignItems="center" justifyContent="center">
            <Stack>
              <Link to="/products/man" style={{ textDecoration: 'none' }}>
                <LocalShippingOutlinedIcon color="secondary" />
              </Link>
            </Stack>
          </Stack>

          <Stack direction="column">
            <Link to="/products/man" style={{ textDecoration: 'none' }}>
              <Box>
                <Typography variant="body2" color={Colors.dark}>
                  БЕЗПЛАТНИ
                </Typography>
              </Box>
              <Box>
                <Typography variant="body2" color="text.secondary">
                  ДОСТАВКИ
                </Typography>
              </Box>
            </Link>
          </Stack>
        </Stack>

        <Stack direction="row" spacing={3}>
          <Stack alignItems="center" justifyContent="center">
            <Stack>
              <Link to="/products/man" style={{ textDecoration: 'none' }}>
                <GroupsOutlinedIcon color="secondary" />
              </Link>
            </Stack>
          </Stack>

          <Stack direction="column">
            <Link to="/products/man" style={{ textDecoration: 'none' }}>
              <Box>
                <Typography variant="body2" color={Colors.dark}>
                  ПРОГРАМА ЗА
                </Typography>
              </Box>
              <Box>
                <Typography variant="body2" color="text.secondary">
                  ЛОЯЛНОСТ
                </Typography>
              </Box>
            </Link>
          </Stack>
        </Stack>
        <Stack direction="row" spacing={3}>
          <Stack alignItems="center" justifyContent="center">
            <Stack>
              <Link to="/products/man" style={{ textDecoration: 'none' }}>
                <HighQualityOutlinedIcon color="secondary" />
              </Link>
            </Stack>
          </Stack>

          <Stack direction="column">
            <Link to="/products/man" style={{ textDecoration: 'none' }}>
              <Box>
                <Typography variant="body2" color={Colors.dark}>
                  ПРЕМИУМ
                </Typography>
              </Box>
              <Box>
                <Typography variant="body2" color="text.secondary">
                  КАЧЕСТВО
                </Typography>
              </Box>
            </Link>
          </Stack>
        </Stack>
      </Stack>
    </Container>
  );
};

export default LineUnderTheSliderAndCards;
