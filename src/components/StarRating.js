import {Component} from 'react';
import PropTypes from 'prop-types';

import StarSvg from './StarSvg';
import {validateNumberOfStars} from '../validations'
import '../assets/sass/container.scss';

class StarRating extends Component {
  constructor() {
    super()

    this.state = {
      rating: 0,
      isSubmitted: false,
      disabledClass: ''
    }
  }

  changeRating = (newRating) => this.setState({ rating: newRating })

  isActive = (starId) => starId <= this.state.rating

  submitRating = (event) => {
    this.setState({
      isSubmitted: true,
      disabledClass: 'disabled'
    });

    setTimeout(() => {
      this.setState({ 
        isSubmitted: false,
        disabledClass: '',
        isNonInteractive: true
      })
    }  , 1);
  }
  
  render() {
    const {title, submitText, successMessage, numberOfStars} = this.props;
    const messageSubmit = this.state.isSubmitted ? 'fade-in' : 'fade-out';
    const isEditable = this.state.isSubmitted && 'disabled';

    const createStars = (numberOfStars) => {
      //creates an inversed array from integer number with 1-based index
      const starArray = Array.from( new Array(numberOfStars) , (val,index) => index+1 ).reverse();

      return starArray.map((starId) => <StarSvg key={starId} id={starId} isActiveCallBack={this.isActive} onClickCallback={this.changeRating} /> )
    }

    const getMainTemplate = () => {
      if(!this.state.isNonInteractive) {
        return (
          <div className={`container ${isEditable}`}>
            <div className="title">{title}</div>
            <div className="stars-container">
              {createStars(numberOfStars)}
            </div>

            <button disabled={this.state.disabledClass} type="button" onClick={this.submitRating} className="primary-button">
              { submitText }
            </button>
          </div>
        )
      } else {
        return (
          <div className="container non-interactive">
            <div className="rating-description"> Average Rating</div>
            <div className="stars-container">
              {createStars(numberOfStars)}
            </div>
          </div>
        )
      }
    }

    return (
      <div className="rating-component">
        <div className={`message-container ${messageSubmit} success`}>
          {successMessage}
        </div>
        {getMainTemplate()}
      </div>
    )
  }
}

StarRating.propTypes = {
  title: PropTypes.string,
  submitText: PropTypes.string,
  successMessage: PropTypes.string,
  numberOfStars: validateNumberOfStars
}

StarRating.defaultProps = {
  title: 'Rate this product',
  submitText: 'Apply',
  successMessage: 'Thanks for your rating',
  numberOfStars: (a, b, c) => console.log(a, b, c)
};

export default StarRating;