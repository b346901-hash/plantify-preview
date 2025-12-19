export default function Home() {
  return (
    <main style={{ fontFamily: "serif", padding: "40px", background: "#F7F5F0" }}>
      <h1 style={{ fontSize: "48px" }}>Bring Home Living Luxury</h1>
      <p style={{ maxWidth: "600px", fontSize: "18px" }}>
        Premium indoor plants paired with handcrafted Rajasthani ceramic pots —
        sustainably grown, ethically crafted, and safely delivered.
      </p>

      <a href="/shop">
        <button style={{ padding: "12px 20px", marginTop: "20px" }}>
          Shop Plants
        </button>
      </a>
    </main>
  );
}
