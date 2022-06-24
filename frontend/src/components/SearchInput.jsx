import * as React from 'react';
import TextField from '@mui/material/TextField';
import Stack from '@mui/material/Stack';
import Autocomplete from '@mui/material/Autocomplete';
import { Link } from 'react-router-dom';
import { useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

export default function SearchInput() {
  const [products, setProducts] = useState([]);
  const [selected, setSelected] = useState();
  const navigate = useNavigate();
  console.log(selected);

  useEffect(() => {
    const fetchproducts = async () => {
      const { data } = await axios.get('/back/mock/api/findall');

      setProducts(data);
    };
    fetchproducts();
  }, []);
  // MORE WORK IS NEEDED HERE IN TO DO LIST
  if (selected) {
    navigate('/', { replace: true });
  }
  return (
    <Stack
      spacing={2}
      onClick={(e) => setSelected(e.target.value)}
      sx={{ width: 200, height: 10, pb: 7 }}
    >
      <Autocomplete
        size="small"
        id="free-solo-demo"
        freeSolo
        options={products.map((option) => option.userId)}
        renderInput={(params) => (
          <TextField {...params} label="Търсене на продукт" />
        )}
      />
    </Stack>
  );
}
