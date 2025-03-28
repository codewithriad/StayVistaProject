const express = require("express");
const app = express();
require("dotenv").config();
const cors = require("cors");
const cookieParser = require("cookie-parser");
const { MongoClient, ServerApiVersion, Db } = require("mongodb");
const jwt = require("jsonwebtoken");
const morgan = require("morgan");
const port = process.env.PORT || 8000;

// middleware
const corsOptions = {
  origin: ["http://localhost:5173", "http://localhost:5174"],
  credentials: true,
  optionSuccessStatus: 200,
};

app.use(cors(corsOptions));
app.use(express.json());
app.use(cookieParser());
app.use(morgan("dev"));

// verifyToken
// const verifyToken = async (req, res, next) => {
//   const token = req.cookies?.token;
//   console.log(token);
//   if (!token) {
//     return res.status(401).send({ message: "unauthorized access" });
//   }
//   jwt.verify(token, process.env.ACCESS_TOKEN_SECRET, (err, decoded) => {
//     if (err) {
//       console.log(err);
//       return res.status(401).send({ message: "unauthorized access" });
//     }
//     req.user = decoded;
//     next();
//   });
// };




const client = new MongoClient(process.env.DB_URI, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  },
});
// testing for github
async function run() {
  try {
    const usersCollection = client.db('StayVistaProject').collection('stayVista');

    // auth related api

    app.post('/jwt', async (req, res) => {
      try {
        // get users from body
        const user = req.body;
        console.log('I am a jwt', user);

        //generate a jwt token with secure and expiration time
        const token = jwt.sign(user, process.env.ACCESS_TOKEN_SECRET, {
          expiresIn: "365d",
        })

        // set token in http only cookie
        res.cookie('token', token, {
          httpOnly: true,
          secure: process.env.NODE_ENV === 'production',
          sameSite: process.env.NODE_ENV === 'production' ? 'none' : 'strict',
          maxAge: 365 * 24 * 60 * 60 * 1000,
        })
        // now sent success response
        res.status(200).send({ message: "JWT created successfully" });
        
      } catch (error) {
        console.error('JWT generation failed', error);
        res.status(500).send({ message: "JWT generation failed" });
      }
    })
    
    app.put("/users/:email", async (req, res) => {
      const email = req.body.email;
      const user = req.body;
      const query = { email: email };
      const options = { upsert: true };
      // const isExist = await client.db("StayVista").collection("users").findOne(query);
      const isExist = await usersCollection.findOne(query);
      console.log('User fount ----------->', isExist);
      if (isExist) return res.send(isExist);
      const result = await usersCollection.updateOne(
        query,
        {
          $set: { ...user, timestamp: Date.now() },
        },
        options
      );
      res.send(result);
    });

    await client.connect();

    await client.db("admin").command({ ping: 1 });
    console.log(
      "Pinged your deployment. You successfully connected to MongoDB!"
    );
  } finally {
    // await client.close();
  }
}
run().catch(console.dir);

app.get("/", (req, res) => {
  res.send("Hello from StayVista Server..");
});

app.listen(port, () => {
  console.log(`StayVista is running on port ${port}`);
});
