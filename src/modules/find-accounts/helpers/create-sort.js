const createSort = (sort, order = 'asc') => ({
    [sort]: order === 'desc' ? -1 : 1,
});

export default createSort;
