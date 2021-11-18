var tea = require('../models/tea');
// List of all teas

// for a specific tea.
exports.tea_detail = function(req, res) {
res.send('NOT IMPLEMENTED: tea detail: ' + req.params.id);
};
// Handle tea create on POST.

// Handle tea delete form on DELETE.
exports.tea_delete = function(req, res) {
res.send('NOT IMPLEMENTED: tea delete DELETE ' + req.params.id);
};
// Handle tea update form on PUT.
exports.tea_update_put = function(req, res) {
res.send('NOT IMPLEMENTED: tea update PUT' + req.params.id);
};

// List of all teas
exports.tea_list = async function(req, res) {
    try{
    theteas = await tea.find();
    res.send(theteas);
    }
    catch(err){
    res.status(500);
    res.send(`{"error": ${err}}`);
    }
    };
    // Handle tea create on POST.
exports.tea_create_post = async function(req, res) {
    console.log(req.body)
    let document = new tea();
    // We are looking for a body, since POST does not have query parameters.
    // Even though bodies can be in many different formats, we will be picky
    // and require that it be a json object
    // {"tea_type":"goat", "cost":12, "size":"large"}
    document.Flavor = req.body.Flavor;
    document.color = req.body.color;
    document.price = req.body.price;
    try{
    let result = await document.save();
    res.send(result);
    }
    catch(err){
    res.status(500);
    res.send(`{"error": ${err}}`);
    }
    };
    // VIEWS
// Handle a show all view
exports.tea_view_all_Page = async function(req, res) {
    try{
    theteas = await tea.find();
    res.render('tea', { title: 'tea Search Results', results: theteas });
    }
    catch(err){
    res.status(500);
    res.send(`{"error": ${err}}`);
    }
    };

    // for a specific tea. 
    exports.tea_detail = async function(req, res) { 
    console.log("detail"  + req.params.id) 
    try { 
        result = await tea.findById( req.params.id) 
        res.send(result) 
    } catch (error) { 
        res.status(500) 
        res.send(`{"error": document for id ${req.params.id} not found`); 
    } 
}; 
 
//Handle tea update form on PUT. 
exports.tea_update_put = async function(req, res) { 
    console.log(`update on id ${req.params.id} with body 
${JSON.stringify(req.body)}`) 
    try { 
        let toUpdate = await tea.findById( req.params.id) 
        // Do updates of properties 
        if(req.body.Flavor) toUpdate.Flavor = req.body.Flavor; 
        if(req.body.color) toUpdate.color = req.body.color; 
        if(req.body.price) toUpdate.price = req.body.price; 
        let result = await toUpdate.save(); 
        console.log("Sucess " + result) 
        res.send(result) 
    } catch (err) { 
        res.status(500) 
        res.send(`{"error": ${err}: Update for id ${req.params.id} 
failed`); 
    } 
}; 

// Handle tea delete on DELETE. 
exports.tea_delete = async function(req, res) { 
    console.log("delete "  + req.params.id) 
    try { 
        result = await tea.findByIdAndDelete( req.params.id) 
        console.log("Removed " + result) 
        res.send(result) 
    } catch (err) { 
        res.status(500) 
        res.send(`{"error": Error deleting ${err}}`); 
    } 
}; 

// Handle a show one view with id specified by query 
exports.tea_view_one_Page = async function(req, res) { 
    console.log("single view for id "  + req.query.id) 
    try{ 
        result = await tea.findById( req.query.id) 
        res.render('teadetail',  
{ title: 'tea Detail', toShow: result }); 
    } 
    catch(err){ 
        res.status(500) 
        res.send(`{'error': '${err}'}`); 
    } 
}; 

// Handle building the view for creating a tea. 
// No body, no in path parameter, no query. 
// Does not need to be async 
exports.tea_create_Page =  function(req, res) { 
    console.log("create view") 
    try{ 
        res.render('teacreate', { title: 'tea Create'}); 
    } 
    catch(err){ 
        res.status(500) 
        res.send(`{'error': '${err}'}`); 
    } 
}; 

// Handle building the view for updating a tea. 
// query provides the id 
exports.tea_update_Page =  async function(req, res) { 
    console.log("update view for item "+req.query.id) 
    try{ 
        let result = await tea.findById(req.query.id) 
        res.render('teaupdate', { title: 'tea Update', toShow: result }); 
    } 
    catch(err){ 
        res.status(500) 
        res.send(`{'error': '${err}'}`); 
    } 
}; 

// Handle a delete one view with id from query 
exports.tea_delete_Page = async function(req, res) { 
    console.log("Delete view for id "  + req.query.id) 
    try{ 
        result = await tea.findById(req.query.id) 
        res.render('teadelete', { title: 'tea Delete', toShow: 
result }); 
    } 
    catch(err){ 
        res.status(500) 
        res.send(`{'error': '${err}'}`); 
    } 
}; 
 