'use client'

import { Link } from '@chakra-ui/next-js'
import { Box} from '@chakra-ui/react'
import React from 'react'

function Topnav() {
  return (
    <Box display='flex' width='100vw' justifyContent='space-between' alignItems='center' py='50px' px='80px' boxShadow='md'>
      <Box fontSize='2rem' fontWeight='700'>Todo List</Box>
      <Box display='flex' gap={10} fontSize='1.3rem'>
        <Box>Home</Box>
        <Box>Login</Box>
        <Box>Register</Box>
        <Link href='/todos' color='blue.400' _hover={{ color: 'blue.600' }}>Todos</Link>
      </Box>
    </Box>
  )
}

export default Topnav