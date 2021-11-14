import React from "react";

import './Filter.css';

export const  Filter = () => {
    return(
<div className="filter">
    <div className="filter__wrapper">
        <div className="filter__group">
            <form className="filter__form">
                <label className="filter__searchbar-group">
                    <div className="filter__searchbar-field filter__searchbar-field_empty">
                        <div className="filter__searchbar-search-area">
                            <svg className="filter__searchbar-icon filter__searchbar-icon_active">
                                <use xlinkHref="#search"></use>
                            </svg>
                            <input className="filter__searchbar-area" placeholder="Номер заказа или ФИО" />  
                        </div>
                        <button className="filter__searchbar-button">
                            <svg className="filter__searchbar-icon">
                                <use xlinkHref="#incorrect"></use>
                            </svg>
                        </button>
                    </div>
                </label>

                <button className="filter-button">
                    <svg className="filter-button__icon">
                        <use xlinkHref="#filter"></use>
                    </svg>
                    <span className="filter-button__text">Фильтры</span>
                </button>

                <button className="filter-button filter-button_no-icon">
                    <span className="filter-button__text">Сбросить фильтры</span>
                </button>
            </form>

            <div className="filter__loader">
                <svg className="filter__loader-icon">
                    <use xlinkHref="#refresh"></use>
                </svg>
                <span className="filter__loader-text">Загрузка</span>
            </div>
        </div>
    </div>
    <div className="filter__wrapper">
        <form className="filter__form">
            <div className="filter__input">
                <label className="filter__input-control">
                    <span className="filter__input-title">Дата оформления</span>
                    <div className="filter__input-field filter__input-field_empty">
                        <input className="filter__input-area" placeholder="dd.mm.dddd" value="20.01.2021" />
                        <button className="filter__input-button">
                            <svg className="filter__input-icon filter__input-icon_incorrect">
                                <use xlinkHref="#incorrect"></use>
                            </svg>
                        </button>
                    </div>
                </label>  

                <label className="filter__input-control">
                    <div className="filter__input-field filter__input-field_empty">
                        <input className="filter__input-area" placeholder="dd.mm.dddd" />
                        <button className="filter__input-button">
                            <svg className="filter__input-icon">
                                <use xlinkHref="#incorrect"></use>
                            </svg>
                        </button>
                    </div>
                </label>
            </div>

            <div className="filter__input">
                <ul className="filter__dropdown-list">

                    <li className="filter__dropdown-item">
                        <label className="filter__dropdown-control">
                            <div className="filter__dropdown-checkbox-group">
                                <input type="checkbox" className="filter__dropdown-checkbox" />
                                <svg className="filter__dropdown-icon">
                                    <use xlinkHref="#checkmark"></use>
                                </svg>
                            </div>
                            <span className="filter__dropdown-item-title">Новый</span>      
                        </label>
                    </li>

                    <li className="filter__dropdown-item">
                        <label className="filter__dropdown-control">
                            <div className="filter__dropdown-checkbox-group">
                                <input type="checkbox" className="filter__dropdown-checkbox" />
                                <svg className="filter__dropdown-icon">
                                    <use xlinkHref="#checkmark"></use>
                                </svg>
                            </div>
                            <span className="filter__dropdown-item-title">Расчет</span>      
                        </label>
                    </li>

                    <li className="filter__dropdown-item">
                        <label className="filter__dropdown-control">
                            <div className="filter__dropdown-checkbox-group">
                                <input type="checkbox" className="filter__dropdown-checkbox" />
                                <svg className="filter__dropdown-icon">
                                    <use xlinkHref="#checkmark"></use>
                                </svg>
                            </div>
                            <span className="filter__dropdown-item-title">Подтвержден</span>      
                        </label>
                    </li>

                    <li className="filter__dropdown-item">
                        <label className="filter__dropdown-control">
                            <div className="filter__dropdown-checkbox-group">
                                <input type="checkbox" className="filter__dropdown-checkbox" />
                                <svg className="filter__dropdown-icon">
                                    <use xlinkHref="#checkmark"></use>
                                </svg>
                            </div>
                            <span className="filter__dropdown-item-title">Отложен</span>      
                        </label>
                    </li>

                    <li className="filter__dropdown-item">
                        <label className="filter__dropdown-control">
                            <div className="filter__dropdown-checkbox-group">
                                <input type="checkbox" className="filter__dropdown-checkbox" />
                                <svg className="filter__dropdown-icon">
                                    <use xlinkHref="#checkmark"></use>
                                </svg>
                            </div>
                            <span className="filter__dropdown-item-title">Выполнен</span>      
                        </label>
                    </li>

                    <li className="filter__dropdown-item">
                        <label className="filter__dropdown-control">
                            <div className="filter__dropdown-checkbox-group">
                                <input type="checkbox" className="filter__dropdown-checkbox" />
                                <svg className="filter__dropdown-icon">
                                    <use xlinkHref="#checkmark"></use>
                                </svg>
                            </div>
                            <span className="filter__dropdown-item-title">Отменен</span>      
                        </label>
                    </li>                             
                </ul>
                <label className="filter__input-control">
                    <span className="filter__input-title">Статус заказа</span>
                    <div className="filter__input-field filter__input-field_empty filter__input-field_long">
                        <input className="filter__input-area" placeholder="Выберите статус заказа" value="Любой" />
                        <button className="filter__input-button">
                            <svg className="filter__input-icon filter__input-icon_drop">
                                <use xlinkHref="#v_arrow"></use>
                            </svg>
                        </button>
                    </div>
                </label>
            </div>

            <div className="filter__input">
                <label className="filter__input-control">
                    <span className="filter__input-title">Сумма заказа</span>
                    <div className="filter__input-field filter__input-field_empty filter__input-field_short">
                        <input className="filter__input-area" placeholder="" value="5000" />
                        <button className="filter__input-button">
                            <svg className="filter__input-icon filter__input-icon_incorrect">
                                <use xlinkHref="#incorrect"></use>
                            </svg>
                        </button>
                    </div>
                </label>  

                <label className="filter__input-control">
                    <div className="filter__input-field filter__input-field_empty filter__input-field_short">
                        <input className="filter__input-area" placeholder="₽" />
                        <button className="filter__input-button">
                            <svg className="filter__input-icon">
                                <use xlinkHref="#incorrect"></use>
                            </svg>
                        </button>
                    </div>
                </label>
            </div>

            <button className="filter-button filter-button_no-icon filter-button_short">
                <span className="filter-button__text">Применить</span>
            </button>

        </form>
    </div>
</div>    
    )
}