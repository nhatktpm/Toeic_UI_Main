import Radio from '@material-ui/core/Radio';
import PropTypes from 'prop-types';
import React from 'react';
import { Controller } from 'react-hook-form';


import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';
import FormLabel from '@material-ui/core/FormLabel';
import { Box, Container, Grid, makeStyles } from '@material-ui/core';

import './index.css'

Part2Field.propTypes = {
  form: PropTypes.object.isRequired,
  name: PropTypes.string.isRequired,

  label: PropTypes.string,
  disable: PropTypes.bool,
};

function Part2Field(props) {

  const { form, name, label, cauhoi } = props;

  const useStyles = makeStyles((theme) => ({
    root: {
    },
    w100: {
      width: '100%'
    },

  }));
  const classes = useStyles()

  return (
    <Box>
      <Container>
        <Box>

          <FormControl component="fieldset" className={classes.w100} >
            {/* <FormLabel component="legend">{cauhoi.namecauhoi}</FormLabel> */}
            <Controller
              name={name}
              control={form.control}
              render={(
                { field: { onChange, onBlur, value, name }, fieldState: { invalid, error } }
              ) => (
                <RadioGroup
                  name={name}
                  value={value}
                  onChange={onChange}
                >
                  <Box>
                    <Container>
                      <Box mt="30px">
                        <Box className='ques-stt' component='span'> Cau 1</Box>
                      </Box>                   
                      <Box>
                        <Grid container
                          direction="row"
                          justify="space-evenly"
                          alignItems="center">

                          <Grid item xl={3} md={3}>
                            <Box className='part-2-choose'>
                              <FormControlLabel value="a" control={<Radio />} label="cau a" />
                            </Box>
                          </Grid>

                          <Grid item xl={3} md={3}>
                            <Box className='part-2-choose'>
                              <FormControlLabel value="b" control={<Radio />} label="cau b" />
                            </Box>
                          </Grid>

                          <Grid item xl={3} md={3}>
                            <Box className='part-2-choose'>
                              <FormControlLabel value="c" control={<Radio />} label="cau c" />
                            </Box>

                          </Grid>
                          <Grid item xl={3} md={3}>
                            <Box className='part-2-choose'>
                              <FormControlLabel value="d" disabled control={<Radio />} label="(Disabled )" />
                            </Box>
                          </Grid>
                        </Grid>
                      </Box>

                    </Container>
                  </Box>
                </RadioGroup>
              )}
            >
            </Controller>
          </FormControl>
        </Box>
      </Container>
    </Box>
  );
}

export default Part2Field;