import { Hourglass } from 'react-loader-spinner';

export const Loader = () => (
  <Hourglass
    visible={true}
    height="50"
    width="50"
    ariaLabel="hourglass-loading"
    wrapperStyle={{
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      height: '100vh',
      margin: '0 auto',
      position: 'fixed',
      top: '0',
      left: '0',
      right: '0',
      bottom: '0',
      zIndex: '9999',
    }}
    wrapperClass=""
    colors={['#3470FF', '#72a1ed']}
  />
);
