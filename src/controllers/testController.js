
const ping = (req, res, next) => {
    res.status(200).json({
        status: 'success',
        message: 'pong'
    })
}

export default ping