import { yupResolver } from '@hookform/resolvers/yup';
import { Box, Button, Container, makeStyles } from '@material-ui/core';
import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import ReactPaginate from 'react-paginate';
import { useSelector } from 'react-redux';
import * as yup from 'yup';
import Part1Field from '../../form-controlls/Part1Field/Part1Field';
import './index.css'


function ExerPart1Form(props) {


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

    // lấy danh sách câu hỏi
    const listExerState = useSelector(state => state.exer.listExer);

    // set default values
    var ketqua = {
    }
    const lopdefau = () => {
        listExerState.map((exer) => {
            let keyname = exer._id;
            ketqua[keyname] = ""
        })
    }

    const schema = yup.object().shape({});
    const form = useForm({
        defaultValues: ketqua,
        resolver: yupResolver(schema),
    });

    //handle submit
    const handleSubmit = async (values) => {
        const { onSubmit } = props;
        if (onSubmit) {
            await onSubmit(values);
        }
    };
    

    // Phan trang 

    const [pageNumber, setPageNumber] = useState(0);

    const usersPerPage = 2;
    const pagesVisited = pageNumber * usersPerPage;
    let i = 0;
    const displayUsers = listExerState
        .slice(pagesVisited, pagesVisited + usersPerPage)
        .map((cauhoi) => {
            return (
                               
                <Part1Field  color={cauhoi.kq} key={cauhoi.id} name={cauhoi._id} cauhoi={cauhoi} form={form} />
            );
        });

    const pageCount = Math.ceil(listExerState.length / usersPerPage);

    const changePage = ({ selected }) => {
        setPageNumber(selected);
    };

    return (
        <div>

            <Box className={classes.bgForm}>

                <Box pb={2}>
                    <form onSubmit={form.handleSubmit(handleSubmit)}>
                        {
                            displayUsers
                        }

                        <Box my={4}>
                            <Box position='relative' className="pagi-exer-part1">

                                <ReactPaginate
                                    previousLabel={"<"}
                                    nextLabel={">"}
                                    pageCount={pageCount}
                                    onPageChange={changePage}
                                    containerClassName={"paginationBttns abso"}
                                    previousLinkClassName={"previousBttn"}
                                    nextLinkClassName={"nextBttn"}
                                    disabledClassName={"paginationDisabled"}
                                    activeClassName={"paginationActive"}
                                /></Box>

                        </Box>

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

export default ExerPart1Form;