export { Box } from './box';

export const heights = {
    height: {
        screen: {
            height: '100vh'
        },
        full: {
            height: '100%'
        },
        threeQuarters: {
            height: '75%'
        },
        half: {
            height: '50%'
        },
        quarter: {
            height: '25%'
        },
        2: {
            height: '#2'
        },
        4: {
            height: '$3'
        },
        8: {
            height: '$4'
        },
        16: {
            height: '$5'
        },
        32: {
            height: '$6'
        },
        64: {
            height: '$7'
        },
        128: {
            height: '$8'
        },
        256: {
            height: '$9'
        },
        512: {
            height: '$10'
        },
        none: {
            height: 0
        }
    }
}

export const widths = {
    maxWidth: {
        500: {
            maxWidth: '500px'
        },
        1000: {
            maxWidth: '1000px'
        },
        1440: {
            maxWidth: '1440px'
        }
    },
    width: {
        full: {
            width: '100%'
        },
        threeQuarters: {
            width: '75%'
        },
        half: {
            width: '50%'
        },
        quarter: {
            width: '25%'
        },
        none: {
            width: 0
        }
    },
    ...heights
}

export const grids = {
    autoFill300: {
        true: {
            display: 'grid',
            gridAutoRows: 'auto',
            gridTemplateColumns: 'repeat(auto-fill, minmax(auto, 300px))',
        },
    },
    autoFill350: {
        true: {
            display: 'grid',
            gridAutoRows: 'auto',
            gridTemplateColumns: 'repeat(auto-fill, minmax(auto, 350px))',
        },
    },
    autoFill400: {
        true: {
            display: 'grid',
            gridAutoRows: 'auto',
            gridTemplateColumns: 'repeat(auto-fill, minmax(auto, 400px))',
        },
    },
    autoFill450: {
        true: {
            display: 'grid',
            gridAutoRows: 'auto',
            gridTemplateColumns: 'repeat(auto-fill, minmax(auto, 450px))',
        },
    },
    autoFill500: {
        true: {
            display: 'grid',
            gridAutoRows: 'auto',
            gridTemplateColumns: 'repeat(auto-fill, minmax(auto, 500px))',
        },
    },
    autoFit300: {
        true: {
            display: 'grid',
            gridAutoRows: 'auto',
            gridTemplateColumns: 'repeat(auto-fit, minmax(auto, 300px))',
        },
    },
    autoFit350: {
        true: {
            display: 'grid',
            gridAutoRows: 'auto',
            gridTemplateColumns: 'repeat(auto-fit, minmax(auto, 350px))',
        },
    },
    autoFit400: {
        true: {
            display: 'grid',
            gridAutoRows: 'auto',
            gridTemplateColumns: 'repeat(auto-fit, minmax(auto, 400px))',
        },
    },
    autoFit450: {
        true: {
            display: 'grid',
            gridAutoRows: 'auto',
            gridTemplateColumns: 'repeat(auto-fit, minmax(auto, 450px))',
        },
    },
    autoFit500: {
        true: {
            display: 'grid',
            gridAutoRows: 'auto',
            gridTemplateColumns: 'repeat(auto-fit, minmax(auto, 500px))',
        },
    },
}

export const pads = {
    p: {
        none: {
            p: '$1'
        },
        2: {
            p: '#2'
        },
        4: {
            p: '$3'
        },
        8: {
            p: '$4'
        },
        16: {
            p: '$5'
        },
        32: {
            p: '$6'
        },
    },
    py: {
        none: {
            py: '$1'
        },
        2: {
            py: '#2'
        },
        4: {
            py: '$3'
        },
        8: {
            py: '$4'
        },
        16: {
            py: '$5'
        },
        32: {
            py: '$6'
        }
    },
    px: {
        none: {
            px: '$1'
        },
        2: {
            px: '#2'
        },
        4: {
            px: '$3'
        },
        8: {
            px: '$4'
        },
        16: {
            px: '$5'
        },
        32: {
            px: '$6'
        }
    },
}

export const margie = {
    m: {
        none: {
            m: '$1'
        },
        2: {
            m: '#2'
        },
        4: {
            m: '$3'
        },
        8: {
            m: '$4'
        },
        16: {
            m: '$5'
        },
        32: {
            m: '$6'
        },
    },
    my: {
        none: {
            my: '$1'
        },
        2: {
            my: '#2'
        },
        4: {
            my: '$3'
        },
        8: {
            my: '$4'
        },
        16: {
            my: '$5'
        },
        32: {
            my: '$6'
        }
    },
    mx: {
        none: {
            mx: '$1'
        },
        2: {
            mx: '#2'
        },
        4: {
            mx: '$3'
        },
        8: {
            mx: '$4'
        },
        16: {
            mx: '$5'
        },
        32: {
            mx: '$6'
        }
    }
}
