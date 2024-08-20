import React from "react";

const Test = () => {
    return(
        <div className="h-100 w-100 d-flex justify-content-center align-items-center bg-dark text-light">
            <div className="text-center">
                <h1 className="mb-5">Centered hero</h1>
                <div className="col-md-6 mx-auto">
                    <p>Quickly design and customize responsive mobile-first sites with Bootstrap, the world’s most popular front-end open source toolkit, featuring Sass variables and mixins, responsive grid system, extensive prebuilt components, and powerful JavaScript plugins.</p>
                    <div className="d-flex justify-content-center">
                        <button type="button" className="btn btn-primary me-5">Primary Button</button>
                        <button type="button" className="btn btn-outline-secondary">Secondary Button</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Test;