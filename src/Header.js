import { Card, CardHeader } from 'reactstrap';
import React from 'react';

// const Styles = {
//     backgroundColor: 'tomato',
//     textAlign: 'center',
//     color: 'white',
// };
// const AppHeader = () => {
//     return (
//         <header style={Styles}>
//             <h1>Здесь у нас header</h1>
//         </header>
//     );
// };

const AppHeader = (props) => {
    return (
        <div>
            <Card color="success">
                <CardHeader class="text-center">
                    <span className="text-white">Тут у нас header</span>
                </CardHeader>
            </Card>
        </div>
    );
};
export default AppHeader;
