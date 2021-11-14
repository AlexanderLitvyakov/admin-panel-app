import React from "react";
import './PageHeader.css';

export const PageHeader = () => {
    return(
        <div className="page-header">
            <h1 className="page-header__text">Список заказов</h1>
            <button className="page-header__button page-header__button_transparent">
                <svg className="page-header__icon">
                    <use xlinkHref="#sun"></use>
                </svg>
                <span className="page-header__button__text">Cветлая тема</span>
            </button>
        </div>
    );
}