const styles = theme => ({
  posts: {
    marginTop: 2 * theme.spacing.unit,
  },
  fab: {
    position: 'absolute',
    bottom: 3 * theme.spacing.unit,
    right: 3 * theme.spacing.unit,
    [theme.breakpoints.down('xs')]: {
      bottom: 2 * theme.spacing.unit,
      right: 2 * theme.spacing.unit,
    },
  },
  card: {
    width: '100%'
  },
  cardContent: {
    display: 'flex',
    flexDirection: 'column',
  },
  marginTop: {
    marginTop: 2 * theme.spacing.unit,
  }
});

export default styles;
