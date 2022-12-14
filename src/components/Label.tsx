// @mui
import { alpha, styled } from '@mui/material/styles';
import { Box, Theme, useTheme } from '@mui/material';
import { SxProps } from '@mui/system';
import { ReactNode } from 'react';

type Color = 'default' | 'primary' | 'secondary' | 'info' | 'success' | 'warning' | 'error';

const RootStyle = styled('span')(
  ({
    theme,
    ownerState,
  }: {
    theme: Theme;
    ownerState: {
      color: Color;
      variant: 'filled' | 'outlined' | 'ghost';
    };
  }) => {
    const { color, variant } = ownerState;

    const styleFilled = (color: Color) => ({
      color: theme.palette[color].contrastText,
      backgroundColor: theme.palette[color].main,
    });

    const styleOutlined = (color: Color) => ({
      color: theme.palette[color].main,
      backgroundColor: 'transparent',
      border: `1px solid ${theme.palette[color].main}`,
    });

    const styleGhost = (color: Color) => ({
      color: theme.palette[color]['light'],
      backgroundColor: alpha(theme.palette[color].main, 0.16),
    });

    return {
      height: 22,
      minWidth: 22,
      lineHeight: 0,
      borderRadius: 6,
      cursor: 'default',
      alignItems: 'center',
      whiteSpace: 'nowrap',
      display: 'inline-flex',
      justifyContent: 'center',
      padding: theme.spacing(0, 1),
      color: theme.palette.grey[800],
      fontSize: theme.typography.pxToRem(12),
      fontFamily: theme.typography.fontFamily,
      backgroundColor: theme.palette.grey[300],
      fontWeight: theme.typography.fontWeightBold,

      ...(color !== 'default'
        ? {
            ...(variant === 'filled' && { ...styleFilled(color) }),
            ...(variant === 'outlined' && { ...styleOutlined(color) }),
            ...(variant === 'ghost' && { ...styleGhost(color) }),
          }
        : {
            ...(variant === 'outlined' && {
              backgroundColor: 'transparent',
              color: theme.palette.text.primary,
              border: `1px solid ${theme.palette.grey[500_32]}`,
            }),
            ...(variant === 'ghost' && {
              color: theme.palette.common.white,
              backgroundColor: theme.palette.grey[500_16],
            }),
          }),
    };
  },
);

export default function Label({
  children,
  color = 'default',
  variant = 'ghost',
  startIcon,
  endIcon,
  sx,
}: {
  children: ReactNode;
  color: Color;
  variant: 'filled' | 'outlined' | 'ghost';
  startIcon: ReactNode;
  endIcon: ReactNode;
  sx?: SxProps<Theme>;
}) {
  const theme = useTheme();

  const style = {
    width: 16,
    height: 16,
    '& svg, img': { width: 1, height: 1, objectFit: 'cover' },
  };

  return (
    <RootStyle
      theme={theme}
      ownerState={{ color, variant }}
      sx={{
        ...(startIcon && { pl: 0.75 }),
        ...(endIcon && { pr: 0.75 }),
        ...sx,
      }}
    >
      {startIcon && <Box sx={{ mr: 0.75, ...style }}>{startIcon}</Box>}

      {children}

      {endIcon && <Box sx={{ ml: 0.75, ...style }}>{endIcon}</Box>}
    </RootStyle>
  );
}
