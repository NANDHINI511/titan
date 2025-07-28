const express=require('express');
const cors=require('cors');
const jwt=require('jsonwebtoken');
const  bcrypt=require('bcryptjs');
const app=express();
const port=7003;
app.use(cors());
app.use(express.json());

app.get("/gy",(req,res)=>{
    res.send("HI")
}) 

const users=[];
const secretKey='Paris143';


const { MongoClient, ServerApiVersion,ObjectId } = require('mongodb');
const uri = "mongodb+srv://nandhini5nov94:rAgTR6ksVX6MlW16@cluster0.wnz7mdf.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";

// Create a MongoClient with a MongoClientOptions object to set the Stable API version
const client = new MongoClient(uri, {
  serverApi: { 
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  }
});

async function run() {
  try {
    // Connect the client to the server	(optional starting in v4.7)
    await client.connect();
    
const watch=client.db("titan").collection("men");
const womens=client.db("titan").collection("women");
const smart=client.db("titan").collection("smartwatch");
// single crud
// For creating a product
app.post("/products", async (req, res) => {
  const data = req.body;
  await watch.insertOne(data);
  res.send(data);
});

// For getting all products
app.get("/products", async (req, res) => {
  const result = await watch.find().toArray();
  res.send(result);
});

// For updating a product
app.put("/products/:id", async (req, res) => {
  const id = req.params.id;
  const updatedData = req.body;
  await watch.updateOne({ _id: new ObjectId(id) }, { $set: updatedData });
  res.send(updatedData);
});

// For deleting a product
app.delete("/products/:id", async (req, res) => {
  const id = req.params.id;
  await watch.deleteOne({ _id: new ObjectId(id) });
  res.send({ message: "Deleted" });
});






// men api
    app.post("/upload",async(req,res)=>{
        const data=req.body;
        const result=await watch.insertOne(data);
        res.send(result);
    })
   
    app.get("/update",async(req,res)=>{
        const wrist=watch.find();
        const result=await wrist.toArray();
        res.send(result);
    })

    app.get("/updatebyid/:id",async(req,res)=>{
      const id=req.params.id;
      const filter={_id:new ObjectId(id)};
      const result=await watch.findOne(filter);
      res.send(result);
    })
   
    app.patch("/allproductwatch/:id",async(req,res)=>{
     
        const id=req.params.id;
        const updateWristdata=req.body;
        const filter={_id:new ObjectId(id)};

        const updateDoc={
            $set:{
                ...updateWristdata
            },
        }
        const options ={upsert:true};
        const result=await watch.updateOne(filter,updateDoc,options);
        res.send(result);
    })

    app.delete('/deletewatch/:id',async(req,res)=>{
        const id=req.params.id;
        console.log(id)
        const filter={_id:new ObjectId(id)};
        const result=await watch.deleteOne(filter);
        res.status(200).json({success:true , message:"data deleted successfully", result});
    })

//women api
    app.post("/uploadwomen",async(req,res)=>{
        const data=req.body;
        const result=await womens.insertOne(data);
        res.send(result);
    })
   
    app.get("/updatewomen",async(req,res)=>{
        const wrist=womens.find();
        const result=await wrist.toArray();
        res.send(result);
    })

    app.get("/updatewomenbyid/:id",async(req,res)=>{
      const id=req.params.id;
      const filter={_id:new ObjectId(id)};
      const result=await womens.findOne(filter);
      res.send(result);
    })
   
    app.patch("/allproductwomen/:id",async(req,res)=>{
     
        const id=req.params.id;
        const updateWristdata=req.body;
        const filter={_id:new ObjectId(id)};

        const updateDoc={
            $set:{
                ...updateWristdata
            },
        }
        const options ={upsert:true};
        const result=await womens.updateOne(filter,updateDoc,options);
        res.send(result);
    })

    app.delete('/deletewomen/:id',async(req,res)=>{
        const id=req.params.id;
        console.log(id)
        const filter={_id:new ObjectId(id)};
        const result=await watch.deleteOne(filter);
        res.status(200).json({success:true , message:"data deleted successfully", result});
    })

//smartwatch api
    app.post("/uploadsmart",async(req,res)=>{
        const data=req.body;
        const result=await smart.insertOne(data);
        res.send(result);
    })
   
    app.get("/updatesmart",async(req,res)=>{
        const wrist=smart.find();
        const result=await wrist.toArray();
        res.send(result);
    })

    app.get("/updatesmartbyid/:id",async(req,res)=>{
      const id=req.params.id;
      const filter={_id:new ObjectId(id)};
      const result=await smart.findOne(filter);
      res.send(result);
    })
   
    app.patch("/allproductsmart/:id",async(req,res)=>{
     
        const id=req.params.id;
        const updateWristdata=req.body;
        const filter={_id:new ObjectId(id)};

        const updateDoc={
            $set:{
                ...updateWristdata
            },
        }
        const options ={upsert:true};
        const result=await smart.updateOne(filter,updateDoc,options);
        res.send(result);
    })

    app.delete('/deletesmart/:id',async(req,res)=>{
        const id=req.params.id;
        console.log(id)
        const filter={_id:new ObjectId(id)};
        const result=await smart.deleteOne(filter);
        res.status(200).json({success:true , message:"data deleted successfully", result});
    })


    // Send a ping to confirm a successful connection
    await client.db("admin").command({ ping: 1 });
    console.log("Pinged your deployment. You successfully connected to MongoDB!");
  } finally {
    // Ensures that the client will close when you finish/error
    // await client.close();
  }
}

run().catch(console.dir);
// Register route
app.post('/register',async(req,res)=>{
    const {username,password}=req.body;
    const hashedPassword= await bcrypt.hash(password,10);
    users.push({username,password:hashedPassword});
    res.sendStatus(201);
    console.log("User registered Successfully")
})

// Login route
app.post('/login',async(req,res)=>{
    const {username,password}=req.body;
    const user=users.find((us)=>us.username===username)
    if(user){
       const isValiduser=await bcrypt.compare(password,user.password,);
       if(isValiduser){
            const token=await jwt.sign({username},secretKey,{expiresIn:'1hr'})
            res.json({ token });
            console.log("login Successfully");
       }else{
            res.status(401).json({message:'Invalid Credential,since Password Does not match'})
       }

    }else{
      res.status(401).json({message:'Invalid Credential,since User Not Found,SignUp to Login plz'})
    }
})

app.listen(port,()=>{
    console.log(`connected to ${port}`)
}
)

