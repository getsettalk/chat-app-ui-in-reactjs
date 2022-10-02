import React from 'react'

const SentSMS = () => {
    return (
        <>
            <div className="send-box">
                <form action="">
                    <input type="text" className="form-control" aria-label="message…" placeholder="Write message…" />

                    <button type="button"><i className="fa fa-paper-plane" aria-hidden="true"></i> Send</button>
                </form>
            </div>
        </>
    )
}

export default SentSMS