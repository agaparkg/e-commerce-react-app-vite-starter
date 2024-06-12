function Loading({ isLoading }) {
  return (
    isLoading && (
      <div className='page-loading'>
        <h2>Loading...</h2>
      </div>
    )
  );
}

export default Loading;
