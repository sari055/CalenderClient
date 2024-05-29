// import React, { useState } from 'react';
// import emailjs from 'emailjs-com';
// import SignIn from './sign-in';
// import Form from '../../components/form';
// import { TextField } from '@mui/material';
// import Button from '@mui/material/Button';


// const ForgotPasswordForm = () => {
//     const [email, setEmail] = useState('');
//     const [message, setMessage] = useState('');

//     const handleEmailChange = (e) => {
//         setEmail(e.target.value);
//     };

//     const handleMessageChange = (e) => {
//         setMessage(e.target.value);
//     };

//     const sendEmail = () => {
//         emailjs.send('service_fol9yxm', 'template_btsizbd', {
//             to_email: email,
//             message: message
//         }, '9lnpe8JYBTgh5EdNy')
//         .then((response) => {
//             console.log('Email sent successfully:', response.text);
//             // Handle success - e.g., display confirmation to the user
//         }, (error) => {
//             console.error('Error sending email:', error);
//             // Handle error - e.g., display error message to the user
//         });
//     };

//     return (
//         <SignIn>
//              <Form title="שליחת אימייל">
 
//         <div>
           
//             <TextField 
//               margin="normal"
//               required
//               fullWidth
//               id="email"
//               label="כתובת מייל"
//               name="email"
//               autoComplete="email"
//               autoFocus
//                 type="email"
//                 placeholder="Enter the recipient's email address"
//                 value={email}
//                 onChange={handleEmailChange}
//             />
//               <textarea
//                 placeholder="Enter your message"
//                 value={message}
//                 onChange={handleMessageChange}
//             />
//              <Button
//           type="submit"
//           fullWidth
//           variant="contained"
//           sx={{ mt: 3, mb: 2 }}
//           onClick={sendEmail}
//         >
//           שלח מייל
//         </Button>
           
//         </div>
//      </Form>
//         </SignIn>
//     );
// };

// export default ForgotPasswordForm;
import React, { useState } from 'react';
import emailjs from 'emailjs-com';
import SignIn from './sign-in';
import Form from '../../components/form';
import { TextField } from '@mui/material';
import Button from '@mui/material/Button';

const SendEmailForm = () => {
    const [recipientEmail, setRecipientEmail] = useState('');
    const [message, setMessage] = useState('');

    const handleRecipientEmailChange = (e) => {
        setRecipientEmail(e.target.value);
    };

    const handleMessageChange = (e) => {
        setMessage(e.target.value);
    };

    const sendEmail = () => {
        emailjs.send('service_fol9yxm', 'template_btsizbd',{
          recipientEmail,
          message
        } , '9lnpe8JYBTgh5EdNy')
        .then((response) => {
            console.log('Email sent successfully:', response.text);
            // Handle success - e.g., display confirmation to the user
        }, (error) => {
            console.error('Error sending email:', error);
            // Handle error - e.g., display error message to the user
        });
        console.log(recipientEmail)
    };

    return (
        <SignIn>
            <Form title="Send Email">
              
                    <TextField 
                        margin="normal"
                        required
                        fullWidth
                        id="recipient-email"
                        label="Recipient's Email Address"
                        name="recipient-email"
                        autoComplete="email"
                        autoFocus
                        type="email"
                        placeholder="Enter the recipient's email address"
                        value={recipientEmail}
                        onChange={handleRecipientEmailChange}
                    />
                    <TextField 
                        margin="normal"
                        required
                        fullWidth
                        id="message"
                        label="Message"
                        name="message"
                        multiline
                        rows={4}
                        placeholder="Enter your message"
                        value={message}
                        onChange={handleMessageChange}
                    />
                    <Button
                       // type="submit"
                        fullWidth
                        variant="contained"
                        sx={{ mt: 3, mb: 2 }}
                        onClick={sendEmail}
                    >
                        Send Email
                    </Button>
             
            </Form>
        </SignIn>
    );
};

export default SendEmailForm;
