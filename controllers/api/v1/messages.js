// require the Message model
const Message = require("../../../models/Message");

const index = async (req, res) => {

    if (req.query.user) {

        let user = req.query.user;
        let messages = await Message.find({ user: user });
        res.json({
            status: "success",
            message: "GETTING messages for user " + user,
            data: [
                {
                    user: user,
                    messages: messages,
                },
            ],
        });

    } else {

        let messages = await Message.find({});
        res.json({
            status: "success",
            message: "GET all messages",
            data: [
                {
                    user: "all",
                    messages: messages,
                },
            ],
        });

    }

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
    try {
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
    } catch (err) {
        res.json({
            status: "error",
            message: "The ID doesn't exist",
            data: err,
        });
    }
}

//put messages by id
const putMessageById = async (req, res) => {
    try{
        let id = req.params.id;
        let message = await Message.findById(id);

        if(req.body.user) m.user = req.body.user;
        if(req.body.message) m.message = req.body.message;
        await m.save();

        res.json({
            status: "success",
            message: "PUT message by id",
            data: [
                {
                    user: m.user,
                    message: m.message,
                },
            ],
        });
    }
    catch(err){
        res.json({
            status: "error",
            message: "Put message doesn't work",
            data: err,
        });
    }
}


//delete message by id
const deleteMessageById = async (req, res) => {
    try{
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
    catch(err){
        res.json({
            status: "error",
            message: "Delete message doesn't work",
            data: err,
        });
    }
}



module.exports.index = index;
module.exports.create = create;
module.exports.getMessageById = getMessageById;
module.exports.putMessageById = putMessageById;
module.exports.deleteMessageById = deleteMessageById;
