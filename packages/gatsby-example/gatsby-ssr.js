import * as React from 'react';
import { getCssString } from 'humix-ui';

export const onRenderBody = ({ setHeadComponents }) => {
    setHeadComponents([
        <style
            id="stitches"
            dangerouslySetInnerHTML={{
                __html: getCssString(),
            }}
        />,
    ]);
};