import plate from './plate.png';

export default function createHome () {
  console.log('I am creating the home page!');

  /*
        will be changed to look at content ID, restricted to body for testing purposes
        generate the following inside body:
        <div id="body">
            <div id="header">
                <img src="../src/plate.png">
                <h1>Ken's Kitchen</h1>
                <img src="../src/plate.png">
            </div>
            <div id="info">
                <div>Description</div>
                <div>Hours</div>
                <div>Location</div>
            </div>
        </div>
  */

  const icon = new Image();
  const icon2 = new Image();
  icon.src = plate;
  icon2.src = plate;
        
  const content = document.getElementById('body');

  const header = document.createElement('div');
  const h1 = document.createElement('h1');
  const headerText = document.createTextNode("Ken's Kitchen");
  h1.appendChild(headerText);
  header.setAttribute('id', 'header');
  header.appendChild(icon);
  header.appendChild(h1);
  header.appendChild(icon2);
  content.appendChild(header);
}