import { Button, Card } from 'react-bootstrap';
import { CaretRight } from 'react-bootstrap-icons';
import { Link } from 'react-router-dom';
import '../../../Asset/Style/Helaathkam_Page.css';

const SideNav = () => {
  return (
    <>
      <Card className="mt-4">
        <Card.Body
          style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            height: '100%',
            gap: '10px',
          }}
        >
          <Link to="/admin/product" style={{width: '100%'}}>
            <Button className="listgroupButton">
              <CaretRight className="caretRight1" /> Product
            </Button>
          </Link>

          <Link to="/admin/order" style={{width: '100%'}}>
          <Button className="listgroupButton">
            <CaretRight className="caretRight1" /> Order
          </Button>
          </Link>

          <Link to="/admin/craftmakerrequest" style={{width: '100%'}}>
          <Button className="listgroupButton">
            <CaretRight className="caretRight1" /> Craft Maker Request
          </Button>
          </Link>

          <Link to="/admin/customer" style={{width: '100%'}}>
          <Button className="listgroupButton">
            <CaretRight className="caretRight1" /> Customer
          </Button>
          </Link>

          <Link to="/admin/craftmaker" style={{width: '100%'}}>
          <Button className="listgroupButton">
            <CaretRight className="caretRight1" /> Craft Maker
          </Button>
          </Link>
        </Card.Body>
      </Card>
    </>
  );
};

export default SideNav;
