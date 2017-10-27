// import StarSvg from './assets/svgs/star.svg';
import './assets/sass/index.scss';

export const StarRating = () => (
  <div class="rating-component">
    <div class="message-container success">
      Thank you for your rating!
    </div>
    <div class="container">
      <div class="title">Rate this product</div>
      <div class="stars-container">
        <input id="star-3" type="checkbox" />
        <label for="star-3">
          {/* MOVE TO A DIFFERENT FILE (COMPONENT?) */}
          <svg class="star-wrapper" viewBox="0 0 28 25">
            <defs></defs>
            <g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
              <g class="star">
                <g>
                  <polygon points="13.7903195 20.25 5.26743333 24.4217294 6.89515974 15.5858647 -1.42108547e-14 9.32827058 9.52887641 8.03913529 13.7903195 0 18.0517626 8.03913529 27.580639 9.32827058 20.6854792 15.5858647 22.3132056 24.4217294"></polygon>
                </g>
              </g>
            </g>
          </svg>
        </label>

        <input id="star-2" type="checkbox" />
        <label for="star-2">
          {/* <StarSvg /> */}
        </label>

        <input id="star-1" type="checkbox" />
        <label for="star-1">
          {/* <StarSvg /> */}
        </label>
      </div>

      <button type="button" class="primary-button">
        Apply
      </button>
    </div>
  </div>
)