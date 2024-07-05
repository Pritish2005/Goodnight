import React, { useEffect } from 'react';

function Chatbot() {
  useEffect(() => {
    const script = document.createElement('script');
    script.type = 'text/javascript';
    script.async = true;
    script.src = ('https:' === document.location.protocol ? 'https://' : 'http://') + 'cdn.chatbot.com/widget/plugin.js';
    
    // Add the script to the document
    const scriptTag = document.getElementsByTagName('script')[0];
    scriptTag.parentNode.insertBefore(script, scriptTag);
    
    // Set the ChatBot ID
    window.__be = window.__be || {};
    window.__be.id = "6687a677b35dde0007ceab73";

    return () => {
      // Cleanup function to remove the script if the component unmounts
      script.parentNode.removeChild(script);
    };
  }, []);

  return (
    <div>
      <noscript>
        You need to <a href="https://www.chatbot.com/help/chat-widget/enable-javascript-in-your-browser/" rel="noopener nofollow">enable JavaScript</a> in order to use the AI chatbot tool powered by <a href="https://www.chatbot.com/" rel="noopener nofollow" target="_blank">ChatBot</a>
      </noscript>
    </div>
  );
}

export default Chatbot;
