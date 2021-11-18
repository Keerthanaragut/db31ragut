var express = require('express'); 
const tea_controlers= require('../controllers/tea'); 
var router = express.Router(); 
 
/* GET teas */ 
router.get('/', tea_controlers.tea_view_all_Page ); 


// GET request for one tea. 
router.get('/teas/:id', tea_controlers.tea_detail); 

/* GET detail tea page */ 
router.get('/detail', tea_controlers.tea_view_one_Page);

/* GET create tea page */ 
router.get('/create', tea_controlers.tea_create_Page); 

/* GET create update page */ 
router.get('/update', tea_controlers.tea_update_Page); 

/* GET delete tea page */ 
router.get('/delete', tea_controlers.tea_delete_Page); 



module.exports = router; 