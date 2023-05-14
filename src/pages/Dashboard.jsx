import { 
    Box,
    List 
} from '@chakra-ui/react'
import Recent from '../components/Recent'
import { useDispatch, useSelector } from 'react-redux'
import { useGetUsersQuery } from '../api/userApi'
import { getAccounts } from '../services/userSlice'
import { useEffect } from 'react'


const Dashboard = () => {

    const users = useSelector(state => state.user.users)
    const dispatch = useDispatch()

    const { data } = useGetUsersQuery('users')

    useEffect(() => {
        const userData = data
        dispatch(getAccounts(userData))
    },[data])

    return (
      <Box>
        <List flexWrap={'wrap'} flexDirection={'column'} justifyContent={'center'} gap={'25px'} display={'flex'}>
           {
            users?.length > 0? (users?.map( user => user.accept? (<p key={user.id}></p>) : (<Recent key={user?.id} user={user}/>))) : (
                <p>There is no Transfer</p>
            )
           }
        </List>
      </Box>
    )
}

export default Dashboard