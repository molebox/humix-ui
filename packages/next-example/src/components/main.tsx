import React from 'react'
import { Box } from 'humix-ui'

export default function Main({ children }: any) {

    return (
        <Box
            as='main'
            m='4'

        >
            {children}
        </Box>
    )
}