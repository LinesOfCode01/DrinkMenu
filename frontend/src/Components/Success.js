import React from 'react';
import { carousel } from 'react-bootstrap';

function Homes(props) {
  return (
    <div>
      <div className="Dranks">
        <div class="container">
          <div class="title">
            <h1>Dranks</h1>
            <h2>Choose Up to 3 Different Flavors</h2>
          </div>
        </div>

        <div
          class="btn-group"
          role="group"
          aria-label="Basic checkbox toggle button group"
        >
          <div class="row">
            <div class="col-lg-3 col-md-6 col-sm-12">
              <div className="card text-center">
                <img src="https://www.wetwillies.com/frozen_drinks_bar/img/drinks/WW-CALL-A-CAB.jpg" />
                <div class="card-body">
                  <input
                    type="checkbox"
                    class="btn-check"
                    id="btncheck1"
                    autocomplete="off"
                  />
                  <label class="btn btn-outline-primary" for="btncheck1">
                    Checkbox 1
                  </label>
                </div>
              </div>
            </div>
            <div class="col-lg-3 col-md-6 col-sm-12">
              <div className="card text-center">
                <img src="https://www.wetwillies.com/frozen_drinks_bar/img/drinks/WW-SHOCK-TREATMENT.jpg" />
                <div class="card-body">
                  <input
                    type="checkbox"
                    class="btn-check"
                    id="btncheck2"
                    autocomplete="off"
                  />
                  <label class="btn btn-outline-primary" for="btncheck2">
                    Checkbox 2
                  </label>
                </div>
              </div>
            </div>
            <div class="col-lg-3 col-md-6 col-sm-12">
              <div className="card text-center">
                <img src="https://www.wetwillies.com/frozen_drinks_bar/img/drinks/WW-GREEN-APPLE.jpg" />
                <div class="card-body">

                  <input
                    type="checkbox"
                    class="btn-check"
                    id="btncheck3"
                    autocomplete="off"
                  />
                  <label class="btn btn-outline-primary" for="btncheck3">
                    Checkbox 3
                  </label>
                </div>
              </div>
            </div>
            <div class="col-lg-3 col-md-6 col-sm-12">
              <div className="card text-center">
                <img
                  src="https://www.wetwillies.com/frozen_drinks_bar/img/drinks/WW-ATTITUDE-IMPROVEMENT.jpg"
                  class="card-img-top"
                />
                <div class="card-body">

                  <input
                    type="checkbox"
                    class="btn-check"
                    id="btncheck4"
                    autocomplete="off"
                  />
                  <label class="btn btn-outline-primary" for="btncheck4">
                    Checkbox 4
                  </label>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div class="row">
          <div class="col-lg-3 col-md-6 col-sm-12">
            <div className="card text-center">
              <img src="https://www.wetwillies.com/frozen_drinks_bar/img/drinks/WW-MONKEY-SHINE.jpg" />
              <div class="card-body">
                <button
                  type="button"
                  class="btn btn-outline-dark"
                  data-toggle="button"
                  aria-pressed="false"
                  autocomplete="off"
                >
                  Selected
                </button>
              </div>
            </div>
          </div>
          <div class="col-lg-3 col-md-6 col-sm-12">
            <div className="card text-center">
              <img src="https://www.wetwillies.com/frozen_drinks_bar/img/drinks/WW-MARGARITA.jpg" />
              <div class="card-body">
                <button
                  type="button"
                  class="btn btn-outline-dark"
                  data-toggle="button"
                  aria-pressed="false"
                  autocomplete="off"
                >
                  Selected
                </button>
              </div>
            </div>
          </div>
          <div class="col-lg-3 col-md-6 col-sm-12">
            <div className="card text-center">
              <img src="https://www.wetwillies.com/frozen_drinks_bar/img/drinks/WW-SEX-ON-THE-BEACH.jpg" />
              <div class="card-body">
                <button
                  type="button"
                  class="btn btn-outline-dark"
                  data-toggle="button"
                  aria-pressed="false"
                  autocomplete="off"
                >
                  Selected
                </button>
              </div>
            </div>
          </div>
          <div class="col-lg-3 col-md-6 col-sm-12">
            <div className="card text-center">
              <img
                src="https://www.wetwillies.com/frozen_drinks_bar/img/drinks/WW-STRAWBERRY.jpg"
                class="card-img-top"
              />
              <div class="card-body">
                <button
                  type="button"
                  class="btn btn-outline-dark"
                  data-toggle="button"
                  aria-pressed="false"
                  autocomplete="off"
                >
                  Selected
                </button>
              </div>
            </div>
          </div>
        </div>

        <div class="row">
          <div class="col-lg-3 col-md-6 col-sm-12">
            <div className="card text-center">
              <img src="https://www.wetwillies.com/frozen_drinks_bar/img/drinks/WW-PINA-COLADA.jpg" />
              <div class="card-body">
                <button
                  type="button"
                  class="btn btn-outline-dark"
                  data-toggle="button"
                  aria-pressed="false"
                  autocomplete="off"
                >
                  Selected
                </button>
              </div>
            </div>
          </div>
          <div class="col-lg-3 col-md-6 col-sm-12">
            <div className="card text-center">
              <img src="https://www.wetwillies.com/frozen_drinks_bar/img/drinks/WW-CHOCOLATE-THUNDER.jpg" />
              <div class="card-body">
                <button
                  type="button"
                  class="btn btn-outline-dark"
                  data-toggle="button"
                  aria-pressed="false"
                  autocomplete="off"
                >
                  Selected
                </button>
              </div>
            </div>
          </div>
          <div class="col-lg-3 col-md-6 col-sm-12">
            <div className="card text-center">
              <img src="https://www.wetwillies.com/frozen_drinks_bar/img/drinks/WW-WHITE-RUSSIAN.jpg" />
              <div class="card-body">
                <button
                  type="button"
                  class="btn btn-outline-dark"
                  data-toggle="button"
                  aria-pressed="false"
                  autocomplete="off"
                >
                  Selected
                </button>
              </div>
            </div>
          </div>
          <div class="col-lg-3 col-md-6 col-sm-12">
            <div className="card text-center">
              <img
                src="https://www.wetwillies.com/frozen_drinks_bar/img/drinks/WW-MONSTER-MELON.jpg"
                class="card-img-top"
              />
              <div class="card-body">
                <button
                  type="button"
                  class="btn btn-outline-dark"
                  data-toggle="button"
                  aria-pressed="false"
                  autocomplete="off"
                >
                  Selected
                </button>
              </div>
            </div>
          </div>
        </div>

        <div class="row">
          <div class="col-lg-3 col-md-6 col-sm-12">
            <div className="card text-center">
              <img src="https://www.wetwillies.com/frozen_drinks_bar/img/drinks/WW-MANGO.jpg" />
              <div class="card-body">
                <button
                  type="button"
                  class="btn btn-outline-dark"
                  data-toggle="button"
                  aria-pressed="false"
                  autocomplete="off"
                >
                  Selected
                </button>
              </div>
            </div>
          </div>
          <div class="col-lg-3 col-md-6 col-sm-12">
            <div className="card text-center">
              <img src="https://www.wetwillies.com/frozen_drinks_bar/img/drinks/WW-PEACH.jpg" />
              <div class="card-body">
                <button
                  type="button"
                  class="btn btn-outline-dark"
                  data-toggle="button"
                  aria-pressed="false"
                  autocomplete="off"
                >
                  Selected
                </button>
              </div>
            </div>
          </div>
          <div class="col-lg-3 col-md-6 col-sm-12">
            <div className="card text-center">
              <img src="https://www.wetwillies.com/frozen_drinks_bar/img/drinks/WW-NAKED-WILLIE.jpg" />
              <div class="card-body">
                <button
                  type="button"
                  class="btn btn-outline-dark"
                  data-toggle="button"
                  aria-pressed="false"
                  autocomplete="off"
                >
                  Selected
                </button>
              </div>
            </div>
          </div>
          <div class="col-lg-3 col-md-6 col-sm-12">
            <div className="card text-center">
              <img
                src="https://www.wetwillies.com/frozen_drinks_bar/img/drinks/WW-SUGAR-FREE-CALL-A-CAB.jpg"
                class="card-img-top"
              />
              <div class="card-body">
                <button
                  type="button"
                  class="btn btn-outline-dark"
                  data-toggle="button"
                  aria-pressed="false"
                  autocomplete="off"
                >
                  Selected
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Homes;
