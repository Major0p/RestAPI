const mongoose = require('mongoose')

mongoose.connect("mongodb://localhost:27017/Mongo_Learn")

const productSchema = new mongoose.Schema(
    {
        name: String,
        age: Number
    }
);

const saveinDB = async () => {
    const productModel = mongoose.model('products', productSchema);
    let data = new productModel(
        { cast: 'gen', income: 200000, village: "gav" }
    );
    let result = await data.save();
    console.log(result);
}
// saveinDB()

const updateinDB = async () => {
    const productModel = mongoose.model('products', productSchema);
    let data = await productModel.updateOne(
        { name: "raj" }, { $set: { name: "chandNawab" } }
    );
    console.log(data)
}
// updateinDB();

const deleteinDB = async () => {
    const productModel = mongoose.model('products', productSchema);
    let data = await productModel.deleteOne({ name: 'chandNawab' });
    console.log(data)
}
// deleteinDB();

const findinDB = async () => {
    const productModel = mongoose.model('products', productSchema);
    let data = await productModel.find();
    console.log(data)
}
// findinDB();