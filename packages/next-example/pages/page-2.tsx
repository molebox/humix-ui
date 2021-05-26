import React from 'react'
import { Box, Button } from 'humix-ui'
import styles from '../styles/Home.module.css'

export default function Page2() {
    return (
        <div className={styles.container}>
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

        </div>
    )
}