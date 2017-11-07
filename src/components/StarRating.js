import React from 'react';
import { string } from 'prop-types';

import StarSvg from './StarSvg';
import {validateNumberOfStars} from '../validations'
import '../assets/sass/index.scss';

class StarRating extends React.Component {
  constructor() {
    super()

    this.state = {
      rating: 0,
      isConfirmationMessageVisible: false,
      disabledClass: ''
    }
  }

  changeRating = (newRating) => this.setState({ rating: newRating })

  isActive = (starId) => starId <= this.state.rating;

  submitRating = (event) => {
    this.setState({
      isConfirmationMessageVisible: true,
      disabledClass: 'disabled'
    });

    setTimeout(() => {
      this.setState({ 
        isConfirmationMessageVisible: false,
        disabledClass: '',
        isNonInteractive: true
      })
    }  , 3000);
  }
  
  render() {
    const {description, textButton, successMessage, numberOfStars} = this.props;
    const fadeEffectClass = this.state.isConfirmationMessageVisible ? 'fade-in' : 'fade-out';
    const isEditable = this.state.isConfirmationMessageVisible ? 'disabled' : '';
    const starArray = Array.from( new Array(numberOfStars) , (val,index) => index+1 ).reverse();

    const getMainTemplate = () => {
      const starsContainers =
        <div className="stars-container">
          { starArray.map((starId) =>
            <StarSvg key={starId} id={starId} isActiveCallBack={this.isActive} onClickCallback={this.changeRating} />)}
        </div>

      if(!this.state.isNonInteractive) {
        return (
          <div className={`container ${isEditable}`}>
            <div className="description">{description}</div>
            { starsContainers }
            <button disabled={this.state.disabledClass} type="button" onClick={this.submitRating} className="primary-button">
              { textButton }
            </button>
          </div>
        )
      } else {
        return (
          <div className="container non-interactive">
            <div className="rating-description"> Average Rating</div>
            { starsContainers }
          </div>
        )
      }
    }

    return (
      <div className="rating-component">
        <div className={`message-container ${fadeEffectClass} success`}>
          {successMessage}
        </div>
        {getMainTemplate()}
      </div>
    )
  }
}

StarRating.propTypes = {
  description: string,
  textButton: string,
  successMessage: string,
  numberOfStars: validateNumberOfStars
}

StarRating.defaultProps = {
  description: 'Rate this product',
  textButton: 'Apply',
  successMessage: 'Thanks for your rating!',
  numberOfStars: 5
};

export default StarRating;