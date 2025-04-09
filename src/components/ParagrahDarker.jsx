const ParagraphDarker = (props) => {
    return ( 
        <p className='text-xl font-medium max-w-5xl md:text-2xl md:max-w-2xl text-center text-darker'> {props.children}</p>
     );
}
 
export default ParagraphDarker;