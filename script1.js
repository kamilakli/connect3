import React from 'react';
import ReactDOM from 'react-dom';

import {App} from './src/scripts/App';

const kamila = {
    name: 'Kamila',
    age: 14
}
ReactDOM.render(
<App user={kamila} />,
document.getElementById("kamilatest")
);



