const DivIcons = (props) => {
    return ( 
        <div className="border-2 border-darkPink flex flex-col gap-3 p-6 rounded-3xl w-full max-w-[350px]">
  {props.children}
</div>

     );
}
 
export default DivIcons;

