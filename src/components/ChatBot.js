import React, { useState } from 'react'

function ChatBot () {
    const [botOpen, setBotOpen] = useState(false);
    
    if ( botOpen ) {
        
        return (
            <div className="bot bot__open">
                <i onClick={ () => setBotOpen(false) } className="fas fa-times chat__close"/>
                <iframe
                    src={ `https://webchat.botframework.com/embed/RamsesPublish?s=glwKzQ2XH6g.XYIYmpuuUD8u8mChHEfKmbWi9kTT3k-ZmdmejviD2RU` }/>
            </div>
        );
    } else {
        return (
            <div onClick={ () => setBotOpen(true) } className="bot bot__closed">
                <i className="far fa-comment-dots"/>
            </div>
        )
    }
    
}

export default ChatBot;
