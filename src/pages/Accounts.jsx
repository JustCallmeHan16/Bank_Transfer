import { SimpleGrid } from '@chakra-ui/react'
import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useGetUsersQuery } from '../api/userApi'
import { getAccounts } from '../services/userSlice'
import Usercard from '../components/Usercard'

const Accounts = () => {

    const users = useSelector(state => state.user.users)
    const dispatch = useDispatch()

    const { data } = useGetUsersQuery('users')

    useEffect(() => {
        const userData = data
        dispatch(getAccounts(userData))
    },[data])
 
    return (
        <SimpleGrid spacing={10} minChildWidth={'250px'}>
          {
            users?.length > 0? (
                    users?.map( user => user.accept && <Usercard key={user.id} user={user}/>)
            ) : (
                <p>There's No Account</p>
            )
          }
        </SimpleGrid>
    )
}

export default Accounts