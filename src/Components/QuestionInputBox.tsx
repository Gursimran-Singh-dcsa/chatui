'use client';
import { Input, Row } from 'antd';
import { SendOutlined } from '@ant-design/icons';
import { useState } from 'react';
const QuestionInputBox = ({ setQuestion }: { setQuestion: Function }) => {
	const [que, setQue] = useState('');
	return (
		<Row style={{ justifyContent: 'center', height: '2rem' }}>
			<Input
				className="userInput"
				placeholder="Ask Anything"
				value={que}
				onChange={(e) => {
					setQue(e.target.value);
				}}
				onPressEnter={() => {
					setQuestion(que.trim());
					setQue('');
				}}
				// prefix={<UserOutlined className="site-form-item-icon" />}
				suffix={
					<SendOutlined
						style={{ color: 'rgba(0,0,0,.45)', cursor: 'pointer' }}
						onClick={() => {
							setQuestion(que.trim());
							setQue('');
						}}
					/>
				}
			/>
		</Row>
	);
};
export default QuestionInputBox;
