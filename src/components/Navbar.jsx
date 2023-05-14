import {
    Box,
    InputGroup,
    InputLeftAddon,
    Input,
    Icon,
    Avatar,
    AvatarBadge, 
    Flex,
    Img
} from '@chakra-ui/react'
import { IoSearch } from 'react-icons/io5'

const Navbar = () => {
    return (
        <Flex mb={'25px'}>
             <InputGroup>
                <InputLeftAddon>
                    <Icon fontSize={'20px'} as={IoSearch}/>
                </InputLeftAddon>
                <Input width={'300px'} focusBorderColor={'blue.400'} placeholder='Search...' />
            </InputGroup>
        </Flex>
    )
}

export default Navbar