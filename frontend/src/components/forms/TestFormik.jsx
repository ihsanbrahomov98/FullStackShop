import * as React from 'react';
import { pink } from '@mui/material/colors';
import Checkbox from '@mui/material/Checkbox';
import { useState } from 'react';
import { Typography } from '@mui/material';
import { Formik, Form, Field, FieldArray } from 'formik';

const label = { inputProps: { 'aria-label': 'Checkbox demo' } };

export default function TestFormik() {
  const [sizeArray, setSizeArray] = useState([]);
  const [filteredArray, setFilteredArray] = useState([]);
  const [checked41Bool, setChecked41Bool] = React.useState(false);
  const [checked42Bool, setChecked42Bool] = React.useState(false);
  const [checked43Bool, setChecked43Bool] = React.useState(false);
  const [checked44Bool, setChecked44Bool] = React.useState(false);
  const [checked45Bool, setChecked45Bool] = React.useState(false);

  const sizeOperation = (shoeSize, checkedBool) => {
    if (!checkedBool) {
      setSizeArray((sizeArray) => [...sizeArray, shoeSize]);

      setFilteredArray(Array.from(new Set(sizeArray)));
      console.log(`added ${shoeSize}, array is:${filteredArray}`);
    } else {
      setFilteredArray(filteredArray.filter((item) => item !== shoeSize));
      console.log(`removed ${shoeSize}, array is:${filteredArray}`);
    }
  };

  return (
    <div>
      <Checkbox
        label="Child"
        checked={checked42Bool}
        onClick={() => {
          sizeOperation('42', checked42Bool);
          setChecked42Bool(!checked42Bool);
        }}
      />
      <Typography> 42 </Typography>
      <Checkbox
        label="Parent"
        checked={checked43Bool}
        onClick={() => {
          sizeOperation('43', checked43Bool);
          setChecked43Bool(!checked43Bool);
        }}
      />
      <Typography> 43 </Typography>
      {/* <Checkbox
        {...label}
        onClick={(e) => sizeOperation('44')}
        color="success"
      />
      <Checkbox {...label} defaultChecked color="default" />
      <Checkbox
        {...label}
        sx={{
          color: pink[800],
          '&.Mui-checked': {
            color: pink[600],
          },
        }}
      /> */}
    </div>
  );
}
