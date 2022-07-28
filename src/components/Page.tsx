import { Helmet } from 'react-helmet-async';
import { forwardRef, ReactNode } from 'react';
// @mui
import { Box } from '@mui/material';

// ----------------------------------------------------------------------

const Page = forwardRef(
  (
    {
      children,
      title = '',
      meta,
      ...other
    }: { children: ReactNode; title: string; meta: ReactNode },
    ref,
  ) => (
    <>
      <Helmet>
        <title>{`${title} | Minimal-UI`}</title>
        {meta}
      </Helmet>

      <Box ref={ref} {...other}>
        {children}
      </Box>
    </>
  ),
);

export default Page;
