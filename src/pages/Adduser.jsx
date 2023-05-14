import { 
    Box, 
    Flex, 
    FormControl, 
    FormLabel,
    InputGroup,
    InputLeftElement,
    Input,
    Text,
    Button
} from '@chakra-ui/react'
import { useState } from 'react'
import { BsPerson } from 'react-icons/bs'
import { FiMail } from 'react-icons/fi'
import { MdAttachMoney } from 'react-icons/md'
import { Link, Navigate, useNavigate } from 'react-router-dom'
import { useAddAcountMutation } from '../api/userApi'

const Adduser = () => {

    const [name,setName] = useState('')
    const [email,setEmail] = useState('')
    const [img,setImg] = useState('')
    const [date,setDate] = useState('')
    const [amount,setAmount] = useState(0)
    const navigate = useNavigate()

    const [ addAccount ] = useAddAcountMutation()

    const addUserData = (e) =>{
        e.preventDefault()
        const id = parseInt(Date.now()*123456789)
        const accept = false
        const userData = {
            name,
            email,
            img,
            date,
            amount,
            id,
            accept
        }
        console.log(userData)
        addAccount(userData)
        navigate('/')
    }

    return (
        <Box>
            <Flex onSubmit={addUserData} as={'form'} flexDirection={'column'} justifyContent={'center'} alignItems={'center'} gap={'35px'}>

                <Text color={'blue.300'} letterSpacing={'2px'} fontWeight={'medium'} fontSize={'30px'}>User Form</Text>

                <Flex flexFlow={'wrap'} justifyContent={'center'} gap={'25px'}>
                    <FormControl width={'250px'}>
                        <FormLabel color={'gray.600'}>User Name</FormLabel>
                        <InputGroup>
                        <InputLeftElement children={<BsPerson />} />
                        <Input value={name} onChange={(e) => setName(e.target.value)} width={'250px'} isRequired type="text" name="name" placeholder="Your Name" />
                        </InputGroup>
                    </FormControl>

                    <FormControl width={'250px'}>
                        <FormLabel color={'gray.600'}>User Email</FormLabel>
                        <InputGroup>
                        <InputLeftElement children={<FiMail />} />
                        <Input value={email} onChange={(e) => setEmail(e.target.value)} width={'250px'} isRequired type="text" name="email" placeholder="Email" />
                        </InputGroup>
                    </FormControl>
                </Flex>

                <Flex flexFlow={'wrap'} justifyContent={'center'} gap={'25px'}>
                    <FormControl width={'250px'}>
                        <FormLabel color={'gray.600'}>Image</FormLabel>
                        <InputGroup>
                        <Input value={img} onChange={(e) => setImg(e.target.value)} width={'250px'} isRequired type="text" name="image" />
                        </InputGroup>
                    </FormControl>

                    <FormControl width={'250px'}>
                        <FormLabel color={'gray.600'}>Date</FormLabel>
                        <InputGroup>
                        <Input value={date} onChange={(e) => setDate(e.target.value)} width={'250px'} isRequired type="date" name="date" />
                        </InputGroup>
                    </FormControl>
                </Flex>

                <FormControl width={'250px'}>
                    <FormLabel color={'gray.600'}>Transfar Amount</FormLabel>
                    <InputGroup>
                      <InputLeftElement children={<MdAttachMoney />} />
                      <Input value={amount} onChange={(e) => setAmount(e.target.value)} width={'250px'} isRequired type="number" name="number" />
                    </InputGroup>
                </FormControl>
                <Button colorScheme={'blue'} type={'submit'}>Add User</Button>
            </Flex>
        </Box>
    )
}

export default Adduser