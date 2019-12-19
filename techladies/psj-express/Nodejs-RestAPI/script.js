const express = require ("express")//import express
const joi = require("Joi")// import Joi
const app =express() // Create instance of express application on the app variable

app.use(express.json()); //used the json file

//give data to the server
const customers = [
    {title: 'George', id: 1},
    {title: 'Josh', id: 2},
    {title: 'Tyler', id: 3},
    {title: 'Alice', id: 4},
    {title: 'Candice', id: 5}
    ]
   
    // read request handlers
    // display the message when url consists of '/'
    app.get('/',(req,res) => {
        res.send('welcome to Sample T=REST API!');
    });
    // display the message when url consists of api customers
    app.get('/api/customers', (req,res)=> {
        res.send(customers);
    }) ;
    // Display the information of Specific Customer when you mention the id 
    app.get('/api/customers/:id', (req,res) => {
        const customer = customers.find (c=> c.id== parseInt(req.params.id));
        //if there is no valid customer id then display an error
        if (!customer) res.sendStatus(404).send('<h2 style ="font-family: Malgun Goth"> res.send(customer)</h2>');
    });
//CREATE Request Handler
//CREATE New Customer Information
app.post('/api/customers', (req, res)=> {
 
    const { error } = validateCustomer(req.body);
    if (error){
    res.status(400).send(error.details[0].message)
    return;
    }
    //Increment the customer id
    const customer = {
    id: customers.length + 1,
    title: req.body.title
    };
    customers.push(customer);
    res.send(customer);
    });
     
    //Update Request Handler
    // Update Existing Customer Information
    app.put('/api/customers/:id', (req, res) => {
    const customer = customers.find(c=> c.id === parseInt(req.params.id));
    if (!customer) res.status(404).send('<h2 style="font-family: Malgun Gothic; color: darkred;">Not Found!! </h2>');
     
    const { error } = validateCustomer(req.body);
    if (error){
    res.status(400).send(error.details[0].message);
    return;
    }
     
    customer.title = req.body.title;
    res.send(customer);
    });
     
    //Delete Request Handler
    // Delete Customer Details
    app.delete('/api/customers/:id', (req, res) => {
 
        const customer = customers.find( c=> c.id === parseInt(req.params.id));
        if(!customer) res.status(404).send('<h2 style="font-family: Malgun Gothic; color: darkred;"> Not Found!! </h2>');
         
        const index = customers.indexOf(customer);
        customers.splice(index,1);
         
        res.send(customer);
        });
        //Validate Information
        function validateCustomer(customer) {
        const schema = {
        title: Joi.string().min(3).required()
        };
        return Joi.validate(customer, schema);
         
        }
         
        //PORT ENVIRONMENT VARIABLE
        const port = process.env.PORT || 8080;
        app.listen(port, () => console.log(`Listening on port ${port}..`));

    /// problem is joi - data validation -- find out owhy need data validatinm
    