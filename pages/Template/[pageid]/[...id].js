import {useRouter} from 'next/router';


const TemplateData = () => {
  
  const router = useRouter();
  const {pageid, id} = router.query;
 return (
   <>
     <div style={{ minHeight: "10rem", backgroundColor: "#fff", width: "95%" }}>
       {id?
       <iframe
         src={
           `https://suryanshpsurya.github.io/${pageid}/${id}`
             ? `https://suryanshpsurya.github.io/${pageid}/${id}`
             : null
         }
       ></iframe>:"no found"}
      
     </div>
   </>
 );
}

export default TemplateData
