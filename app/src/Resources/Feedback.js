import React from 'react'
import FeedBack from 'react-feedback-popup';

function Feedback() {
    return (
        <div>
            <FeedBack
                style={{ zIndex: '2', marginLeft: '20px', position: 'fixed' }}
                position="right"
                numberOfStars={5}
                headerText="Have Feedback? 📝?"
                bodyText="Need help? Have feedback? I'm a human so please be nice and I'll fix it!"
                buttonText="Feedback? ☝️"
                handleClose={() => console.log("handleclose")}
                handleSubmit={(data) =>
                    fetch('https://formspree.io/f/mkneredq', {
                        headers: {
                            Accept: 'application/json',
                            'Content-Type': 'application/json'
                        },
                        method: 'POST', // or 'PUT'
                        body: JSON.stringify(data),
                    }).then((response) => {
                        if (!response.ok) {
                            return Promise.reject('Our servers are having issues! We couldn\'t send your feedback!');
                        }
                        response.json()
                    }).then(() => {
                        alert('Success! thank you for valuable feedback');
                    }).catch((error) => {
                        alert('Our servers are having issues! We couldn\'t send your feedback!', error);
                    })
                }
                handleButtonClick={() => console.log("handleButtonClick")}

            />
        </div>
    )
}

export default Feedback