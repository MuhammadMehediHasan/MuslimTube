const postPage = (req, res) => {
    res.render("post.ejs", {title: "Post"});
}


module.exports = {postPage}