import '../styles/catagaries.css'
const Catagaries = () => {
let catagaries=[
    {link:"All"} ,
    {link:"Sports"} ,
    {link:"Comedy"} ,
    {link:"Movies"} ,
    {link:"Music"} ,
    {link:"Travel"} ,
    {link:"Food"} ,
    {link:"Gaming"} ,
    {link:"Kids"} , 
    {link:"Recently Uploaded"} 
]
    return ( 
        <div className="catagaries">
         <ul>
            {catagaries.map((data)=>{
                return(
                    <li><a href="">{data.link}</a></li>
                );
            })}
         </ul>
        </div>
     );
}
 
export default Catagaries;