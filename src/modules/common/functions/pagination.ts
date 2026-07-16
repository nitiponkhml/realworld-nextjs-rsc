export const calcTotalPageNumber = (totalItemsCount: number, itemsPerPage: number) => {
  const quotient = Math.floor(totalItemsCount / itemsPerPage);

  return quotient;
};

export const calcOffsetLimitFromPageNumber = (pageNumber: number, articlesPerPage: number) => {
  return {
    offset: (pageNumber - 1) * articlesPerPage,
    limit: articlesPerPage,
  };
};
