import React from "react";
import css from "./Input.module.css";

class Input extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            value: ""
        };
    }

    handleChange = event => {
        const { value } = event.target;
        this.setState(state => ({ value }));
    };

    handleSubmit = event => {
        event.preventDefault();
        if (!this.state.value.trim()) {
            return;
        }
        this.props.onSearch(this.state.value);
        this.setState(state => ({
            value: ""
        }));
    };

    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <input
                    type="text"
                    placeholder="search for a city"
                    className={css.input}
                    value={this.state.value}
                    onChange={this.handleChange}
                />
            </form>
        );
    }
}

export default Input;
