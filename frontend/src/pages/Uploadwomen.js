import React from 'react'
import { ToastContainer ,toast } from 'react-toastify';
import './uploadwomen.css'
import uploadbg from '../images/uploadbg.avif'
// import { Link } from 'react-router-dom';


const Uploadwomen = () => {

 const handleSubmit=(event)=>{

        event.preventDefault();
        
        const form=event.target;
        const title=form.title.value;
        const img=form.img.value;
        const des=form.des.value;
        const price=form.price.value;
        const quantity=1;

        if(title ==="" || img ==="" ||des==="" ||price==="")
        {
            toast.warn('fill Required ');
        }else{
            const watchs={title,img,des,price,quantity};
            // console.log(foods,"foods in object ");
            
            fetch('http://localhost:7003/uploadwomen',{
                method:"POST",
                headers:{
                    'Content-Type':'application/json'
                },
                body:JSON.stringify(watchs),
            })
          
            .then((data)=>{
                toast.success('added successfully');
                form.reset();
                window.location.href="/updatewomen"
            }
            )

        }

        }

  return (
    <>

            <div>
                <ToastContainer />
            <div className="fullscreen-wrapper">
           
  <div className="card upload6">
    <div className="card-body upload5">
      <form onSubmit={handleSubmit}>
        <h6>UPLOAD FOR WOMEN</h6>

        <div className="upload0">
          <label>TITLE</label>
          <input type="text" name="title" />
        </div>

        <div className="upload1">
          <label>IMAGE</label>
          <input type="img" name="img" />
        </div>

        <div className="upload3">
          <label>DES</label>
          <input type="text" name="des" />
        </div>

        <div className="upload4">
          <label>PRICE</label>
          <input type="number" name="price" />
        </div>

        <div className="upload7">
          <button type="submit" className="btn btn-dark">Upload</button>
        </div>
      </form>
    </div>
  </div>
</div>

    </div>
    
    
    </>
  )
}

export default Uploadwomen