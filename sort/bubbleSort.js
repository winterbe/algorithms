module.exports = function (a) {
    for (let i = 0; i < a.length; i++)
        for (let j = a.length; j > i; j--)
            if (a[j] < a[j-1])
                [a[j], a[j-1]] = [a[j-1], a[j]];
};
