import React from 'react'
import { Box, Button, Link } from 'humix-ui'
import NextLink from 'next/link'

export default function Home() {
  return (
    <Box>

      <Box
        as="main"
        stylz={{
          height: '100vh',
          display: 'flex',
          justifyContent: 'space-evenly',
          alignItems: 'center'
        }}
      >
        <Box
          as="section"
          primaryBottomLeft
          border
          stylz={{
            height: '500px',
            width: '500px',
            display: 'flex',
            justifyContent: 'space-evenly',
            alignItems: 'center'
          }}
        >
          <Button color="primary" cornerRadius="slight">Im a primary button</Button>
          <Link primary as={NextLink} href="/page-2">Im a link to page 2</Link>
        </Box>
        <Box
          as="section"
          secondaryBottomLeft
          border
          stylz={{
            height: '500px',
            width: '500px',
            display: 'flex',
            justifyContent: 'space-evenly',
            alignItems: 'center'
          }}
        >
          <Button color="secondary" cornerRadius="slight">Im a secondary button</Button>
          <Link secondary href="/page-2">Im a link to page 2</Link>
        </Box>
      </Box>

    </Box>
  )
}
