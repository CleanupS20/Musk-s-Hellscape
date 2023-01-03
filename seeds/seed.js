const sequelize = require('../config/connection');

const {User, Comment, Category, Post} = require('../models');

const userData = require('./userData.json');
const commentData = require('./comments.json');
const postData = require('./post.json')
const categoryData = require('./category.json')

const seedDatbase = async () => {
    await sequelize.sync({force:true});
    
    const category = await Category.bulkCreate(categoryData,{
        individualHooks: true,
        returning:true,
    });
    const users = await User.bulkCreate(userData,{
        individualHooks: true,
        returning:true,
    });
    const post = await Post.bulkCreate(postData,{
        individualHooks: true,
        returning: true,
    });
    const comment = await Comment.bulkCreate(commentData,{
        individualHooks: true,
        returning: true,
    });
    process.exit(0);
};
seedDatbase();