const express = require('express')
const ex = express();
const path = require('path');

require('./connectDB');
const ms = require('./ms');

ex.use(express.json());

// ex.post('/post', async (req, res) => {
//     let data = new ms(req.body)
//     let result = await data.save()
//     console.log(req.body)
//     res.send(result)
// })

// ex.get('/get', async (req, res) => {
//     let data = await ms.find();
//     res.send(data);
//     console.log(data)
// });

// ex.delete('/delete/:_id',async (req,res)=>{
//     console.log(req.params)
//     let data = await ms.deleteOne(req.params)
//     res.send(data)
// })

// ex.put('/update/:_id', async (req, res) => {
//     console.log(req.params);
//     let data = await model_schema.updateOne(req.params, { $set: req.body });
//     res.send(data);
// });

ex.listen(45000);

