import {
    Flex,
    List,
    ListIcon,
    ListItem,
    Text
} from '@chakra-ui/react'
import { NavLink } from 'react-router-dom'
import { BiSpreadsheet } from 'react-icons/bi'
import { TbUsers, TbUserPlus } from 'react-icons/tb' 
import { RiCoinsFill } from 'react-icons/ri'


const Sidebar = () => {

    const styleBox = {
        width: '200px',
        height : '40px',
        display : 'flex',
        alignItems : 'center',
    }

    return (
        <List
        color={'gray.200'}
        fontSize={'20px'}
        spacing={'10px'}
        >
            <ListItem
            py={'35px'}
            style={styleBox}
            ps={'15px'}
            >
                <Flex justifyContent={'center'} alignItems={'center'}>
                    <ListIcon fontSize={'40px'} as={RiCoinsFill}/>
                    <Text fontWeight={'bold'} fontSize={'25px'} letterSpacing={'3px'}>MCASH</Text>
                </Flex>
            </ListItem>
            <ListItem
            style={styleBox}
            ps={'15px'}
            _hover={{
                bg : 'white',
                color : 'black',
                transition : '0.5s',
                cursor : 'pointer',
                borderRadius : '5px'
            }}
            >
                <ListIcon
                fontSize={'25px'}
                as={BiSpreadsheet}
                />
                    <NavLink to={'/'}>
                        Dashboard
                    </NavLink>
            </ListItem>
            <ListItem
            style={styleBox}
            ps={'15px'}
            _hover={{
                bg : 'white',
                color : 'black',
                transition : '0.5s',
                cursor : 'pointer',
                borderRadius : '5px'
            }}
            >
                <ListIcon
                fontSize={'25px'}
                as={TbUsers}
                />
                    <NavLink to={'accounts'}>
                        Accounts
                    </NavLink>
            </ListItem>
            <ListItem
            style={styleBox}
            ps={'15px'}
            _hover={{
                bg : 'white',
                color : 'black',
                transition : '0.5s',
                cursor : 'pointer',
                borderRadius : '5px'
            }}
            >
                <ListIcon
                fontSize={'25px'}
                as={TbUserPlus}
                />
                    <NavLink to={'adduser'}>
                        Adduser
                    </NavLink>
            </ListItem>
        </List>
    )
}

export default Sidebar