---
sidebar_position: 17
title: Single Theme
description: single theme chatbot example
keywords: [react, chat, chatbot, chatbotify]
---

# Single Theme

The following is an example of configuring the chatbot with a single `terminal` theme. You can experiment with various themes available for browsing at [**React ChatBotify Gallery**](https://gallery.react-chatbotify.com).

```jsx live noInline title=MyChatBot.js
const MyChatBot = () => {
	// necessary to embed the chatbot for it to show on the page
	const settings = {
		general: {
			embedded: true
		},
		chatHistory: {
			storageKey: "example_single_theme"
		},
	}

	// themes available for browsing at: https://gallery.react-chatbotify.com
	const themes = [
		{id: "terminal", version: "0.1.0"}
	]

	return (
		<ChatBot themes={themes} settings={settings}/>
	);
};

render(<MyChatBot/>)
```