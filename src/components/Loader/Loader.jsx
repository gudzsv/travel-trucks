import { ColorRing } from 'react-loader-spinner';
const Loader = () => {
  return (
    <ColorRing
      visible={true}
      height="50"
      width="50"
      ariaLabel="color-ring-loading"
      wrapperStyle={{}}
      wrapperClass="color-ring-wrapper loader"
      colors={['#e15b64', '#f47e60', '#f8b26a', '#abbd81', '#849b87']}
    />
  );
};

export default Loader;
