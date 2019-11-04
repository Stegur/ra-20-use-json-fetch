import React from 'react'
import PropTypes from 'prop-types'
import useJsonFetch from '../hooks/useJsonFetch'

function WithOk({ url, opts }) {

    const [data, loading, error] = useJsonFetch(url, opts);

    return (
        <div>
            <h3>Ок</h3>
            {loading && <p>Загрузка...</p>}
            {data && <p>Данные: {data.status}</p>}
        </div>
    )
}

WithOk.propTypes = {

}

export default WithOk

