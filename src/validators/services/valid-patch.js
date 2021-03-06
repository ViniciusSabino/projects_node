import Joi from '@hapi/joi';

import getDynamicSchema from '../schemas/get-dynamic-schema';

const validPatch = async (ctx, next) => {
    try {
        const { body } = ctx.request;
        const { id } = ctx.request.params;

        if (!id) return ctx.badRequest('Account Id is required');

        const fields = Object.keys(body);

        const schema = getDynamicSchema(fields);

        await Joi.object(schema).validateAsync(body);

        return next();
    } catch (error) {
        return ctx.badRequest(error);
    }
};

export default validPatch;
