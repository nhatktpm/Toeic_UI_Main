import { yupResolver } from '@hookform/resolvers/yup';
import { Box, Button, Container, makeStyles } from '@material-ui/core';
import React from 'react';
import { useForm } from 'react-hook-form';
import * as yup from 'yup';
import Part2Field from '../../form-controlls/Part2Field';


function ExerPart2Form(props) {

    const useStyles = makeStyles((theme) => ({
        root: {
        },
        bgForm: {
            backgroundColor: '#f0f4fa',
            borderRadius: '15px',

        },
        btnSubmit: {
            display: 'flex',
            justifyContent: 'center'
        }

    }));
    const classes = useStyles()


    const schema = yup.object().shape({});
    const form = useForm({
        defaultValues: {
            '11': 'g',
            '12': 'g',
            '13': ''
        },
        resolver: yupResolver(schema),
    });

    const handleSubmit = async (values) => {
        const { onSubmit } = props;
        if (onSubmit) {
            await onSubmit(values);
        }
    };

    let dsCauhoi = [
        {
            id: '11',
            namecauhoi: 'cau hoi so 1',
            a: 'a',
            dapan: 'c'
        }

    ]
    
    return (
        <div>

            <Box className={classes.bgForm}>

                <Box pb={2}>
                    <form onSubmit={form.handleSubmit(handleSubmit)}>
                        {
                            dsCauhoi.map((cauhoi) => {
                                return <Part2Field key={cauhoi.id} name={cauhoi.id} cauhoi={cauhoi} form={form} />
                            })
                        }

                        <Box my={4}> phan trang</Box>

                        <Box my={2}>Sau khi hoàn thiện bài làm hãy bấm vào nút nộp bài bên dưới</Box>
                        <Box my={2} className={classes.btnSubmit}>
                            <Button
                                type="submit"
                                variant="contained"
                                color="primary"

                                size="large"
                            >
                                Nộp Bài
                            </Button>
                        </Box>


                    </form>
                </Box>
            </Box>
        </div>
    );
}

export default ExerPart2Form;