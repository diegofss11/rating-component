import React from 'react';
import {render} from 'react-dom';

import StarRating from './components/StarRating';

window.React = React

render(<StarRating numberOfStars={10} />, document.getElementById('root'));
