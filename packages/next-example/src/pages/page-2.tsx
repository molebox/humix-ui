import React from 'react'
import { Box, Button } from 'humix-ui'

export default function Page2() {
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
            <Box
                as="section"
                primaryBottomLeft
                stylz={{
                    height: '200px',
                    width: '200px'
                }}
            >
                <Button color="primary" cornerRadius="slight">Im a primary button</Button>
            </Box>
            <Box
                as="section"
                secondaryBottomLeft
                stylz={{
                    height: '200px',
                    width: '200px'
                }}
            >
                <Button color="secondary" cornerRadius="slight">Im a secondary button</Button>
            </Box>
        </Box>
    )
}