import Row from '../ui/Row';
import Button from "../ui/Button";
import Heading from '../ui/Heading';
import CabinTable from './../features/cabins/CabinTable';
import CreateCabinForm from './../features/cabins/CreateCabinForm';
import AddCabin from '../features/cabins/AddCabin';

function Cabins() {
  // useEffect(function(){
  //   getCabins().then(data => console.log(data));
  // }, []);

  return (
    <>
      <Row type="horizontal">
        <Heading as="h1">All cabins</Heading>
        <p>Filter / Sort</p>
      </Row>
      <Row type="vertical">
        <CabinTable />
        <AddCabin />
      </Row>
    </>
  );
}

export default Cabins;
