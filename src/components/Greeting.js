
import React from 'react';

const Greeting = (props) => {
    return (
        <p>{props.message}</p>
    );
};


const message =
    <h5>
        Love Plants, but don't know how to select the right one's for your home and garden?
        <br />
        <br />
        This app will help you choose based on things such as lighting, level of care, indoor plants / outdoor plants, etc...
    </h5>;



export default function App() {
    return (
        <div>
            <Greeting message={message} />
        </div>
    );
}







// export default Greeting;
