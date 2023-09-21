const getHomePage = (req, res) => {
    res.send("Hello World!");
};

const demo = (req, res) => {
    res.render("demo.ejs");
};

module.exports = {
    getHomePage,
    demo,
};
