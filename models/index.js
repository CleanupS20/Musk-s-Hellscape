const User = require('./User');
const Post = require('./Post');
const Comment = require('./Comment');
const Category = require('./Category');

Comment.belongsTo(Post, {
    foreignKey: 'post_id'
});

Comment.belongsTo(User, {
    foreignKey: 'user_id'
});

Post.hasMany(Comment, {
    foreignKey: 'post_id',
    onDelete: 'CASCADE'
});

Post.belongsTo(User, {
    foreignKey: 'user_id'
});

Post.belongsTo(Category, {
    foreignKey: 'category_id'
});

Category.hasMany(Post, {
    foreignKey: 'category_id',
    onDelete: 'CASCADE'
});

User.hasMany(Post, {
    foreignKey: 'user_id',
    onDelete: 'CASCADE'
});

User.hasMany(Comment, {
    foreignKey: 'user_id',
    onDelete: 'CASCADE'
});

module.exports = { User, Post, Comment, Category };