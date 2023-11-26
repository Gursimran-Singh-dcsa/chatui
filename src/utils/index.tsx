'use client'
import { CopyBlock, vs2015 } from 'react-code-blocks';
import TypeIt from 'typeit-react';

export const GetText = ({msg, isCurrent}:{msg: any, isCurrent: boolean}) => {
	if (msg.type === 'code') {
		return (
			<CopyBlock
				language={msg.codeLang}
				theme={vs2015}
				text={msg.content.join('\n')}
				wrapLongLines
			/>
		);
	}
	if ((msg.type = 'text')) {
		if (isCurrent) {
			return <TypeIt options={{ strings: msg.content, speed: 1 }} />;
		}
		return msg.content;
	}
};
