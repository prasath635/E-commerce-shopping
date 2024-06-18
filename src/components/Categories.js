import Card from 'react-bootstrap/Card';
import CardGroup from 'react-bootstrap/CardGroup';
import 'bootstrap/dist/css/bootstrap.min.css';

import { Button } from 'react-bootstrap';



function Categories(){


    return(
        <>
       
        <h3 className='categories'>Categories</h3>
        <CardGroup>
      <Card>
        <Card.Img className='shoe' variant="top" src="https://sneakernews.com/wp-content/uploads/2011/03/nike-free-media-event-beijing-china-41.jpg" />
        <Card.Body>
          <Card.Title>SHOES</Card.Title>
          <Card.Text>
            This is a wider card with supporting text below as a natural lead-in
            to additional content. This content is a little bit longer.
          </Card.Text>
        </Card.Body>
        <Card.Footer>
          {/* <input onClick='goTo()' type='button' value="buynow"></input> */}
          <Button className="text-muted">Buy now</Button>
         
        </Card.Footer>
      </Card>
      <Card>
        <Card.Img className='shirt' variant="top" src="https://www.pngitem.com/pimgs/m/233-2334273_blue-check-shirts-png-free-download-Button-transparent.png" />
        <Card.Body>
          <Card.Title>SHIRTS</Card.Title>
          <Card.Text>
            This card has supporting text below as a natural lead-in to
            additional content.{' '}
          </Card.Text>
        </Card.Body>
        <Card.Footer>
          <Button className="text-muted">Buy now</Button>
        </Card.Footer>
      </Card>
      <Card>
        <Card.Img className='hoodie' variant="top" src="https://www.pngitem.com/pimgs/m/425-4259353_youth-hoodie-0013-sports-grey-hoodie-hd-png.png" />
        <Card.Body>
          <Card.Title>HOODIES</Card.Title>
          <Card.Text>
            This is a wider card with supporting text below as a natural lead-in
            to additional content. This card has even longer content than the
            first to show that equal height action.
          </Card.Text>
        </Card.Body>
        <Card.Footer>
          <Button className="text-muted">Buy now</Button>
        </Card.Footer>
      </Card>
    </CardGroup>
    <br></br>
    <CardGroup>
      <Card>
        <Card.Img className='jacket' variant="top" src="https://xco.s3.eu-west-1.amazonaws.com/product_images/July2021/gaVwiSwIh6u3lvtae7Wc.png" />
        <Card.Body>
          <Card.Title>JACKETS</Card.Title>
          <Card.Text>
            This is a wider card with supporting text below as a natural lead-in
            to additional content. This content is a little bit longer.
          </Card.Text>
        </Card.Body>
        <Card.Footer>
          <Button className="text-muted">Buy now</Button>
        </Card.Footer>
      </Card>
      <Card>
        <Card.Img className='watch' variant="top" src="https://www.kindpng.com/picc/m/104-1041789_samsung-galaxy-watch-active2-hd-png-download.png" />
        <Card.Body>
          <Card.Title>WATCHES</Card.Title>
          <Card.Text>
            This card has supporting text below as a natural lead-in to
            additional content.{' '}
          </Card.Text>
        </Card.Body>
        <Card.Footer>
          <Button className="text-muted">Buy now</Button>
        </Card.Footer>
      </Card>
      <Card>
        <Card.Img className='belt' variant="top" src="https://pngimg.com/d/belt_PNG9592.png" />
        <Card.Body>
          <Card.Title>BELTS</Card.Title>
          <Card.Text>
            This is a wider card with supporting text below as a natural lead-in
            to additional content. This card has even longer content than the
            first to show that equal height action.
          </Card.Text>
        </Card.Body>
        <Card.Footer>
          <Button className="text-muted">Buy now</Button>
        </Card.Footer>
      </Card>
    </CardGroup>
   
        </>
        
    )
}
export default Categories