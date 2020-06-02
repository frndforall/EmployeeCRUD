import React, { useState, useRef } from 'react';
import Popover from 'react-bootstrap/Popover';
import OverlayTrigger from 'react-bootstrap/OverlayTrigger'
import Button from 'react-bootstrap/Button';
import Overlay from 'react-bootstrap/Overlay';

function UserData(props) {
    
    const [show, setShow] = useState(false);
    const [target, setTarget] = useState(null);
    const ref = useRef(null);
  
    const handleClick = (event) => {
      setShow(!show);
      setTarget(event.target);
    };

    return (
        <div ref={ref}>
          <Button onClick={handleClick}><strong>React Demo</strong></Button>
          <Overlay
            show={show}
            target={target}
            placement="bottom"
            container={ref.current}
          >
            <Popover id="popover-contained">
              <Popover.Title as="h3">{props.user.name}</Popover.Title>
              <Popover.Content>
                <strong>{props.user.email}</strong>
                <strong>{props.user.info}</strong>
              </Popover.Content>
            </Popover>
          </Overlay>
        </div>
      );
}
  

  export default UserData;