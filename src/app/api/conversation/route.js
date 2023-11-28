import { NextResponse } from "next/server";
import { dummyAnswers } from './dummyAnswers';

const conversation = {};

// To handle a GET request to /api
export async function GET(request) {
  const url = new URL(request.url);
  console.log('url is', url.searchParams.get('id'));
  const id = url.searchParams.get('id');
  if (!conversation[id]) {
    conversation[id] = [];
  }
  // Do whatever you want
  return NextResponse.json({ conversation: conversation[id], userQuestions: conversation[id].filter(query => query.from === 'user').map(query => query.message[0].content) }, { status: 200 });
}
// To handle a POST request to /api
export async function POST(request) {
  const currentTimeStamp = Date.now();
  const data = await request.json();
  const id = data.id;
  if (!conversation[id]) {
    conversation[id] = [];
  }
  conversation[id].push({
    from: 'user',
    id: currentTimeStamp,
    message: [{
      type: 'text',
      content: data.question
    }]
  });
  conversation[id].push({ ...dummyAnswers[Math.floor(Math.random() * dummyAnswers.length)], id: currentTimeStamp });

  // Do whatever you want
  return NextResponse.json({ conversation: conversation[id], userQuestions: conversation[id].filter(query => query.from === 'user').map(query => query.message[0].content) }, { status: 200 });
}

