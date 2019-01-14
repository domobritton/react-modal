import { Component } from 'react';

export default class Toggle extends Component {

    state = {
        on: false,
        select: ''
    }

    toggle = (e) => {
        e.preventDefault();
        const select = e.currentTarget.value;
        this.setState(prevState => ({
            on: !prevState.on,
            select
        }));
    }

  render() {
    const { children } = this.props;
    const { on, select } = this.state;

    return children({
        on,
        toggle: this.toggle,
        select
    });
  }
};
