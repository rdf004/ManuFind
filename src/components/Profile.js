import React from 'react';
import InputTags from './InputTags';

class Profile extends React.Component {

    constructor(props) {
        super(props);

        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleSubmit(event) {
        alert('A name was submitted: ' + this.state.value);
        event.preventDefault();
    }

    render() {

        return (
            <div className="profile-form-div">
                <form className="profile-form">

                    <label className="field">
                        <p>First Name</p>
                        <input type="text" name="first-name" />
                    </label>

                    <label className="field">
                        <p>Last Name</p>
                        <input type="text" name="last-name" />
                    </label>

                    <label className="field">
                        <p>Last Name</p>
                        <input type="text" name="last-name" />
                    </label>
                    
                    <label className="field">
                        <p>Skills</p>
                        <div className="inputtags">
                            <InputTags className="input-tags"/>
                        </div>
                    </label>

                    <div>

                    </div>

                    <input type="submit" value="Submit" className="submit-button" />

                </form>
            </div>
        );

    }

}

export default Profile;