export const dummyAnswers = [
  {
    from: 'assistant',
    message: [
      {
        type: "text",
        content: "Hi, This is dummy message irrespective of your question as I am an assignment chatbot\
        and my purpose is to show UI only with little idea of how backend should provide data"
      },
      {
        type: "text",
        content: "Let me show you how to remove duplicates from an array"
      },
      {
        type: "code",
        codeLang: 'javascript',
        content: ["Array.from(new Set(arrayWithDuplicates));"]
      },
    ]
  },
  {
    from: 'assistant',
    message: [
      {
        type: "text",
        content: "Hi, This is dummy message irrespective of your question as I am an assignment chatbot\
        and my purpose is to show UI only with little idea of how backend should provide data"
      },
      {
        type: "text",
        content: "Let me show you how to remove an element (from last) in an array"
      },
      {
        type: "code",
        codeLang: 'javascript',
        content: ["let yourArray = [1,2,3];", "yourArray.pop();", "console.log(yourArray);// [1,2]"]
      },
      {
        type: "text",
        content: "Let me show you how to remove an element (from start) in an array"
      },
      {
        type: "code",
        codeLang: 'javascript',
        content: ["let yourArray = [1,2,3];", "yourArray.shift();", "console.log(yourArray);// [2,3]"]
      },
    ]
  },
  {
    from: 'assistant',
    message: [
      {
        type: "text",
        content: "Hi, This is dummy message irrespective of your question as I am an assignment chatbot\
        and my purpose is to show UI only with little idea of how backend should provide data"
      },
      {
        type: "text",
        content: "Let me show you how to create Promsie "
      },
      {
        type: "code",
        codeLang: 'javascript',
        content: ["const p = () =>  new Promise((resolve, reject) => {// resolve or reject})"]
      },
    ]
  },
];
