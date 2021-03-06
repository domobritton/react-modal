import React, { Component, Fragment } from 'react';
import styled from 'styled-components';

import { Toggle } from './Utilities';
import { Modal } from './Modal';

export default class ModalPage extends Component {

    modalItem = (on, toggle, select) => {
        return (
            <Modal on={on} toggle={toggle}>
                <h1>{`HELLO MODAL ${select}`}</h1>
            </Modal>   
        );
    }

  render() {
    return (
      <Wrapper>
        <Toggle>
            {({on, toggle, select}) => (
                <Fragment>
                    <Button onClick={toggle} value='ONE'>MODAL ONE</Button>
                    <Button onClick={toggle} value='TWO'>MODAL TWO</Button>
                    <Button onClick={toggle} value='THREE'>MODAL THREE</Button>
                    {this.modalItem(on, toggle, select)}
                </Fragment>
            )}
        </Toggle>
      </Wrapper>
    );
  }
};

const Wrapper = styled.div`
    position: relative;
    width: 100vw;
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-wrap: wrap;
    background: #232526;  /* fallback for old browsers */
    background: -webkit-linear-gradient(to left, #414345, #232526);  /* Chrome 10-25, Safari 5.1-6 */
    background: linear-gradient(to left, #414345, #232526); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */

    &:before {
        content:"";
        display: block;
        height: 100%;
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        background-image: url("https://transparenttextures.com/patterns/3px-tile.png");
        z-index: 0;
    }

    @media screen and (max-width: 600px) {
        flex-direction: column;
    }
`;

const Button = styled.button`
    position: relative;
    z-index: 0;
    margin: 30px;
    padding: 10px;
    background: #155799;
    border: 2px solid #155799;
    border-radius: 5px;
    font-size: 18px;
    font-weight: 900;
    color: white;
    outline: none;
    width: 120px;
    cursor: pointer;
    transition: all 250ms ease-in-out;

    &:hover {
        background: #1B5B96;
        box-shadow: 0 3px 6px rgba(0,0,0,0.16), 0 3px 6px rgba(0,0,0,0.23);
    }
`;
