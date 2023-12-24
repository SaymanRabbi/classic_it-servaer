const mongoose = require('mongoose');



const productSchema = new mongoose.Schema({
    name:{
        type:String,
        required:[true,"Please enter product name"],
        trim:true,
        maxLength:[100,"Product name cannot exceed 100 characters"]
    },
    price:{
        type:Number,
        required:[true,"Please enter product price"],
        maxLength:[5,"Product price cannot exceed 5 characters"],
        default:0.0
    },
    availability:{
        type:String,
        required:[true,"Please enter product availability"],
        enum:{
            values:[
                'In Stock',
                'Out Of Stock'
            ],
            message:'Please select correct availability'
        }
    },
    images:[
        {
            variant:String,
            url:{
                type:String,
                required:[true,"Please enter product image url"],
            }
        }
    ],
    colors:[
        {
            type:String,
            required:[true,"Please enter product color"],
        }
    ]
    ,
    size:[
         {
            type:String,
          
         }
    ],
    description:{
        type:String,
        required:[true,"Please enter product description"],
    },
},{
    timestamps:true
});


module.exports = mongoose.model('Product',productSchema);
