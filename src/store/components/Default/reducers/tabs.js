const tabs = () => {
  return [
    { id: 1, name: 'rating', SortBy: 'vote_average', sortOrder: false, active: true },
    { id: 2, name: 'release date', SortBy: 'release_date', sortOrder: true, active: false }
  ];
};
export default tabs;
