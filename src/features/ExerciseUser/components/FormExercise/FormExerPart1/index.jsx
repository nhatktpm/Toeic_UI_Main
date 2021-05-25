import { yupResolver } from '@hookform/resolvers/yup';
import { Box, Button } from '@material-ui/core';
import React from 'react';
import { useForm } from 'react-hook-form';
import * as yup from 'yup';
import Part1Field from '../../form-controlls/Part1Field/Part1Field';

function ExerPart1Form(props) {

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
        }, {
            id: '12',
            namecauhoi: 'cau hoi so 1',
            a: 'a',
            dapan: 'c'
        }, {
            id: '13',
            namecauhoi: 'cau hoi so 1',
            a: 'a',
            dapan: 'c'
        }
    ]


    return (

        <div>
            <form onSubmit={form.handleSubmit(handleSubmit)}>

                {
                    dsCauhoi.map((cauhoi) => {
                        return <Box> <Part1Field key={cauhoi.id} name={cauhoi.id} cauhoi={cauhoi} form={form} /></Box>
                    })
                }

                <Button
                    type="submit"
                    variant="contained"
                    color="primary"
                    fullWidth
                    size="large"
                >
                    Sign in
                </Button>
            </form>
        </div>
    );
}

export default ExerPart1Form;