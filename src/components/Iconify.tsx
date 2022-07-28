import { Theme } from '@mui/material/styles';
import { SxProps } from '@mui/system';
// icons
import { Icon } from '@iconify/react';
// @mui
import { Box } from '@mui/material';

// ----------------------------------------------------------------------
type Props = { icon: string; sx?: SxProps<Theme>; [x: string]: any };

export default function Iconify({ icon, sx, ...other }: Props) {
  return <Box component={Icon} icon={icon} sx={{ ...sx }} {...other} />;
}
