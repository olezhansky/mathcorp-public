import { createTheme } from '@material-ui/core/styles';

const theme = createTheme({
  breakpoints: {
    keys: ['xs', 'sm', 'md'],
    values: {
      xs: 0,
      sm: 320,
      md: 769,
      lg: 1200,
    },
  },
  overrides: {
      MuiButton: {
          root: {
              textTransform: 'none',
          },
          contained: {
              padding: '8px 70px',
              backgroundColor: '#4797C8',
              color: '#FFFFFF',
              fontSize: '18px',
              lineHeight: '24px',
              fontWeight: 600,
              letterSpacing: '1px',
              '&:hover': {
                backgroundColor: '#21587B',
                '@media (hover: none)': {
                  backgroundColor: '#21587B',
                },
              },
              // '@media (max-width: 480px)': {
              //   fontSize: '14px',
              //   lineHeight: '16px',
              // }
          },
          outlined: {
              padding: '8px 70px',
              backgroundColor: '#8B969C',
              color: '#FFFFFF',
              fontSize: '18px',
              lineHeight: '24px',
              fontWeight: 600,
              letterSpacing: '1px',
              border: 'none',
              '&:hover': {
                backgroundColor: '#686868',
                '@media (hover: none)': {
                  backgroundColor: '#21587B',
                },
              },
          },
      },
      MuiFormControl: {
        root: {
          width: '100%',
        }
      },
      MuiOutlinedInput: {
        border: '2px solid #4797C8',
        "&.MuiFormLabel-root": {
          color: "red" // or black
        },
        root: {
          '& .MuiOutlinedInput-notchedOutline': {
            border: '1px solid #4797C8'
          },
          '&:hover': {
            '& .MuiOutlinedInput-notchedOutline': {
              border: '2px solid #4797C8'
            }
          },
          '&.Mui-focused': {
            '& .MuiOutlinedInput-notchedOutline': {
              border: '2px solid #4797C8'
            }
          },
          "&.MuiFormLabel-root": {
            color: "red" // or black
          }
        }
      } ,
    }
  }
);

export default theme