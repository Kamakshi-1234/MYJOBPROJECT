const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');
const { MongoClient, ServerApiVersion, ObjectId } = require('mongodb');

dotenv.config();

const app = express();
const port = process.env.PORT || 3000;

// Middlewares
app.use(express.json());
app.use(cors());

// MongoDB URI from environment variable
const uri = process.env.MONGO_URI;

// Initialize MongoDB Client
const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  },
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

async function run() {
  try {
    // Connect to MongoDB
    await client.connect();

    const db = client.db("mernJobPortal");
    const jobsCollections = db.collection("demoJobs");
    const subscribersCollections = db.collection("subscribers");

    console.log("Connected to MongoDB!");

    // Route to post a new job
    app.post("/post-job", async (req, res) => {
      const body = req.body;
      body.createdAt = new Date();
      try {
        const result = await jobsCollections.insertOne(body);
        if (result.insertedId) {
          res.status(201).send({ acknowledged: true, message: 'Job posted successfully' });
        } else {
          res.status(500).send({ acknowledged: false, message: 'Job posting failed' });
        }
      } catch (error) {
        console.error("Error posting job:", error);
        res.status(500).send({ acknowledged: false, message: error.message });
      }
    });

    // Route to subscribe to job notifications
    app.post('/subscribe', async (req, res) => {
      const { email } = req.body;
      const newSubscriber = { email };
      try {
        const result = await subscribersCollections.insertOne(newSubscriber);
        if (result.insertedId) {
          res.status(201).send({ acknowledged: true, message: 'Subscribed successfully' });
        } else {
          res.status(500).send({ acknowledged: false, message: 'Subscription failed' });
        }
      } catch (error) {
        console.error("Error subscribing:", error);
        res.status(500).send({ acknowledged: false, message: error.message });
      }
    });

    // Route to get all jobs
    // Route to get paginated jobs
    app.get("/all-jobs", async (req, res) => {
      const page = parseInt(req.query.page) || 1;
      const limit = parseInt(req.query.limit) || 6;
      const skip = (page - 1) * limit;

      try {
        const jobs = await jobsCollections.find({})
          .skip(skip)
          .limit(limit)
          .toArray();
        res.send(jobs);
      } catch (error) {
        console.error("Error fetching jobs:", error);
        res.status(500).send({ message: error.message });
      }
    });

    // Route to get a single job by ID
    app.get("/all-jobs/:id", async (req, res) => {
      const id = req.params.id;
      try {
        const job = await jobsCollections.findOne({
          _id: new ObjectId(id),
        });
        if (job) {
          res.send(job);
        } else {
          res.status(404).send({ message: 'Job not found' });
        }
      } catch (error) {
        console.error("Error fetching job:", error);
        res.status(500).send({ message: error.message });
      }
    });

    // Route to get jobs posted by a specific user
    app.get("/my-jobs/:email", async (req, res) => {
      const email = req.params.email;
      try {
        const jobs = await jobsCollections.find({ postedBy: email }).toArray();
        res.send(jobs);
      } catch (error) {
        console.error("Error fetching user jobs:", error);
        res.status(500).send({ message: error.message });
      }
    });

    // Route to delete a job by ID
    app.delete("/job/:id", async (req, res) => {
      const id = req.params.id;
      try {
        const result = await jobsCollections.deleteOne({ _id: new ObjectId(id) });
        if (result.deletedCount === 1) {
          res.send({ message: 'Job deleted successfully' });
        } else {
          res.status(404).send({ message: 'Job not found' });
        }
      } catch (error) {
        console.error("Error deleting job:", error);
        res.status(500).send({ message: error.message });
      }
    });

    // Route to update a job by ID
    app.patch("/update-job/:id", async (req, res) => {
      const id = req.params.id;
      const jobData = req.body;
      try {
        const filter = { _id: new ObjectId(id) };
        const updateDoc = {
          $set: {
            ...jobData,
          },
        };
        const result = await jobsCollections.updateOne(filter, updateDoc);
        if (result.modifiedCount > 0) {
          res.send({ message: 'Job updated successfully' });
        } else {
          res.status(404).send({ message: 'Job not found or no changes made' });
        }
      } catch (error) {
        console.error("Error updating job:", error);
        res.status(500).send({ message: error.message });
      }
    });

    // Check MongoDB connection
    await client.db("admin").command({ ping: 1 });
    console.log("MongoDB connection is healthy!");
  } catch (error) {
    console.error("Database connection error:", error);
  } finally {
    // Uncomment the following line if you want to close the client after operations
    // await client.close();
  }
}

run().catch(console.error);

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
