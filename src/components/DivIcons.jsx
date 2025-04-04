const DivIcons = (props) => {
    return ( 
        <div className="mt-6 xxl:mt8 border-2 round border-darkPink w-full max-w-[70%] md:max-w-[50%] lg:max-w-[40%] xl:max-w-[30%] xxl:max-w-[20%] flex flex-col gap-2 p-6 rounded-3xl ">
            {props.children}
        </div>
     );
}
 
export default DivIcons;