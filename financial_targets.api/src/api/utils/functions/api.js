const result = (data, page = 1, perPage = 20) => {
    return {
        count: data?.length ? data.length : 0,
        page,
        perPage,
        data
    };
};

export default {
    result
};