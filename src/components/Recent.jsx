import React, { useEffect, useState } from 'react'
import { 
  Box,
  Img,
  ListItem,
  Text,
  Button,
  Flex,
  Icon,
  Heading,
  Stack,
  CardBody,
  Card
} from '@chakra-ui/react'
import Swal from 'sweetalert2'
import {
  FcCalendar,
  FcGoogle
} from 'react-icons/fc'
import { useGetUsersQuery, useRejectAccountMutation, useUpdateAccountMutation } from '../api/userApi'

const Recent = ({user}) => {

  const [accounts,setAccounts] = useState([])
  const {data} = useGetUsersQuery('users')

  const [ updateUser ] = useUpdateAccountMutation(user.id)
  const [ deleteAccount ] = useRejectAccountMutation()
  
  useEffect(() => {
    const userData = data
    setAccounts(userData)
  },[data])

  const updateAccount = (id) => {
    const currentAccount = accounts.find( account => account.id === id)
    const update = {...currentAccount, accept : true}
    console.log(update)
    updateUser(update)
    Swal.fire({
      position: 'top',
      icon: 'success',
      title: 'Transfer Confirmed',
      showConfirmButton: false,
      timer: 1500
    })
  }

  return (
    <Card
    minW={'250px'}
    minH={'150px'}
    >
      <CardBody>
        <Stack spacing={'1.5'}>
          <Flex gap={'10px'} alignItems={'center'}>
            <Box borderRadius={'30px'} display={'flex'} justifyContent={'center'} alignItems={'center'} width={'60px'} height={'60px'} border={'2px'} borderColor={'gray.200'}> 
              <Img objectFit={'cover'} src={user?.img} justifyContent={'center'} alignItems={'center'} borderRadius={'25px'} width={'50px'} height={'50px'} bgColor={'gray.300'}/>
            </Box>
            <Heading color={'gray.700'} fontSize={'20px'}>{user?.name}</Heading>
          </Flex>
          <Flex gap={'5px'}>
            <Icon fontSize={'20px'} as={FcCalendar}/>
            <Text color={'gray.500'} fontWeight={'medium'} fontSize={'15px'}>{user?.date}</Text>
          </Flex>
          <Flex alignItems={'center'} gap={'5px'}>
            <Icon fontSize={'20px'} as={FcGoogle}/>
            <Text color={'gray.500'} fontWeight={'medium'} fontSize={'18px'}>{user?.email}</Text>
          </Flex>
          <Flex alignItems={'center'} gap={'5px'}>
            <Flex borderRadius={'10px'} justifyContent={'center'} alignItems={'center'} width={'20px'} height={'20px'} bgColor={'green.300'}>
              <Text fontSize={'13px'} fontWeight={'medium'} color={'white'}>$</Text>
            </Flex>
              <Text fontWeight={'medium'}>{user?.amount}</Text>
          </Flex>
          <Flex gap={'5px'}>
            <Button onClick={() => updateAccount(user?.id)} size={{base : 'sm', md : 'md', lg : 'md'}} colorScheme={'green'}>Accept</Button>
            <Button onClick={() => deleteAccount(user?.id)} size={'md'} variant={'ghost'} colorScheme={'red'}>Delete</Button>
          </Flex>
        </Stack>
      </CardBody>
    </Card>
  )
}

export default Recent