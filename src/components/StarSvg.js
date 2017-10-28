import PropTypes from 'prop-types';

import '../assets/sass/star.scss';

const StarSvg = ({id, onClickCallback, isActiveCallBack}) => {
  const isActive = isActiveCallBack(id);
  const activeClass = isActiveCallBack(id) && 'active';
  
  return (
    <svg id={`star-${id}`} tabIndex={id} className={`star-wrapper ${activeClass}`} viewBox="0 0 28 25" onClick={() => onClickCallback(id)}>
      <defs></defs>
      <g stroke="none" strokeWidth="1" fillRule="evenodd">
        <g className="star">
          <g>
            <polygon points="13.7903195 20.25 5.26743333 24.4217294 6.89515974 15.5858647 -1.42108547e-14 9.32827058 9.52887641 8.03913529 13.7903195 0 18.0517626 8.03913529 27.580639 9.32827058 20.6854792 15.5858647 22.3132056 24.4217294"></polygon>
          </g>
        </g>
      </g>
    </svg>
  )
}

StarSvg.propTypes = {
  id: PropTypes.number
}

export default StarSvg;
