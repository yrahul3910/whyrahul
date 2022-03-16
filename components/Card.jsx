import React from "react";
import PropTypes from "prop-types";

export default class Card extends React.Component {
    constructor(props) {
        super(props);

        this.click = this.click.bind(this);
    }

    click(e) {
        // Toggle div visibility.
        e.currentTarget.parentElement.classList.toggle("active");
        e.currentTarget.nextSibling.classList.toggle("visible");
    }

    render() {
        let cName = (this.props.active ? "visible" : "");
        return <div className="card">
            <h2 className="card-title" id={this.props.title.replace(' ', '')} onClick={this.click}>
                {this.props.title}
            </h2>
            <div id={"div" + this.props.title.replace(' ', '')} className={cName}>{this.props.info}</div>
        </div>
    }
}

Card.propTypes = {
    title: PropTypes.string.isRequired,
    info: PropTypes.any.isRequired,
    active: PropTypes.bool
}