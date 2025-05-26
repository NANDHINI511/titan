const express=require('express');
const cors=require('cors');

const app=express();
const port=7003;
app.use(cors());
app.use(express.json());

app.get("/gy",(req,res)=>{
    res.send("HI")
})


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
    // Send a ping to confirm a successful connection
    await client.db("admin").command({ ping: 1 });
    console.log("Pinged your deployment. You successfully connected to MongoDB!");
  } finally {
    // Ensures that the client will close when you finish/error
    // await client.close();
  }
}
run().catch(console.dir);

app.listen(port,()=>{
    console.log(`connected to ${port}`)
}
)

