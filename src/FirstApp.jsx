import PropTypes from 'prop-types';

export const FirstApp = ({title, subtitle}) => {
    //console.log(props);
    return (
        <>
            <h1> {title} </h1>
            {/**< </h1>  */}
            <p>{subtitle}</p>
        </>

    )
}
//Para poder agegarle tipado y que sea obligatorio mandar la propiedad
FirstApp.propTypes ={
    title: PropTypes.string.isRequired,
    subtitle: PropTypes.number.isRequired,
}
