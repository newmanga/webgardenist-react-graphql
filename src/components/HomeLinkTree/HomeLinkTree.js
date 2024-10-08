import React, {Component} from "react";
import {LinkList} from "./LinkList"
import './HomeLinkTree.css'
import styled from "styled-components/macro";
import mainLogo from './../../kingGardenistLogo.png';

import {HeaderSection} from '../Common/Header';

const HeaderWrapper = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    justify-content:center;
    align-items: center;
    overflow: hidden;
    position: relative;
`;

const ButtonsWrapper = styled.div`
    width: 85%;
    max-width: 30rem;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: left;
    margin-bottom: 50px;
`;

const HeaderButton = styled.button`
    width: 100%;
    border-style: solid;
    border-width: 0px;
    border-radius: 50px;
    box-shadow: 5px 5px 10px -3px #000;
    display: flex;
    align-items: center;
    justify-content: left;
    background-color: #4c956c;
    position: relative;
    z-index: 1;
    padding: 0.5rem;
    &:hover {
        background-color: var(--main-color);
    }
`;


class HomeLinkTree extends Component {
    constructor(props) {
        super(props)
        this.state = { matches: window.matchMedia("(max-width: 960px)").matches };
      }
    
      componentDidMount() {
        const handler = e => this.setState({matches: e.matches});
        window.matchMedia("(max-width: 960px)").addEventListener('change', handler);
      }

    render() {
        return(
            <HeaderSection>
                <HeaderWrapper>
                    <ButtonsWrapper>
                        <img src={mainLogo} className="Logo"/>
                        <div className="Slogan">
                            <h1>Stikers made for</h1>
                            <h1>nature lovers!</h1>
                        </div>
                        {LinkList.map((item,index)=> {
                            return (
                                <div className="MediaLink">
                                    <a href={item.url}>
                                        <HeaderButton>
                                            <img className="LinkBtnImg" src={item.imgSrc} />
                                            <div className="LinkBtnTitle" >
                                                {item.title}
                                            </div>
                                        </HeaderButton>
                                    </a>
                                    
                                </div>
                            )
                        })}
                    </ButtonsWrapper>
                </HeaderWrapper>
            </HeaderSection>
        )
    }
}

export default HomeLinkTree

/*
            <nav className="Links">
                    <div className="test">
                        <img className="Header-Img" src={headerImage}></img>
                    
                    
                        <ul className="Links-list">
                            {LinkList.map((item,index)=> {
                                return (
                                    <div className="Link">
                                        <a href={item.url}>
                                            <button className="LinkBtn">
                                                <img className="LinkBtnImg" src={item.imgSrc} />
                                                <div className="LinkBtnTitle" >
                                                    {item.title}
                                                </div>
                                            </button>
                                        </a>
                                        
                                    </div>
                                )
                            })}
                        </ul>
                    </div>
                

                
            </nav>

*/