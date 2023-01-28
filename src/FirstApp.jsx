import PropTypes from 'prop-types';

export const FirstApp = ({title, subtitle, name}) => {
    //console.log(props);
    return (
        <>
            <h1 data-testid="test-title">{title}</h1>
            {/**< </h1>  */}
            <p>{subtitle}</p>
            <p>{name}</p>
        </>

    )
}
//Para poder agegarle tipado y que sea obligatorio mandar la propiedad
FirstApp.propTypes ={
    title: PropTypes.string.isRequired,
    subtitle: PropTypes.string,
}

FirstApp.defaultProps ={
    //title: 'Hola camaron sin cola',
    subtitle: 'subtitulo1',
    name: 'Rodrigo Molina'
}
