import React from 'react';

class Icon extends React.Component {
    render() {
        return <span className={`fa fa-${this.props.name}`}></span>;
    }
}

export default Icon;