var React = require('react');


var Main = (props) => {
    return (
            <div>
                <div>
                    <div>
                    <p>Main Rendered</p>
                        {props.children}
                    </div>
                </div>
            </div>
        );
};


module.exports = Main;