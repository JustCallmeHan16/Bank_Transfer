import { Grid, GridItem } from '@chakra-ui/react'
import React from 'react'
import { Outlet } from 'react-router-dom'
import Sidebar from '../components/Sidebar'

const Rootlayout = () => {
  return (
    <Grid gridTemplateColumns={'repeat(6,1fr)'}>
        <GridItem
        shadow={'lg'}
        as={'aside'}
        colSpan={{ base : 6, md : 2, lg : 1, xl : 1}}
        minHeight={{md :'100vh'}}
        bgColor={'blue.400'}
        p={'15px'}
        >
          <Sidebar/>
        </GridItem>
        <GridItem
        height={'100vh'}
        overflowY={'scroll'}
        colSpan={{ base : 6, md : 4, lg : 5, xl : 5 }}
        p={'40px'}
        >
          <Outlet/>
        </GridItem>
    </Grid>
  )
}

export default Rootlayout