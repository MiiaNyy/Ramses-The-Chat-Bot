import React, { useState } from 'react'

function ChatBot () {
    const [botOpen, setBotOpen] = useState(false);
    if ( botOpen ) {
        return (
            <iframe className="bot bot__open"
                    src={ `https://webchat.botframework.com/embed/RamsesPublish?s=glwKzQ2XH6g.XYIYmpuuUD8u8mChHEfKmbWi9kTT3k-ZmdmejviD2RU` }/>
        );
    } else {
        return <div onClick={() => setBotOpen(true)} className="bot bot__closed"/>
    }
    
    
}

export default ChatBot;
