const uuid = require('uuid')
const path = require('path');
const { Device, DeviceInfo } = require('../models/models')
const ApiError = require('../error/ApiError');

class DeviceController {
  async create(req, res, next) {
    try {
      let { name, price, brandId, typeId, info } = req.body
      const { img } = req.files
      let fileName = uuid.v4() + ".jpg"
      img.mv(path.resolve(__dirname, '..', 'static', fileName))
      const device = await Device.create({ name, price, brandId, typeId, img: fileName });

      if (info) {
        info = JSON.parse(info)
        info.forEach(i =>
          DeviceInfo.create({
            title: i.title,
            description: i.description,
            deviceId: device.id
          })
        )
      }

      return res.json(device)
    } catch (e) {
      next(ApiError.badRequest(e.message))
    }

  }

  // async getAll(req, res) {
  //     // let {brandId, typeId, limit, page} = req.query
  //     let { brandId, typeId, brands, limit, page } = req.query
  //     let productsWithBrands = []
  //     page = page || 1
  //     limit = limit || 9
  //     let offset = page * limit - limit
  //     // let devices;
  //     let devices = []
  //     if (!brandId && !typeId) {
  //         devices = await Device.findAndCountAll({limit, offset})
  //     }
  //     if (brandId && !typeId) {
  //         devices = await Device.findAndCountAll({where:{brandId}, limit, offset})
  //     }
  //     if (!brandId && typeId) {
  //         devices = await Device.findAndCountAll({where:{typeId}, limit, offset})
  //     }
  //     if (brandId && typeId) {
  //         devices = await Device.findAndCountAll({where:{typeId, brandId}, limit, offset})
  //     }
  //     // return res.json(devices)
  //     if (brands) {
  // console.log('###################################' + devices)
  // const brandsList = [...JSON.parse(brands)]
  // devices.filter((product) => {
  //     brandsList.forEach((brand) => {
  //       if (product.brandId === brand) {
  //         productsWithBrands.push(product)
  //       }
  //     })
  //         })
  //         return res.json(productsWithBrands)
  //       }

  //       return res.json(devices)
  // }
  async getAll(req, res) {
    let { brandId, typeId, brands, limit, page } = req.query

    limit = limit || 21
    page = page || 1

    let offset = page * limit - limit
    let products = []
    let productsWithBrands = []

    if (!brandId && !typeId) {
      products = await Device.findAll({ limit, offset })
    }
    if (brandId && !typeId) {
      products = await Device.findAll({ where: { brandId }, limit, offset })
    }
    if (!brandId && typeId) {
      products = await Device.findAll({ where: { typeId }, limit, offset })
    }
    if (brandId && typeId) {
      products = await Device.findAll({ where: { brandId, typeId }, limit, offset })
    } 
    if (brands) {
      const brandsList = [...JSON.parse(brands)]
      products.filter((product) => {
        brandsList.forEach((brand) => {
          if (product.brandId === brand) {
            productsWithBrands.push(product)
          }
        })
      })
      return res.json(productsWithBrands)
    }
    return res.json(products)
  }

  async getOne(req, res) {
    const { id } = req.params
    const device = await Device.findOne(
      {
        where: { id },
        include: [{ model: DeviceInfo, as: 'info' }]
      },
    )
    return res.json(device)
  }
}

module.exports = new DeviceController()
