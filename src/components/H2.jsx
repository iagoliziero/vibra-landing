const H2 = (props) => {
    return (
        <h1 className='text-2xl md:text-3xl mt-8 xxl:text-4xl font-darker text-center font-bold text-darkPink  xxl:text-[3rem]'>
            {props.children}
        </h1>
      );
}
 
export default H2;