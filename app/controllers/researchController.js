const myName = "Csathó Bulcsú";

const ResearchController = {
    index: (req, res) => {
        res.json({
            crud: "read",
            name: myName,
            success: true
        });
    },

    store: (req, res) => {
        res.json({
            crud: "create",
            name: myName,
            success: true
        });
    },

    update: (req, res) => {
        res.json({
            crud: "update",
            name: myName,
            success: true
        });
    },

    destroy: (req, res) => {
        res.json({
            crud: "delete",
            name: myName,
            success: true
        });
    }
};

export default ResearchController;