import React from 'react'
import "../css/Form.css"

const Form = () => {
    return (
        <div className="form-container">
            <h1>Form</h1>
            <form>
                <input type="text" name="name" id="name" placeholder="name" />
                <input type="number" name="age" id="age" placeholder="age"/>
                <textarea name="bio" id="bio" placeholder="Bio Description"></textarea>
                <button type="submit">Submit</button>
            </form>
        </div>
    )
}

export default Form
