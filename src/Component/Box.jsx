import React from 'react'
import ChatBox from './ChatBox'
import MsgHead from './MsgHead'
import SentSMS from './SentSMS'

const Box = () => {
    return (
        <>
            <div className="chatbox">
                <div className="modal-dialog-scrollable">
                    <div className="modal-content delicate">
                        <MsgHead></MsgHead>

                        <div className="modal-body">
                            <ChatBox></ChatBox>
                        </div>

                        <SentSMS></SentSMS>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Box