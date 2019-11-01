import React from 'react'
import PropTypes from 'prop-types'
import useJsonFetch from '../hooks/useJsonFetch'

function WithError({ url, opts }) {

    const [data, loading, error] = useJsonFetch(url, opts);

    return (
        <div>
            <h3>Ошибка</h3>
            {loading && <p>Загрузка...</p> || error && <p>Ошибка: {error.message}</p> || data && <p>Данные: {data.status}</p>}
        </div>
    )
}

WithError.propTypes = {

}

export default WithError

