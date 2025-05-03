async function geteData() {
  let post = await fetch("https://jsonplaceholder.typicode.com/posts");
  post = await post.json();
  return post;
}

const pagePost = async () => {
  let posts = await geteData();
  //   console.log(posts);

  return (
    <div>
      <h1>Post This is server side component</h1>
      {posts.map((el) => (
        <h3 key={el.id}>
          #{el.id} &nbsp;
          {el.title}
        </h3>
      ))}
    </div>
  );
};

export default pagePost;
