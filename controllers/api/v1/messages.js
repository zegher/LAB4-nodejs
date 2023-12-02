// require the Message model
const Message = require("../../../models/Message");

const index = async (req, res) => {
    let messages = await Message.find({});
    let user = await Message.find({ user: "user" });
    res.json({
        status: "success",
        message: "GETTING messages",
        data: [
            {
                messages: messages,
            },
        ],
    });
};

//create message with username and message
const create = async (req, res) => {;
    let message = req.body.message;
    let m = new Message();
    m.user = req.body.user;
    m.message = message;
    await m.save();

    res.json({
        status: "success",
        message: "POSTING a new message",
        data: [
            {
                user: m.user,
                message: message,
            },
        ],
    });
};

//get message by id
const getMessageById = async (req, res) => {
    let id = req.params.id;
    let message = await Message.findById(id);

    res.json({
        status: "success",
        message: "GETTING message by id",
        data: [
            {
                message: message,
            },
        ],
    });
}

//put messages by id
const putMessageById = async (req, res) => {
    let id = req.params.id;
    let message = await Message.findById(id);
    res.json({
        status: "success",
        message: "PUT message by id",
        data: [
            {
                message: message,
            },
        ],
    });
}


//delete message by id
const deleteMessageById = async (req, res) => {
    let id = req.params.id;
    let message = await Message.findByIdAndDelete(id);
    res.json({
        status: "success",
        message: "DELETE message by id",
        data: [
            {
                message: message,
            },
        ],
    });
}

module.exports.index = index;
module.exports.create = create;
module.exports.getMessageById = getMessageById;
module.exports.putMessageById = putMessageById;
module.exports.deleteMessageById = deleteMessageById;
