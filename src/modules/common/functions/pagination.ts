export const calcTotalPageNumber = (totalItemsCount: number, itemsPerPage: number) => {
  const quotient = Math.ceil(totalItemsCount / itemsPerPage);

  return quotient;
};

export const calcOffsetLimitFromPageNumber = (pageNumber: number, articlesPerPage: number) => {
  return {
    offset: pageNumber * articlesPerPage,
    limit: articlesPerPage,
  };
};
