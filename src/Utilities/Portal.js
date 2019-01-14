import { Component } from 'react'
import ReactDOM from 'react-dom';

const portalRoot = document.getElementById('portal');

export default class Portal extends Component {

    // create
    constructor() {
        super();
        this.el = document.createElement('div');
    }

    // append
    componentDidMount = () => {
        portalRoot.appendChild(this.el);
    }
    // remove
    componentWillUnmount = () => {
        portalRoot.removeChild(this.el);
    }

    // lift out of the DOM hierarchy
    render() {
        const { children } = this.props;
        return ReactDOM.createPortal(children, this.el);
    }
}