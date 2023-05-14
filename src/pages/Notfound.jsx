import {
    Box, 
    Flex, 
    Text,
    Icon,
    Button
} from '@chakra-ui/react'

import { RiCoinsFill } from 'react-icons/ri'
import { Link } from 'react-router-dom'

const Notfound = () => {
  return (
    <Flex
    minW={'100%'}
    minH={{ base : '90vh', md : '100vh', xl : '100vh' }}
    justifyContent={'center'}
    alignItems={'center'}
    >
        <Box
        justifyContent={'center'}
        alignItems={'center'}
        display={'flex'}
        flexDirection={'column'}
        gap={'10px'}
        >
            <Icon
            fontSize={'40px'}
            color={'blue.400'}
            as={RiCoinsFill}/>
            <Text
            color={'gray.500'}
            fontSize={'20px'}
            letterSpacing={'2px'}
            >
                OOPS! NOT FOUND
            </Text>
            <Link to={'/'}>
                <Button
                colorScheme={'blue'}
                fontWeight={'medium'}
                letterSpacing={'2px'}
                >
                    Go Back Home
                </Button>
            </Link>
        </Box>
    </Flex>
  )
}

export default Notfound