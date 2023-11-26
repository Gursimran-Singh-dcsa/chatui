'use client';
import { useState } from 'react';
import { CopyBlock, vs2015 } from 'react-code-blocks';
import TypeIt from 'typeit-react';
const ChatMessage = ({
	message,
	showAnimation,
}: {
	message: any;
	showAnimation: boolean;
}) => {
	const [typeItIndex, setTypeItIndex] = useState<number>(0);
	return message.from === 'user' ? (
		<div className={`${message.from}_message chatMessage`}>
			{message.message[0].content}
		</div>
	) : (
		<div className={`${message.from}_message chatMessage`}>
			<TypeIt
				options={{
					speed: 1,
					waitUntilVisible: true,
					cursorChar: '',
				}}
			>
				{message.message.map((msg: any) => {
					if (msg.type === 'code') {
						return (
							<div style={{ width: '100%', marginBottom: '1rem' }}>
								<CopyBlock
									language={msg.codeLang}
									theme={vs2015}
									text={msg.content.join('\n')}
									wrapLongLines
								/>
							</div>
						);
					}
					return (
						<div style={{ width: '100%', marginBottom: '1rem' }}>
							{msg.content}
						</div>
					);
				})}
			</TypeIt>
		</div>
	);
	// return (
	// 	<div className={`${message.from}_message chatMessage`}>
	// 		{/* <Test/> */}
	// 		{message.from === 'assistant'
	// 			? message.message.map(async (msg: any, index: number) => {
	// 					return (
	// 						<div style={{ width: '100%' }}>
	// 							{' '}
	// 							{index === typeItIndex ? (
	// 								msg.type === 'text' ? (
	// 									<TypeIt
	// 										options={{
	// 											afterComplete: () => {
	// 												setTypeItIndex((prev: number) => prev + 1);
	// 											},
	// 											speed: 1,
	// 										}}
	// 									>
	// 										{' '}
	// 										{msg.content}
	// 									</TypeIt>
	// 								) : msg.type === 'code' ? (
	// 									<TypeIt
	// 										options={{
	// 											afterComplete: () => {
	// 												setTypeItIndex((prev: number) => prev + 1);
	// 											},
	// 											speed: 1,
	// 										}}
	// 									>
	// 										<CopyBlock
	// 											language={msg.codeLang}
	// 											theme={vs2015}
	// 											text={msg.content.join('\n')}
	// 											wrapLongLines
	// 										/>
	// 									</TypeIt>
	// 								) : (
	// 									msg.content
	// 								)
	// 							) : index < typeItIndex ? (
	// 								msg.type === 'code' ? (
	// 									<CopyBlock
	// 										language={msg.codeLang}
	// 										theme={vs2015}
	// 										text={msg.content.join('\n')}
	// 										wrapLongLines
	// 									/>
	// 								) : (
	// 									msg.content
	// 								)
	// 							) : null}
	// 						</div>
	// 					);
	// 			  })
	// 			: message.message[0].content}
	// 	</div>
	// );
};
export default ChatMessage;
