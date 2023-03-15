import {BoxProps} from '@shopify/restyle';
import React from 'react';

import {getSpacedChildren} from './getSpacedChildren';
import {Box} from './index';
import {StyledSpaceProps} from './types';
import {RestyleTheme} from '../theme/restyleTheme';

export const StyledColumn: React.FC<
  React.PropsWithChildren<Omit<BoxProps<RestyleTheme>, 'flexDirection'> & Partial<StyledSpaceProps>>
> = ({space, children, ...rest}) => {
  return (
    <Box flexDirection="column" {...rest}>
      {space ? getSpacedChildren(children, space, 'column') : children}
    </Box>
  );
};
