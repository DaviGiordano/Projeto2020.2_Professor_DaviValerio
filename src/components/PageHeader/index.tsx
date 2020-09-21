import React from 'react';

import LogoImg from "../../assets/images/logo.svg";
import backIcon from "../../assets/images/icons/back.svg";
import { Link } from 'react-router-dom';
import "./styles.css";
interface PageHeaderProps {
    title: string;
    description?: string;
}

const PageHeader: React.FC<PageHeaderProps> = (props) => { //função do tipo const. Para tipagem
    return(
        <header className="page-header">
        <div className="top-bar-container">
            <Link to="/">
                <img src={backIcon} alt="Voltar"/>
            </Link>
            <img src={LogoImg} alt="Proffy"/>
        </div>
       
       <div className="header-content">
           <strong>{props.title} </strong>
            {props.description && <p>{props.description}</p> }

           {props.children}
       </div>
    </header>
    );

}

export default PageHeader;