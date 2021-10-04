const express = require('express')
const router = express()
const Phone = require('../model/Phone')

router.get('/', (req, res) => {
    res.render('add', {
        title: 'Add',
        isAdd: true
    })
})

router.post('/', async (req, res) => {
    const phone = new Phone(req.body.name, req.body.price, req.body.img)
    await phone.save()
    res.redirect('/')
})

router.get('/:id/edit', async (req, res) => {
    const phone = await Phone.getById(req.params.id)

    res.render('edit', {
        name: phone.name,
        price: phone.price,
        img: phone.img,
        id: phone.id
    })
})

router.post('/edit', async (req, res) => {
    await Phone.update(req.body)

    res.redirect('/')
})


router.get('/:id', async (req, res) => {
    const phone = await Phone.getById(req.params.id)

    res.render('phone', {
        layout: 'phone',
        title: phone.name,
        price: phone.price,
        img: phone.img,
        id: phone.id
    })
})



module.exports = router