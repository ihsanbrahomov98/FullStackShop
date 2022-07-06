import React from 'react';
import Stack from '@mui/material/Stack';
import Box from '@mui/material/Box';
import {
  AppbarHeader,
  AppbarHeaderSansSerif,
  AppbarHeaderSansSerif30,
  AppbarHeaderSansSerif30Procent,
  ShopAddButton,
  AppbarHeaderSansSerifSmaller,
} from './styles/TopNav';
import { Divider } from '@mui/material';

const TopNavbar = () => {
  return (
    <>
      <Stack
        direction="row"
        justifyContent="space-around"
        alignItems="center"
        spacing={2}
        sx={{ display: { xs: 'none', thousand: 'flex' } }}
      >
        <Stack
          direction="row"
          position="relative"
          justifyContent="center"
          alignItems="center"
        >
          <AppbarHeaderSansSerif> SUMMMER, WELCOME </AppbarHeaderSansSerif>
          <Divider orientation="vertical" flexItem />

          <AppbarHeaderSansSerif> ДОПЪЛНИТЕЛНИ</AppbarHeaderSansSerif>
          <Stack direction="column">
            <AppbarHeaderSansSerif30>ДО</AppbarHeaderSansSerif30>
          </Stack>
          <AppbarHeaderSansSerif30Procent>-30%</AppbarHeaderSansSerif30Procent>
        </Stack>

        <Stack
          direction="row"
          position="relative"
          justifyContent="center"
          alignItems="center"
          sx={{ alignSelf: 'flex-start' }}
        >
          <ShopAddButton position="absolute" sx={{ top: 5 }}>
            <AppbarHeaderSansSerifSmaller sx={{ fontZie: 4 }}>
              ПОВЕЧЕ
            </AppbarHeaderSansSerifSmaller>
          </ShopAddButton>
        </Stack>
        <Stack>
          <AppbarHeaderSansSerif>
            ДОБАВЯМЕ ОЩЕ ХИЛЯДИ ПРОДУКТИ!
          </AppbarHeaderSansSerif>
        </Stack>
      </Stack>
    </>
  );
};

export default TopNavbar;
