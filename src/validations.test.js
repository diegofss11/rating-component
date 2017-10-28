import {validateNumberOfStars} from './validations';
import {expect} from 'chai';

describe('Validations', () => {
  let propName = undefined;
  let componentName = undefined;

  describe('Number of stars', () => {
    beforeEach( () => {
      propName = 'numberOfStars';
      componentName = 'StarComponent';
    })

    it('should accept 5', () => {
      let props = { numberOfStars: 5 };
      expect(validateNumberOfStars(props, propName, componentName)).to.be.null;
    });
  
    it('should not accept strings', () => {
      let props = { numberOfStars: '5' };
      expect(validateNumberOfStars(props, propName, componentName)).not.to.be.null
    });
  
    it('should not accept numbers higher than 7', () => {
      let props = { numberOfStars: 8 };
      expect(validateNumberOfStars(props, propName, componentName)).not.to.be.null;
    });
  })
});

