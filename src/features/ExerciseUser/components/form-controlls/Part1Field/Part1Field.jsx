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

Part1Field.propTypes = {
  form: PropTypes.object.isRequired,
  name: PropTypes.string.isRequired,

  label: PropTypes.string,
  disable: PropTypes.bool,
};

function Part1Field(props) {

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
          <Box className='content-ques'>
            <Box>cau 1 </Box>
            <Box className='question-img'>
              <img src='https://themes.envytheme.com/ecademy/wp-content/uploads/2020/05/course-img15.jpg' alt='Tua de cau hoi' />
            </Box>
          </Box>


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
                      <Grid container
                        direction="row"
                        justify="space-evenly"
                        alignItems="center">
                        <Grid item xl={3} md={3}>
                          <FormControlLabel value="a" control={<Radio />} label="cau a" />
                        </Grid>
                        <Grid item xl={3} md={3}>
                          <FormControlLabel value="b" control={<Radio />} label="cau b" />
                        </Grid>
                        <Grid item xl={3} md={3}>
                          <FormControlLabel value="c" control={<Radio />} label="cau c" />
                        </Grid>
                        <Grid item xl={3} md={3}>
                          <FormControlLabel value="d" disabled control={<Radio />} label="(Disabled )" />
                        </Grid>
                      </Grid>
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

export default Part1Field;