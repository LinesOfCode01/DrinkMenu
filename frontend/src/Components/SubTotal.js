import React from 'react';
import CreateYourOwn from './CreateYourOwn';

function SubTotal(props) {
  return (
    <div>
      <div>
        <button
          className="btn btn-warning"
          type="button"
          data-bs-toggle="offcanvas"
          data-bs-target="#offcanvasRight"
          aria-controls="offcanvasRight"
        >
          Preview Cart
        </button>
      </div>
      <div
        className="offcanvas offcanvas-end"
        tabindex="-1"
        id="offcanvasRight"
        aria-labelledby="offcanvasRightLabel"
      >
        <div className="offcanvas-header">
          <h5 id="offcanvasRightLabel">Offcanvas right</h5>
          <p>Cart</p>
          <button
            type="button"
            className="btn-close text-reset"
            data-bs-dismiss="offcanvas"
            aria-label="Close"
          ></button>
          <div className="offcanvas-body">...</div>
        </div>
      </div>
    </div>
  );
}

export default SubTotal;
