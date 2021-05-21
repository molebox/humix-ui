import React from 'react'
import { Meta } from '@storybook/react/types-6-0'
import { Button, ButtonProps } from './button'

export default
    {
        title: 'interactive-elements/button',
        component: Button,
    } as Meta

export const TurquoiseButton: React.FunctionComponent<ButtonProps> = () => <Button color="turquoise">Im turquoise</Button>