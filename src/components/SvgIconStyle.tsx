import { Theme } from '@mui/material/styles';
import { SxProps } from '@mui/system';
import PropTypes from 'prop-types';
import { Box } from '@mui/material';

// ----------------------------------------------------------------------

SvgIconStyle.propTypes = {
  src: PropTypes.string.isRequired,
  sx: PropTypes.object,
};

export default function SvgIconStyle({
  src,
  sx,
}: {
  src: string;
  sx?: SxProps<Theme> | undefined;
}) {
  return (
    <Box
      component="span"
      sx={{
        width: 24,
        height: 24,
        display: 'inline-block',
        bgcolor: 'currentColor',
        mask: `url(${src}) no-repeat center / contain`,
        WebkitMask: `url(${src}) no-repeat center / contain`,
        ...sx,
      }}
    />
  );
}
