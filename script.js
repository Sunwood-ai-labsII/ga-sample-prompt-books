const prompts = [
    {
        title: "ブログ記事のアイデア出し",
        description: "新しいブログ記事のアイデアを10個生成します。",
        prompt: "新しいブログ記事のアイデアを10個考えてください。"
    },
    {
        title: "メールの件名作成",
        description: "マーケティングメールの件名を5個提案します。",
        prompt: "製品Xの発売に関するマーケティングメールの件名を5個提案してください。"
    },
    {
        title: "コードのリファクタリング",
        description: "指定されたコードをより効率的にリファクタリングします。",
        prompt: "以下のPythonコードをリファクタリングしてください：\n\n[コード]"
    },
    {
        title: "SNS投稿文の作成",
        description: "新機能に関するSNS投稿文を作成します。",
        prompt: "新機能Yについての魅力的なInstagram投稿文を作成してください。"
    }
];

const promptList = document.getElementById('prompt-list');
const searchBox = document.getElementById('search-box');

function displayPrompts(filteredPrompts) {
    promptList.innerHTML = '';
    filteredPrompts.forEach(prompt => {
        const card = document.createElement('div');
        card.className = 'prompt-card';
        card.innerHTML = `
            <h2>${prompt.title}</h2>
            <p>${prompt.description}</p>
        `;
        promptList.appendChild(card);
    });
}

searchBox.addEventListener('input', (e) => {
    const searchTerm = e.target.value.toLowerCase();
    const filteredPrompts = prompts.filter(prompt => 
        prompt.title.toLowerCase().includes(searchTerm) || 
        prompt.description.toLowerCase().includes(searchTerm)
    );
    displayPrompts(filteredPrompts);
});

displayPrompts(prompts);
