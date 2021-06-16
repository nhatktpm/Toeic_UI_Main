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

Part5Field.propTypes = {
    form: PropTypes.object.isRequired,
    name: PropTypes.string.isRequired,

    label: PropTypes.string,
    disable: PropTypes.bool,
};

function Part5Field(props) {

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
                                                <Box className='ques-stt-cau5' component='span'>

                                               { `${cauhoi.stt}.  ${cauhoi.noidung}`}
                                                
                                                </Box>
                                            </Box>
                                            <Box>
                                                <Grid container
                                                    direction="row"
                                                    justify="space-evenly"
                                                    alignItems="center">

                                                    

                                                    <Grid item xl={3} md={3}>
                                                        <Box className='part-2-choose'>
                                                            <FormControlLabel value="a" control={<Radio />} label={`A. ${cauhoi.caua}`} />
                                                        </Box>
                                                    </Grid>

                                                    <Grid item xl={3} md={3}>
                                                        <Box className='part-2-choose'>
                                                            <FormControlLabel value="b" control={<Radio />} label={`A. ${cauhoi.caub}`} />
                                                        </Box>
                                                    </Grid>

                                                    <Grid item xl={3} md={3}>
                                                        <Box className='part-2-choose'>
                                                            <FormControlLabel value="c" control={<Radio />} label={`A. ${cauhoi.cauc}`} />
                                                        </Box>

                                                    </Grid>
                                                    <Grid item xl={3} md={3}>
                                                        <Box className='part-2-choose'>
                                                            <FormControlLabel value="d" control={<Radio />} label={`A. ${cauhoi.caud}`} />
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

export default Part5Field;