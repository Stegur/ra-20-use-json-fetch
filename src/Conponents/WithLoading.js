import React from 'react'
import PropTypes from 'prop-types'
import useJsonFetch from '../hooks/useJsonFetch'

function WithLoading({ url, opts }) {

    const [data, loading, error] = useJsonFetch(url, opts);

    return (
        <div>
            <h3>Загрузка и Ок</h3>
            {loading && <p>Загрузка...</p> || error && <p>Ошибка: {error.message}</p> || data && <p>Данные: {data.status}</p>}
        </div>
    )
}

WithLoading.propTypes = {

}

export default WithLoading

