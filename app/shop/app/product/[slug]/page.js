export default function Product({ params }) {
  return (
    <main style={{ padding: "40px" }}>
      <h2>{params.slug.replace("-", " ")}</h2>
      <p>Premium indoor plant with artisan pot.</p>
      <a href="/cart">
        <button>Add to Cart</button>
      </a>
    </main>
  );
}
