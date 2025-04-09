const Paragraph = (props) => {
    return ( 
        <p className='text-xl font-medium max-w-5xl md:text-2xl md:max-w-2xl text-center text-white '> {props.children}</p>
     );
}
 
export default Paragraph;