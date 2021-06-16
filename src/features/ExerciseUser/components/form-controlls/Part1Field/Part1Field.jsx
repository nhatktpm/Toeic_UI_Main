import Radio from '@material-ui/core/Radio';
import PropTypes from 'prop-types';
import React from 'react';
import { Controller } from 'react-hook-form';
import classnames from 'classnames'



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

  const { form, name, cauhoi, color } = props;


  console.log(color);

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
                        <Box className='ques-stt' component='span'>{cauhoi.cauhoi}</Box>
                      </Box>

                      <Box className='ques-content'>
                        <Box className='question-img'>
                          <img src={`${cauhoi.img}`} alt='Tua de cau hoi' />
                        </Box>
                      </Box>
                      <Box>

                        <Grid container
                          direction="row"
                          justify="space-evenly"
                          alignItems="center">

                          <Grid className={classnames({ 'dung': color })} item xl={3} md={3}>
                            <Box className='part-1-choose'  >
                              <FormControlLabel value="a"
                                control={<Radio  />}
                                label="A" />
                            </Box>
                          </Grid>

                          <Grid className={classnames({ 'dung': color })}  item xl={3} md={3}>
                            <Box className='part-1-choose'>
                              <FormControlLabel value="b"
                                control={<Radio />}
                                label="B" />
                            </Box>
                          </Grid>

                          <Grid className={classnames({ 'dung': color })}  item xl={3} md={3}>
                            <Box className='part-1-choose'>
                              <FormControlLabel value="c" control={<Radio />} label="C" />
                            </Box>

                          </Grid>
                          <Grid className={classnames({ 'dung': color })}  item xl={3} md={3}>
                            <Box className='part-1-choose'>
                              <FormControlLabel value="d" control={<Radio />} label="D" />
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

export default Part1Field;