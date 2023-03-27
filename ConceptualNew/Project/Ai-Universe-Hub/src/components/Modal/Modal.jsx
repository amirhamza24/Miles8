import React from 'react';

const Modal = (props) => {
    console.log(props.singleData);
    const { image_link, description, integrations, features } = props.singleData
    // console.log(integrations);
    // console.log(Object.values(features || {}))
    
    return (
        <>
            <input type="checkbox" id="my-modal-5" className="modal-toggle" />
            <div className="modal">
                <div className="modal-box w-11/12 max-w-5xl">
                    <div className="card lg:card-side bg-base-100">
                        <div className="card-body border-2 border-error mr-2">
                            <h2 className="card-title">
                                {description ? description : "Not Found."}
                            </h2>

                            <div className="flex justify-between">
                                <div>
                                    <h1 className="font-bold text-xl">
                                        Features
                                    </h1>

                                    {
                                        Object.values(features || {}).map((value) => <p>{value.feature_name ? value.feature_name : "Not Found."}</p>)
                                    }
                                </div>

                                <div>
                                    <h1 className="font-bold text-xl">
                                        Integrations
                                    </h1>
                                </div>
                            </div>
                            
                        </div>

                        <figure className='w-full'>
                            <img className='w-full h-96' src={image_link && image_link[0]} alt="Album" />
                        </figure>
                    </div>

                    <div className="modal-action">
                        <label htmlFor="my-modal-5" className="btn">
                            Yay!
                        </label>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Modal;