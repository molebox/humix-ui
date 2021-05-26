import React from 'react'
import { Link as GatsbyLink } from 'gatsby'
import { Box, Button, Link } from 'humix-ui'

const Page2 = () => {

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
                    <Link primary href="/">Back to page 1</Link>
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
                    <Link secondary href="/">Back to page 1</Link>
                </Box>
            </Box>

        </Box>
    )
}

export default Page2