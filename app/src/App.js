import * as React from 'react';
import langs from './Resources/language'
import { useState} from "react";
import {
    Typography,
    Card,
    Grid,
    CardContent,
    TextField,
    Button,
    MenuItem,
} from '@mui/material';

import axios from 'axios';
import '@fontsource/roboto/300.css';


function App() {

  const [from, setFrom] = useState('en');
  const [to, setTo] = useState('hi');
  const [input, setInput] = useState('');
  const [output, setOutput] = useState('');
  const _option = Object.keys(langs);

  console.log("translated from: ", from);
  console.log("translated to: ", to);
  console.log("input is: ", input);
  console.log("output is: ", output);


  async function _translate() {
      await axios.post("http://localhost:8080/setInput", {
          _input: input,
          _from: from,
          _to: to
      }).then((res) => setOutput(res.data)).catch(error => console.log(error));


  }



  return (
      <>
          <Typography 
          gutterBottom 
          variant="h3" 
          align='center' 
          style={{margin:20}}
          > Web Translator</Typography>

          <Card style={{ maxWidth: "50rem",maxHeight:"80rem" , margin: "0 auto", padding: "20px 5px" }}>
              <CardContent>
                  <Grid container spacing={6}>

                      {/* // From */}

                      <Grid xs={12} sm={6} item>
                          <TextField
                              id="from"
                              label='FROM'
                              select
                              value={from}
                              onChange={(e) => setFrom(e.target.value)}
                              defaultValue="en"
                              fullWidth
                              helperText="Please select from language"
                          // variant="filled"
                          >
                              <MenuItem value='IN'>India</MenuItem>
                              <MenuItem value='US'>USA</MenuItem>
                              <MenuItem value='AU'>Australia</MenuItem>
                              {
                                  _option.map((value, index) => {
                                      return (
                                          <MenuItem key={index} value={value}>
                                              {langs[value]}
                                          </MenuItem>
                                      );
                                  })
                              }
                          </TextField>
                      </Grid>
                      {/* // To */}

                      <Grid xs={12} sm={6} item>
                          <TextField
                              label='TO'
                              select
                              value={to}
                              onChange={(e) => setTo(e.target.value)}
                              defaultValue="hi"
                              fullWidth
                              helperText="Please select to laguage"
                          // variant="filled"
                          >
                              <MenuItem value='IN'>India</MenuItem>
                              <MenuItem value='US'>USA</MenuItem>
                              <MenuItem value='AU'>Australia</MenuItem>
                              {
                                  _option.map((value, index) => {
                                      return (
                                          <MenuItem key={index} value={value}>
                                              {langs[value]}
                                          </MenuItem>
                                      );
                                  })
                              }
                          </TextField>
                      </Grid>
                      {/* // Input */}

                      <Grid xs={12} sm={6} item>
                          <TextField
                              // id="outlined-multiline-static"
                              label="From"
                              multiline
                              rows={6}
                              placeholder="Insert Text"
                              fullWidth
                              varient="outlined"
                              required
                              onInput={(e) => setInput(e.target.value)}
                          />

                      </Grid>
                      {/* // Output */}

                      <Grid xs={12} sm={6} item>
                          <TextField
                              // id="outlined-multiline-static"
                              label="To"
                              multiline
                              rows={6}
                              placeholder="Insert Text"
                              fullWidth
                              varient="outlined"
                              value={output}
                              InputProps={{
                                  readOnly: true,
                              }}
                          />

                      </Grid>
                      {/* // Translate Button */}

                      <Grid xs={12} item>
                          <Button
                              variant="contained"
                              color='primary'
                              size="large"
                              onClick={_translate}
                              fullWidth
                          >
                              Translate
                          </Button>

                      </Grid>
                  </Grid>
              </CardContent>
          </Card>
      </>
  );
}

export default App;


