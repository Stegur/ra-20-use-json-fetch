import React from 'react'
import PropTypes from 'prop-types'
import useJsonFetch from '../hooks/useJsonFetch'

function WithError({ url, opts }) {

    const [data, loading, error] = useJsonFetch(url, opts);

    return (
        <div>
            <h3>Ошибка</h3>
            {error && <p>Ошибка: {error.message}</p>}
        </div>
    )
}

WithError.propTypes = {

}

export default WithError

