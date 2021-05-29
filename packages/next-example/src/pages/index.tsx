import React from 'react'
import { Box, Button, Link, Typography } from 'humix-ui'
import NextLink from 'next/link'
import Header from '../components/header'

export default function Home() {
  return (
    <Box
      as="main"
      stylz={{
        height: '100vh',
        display: 'flex',
        justifyContent: 'space-evenly',
        alignItems: 'center'
      }}
    >
      <Header />
    </Box>
  )
}
