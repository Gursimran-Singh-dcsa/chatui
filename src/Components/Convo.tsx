'use client';
import QuestionInputBox from '@/Components/QuestionInputBox';
import { Layout } from 'antd';
import '../app/conversation/conversation.css';
import Image from 'next/image';
import React, { useEffect, useState } from 'react';
import ChatMessage from '@/Components/ChatMessage';
import axios from 'axios';
import SidebarQues from './SidebarQue';
const Convo = () => {
	const { Sider, Header, Content, Footer } = Layout;
	const [allQuestions, setAllQuestions] = useState([]);
	const [fullConvo, setFullConvo] = useState([]);
	const [question, setQuestion] = useState('');

	const getConvo = () => {
		axios.get('/api/conversation?id=1').then((res) => {
			console.log('response is', res);
			setFullConvo(res.data.conversation);
			setAllQuestions(res.data.userQuestions);
		});
	};

	useEffect(() => {
		getConvo();
	}, []);

	useEffect(() => {
		if (question) {
			axios.post('/api/conversation', { question, id: 1 }).then((res) => {
				console.log('response is', res);
				setFullConvo(res.data.conversation);
				setAllQuestions(res.data.userQuestions);
			});
		}
	}, [question]);

	const dummy = {
		from: 'assistant',
		message: [
			{
				type: 'text',
				content:
					'Hi, This is dummy message irrespective of your question as I am an assignment chatbot\
        and my purpose is to show UI only with little idea of how backend should provide data',
			},
			{
				type: 'text',
				content: 'Let me show you how to remove duplicates from an array',
			},
			{
				type: 'code',
				codeLang: 'javascript',
				content: ['Array.from(new Set(arrayWithDuplicates))'],
			},
		],
	};
	return (
		<Layout style={{ height: '100vh', width: '100vw' }}>
			<Layout>
				<Header style={{ background: 'white' }}>
					<div style={{ display: 'flex' }}>
						<Image
							src={`/index.png`}
							alt="header Logo"
							width={50}
							height={50}
							priority
						/>
						<pre>{'   '}</pre>
						<span style={{ textAlign: 'center' }}>DUMMY CHAT UI</span>
					</div>
				</Header>
				<Layout>
					<Sider
						style={{
							background: '#F0F0F0',
							width: 300,
						}}
					>
						<div
							style={{
								display: 'flex',
								flexDirection: 'column',
								marginBottom: '5px',
							}}
						>
							<SidebarQues allQuestions={allQuestions} />
						</div>
					</Sider>
					<Content style={{ background: 'white' }}>
						<div style={{ padding: '2rem' }}>
							{fullConvo.map((que, index) => (
								<ChatMessage
									message={que}
									showAnimation={index === allQuestions.length - 1}
								/>
							))}
						</div>
						<QuestionInputBox setQuestion={setQuestion} />
					</Content>
				</Layout>
			</Layout>
		</Layout>
	);
};
export default Convo;
