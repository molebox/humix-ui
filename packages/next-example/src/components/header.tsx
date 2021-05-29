import React from 'react'
import { Box, Button, Link, Typography } from 'humix-ui'
import NextLink from 'next/link'

export default function Header() {

    return (
        <Box
            as='header'
            flex='row'
            align='between'
        >
            <Typography size='l'>
                Humix-ui
            </Typography>
            <Box
                flex='row'
                align='even'
            >
                <NextLink href='/page-2'>
                    <Link primary>
                        Page 2
                    </Link>
                </NextLink>
                <NextLink href='/page-2'>
                    <Link primary>
                        Page 3
                    </Link>
                </NextLink>
            </Box>

        </Box>
    )
}