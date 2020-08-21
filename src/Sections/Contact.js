import React from 'react';

const Contact = () => {

    return(
        <section id='Contact'>
            <div className='containerX'>
                <div className='row'>
                    <h2 className='col-xs-12 sectionTitle'>Contact Me</h2>
                    <p className='col-xs-12' style={{textAlign:'center'}}> You can contact me at <a href='mailto: andy.telliott@icloud.com'> andy.telliott@icloud.com</a>.</p>
                    <a className='col-xs-12 row center-xs' href='/linkedin.svg'>
                    <div >
                        <object data='/linkedin.svg' width='50px'>
                        </object>
                        </div>
                    </a>
                </div>

            </div>
        </section>
    )
}
export default Contact;