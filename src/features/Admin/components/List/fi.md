<Box className='content-list'>
      <Grid container>
        <Grid item lg={12}>
          <Box className='ad-table'>

            <Box className='table-title'>
              <Box className='content-title'>
                <AcUnitIcon className='table-icon' />
                <Typography variant='h5' className='part-text'> This Is My Gu</Typography>
              </Box>
            </Box>
            <Box className='button-add'>
              <Button
                variant="contained"
                color="secondary"
                // className={classes.button}
                startIcon={<AddCircleIcon />}
              >
                Add Part
              </Button>
            </Box>
            <Box className='table-body'>
              
            <table class="content-table">
              <thead>
                <tr>
                  <th>#</th>
                  <th>IMG</th>
                  <th>Name</th>
                  <th>Description</th>
                  <th>Action</th>
                </tr>
              </thead>
              <tbody>

                {trashState.map((topic) => (

                  <tr key={topic._id}>
                    <td>{i++}</td>
                    <td>{topic.nameTopic}</td>
                    <td> {topic.img}</td>
                    <td>{topic.descripTopic}</td>
                    <td>
                      <Button onClick={() => handleRestoreTopic(topic._id)}>Restore</Button>
                      <Button onClick={() => handlDeleteTopic(topic._id)}>Delete</Button>

                    </td>
                  </tr>
                ))}

              </tbody>
            </table>
          
            </Box>
          </Box>
        </Grid>
      </Grid>
    </Box>