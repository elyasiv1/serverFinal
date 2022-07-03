module.exports = function Items(DL) {

    return {

        create: (data) => {
            return DL.createItem(data)

        },
        readOne: (id) => {
            return DL.getItem(id)
        },

        update: (data) => {
            
            return DL.updateItem(data)
        },

        delete: (id) => {
            return DL.delItem(id)
        },
        
        read: (price,department) => {
            return DL.getItems(price,department)
        },
        readAll: (price) => {
            return DL.getItemss(price)
        },
        // readAll: () => {
        //     return DL.getItems()
        // }
    }




}
  /*   create: (data) => {
          //TODO validation
          data.id = uniqid()
          return DL.createItem(data)
      }, */

        // register: async (data) => {
        //     //TODO validation
        //     if (!data.password) throw 'password is required'

        //     data.password = bcrypt.hashSync(data.password, 8)
        //     data.id = uniqid()

        //     await DL.createItem(data)

        //     return { token: createToken(data.email) }
        // },

        // login: async (data) => {
        //     const { email, password } = data
        //     if (!email) throw 'email is required'
        //     if (!password) throw 'password is required'
        //     const user = await DL.getItemByEmail(email)
        //     if (!bcrypt.compareSync(password, user.password))
        //         throw 'password and email dont match'
        //     return { token: createToken(email) }
        // }, 
          // read: (data) => {
        //     const { email, token } = data
        //     if (!verifyToken(email, token))
        //         throw 'unauthorized'
        //     return DL.getItems()
        // },