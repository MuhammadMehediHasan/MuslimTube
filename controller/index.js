const homePage = (req, res) => {
    res.render("index.ejs", {title: "HomePage"});
};

module.exports = {
    homePage
}