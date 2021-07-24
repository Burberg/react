import { Card, CardHeader } from 'reactstrap';
import React from 'react';

const AppHeader = (props) => {
    return (
        <React.Fragment>
            <Card color="success">
                <CardHeader className="text-center">
                    <span className="text-white">Тут у нас header</span>
                </CardHeader>
            </Card>
        </React.Fragment>
    );
};
export default AppHeader;
