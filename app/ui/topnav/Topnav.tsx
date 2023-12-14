'use client'

import { Link } from '@chakra-ui/next-js'
import { Box} from '@chakra-ui/react'
import React from 'react'

function Topnav() {
  return (
    <Box display='flex' width='100vw' justifyContent='space-between' alignItems='center' py='50px' px='80px' boxShadow='md'>
      <Link href='/' color='black.900' _hover={{ color: 'blue.600' }}><Box fontSize='2rem' fontWeight='700'>Todo List</Box></Link>
      <Box display='flex' gap={10} fontSize='1.3rem'>
      <Link href='/' color='blue.400' _hover={{ color: 'blue.600' }}>Home</Link>
        <Box>Login</Box>
        <Box>Register</Box>
        <Link href='/tasks' color='blue.400' _hover={{ color: 'blue.600' }}>Tasks</Link>
      </Box>
    </Box>
  )
}

export default Topnav