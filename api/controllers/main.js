module.exports.get = (req, res) => {
    return res.status(200).send({ status: 'running' })
}