// require the Message model
const Message = require("../../../models/Message");

const index = async (req, res) => {
    let messages = await Message.find({});
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
const create = async (req, res) => {
    let username = req.body.username;
    let message = req.body.message;
    let m = new Message();
    m.username = username;
    m.message = message;
    await m.save();

    res.json({
        status: "success",
        message: "POSTING a new message",
        data: [
            {
                username: username,
                message: message,
            },
        ],
    });
};

//get message by id
const getMessageById = async (req, res) => {
    let id = req.params.id;
    let message = await Message.findById(id);
    let username = message.username;
    res.json({
        status: "success",
        message: "GETTING message by id",
        data: [
            {
                username: username,
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
