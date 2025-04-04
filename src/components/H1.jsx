const H1 = (props) => {
    return (
        <h1 className='text-3xl md:text-4xl mt-8 xxl:text-5xl font-darker text-center font-bold text-darkPink  xxl:text-[3rem]'>
            {props.children}
        </h1>
      );
}
 
export default H1;