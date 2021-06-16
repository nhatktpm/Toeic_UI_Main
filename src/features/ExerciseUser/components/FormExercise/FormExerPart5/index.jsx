import { yupResolver } from '@hookform/resolvers/yup';
import { Box, Button, Container, makeStyles } from '@material-ui/core';
import React from 'react';
import { useForm } from 'react-hook-form';
import * as yup from 'yup';

import Part5Field from '../../form-controlls/Part5Field';


function ExerPart5Form(props) {

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
            stt: 'Câu 1',
            id: '11',
            namecauhoi: 'cau hoi so 1',
            a: 'a',
            noidung: 'The first quarters growth figure ......... again next month.',
            dapan: 'c',
            caua: 'will be revised ',
            caub: ' is revised ',
            cauc: 'will revise ',
            caud: 'was revised '
        }, {
            stt: 'Câu2 ',
            id: '11',
            namecauhoi: 'cau hoi so 1',
            a: 'a',
            noidung: 'Over the last year and a half, the economy ........ between quarters of growth and contraction.',
            dapan: 'c',
            caua: 'have fluctuated  ',
            caub: 'has fluctuated  ',
            cauc: ' fluctuates  ',
            caud: 'fluctuated '
        }, {
            stt:' Câu3',
            id: '11',
            namecauhoi: 'cau hoi so 1',
            a: 'a',
            noidung: 'In the final three months of last year, the economy also ....... by 0.3%, meaning the UK is back in recession.',
            dapan: 'c',
            caua: 'shrinks ',
            caub: ' has shrunk ',
            cauc: 'shrank  ',
            caud: 'shrink  '
        },{
            stt:' Câu3',
            id: '11',
            namecauhoi: 'cau hoi so 1',
            a: 'a',
            noidung: 'In the final three months of last year, the economy also ....... by 0.3%, meaning the UK is back in recession.',
            dapan: 'c',
            caua: 'shrinks ',
            caub: ' has shrunk ',
            cauc: 'shrank  ',
            caud: 'shrink  '
        },{
            stt:' Câu3',
            id: '11',
            namecauhoi: 'cau hoi so 1',
            a: 'a',
            noidung: 'In the final three months of last year, the economy also ....... by 0.3%, meaning the UK is back in recession.',
            dapan: 'c',
            caua: 'shrinks ',
            caub: ' has shrunk ',
            cauc: 'shrank  ',
            caud: 'shrink  '
        },
    ]

    return (
        <div>

            <Box className={classes.bgForm}>

                <Box pb={2}>
                    <form onSubmit={form.handleSubmit(handleSubmit)}>
                        {
                            dsCauhoi.map((cauhoi) => {
                                return <Part5Field key={cauhoi.id} name={cauhoi.id} cauhoi={cauhoi} form={form} />
                            })
                        }

                        {/* <Box my={4}> phan trang</Box> */}

                        <Box my={2} className='saukhihoanthien'>Sau khi hoàn thiện bài làm hãy bấm vào nút nộp bài bên dưới</Box>
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

export default ExerPart5Form;