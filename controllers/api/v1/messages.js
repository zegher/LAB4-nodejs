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

const create = async (req, res) => {
    let message = req.body.message;
    let m = new Message();
    m.message = message;
    await m.save();

    res.json({
        status: "success",
        message: "POST a new message",
        data: [
            {
                message: m,
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

module.exports.deleteMessageById = deleteMessageById;
