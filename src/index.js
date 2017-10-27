import React from 'react';
import {render} from 'react-dom';

import StarRating from './components/StarRating';

window.React = React

render(<StarRating numberOfStars={5} />, document.getElementById('root'));
