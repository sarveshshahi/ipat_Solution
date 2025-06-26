import React from 'react';

const ContactForm = () => {

    return (
        <>
            <form method="post" action="/" id="contact-form">
                <div className="row gx-3">
                    <div className="form-group col-lg-12 col-md-12 col-sm-12">
                        <input type="text" name="full_name" placeholder="Your Name" required />
                    </div>

                    <div className="form-group col-lg-12 col-md-12 col-sm-12">
                        <input type="email" name="Email" placeholder="Email Name" required />
                    </div>

                    <div className="form-group col-lg-12 col-md-12 col-sm-12">
                        <input type="text" name="website" placeholder="Website" required />
                    </div>

                    <div className="form-group col-lg-12 col-md-12 col-sm-12">
                        <textarea name="message" placeholder="Your Comment" required defaultValue={"Your Comment"} />
                    </div>

                    <div className="form-group col-lg-12 col-md-12 col-sm-12">
                        <button className="theme-btn btn-style-one" type="submit" name="submit-form"><span className="btn-title">GET SOLUTION</span></button>
                    </div>
                </div>
            </form>
        </>
    );
};

export default ContactForm;