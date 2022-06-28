import React from 'react';
import Container from '@mui/material/Container';
import Stack from '@mui/material/Stack';
import {
  Button,
  CardActionArea,
  CardActions,
  Typography,
  Box,
} from '@mui/material';
import { Colors } from './styles/theme';
import { Link } from 'react-router-dom';
import FooterSlider from './FooterSlider';

const Footer = () => {
  return (
    <>
      <Container sx={{ height: 600, pt: 7 }}>
        <Stack
          sx={{ height: 280 }}
          direction="column"
          justifyContent="space-between"
          alignItems="space-between"
          spacing={3}
        >
          <Stack
            direction="row"
            justifyContent="space-between"
            alignItems="space-between"
          >
            <Stack
              direction="column"
              justifyContent="flex-start"
              alignItems="flex-start"
              sx={{ flex: 1 }}
              spacing={1}
            >
              <Link to="/products/man" style={{ textDecoration: 'none' }}>
                <Box>
                  <Typography
                    variant="body2"
                    color={Colors.dark}
                    sx={{ pb: 3 }}
                  >
                    КОНТАКТ
                  </Typography>
                </Box>
              </Link>
              <Link to="/products/man" style={{ textDecoration: 'none' }}>
                <Box>
                  <Typography
                    variant="body2"
                    color="text.secondary"
                    sx={{ fontSize: 12 }}
                  >
                    МОБИЛНО ПРИЛОЖЕНИЕ
                  </Typography>
                </Box>
              </Link>
              <Link to="/products/man" style={{ textDecoration: 'none' }}>
                <Box>
                  <Typography
                    variant="body2"
                    color="text.secondary"
                    sx={{ fontSize: 12 }}
                  >
                    NEWS AND EVENTS
                  </Typography>
                </Box>
              </Link>
            </Stack>
            <Stack
              direction="column"
              justifyContent="flex-start"
              alignItems="flex-start"
              sx={{ flex: 1 }}
              spacing={1}
            >
              <Link to="/products/man" style={{ textDecoration: 'none' }}>
                <Box>
                  <Typography
                    variant="body2"
                    color={Colors.dark}
                    sx={{ pb: 3 }}
                  >
                    КОНТЕ
                  </Typography>
                </Box>
              </Link>
              <Link to="/products/man" style={{ textDecoration: 'none' }}>
                <Box>
                  <Typography
                    variant="body2"
                    color="text.secondary"
                    sx={{ fontSize: 12 }}
                  >
                    КЛИЕНТСКА СМЕТКА
                  </Typography>
                </Box>
              </Link>
              <Link to="/products/man" style={{ textDecoration: 'none' }}>
                <Box>
                  <Typography
                    variant="body2"
                    color="text.secondary"
                    sx={{ fontSize: 12 }}
                  >
                    КОНТЕ CLUB
                  </Typography>
                </Box>
              </Link>
              <Link to="/products/man" style={{ textDecoration: 'none' }}>
                <Box>
                  <Typography
                    variant="body2"
                    color="text.secondary"
                    sx={{ fontSize: 12 }}
                  >
                    СПИСЪК С ЖЕЛАНИЯ
                  </Typography>
                </Box>
              </Link>
              <Link to="/products/man" style={{ textDecoration: 'none' }}>
                <Box>
                  <Typography
                    variant="body2"
                    color="text.secondary"
                    sx={{ fontSize: 12 }}
                  >
                    ВЛИЗАНЕ
                  </Typography>
                </Box>
              </Link>
              <Link to="/products/man" style={{ textDecoration: 'none' }}>
                <Box>
                  <Typography
                    variant="body2"
                    color="text.secondary"
                    sx={{ fontSize: 12 }}
                  >
                    ВРЪЩАНЕ НА ПРОДУКТИTE
                  </Typography>
                </Box>
              </Link>
            </Stack>
            <Stack
              direction="column"
              justifyContent="flex-start"
              alignItems="flex-start"
              sx={{ flex: 1 }}
              spacing={1}
            >
              <Link to="/products/man" style={{ textDecoration: 'none' }}>
                <Box>
                  <Typography
                    variant="body2"
                    color={Colors.dark}
                    sx={{ pb: 3 }}
                  >
                    ОБСЛУЖВАНЕ НА КЛИЕНТИ
                  </Typography>
                </Box>
              </Link>
              <Link to="/products/man" style={{ textDecoration: 'none' }}>
                <Box>
                  <Typography
                    variant="body2"
                    color="text.secondary"
                    sx={{ fontSize: 12 }}
                  >
                    ОБСЛУЖВАНЕ НА КЛИЕНТИ
                  </Typography>
                </Box>
              </Link>
              <Link to="/products/man" style={{ textDecoration: 'none' }}>
                <Box>
                  <Typography
                    variant="body2"
                    color="text.secondary"
                    sx={{ fontSize: 12 }}
                  >
                    ВРЪЩАНЕ
                  </Typography>
                </Box>
              </Link>
              <Link to="/products/man" style={{ textDecoration: 'none' }}>
                <Box>
                  <Typography
                    variant="body2"
                    color="text.secondary"
                    sx={{ fontSize: 12 }}
                  >
                    РЕКЛАМАЦИЯ
                  </Typography>
                </Box>
              </Link>
              <Link to="/products/man" style={{ textDecoration: 'none' }}>
                <Box>
                  <Typography
                    variant="body2"
                    color="text.secondary"
                    sx={{ fontSize: 12 }}
                  >
                    ПРАВИЛНИК
                  </Typography>
                </Box>
              </Link>
              <Link to="/products/man" style={{ textDecoration: 'none' }}>
                <Box>
                  <Typography
                    variant="body2"
                    color="text.secondary"
                    sx={{ fontSize: 12 }}
                  >
                    FAQ
                  </Typography>
                </Box>
              </Link>
              <Link to="/products/man" style={{ textDecoration: 'none' }}>
                <Box>
                  <Typography
                    variant="body2"
                    color="text.secondary"
                    sx={{ fontSize: 12 }}
                  >
                    ПРЕМИУМ КАЧЕСТВО
                  </Typography>
                </Box>
              </Link>
              <Link to="/products/man" style={{ textDecoration: 'none' }}>
                <Box>
                  <Typography
                    variant="body2"
                    color="text.secondary"
                    sx={{ fontSize: 12 }}
                  >
                    БЕЗОПАСНО ПАЗАРУВАНЕ
                  </Typography>
                </Box>
              </Link>
              <Link to="/products/man" style={{ textDecoration: 'none' }}>
                <Box>
                  <Typography
                    variant="body2"
                    color="text.secondary"
                    sx={{ fontSize: 12 }}
                  >
                    ПРАВИЛА ЗА ПОВЕРИТЕЛНОСТ
                  </Typography>
                </Box>
              </Link>
            </Stack>
            <Stack
              direction="column"
              justifyContent="flex-start"
              alignItems="center"
              sx={{ flex: 2 }}
            >
              <FooterSlider />
            </Stack>
          </Stack>
        </Stack>
        <Stack
          sx={{ height: 280 }}
          direction="column"
          justifyContent="space-between"
          alignItems="space-between"
          spacing={3}
        >
          <Stack
            direction="row"
            justifyContent="space-between"
            alignItems="space-between"
          >
            <Stack
              direction="column"
              justifyContent="flex-start"
              alignItems="flex-start"
              sx={{ flex: 1 }}
              spacing={1}
            >
              <Link to="/products/man" style={{ textDecoration: 'none' }}>
                <Box>
                  <Typography
                    variant="body2"
                    color={Colors.dark}
                    sx={{ pb: 3 }}
                  >
                    ПЛАЩАНЕ
                  </Typography>
                </Box>
              </Link>
              <Link to="/products/man" style={{ textDecoration: 'none' }}>
                <Box>
                  <Typography
                    variant="body2"
                    color="text.secondary"
                    sx={{ fontSize: 12 }}
                  >
                    ВРЕМЕ ЗА ДОСТАВКА
                  </Typography>
                </Box>
              </Link>
              <Link to="/products/man" style={{ textDecoration: 'none' }}>
                <Box>
                  <Typography
                    variant="body2"
                    color="text.secondary"
                    sx={{ fontSize: 12 }}
                  >
                    РАЗХОДИ ЗА ДОСТАВКА
                  </Typography>
                </Box>
              </Link>
              <Link to="/products/man" style={{ textDecoration: 'none' }}>
                <Box>
                  <Typography
                    variant="body2"
                    color="text.secondary"
                    sx={{ fontSize: 12 }}
                  >
                    НАЧИНИ НА ПЛАЩАНЕ
                  </Typography>
                </Box>
              </Link>
              <Link to="/products/man" style={{ textDecoration: 'none' }}>
                <Box>
                  <Typography
                    variant="body2"
                    color="text.secondary"
                    sx={{ fontSize: 12 }}
                  >
                    ПРОСЛЕДЯВАНЕ НА ПРАТКАТА
                  </Typography>
                </Box>
              </Link>
            </Stack>
          </Stack>
        </Stack>
      </Container>
    </>
  );
};

export default Footer;
