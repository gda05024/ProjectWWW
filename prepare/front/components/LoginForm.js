import React, { useCallback, useState } from 'react';
import { Form, Input, Button } from 'antd';
import Link from 'next/link';
import styled from 'styled-components';
import useInput from '../hooks/userInput';
import { useDispatch } from 'react-redux';
import {loginAction} from '../reducers/user';

const FormWarpper = styled(Form)`
padding:10px;
`;
const LoginForm = () => {
	const dispatch = useDispatch();
	const [id, onChangeId] = useInput('');
	const [password, onChangePassword] = useInput("");

	const onsubmitForm = useCallback(()=> {
		console.log(id, password);
		dispatch(loginAction({id, password}));
		setIsLoggedIn(true);
	},[id,password])

	const ButtonWrapper = styled.div `margin-top: 10px`;
    return (
			<FormWarpper onFinish={onsubmitForm}>
				<div>
					<label htmlFor="user-id">아이디</label>
					<br/>
					<Input name="user-id" value={id} onChange={onChangeId} required />
				</div>
				<div>
					<label htmlFor="user-password">비밀번호</label>
					<br/>
					<Input name="user-password" type={password} value={password} onChange={onChangePassword} required />
				</div>

				<ButtonWrapper >
					<Button type="primary" htmlType="submit" loading={false}>로그인</Button>
					<Link href="/signup"><a href=""><Button>회원가입</Button></a></Link>
				</ButtonWrapper>
			</FormWarpper>
    )

};

export default LoginForm;