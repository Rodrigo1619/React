import PropTypes from 'prop-types';

export const FirstApp = ({title, subtitle, name}) => {
    //console.log(props);
    return (
        <>
            <h1> {title} </h1>
            {/**< </h1>  */}
            <p>{subtitle}</p>
            <p>{name}</p>
        </>

    )
}
//Para poder agegarle tipado y que sea obligatorio mandar la propiedad
FirstApp.propTypes ={
    title: PropTypes.string.isRequired,
    subtitle: PropTypes.number,
}

FirstApp.defaultProps ={
    title: 'Hola camaron sin cola',
    subtitle: 123,
    name: 'Rodrigo Molina'
}
