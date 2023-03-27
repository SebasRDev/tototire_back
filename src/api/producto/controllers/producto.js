"use strict";

/**
 * producto controller
 */

const { createCoreController } = require("@strapi/strapi").factories;

module.exports = createCoreController(
  "api::producto.producto",
  ({ strapi }) => ({
    async findOne(ctx) {
      const { slug } = ctx.params;

      const entity = await strapi.db
        .query("api::producto.producto")
        .findOne({ 
          where: { slug }, 
          populate: {
            IMAGEN: {
              populate: {
                fields: ['*'],
              }
            }
          } 
        });
      const sanitizedEntity = await this.sanitizeOutput(entity, ctx);

      return this.transformResponse(sanitizedEntity);
    },
  })
);

// module.exports = createCoreController(
//   "api::producto.producto",
//   ({ strapi }) => ({
//     async findOne(ctx) {
//       const { slug } = ctx.params;

//       const entity = await strapi.db
//         .query("api::producto.producto")
//         .findOne({ 
//           where: { slug }, 
//           populate: {
//             IMAGEN: {
//               populate: {
//                 fields: ['*'],
//               }
//             }
//           } 
//         });
//       const sanitizedEntity = await this.sanitizeOutput(entity, ctx);

//       return this.transformResponse(sanitizedEntity);
//     },
    
//     async findByIds(ctx) {
//       const { ids } = ctx.query;

//       const entities = await strapi.db
//         .query("api::producto.producto")
//         .find({
//           where: {
//             id_in: ids.split(",").map(Number)
//           },
//           populate: {
//             IMAGEN: {
//               populate: {
//                 fields: ['*'],
//               }
//             }
//           } 
//         });
//       const sanitizedEntities = await this.sanitizeOutput(entities, ctx);

//       return this.transformResponse(sanitizedEntities);
//     },
//   })
// );
