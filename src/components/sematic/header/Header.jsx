import React from 'react';
import './header.scss';
import { useState } from "react";
function Dropdown() {
	const [isActive, setIsActive] = useState(false);
	return (
		<div className="dropdown">
			<div className="dropdown-btn"></div>
		</div>
	)
}


export function Header() {
	return (
		<>
			<header className="header">
				<div className="container">
					<div className="header__content conrent">
						<div className="content__nav">
							<ul>
								<li className="content__nav__menu"><a href="#">Каталог</a></li>
								<li className="content__nav__menu"><a href="#">Акции</a></li>
								<li className="content__nav__menu"><a href="#">Популярные товары</a></li>
								<li className="content__nav__menu"><a href="#">Новинки</a></li>
								<li className="content__nav__menu"><a href="#">Новости</a></li>
								<li className="content__nav__menu"><a href="#">О компании</a></li>
								<li className="content__nav__menu"><a href="#">Контакты</a></li>
							</ul>
						</div>
						<div className="content__contacts">
							<div className="content__contacts__mailto">
								<a href="mailto:info@Kanzler.kg">info@Kanzler.kg</a>
							</div>
							<div className="content__contacts__tell">

							</div>
						</div>
					</div>
				</div>
			</header>
		</>
	)
}

export default Header;
