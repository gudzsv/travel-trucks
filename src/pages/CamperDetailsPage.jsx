import { Helmet } from 'react-helmet-async';
import CamperDetails from '../components/CamperDetails/CamperDetails.jsx';
import Container from '../components/Container/Container.jsx';

const CamperDetailsPage = () => {
  return (
    <>
      <Helmet>
        <title>Details</title>
      </Helmet>
      <Container>
        <CamperDetails />
      </Container>
    </>
  );
};

export default CamperDetailsPage;
