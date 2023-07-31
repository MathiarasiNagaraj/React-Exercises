import React from 'react'

const withAdvertisement = (WrappedComponent) => {
    const WithAdvertisement = (props) => {
        return (
            <WrappedComponent {...props} />

        )
    }
    return WithAdvertisement;
}

export default withAdvertisement