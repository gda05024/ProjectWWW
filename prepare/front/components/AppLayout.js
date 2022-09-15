import PropTypes from 'prop-types';
import Link from 'next/link';
import { Menu, Input, Row, Col } from 'antd';
import { Component, useState } from 'react';
import LoginForm  from './LoginForm'
import UserProfile  from './UserProfile'
import styled from 'styled-components';

const SearchInput = styled(Input.Search)`vertical-align: middle; `;

const AppLayout = ({children}) => {
	const [isLoggedIn, setIsLoggedIn] = useState(false);
    return (
			<div>
				<Menu mode='horizontal'>
					<Menu.Item><Link href='/'><a href="">노드버드</a></Link></Menu.Item>
					<Menu.Item><Link href='/profile'><a href="">프로필</a></Link></Menu.Item>
					<Menu.Item><Link href='/signup'><a href="">회원가입</a></Link></Menu.Item>
					<Menu.Item>
			   			<SearchInput enterButton />
					</Menu.Item>
				</Menu>
				<Row gutter={8} >
					<Col xs={24} md={6}>
						{isLoggedIn ? <UserProfile setIsLoggedIn={setIsLoggedIn} /> : < LoginForm setIsLoggedIn={setIsLoggedIn}/>}
					</Col>
					<Col xs={24} md={12}>
						{children}
					</Col>
					<Col xs={24} md={6} >
						<a href="" target="_blank" rel="noreferrer noopener">Made by Yeni</a>
					</Col>
				</Row>
				
       </div>
    )
}

AppLayout.prototype = {
    children: PropTypes.node.isRequired,
};

export default AppLayout;