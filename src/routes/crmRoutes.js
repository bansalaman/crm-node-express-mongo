const routes = (app) => {
    app.route('/contact')
    .get((req,res,next) => {
        //middleware
        console.log(`Request from: ${req.originalUrl}`)
        console.log(`Request from: ${req.method}`)
        next();        
    },(req,res,next) => {
        res.send('GET request successfull!!!!');
    })

    .post((req,res)=>
    res.send('POST request successfull...!!!'));

    //1st route
    // app.route('/contact')
    // .get((req,res) =>
    // res.send('GET request successfull!!!!'))

    // .post((req,res)=>
    // res.send('POST request successfull...!!!'));

    //2nd route
    app.route('/contact/:contactId')
    .put((req,res) =>
    res.send('PUT request successfull!!!!'))

    .delete((req,res)=>
    res.send('DELETE request successfull...!!!'));
}

export default routes;