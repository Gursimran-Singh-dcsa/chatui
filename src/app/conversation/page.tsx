'use client';
import QuestionInputBox from '@/Components/QuestionInputBox';
import { Button, Layout } from 'antd';
import './conversation.css';
import Image from 'next/image';
import Convo from '@/Components/Convo';
import dynamic from 'next/dynamic';
import { useEffect, useState } from 'react';

function Conversation() {
	return <Convo />;
}
// export default Conversation;
export default dynamic(() => Promise.resolve(Conversation), { ssr: false });
