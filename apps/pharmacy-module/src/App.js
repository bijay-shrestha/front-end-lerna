import React from 'react';

import {CForm} from '@cogent/ui-components';
import FormControlComponents from "./FormControlComponents";
// import config from 'config';

function App() {
    // const SERVER_DOMAIN = config.get('host') + (config.has('port') ? (":" + config.get('port')) : "");
    // console.log("Server ", SERVER_DOMAIN);
    return (
        <div>
            <CForm
                id="test"
                children={<FormControlComponents/>}
                noValidate={true}
                validated={true}
                onSubmit={() => console.log()}
            />
        </div>
    );
}

export default App;
