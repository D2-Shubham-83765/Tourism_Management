import React from 'react';

function ContactUs() {
    const handleSubmit = () => {
        // This function could handle form submission logic if needed
        console.log('Form submitted');
    };

    return (
        <div style={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            minHeight: '100vh', // Use minHeight for full viewport height
            flexDirection: 'column', // Stack items vertically
            textAlign: 'center', // Center text horizontally
            backgroundImage: `url('https://th.bing.com/th/id/R.68aecc196d9f0d49a064c0abcb26a8ec?rik=MFgYaGALFB7emg&riu=http%3a%2f%2fs1.bwallpapers.com%2fwallpapers%2f2014%2f01%2f24%2fbeach-1920x1080-wallpaper_105248535.jpg&ehk=ktGlbuzqNtJVMv70JBb%2fboKPQOZT9E1OS7GGUNfWlS8%3d&risl=&pid=ImgRaw&r=0')`, // Replace with your image URL
            backgroundSize: 'cover', // Cover the entire background
            backgroundPosition: 'center', // Center the background image
        }}>
            <div style={{ marginTop: '50px' }}>
                <h2>CONTACT US</h2>
            </div>

            {/* Additional box */}
            <div style={{ display: 'flex', alignItems: 'center', marginTop: '20px', marginLeft: '-600px' }}>
            
                <div style={{marginLeft:'-300px',font:'-moz-initial'}}>
                    <h5>Contact-Us Today</h5>
                </div>
               
                
                <div style={{ flex: '10' }}></div>

                <div style={{ flex: '5', textAlign: 'center', marginRight: '-900px' }}>
                    <div style={{ backgroundColor: '#f0f0f0', padding: '10px', borderRadius: '25px' }}>
                        <h4>Additional Info</h4>
                        <p>1. Contact Information <br/>
                            2. Contact Form <br/>
                            3. Frequently Asked Questions (FAQs)<br/>
                            4. Feedback Section<br/>
                            5. Accessibility Options<br/>
                            6. Emergency Contact Information<br/>
                            7. Privacy Policy and Terms of Service</p>
                        
                    </div>
                    
                </div>
                
            </div>

            <div style={{
                display: 'flex',
                justifyContent: 'flex-start',
                width: '100%',
                maxWidth: '400px', // Adjust width as needed
                marginTop: '20px', // Add margin to separate from heading
            }}>
                <div style={{ marginLeft: '-270px', marginTop: '-50px' }}>
                    <h5>Call</h5>
                    <p>1234567890</p>
                </div>
                <div style={{ marginLeft: '-300px', marginTop: '-50px' }}>
                    <h5>Email</h5>
                    <p>abc@gmail.com</p>
                </div>
            </div>

            <div style={{ marginTop: '50px', textAlign: 'center', maxWidth: '400px' }}>
                <h2 style={{ color: 'white' }}>Want us to call you</h2>
                <form onSubmit={(e) => { e.preventDefault(); handleSubmit(); }}>
                    <div style={{ marginBottom: '10px' }}>
                        <label style={{ marginRight: '10px' }}>Name:</label>
                        <input type="text" placeholder="Enter your name" />
                    </div>
                    <div style={{ marginBottom: '10px' }}>
                        <label style={{ marginRight: '10px' }}>MobNo:</label>
                        <input type="text" placeholder="Enter your mobile no" />
                    </div>
                    <div style={{ marginBottom: '10px' }}>
                        <label style={{ marginRight: '10px' }}>Email:</label>
                        <input type="email" placeholder="Enter your email" />
                    </div>
                    <button type="submit">Request Call</button>
                </form>
            </div>

        </div>
    );
}

export default ContactUs;
