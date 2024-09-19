---
sidebar_position: 6
title: FAQ
description: content describing chatbot faq
keywords: [react, chat, chatbot, chatbotify]
---

# Frequently Asked Questions (FAQ)

The following contains some frequently asked questions. If you have questions that are not answered below, feel free to reach out on [**discord**](https://discord.gg/6R4DK4G5Zh) for more assistance. Alternatively, you may also open an issue on [**github**](https://github.com/tjtanjin/react-chatbotify/issues).

#### Q1) Why I am seeing duplicate messages on starting the chatbot?

If you notice duplicate messages on start and are on React 18 and above, it could be due to the use of **StrictMode**. Refer to this [**github issue**](https://github.com/tjtanjin/react-chatbotify/issues/5) for more details.

#### Q2) I would like to integrate this with my own API to answer questions in a loop, how can I create this?

If you're looking to use your own API, then the [**smart conversation**](/docs/examples/smart_conversation) example is likely what you're looking to use. If you are specifically looking to stream your responses, then you may also be interested in the [**real-time stream**](/docs/examples/real_time_stream) example.

#### Q3) I am experiencing issues viewing the chatbot on mobile, how can I fix this?

If you're using a version below 1.2.0 of React ChatBotify, there are known view issues on certain mobile devices and browsers. Check that you are on a later version and should the issue persist, please do not hesitate to raise an issue on [**github**](https://github.com/tjtanjin/react-chatbotify/issues).

#### Q4) I would like to stream my responses from the bot instead of sending messages as a whole, how can I do this?

There are 2 approaches to this. If you are streaming your responses from a backend (e.g. from LLM models), then the [**real-time stream**](/docs/examples/real_time_stream) example will be relevant to you. Otherwise, if you're just looking to simulate streaming of your messages, then you may take a look at the [**simulated stream**](/docs/examples/simulated_stream) example.

#### Q5) My messages are not streaming even though I have set simStream to true, why?

For streaming messages, ensure you're on at least **version 1.3.0**. That said, it is always recommended to update to the latest version.

#### Q6) My messages are appearing in parallel or are misordered and messy, why?

It is likely you're using `params.injectMessage` or `params.streamMessage`. Do note that both these functions are `async` so you should use `await` on them for your desired behavior.

#### Q7) I have audio toggled on but my bot only reads out certain messages or not at all, why?

Check if your messages are being sent with [**real-time stream**](/docs/examples/real_time_stream). Audio is currently **not supported** for such messages (still works fine for [**simulated stream**](/docs/examples/simulated_stream))

#### Q8) I am using NextJS and running into `ReferenceError: window is not defined...` errors, how can I fix this?

Since NextJS is a server-side rendering framework, the window object may not be available immediately. To resolve this, load the ChatBot lazily. Refer to code snippet below for an example:

```jsx
"use client";
import { lazy, Suspense, useEffect, useState } from "react";

const ChatBot = lazy(() => import("react-chatbotify"));

export default function Home() {
  const [isLoaded, setIsLoaded] = useState(false);
  useEffect(() => {
    setIsLoaded(true);
  }, [])

  return (
    <>
    {isLoaded && (
      <Suspense fallback={<div>Loading...</div>}>
        <ChatBot />
      </Suspense>
    )}
    </>
  );
}
```

#### Q9) I'm using custom hooks but values/functions don't seem to be working (e.g. messages/paths arrays are empty), why?

A common pitfall for experiencing such issues is importing custom hooks in components not nested within `ChatBotProvider`. More information about this can be found in the [**API documentation for hooks**](/docs/api/hooks).
